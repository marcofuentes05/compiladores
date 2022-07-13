grammar YAPL;

// prog: ((TYPE_ID|OBJECT_ID) '=' INTEGER);
prog: class_prod+;
class_prod: CLASS WHITE_SPACE+ TYPE_ID WHITE_SPACE* (INHERITS WHITE_SPACE+ TYPE_ID)? WHITE_SPACE* '{' WHITE_SPACE* (feature ';')* WHITE_SPACE* '}';
feature: OBJECT_ID '(' formal (',' formal)* ')' TYPE_ID '{' expr '}'
            | OBJECT_ID ':' TYPE_ID ('<-' expr)?;
formal: OBJECT_ID ':' TYPE_ID ;
// expr: OBJECT_ID '<-' expr
//             | expr('@'TYPE_ID)?'\.'OBJECT_ID (expr (',' expr)*)
//             | OBJECT_ID'(' ')' ; TODO: FIX THIS
expr: expr PLUS_SIGN expr
        | expr MINUS_SIGN expr
        | expr MULTIPLY_SIGN expr
        | expr DIVIDE_SIGN expr
        | MINUS_SIGN expr
        | expr LT_SIGN expr
        | expr LE_SIGN expr
        | expr EQUAL_SIGN expr
        | NOT expr
        | OPEN_PARENTHESIS expr CLOSE_PARENTHESIS
        | OBJECT_ID
        | INTEGER
        | STRING
        | TRUE
        | FALSE;
// feature: ((TYPE_ID|OBJECT_ID) WHITE_SPACE* '=' WHITE_SPACE* INTEGER);


TYPE_ID: [A-Z]([a-z]|INTEGER|[A-Z]|'_')+;
OBJECT_ID:  [a-z]([a-z]|INTEGER|[A-Z]|'_')+;
SELF_TYPE: 'SELF_TPYE';
SELF: 'self';
SPECIAL_CHARACTERS: ('~'|'+'|'-'|'/'|'='|'&&'|'||'|'('|')');
DOUBLE_QUOTE: '"';
STRING: DOUBLE_QUOTE ANY_CHARACTER|'\b'|'\t'|'n'|'\f' DOUBLE_QUOTE;
ANY_CHARACTER:([A-Za-z]);
LINE_COMMENT:'--' ANY_CHARACTER* '\n';
BLOCK_COMMENT: '...' (ANY_CHARACTER)* '...' ;
INTEGER: [0-9]+;
NEWLINE: ('\r'|'\n')+;

PLUS_SIGN: '+';
MINUS_SIGN: '-';
MULTIPLY_SIGN: '*';
DIVIDE_SIGN: '/';
LT_SIGN: '<';
LE_SIGN: '<=';
EQUAL_SIGN: '=';
OPEN_PARENTHESIS: '(';
CLOSE_PARENTHESIS: ')';
OPEN_BRACKER: '{';
CLOSE_BRACKET: '}';

fragment A : ('a'|'A'); // match either an 'a' or 'A'
fragment B : ('b'|'B');
fragment C : ('c'|'C');
fragment D : ('d'|'D');
fragment E : ('e'|'E');
fragment F : ('f'|'F');
fragment G : ('g'|'G');
fragment H : ('h'|'H');
fragment I : ('i'|'I');
fragment J : ('j'|'J');
fragment K : ('k'|'K');
fragment L : ('l'|'L');
fragment M : ('m'|'M');
fragment N : ('n'|'N');
fragment O : ('o'|'O');
fragment P : ('p'|'P');
fragment Q : ('q'|'Q');
fragment R : ('r'|'R');
fragment S : ('s'|'S');
fragment T : ('t'|'T');
fragment U : ('u'|'U');
fragment V : ('v'|'V');
fragment W : ('w'|'W');
fragment X : ('x'|'X');
fragment Y : ('y'|'Y');
fragment Z : ('z'|'Z');


CLASS: C L A S S;
ELSE: E L S E;
FI: F I ; 
IF: I F ; 
IN: I N ; 
INHERITS: I N H E R I T S;
ISVOID: I S V O I D;
LOOP: L O O P;
POOL: P O O L;
THEN: T H E N;
WHILE: W H I L E;
NEW: N E W ;
NOT: N O T ;
FALSE: 'false';
TRUE: 'true';
WHITE_SPACE: '\n'|'\f'|' '|'\r'|'\t';
