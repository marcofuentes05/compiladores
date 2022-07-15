grammar YAPL;

// CLASS: 'class';
CLASS: C L A S S ;
ELSE: E L S E ;
FI: F I  ;
IF: I F  ;
IN: I N  ;
INHERITS: I N H E R I T S ;
ISVOID: I S V O I D ;
LOOP: L O O P ;
POOL: P O O L ;
THEN: T H E N ;
WHILE: W H I L E ;
NEW: N E W ;
NOT: N O T ;
FALSE: F A L S E ;
TRUE: T R U E ;

TYPE_ID: [A-Z][a-zA-Z]*|SELF_TYPE;
OBJECT_ID:  [a-z][a-zA-Z]*;
SELF_TYPE: 'SELF_TYPE';
SELF: 'self';
DOUBLE_QUOTE: '"';
STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;
fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;
fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;
fragment HEX
   : [0-9a-fA-F]
   ;
fragment ANY_CHARACTER:[A-Za-z];

LINE_COMMENT:'--' ANY_CHARACTER* '\n';
BLOCK_COMMENT: '...' (ANY_CHARACTER)* '...' ;
INTEGER: [0-9]+;

PLUS_SIGN: '+';
MINUS_SIGN: [\-];
MULTIPLY_SIGN: '*';
DIVIDE_SIGN: '/';
LT_SIGN: '<';
LE_SIGN: '<=';
EQUAL_SIGN: '=';
OPEN_PARENTHESIS: '(';
CLOSE_PARENTHESIS: ')';
OPEN_BRACKER: '{';
CLOSE_BRACKET: '}';

WS
   : [ \t\n\r\f] + -> skip
   ;

fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];

prog: class_prod+ EOF;
class_prod: CLASS TYPE_ID (INHERITS TYPE_ID)? '{' (feature ';')* '}' ';';
id: OBJECT_ID;
feature: id '(' (formal (',' formal)* )? ')' ':' TYPE_ID '{' expr '}'
        | id ':' TYPE_ID ('<-' expr)?; 
formal: id ':' TYPE_ID ;
expr: id '<-' expr
        | expr ('@' TYPE_ID)? '.'id (OPEN_PARENTHESIS (expr (',' expr)*)? CLOSE_PARENTHESIS)?
        | IF expr THEN expr ELSE expr FI
        | WHILE expr LOOP expr POOL
        | '{' (expr ';')+ '}'
        | 'let' id ':' TYPE_ID ('<-' expr)? (',' id ':' TYPE_ID ('<-' expr)?)* 'in' expr
        | NEW TYPE_ID
        | expr PLUS_SIGN expr
        | expr MINUS_SIGN expr
        | expr MULTIPLY_SIGN expr
        | expr DIVIDE_SIGN expr
        | MINUS_SIGN expr
        | expr LT_SIGN expr
        | expr LE_SIGN expr
        | expr EQUAL_SIGN expr
        | NOT expr
        | OPEN_PARENTHESIS expr CLOSE_PARENTHESIS
        | id
        | INTEGER
        | STRING
        | TRUE
        | FALSE
        | 'self';