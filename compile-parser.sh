#!/bin/zsh

ANTLR_JAR="$HOME/ANTLR-4.10.1/antlr-4.7.2-complete.jar";
antlr4="java -jar $ANTLR_JAR";

$antlr4 "$1.g4";
javac "$2*.java";
echo "All is well!";

