from flask import Flask
import os
import sys
from antlr4 import *
import antlr4
from antlr4.tree.Trees import Trees
from YAPLTree import YAPLTree
from dist.YAPLLexer import YAPLLexer
from dist.YAPLParser import YAPLParser
from customErrorListener import customErrorListener
from flask import Flask, request
from triplet import Triplet
from mips import MIPSCode
import time
import logging

SYNTAX_ERRORS_FILE = './instance/syntaxErrors.txt'

def create_app():
    app = Flask(__name__)
    app.debug = True

    logging.basicConfig(filename='error.log', level=logging.DEBUG,
                        format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * \
        1000  # Files should not be larger than 16MB

    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    app.logger.info('App successfuly started!')

    uploads_dir = os.path.join(app.instance_path, 'uploads')

    try:
        os.makedirs(app.instance_path)
        os.makedirs(uploads_dir)
    except OSError as error:
        pass

    @app.route('/')
    def hello_world():
        return 'Hello, World!'

    @app.route('/compile_file', methods=['POST'])
    def compile_file():
        if 'file' not in request.files:
            return {
                    'message': 'No files passed'
                }
        uploaded_file = request.files.get('file')
        uploaded_file.save(os.path.join(uploads_dir, uploaded_file.filename))
        program = request.form.get('program')

        lexer = YAPLLexer(FileStream(os.path.join(uploads_dir, uploaded_file.filename)))
        lexer.removeErrorListeners()
        lexer.addErrorListener(customErrorListener())
        stream = CommonTokenStream(lexer)
        stream.fill()

        parser = YAPLParser(stream)
        parser.removeErrorListeners()
        parser.addErrorListener(customErrorListener())

        tree = parser.prog()
        visitor = YAPLTree()
        visitor.visit(tree)

        return {
            'text': program,
            'symbolTable': visitor.symbolTable,
            'errors': visitor.errors
        } 

    @app.route('/compile_content', methods=['POST'])
    def compile_content():
        open(SYNTAX_ERRORS_FILE, 'w').close()
        program = request.form.get('program')
        temp_dir = os.path.join(uploads_dir, 'temp.yapl')

        f = open(temp_dir, "w")
        f.write(program)
        f.close()

        syntaxErrors = []
        try: 
            lexer = YAPLLexer(FileStream(temp_dir))
            lexer.removeErrorListeners()
            lexer.addErrorListener(customErrorListener())
            stream = CommonTokenStream(lexer)
            stream.fill()
        except Exception as e:
            print('ERROR: ', e)

        parser = YAPLParser(stream)
        parser.removeErrorListeners()
        parser.addErrorListener(customErrorListener())

        tree = parser.prog()
        visitor = YAPLTree()
        visitor.visit(tree)
        syntaxErrors = []
        with open(SYNTAX_ERRORS_FILE, 'r') as errors:
            for error in errors.readlines():
                syntaxErrors.append(error)

        original_triplets = visitor.threeWayCode.triplets
        # original_triplets = visitor.threeWayCode.optimize_code()[0]
        triplets = []
        mappedTemporalValueAddress = {}
        for row in visitor.symbolTable:
            if row['id'] is not None:
                mappedTemporalValueAddress[row['id']] = row['position']
        print("🚀 ~ file: backend.py ~ line 110 ~ mappedRegisterAddress", mappedTemporalValueAddress)
        for triplet in original_triplets:
            # Find memory for register
            address = mappedTemporalValueAddress[triplet.temporal_value] if triplet.temporal_value in mappedTemporalValueAddress.keys() else None
            triplets.append(Triplet(triplet.operator, triplet.first_operand, triplet.second_operand, triplet.label, address or triplet.temporal_value))


        mipsCode = MIPSCode(triplets, visitor.symbolTable)
        errors = [*syntaxErrors, *visitor.errors]
        return {
            'text': program,
            'symbolTable': visitor.symbolTable,
            'errors': errors,
            'three_way_code': [str(triplet) for triplet in original_triplets],
            'mips_code': mipsCode.getCode() if len(errors) == 0 else ''
        } 
    @app.route('/compile_content', methods=['OPTIONS'])
    def options():
        return {
            'options': 'ok'
        }

    @app.route('/time')
    def get_current_time(): 
        return {'time': time.time()}
    return app

app = create_app()
