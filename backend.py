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
import logging

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
        print('ERROR CREATING DIRS')
        print(error)

    @app.route('/')
    def hello_world():
        return 'Hello, World!'

    @app.route('/compile', methods=['POST'])
    def compile():
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

    return app

app = create_app()
