import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.FileInputStream;
import java.io.InputStream;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.gui.TestRig;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.util.Arrays;
import javax.swing.JFrame;
import javax.swing.JPanel;

import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.gui.TreeViewer;


class myParser {
    public static void main(String[] args) throws Exception {
        String inputFile = null;
        
        if (args.length > 0) inputFile = args[0];

        InputStream is = System.in;
        if (inputFile != null) is = new FileInputStream(inputFile);

        CharStream cs = CharStreams.fromStream(is);

        YAPLLexer lexer = new YAPLLexer(cs);
        lexer.addErrorListener(new CustomErrorListener());

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        // System.out.println("Tokens:");
        tokens.fill();

        // for (Token token : tokens.getTokens()) {
        //     System.out.println(token.toString());
        // }

        YAPLParser parser = new YAPLParser(tokens);
        CustomErrorListener listener = new CustomErrorListener();
        parser.addErrorListener(listener);
        ParseTree tree = parser.prog();

        if (!listener.hasErrors) {
            JFrame frame = new JFrame("Antlr AST");
            JPanel panel = new JPanel();
            TreeViewer viewr = new TreeViewer(Arrays.asList(parser.getRuleNames()),tree);
            viewr.setScale(1.5);
            panel.add(viewr);
            frame.add(panel);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(600,400);
            frame.setVisible(true);
        }
    }
}
