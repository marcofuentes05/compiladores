// Generated from ./YAPL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class YAPLLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly CLASS = 9;
	public static readonly ELSE = 10;
	public static readonly FI = 11;
	public static readonly IF = 12;
	public static readonly IN = 13;
	public static readonly INHERITS = 14;
	public static readonly ISVOID = 15;
	public static readonly LOOP = 16;
	public static readonly POOL = 17;
	public static readonly THEN = 18;
	public static readonly WHILE = 19;
	public static readonly NEW = 20;
	public static readonly NOT = 21;
	public static readonly FALSE = 22;
	public static readonly TRUE = 23;
	public static readonly TYPE_ID = 24;
	public static readonly OBJECT_ID = 25;
	public static readonly SELF_TYPE = 26;
	public static readonly SELF = 27;
	public static readonly DOUBLE_QUOTE = 28;
	public static readonly STRING = 29;
	public static readonly LINE_COMMENT = 30;
	public static readonly BLOCK_COMMENT = 31;
	public static readonly INTEGER = 32;
	public static readonly PLUS_SIGN = 33;
	public static readonly MINUS_SIGN = 34;
	public static readonly NOT_SIGN = 35;
	public static readonly MULTIPLY_SIGN = 36;
	public static readonly DIVIDE_SIGN = 37;
	public static readonly LT_SIGN = 38;
	public static readonly LE_SIGN = 39;
	public static readonly EQUAL_SIGN = 40;
	public static readonly OPEN_PARENTHESIS = 41;
	public static readonly CLOSE_PARENTHESIS = 42;
	public static readonly OPEN_BRACKER = 43;
	public static readonly CLOSE_BRACKET = 44;
	public static readonly WS = 45;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "CLASS", 
		"ELSE", "FI", "IF", "IN", "INHERITS", "ISVOID", "LOOP", "POOL", "THEN", 
		"WHILE", "NEW", "NOT", "FALSE", "TRUE", "TYPE_ID", "OBJECT_ID", "SELF_TYPE", 
		"SELF", "DOUBLE_QUOTE", "STRING", "ESC", "SAFECODEPOINT", "UNICODE", "HEX", 
		"ANY_CHARACTER", "LINE_COMMENT", "BLOCK_COMMENT", "INTEGER", "PLUS_SIGN", 
		"MINUS_SIGN", "NOT_SIGN", "MULTIPLY_SIGN", "DIVIDE_SIGN", "LT_SIGN", "LE_SIGN", 
		"EQUAL_SIGN", "OPEN_PARENTHESIS", "CLOSE_PARENTHESIS", "OPEN_BRACKER", 
		"CLOSE_BRACKET", "WS", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
		"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
		"Y", "Z",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "':'", "'<-'", "'@'", "'.'", "'let'", "'in'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'SELF_TYPE'", "'self'", "'\"'", undefined, 
		undefined, undefined, undefined, "'+'", undefined, undefined, "'*'", "'/'", 
		"'<'", "'<='", "'='", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "CLASS", "ELSE", "FI", "IF", "IN", "INHERITS", "ISVOID", 
		"LOOP", "POOL", "THEN", "WHILE", "NEW", "NOT", "FALSE", "TRUE", "TYPE_ID", 
		"OBJECT_ID", "SELF_TYPE", "SELF", "DOUBLE_QUOTE", "STRING", "LINE_COMMENT", 
		"BLOCK_COMMENT", "INTEGER", "PLUS_SIGN", "MINUS_SIGN", "NOT_SIGN", "MULTIPLY_SIGN", 
		"DIVIDE_SIGN", "LT_SIGN", "LE_SIGN", "EQUAL_SIGN", "OPEN_PARENTHESIS", 
		"CLOSE_PARENTHESIS", "OPEN_BRACKER", "CLOSE_BRACKET", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YAPLLexer._LITERAL_NAMES, YAPLLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YAPLLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(YAPLLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "YAPL.g4"; }

	// @Override
	public get ruleNames(): string[] { return YAPLLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return YAPLLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return YAPLLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return YAPLLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02/\u01BA\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x07\x19\xFE\n\x19\f\x19\x0E\x19\u0101\v\x19\x03\x19\x05\x19\u0104" +
		"\n\x19\x03\x1A\x03\x1A\x07\x1A\u0108\n\x1A\f\x1A\x0E\x1A\u010B\v\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x07\x1E\u0121\n\x1E\f\x1E\x0E\x1E\u0124\v\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u012B\n\x1F\x03 \x03 \x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x03$\x07$\u013D" +
		"\n$\f$\x0E$\u0140\v$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x07" +
		"%\u014B\n%\f%\x0E%\u014E\v%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0157" +
		"\n%\f%\x0E%\u015A\v%\x03%\x03%\x05%\u015E\n%\x03%\x03%\x03&\x06&\u0163" +
		"\n&\r&\x0E&\u0164\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+" +
		"\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x03" +
		"2\x032\x033\x063\u0181\n3\r3\x0E3\u0182\x033\x033\x034\x034\x035\x035" +
		"\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03" +
		"<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03" +
		"C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03" +
		"J\x03K\x03K\x03L\x03L\x03M\x03M\x04\u013E\u0158\x02\x02N\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02" +
		"\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
		"\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02\x02" +
		"?\x02\x02A\x02\x02C\x02\x02E\x02\x02G\x02 I\x02!K\x02\"M\x02#O\x02$Q\x02" +
		"%S\x02&U\x02\'W\x02(Y\x02)[\x02*]\x02+_\x02,a\x02-c\x02.e\x02/g\x02\x02" +
		"i\x02\x02k\x02\x02m\x02\x02o\x02\x02q\x02\x02s\x02\x02u\x02\x02w\x02\x02" +
		"y\x02\x02{\x02\x02}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02\x02\x85\x02" +
		"\x02\x87\x02\x02\x89\x02\x02\x8B\x02\x02\x8D\x02\x02\x8F\x02\x02\x91\x02" +
		"\x02\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02\x02\x03\x02(\x03\x02" +
		"C\\\x06\x022;C\\aac|\x03\x02c|\n\x02$$11^^ddhhppttvv\x05\x02\x02!$$^^" +
		"\x05\x022;CHch\x04\x02C\\c|\x04\x02\f\f\x0F\x0F\x03\x022;\x03\x02//\x03" +
		"\x02\x80\x80\x05\x02\v\f\x0E\x0F\"\"\x04\x02CCcc\x04\x02DDdd\x04\x02E" +
		"Eee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02IIii\x04\x02JJjj\x04\x02" +
		"KKkk\x04\x02LLll\x04\x02MMmm\x04\x02NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02" +
		"QQqq\x04\x02RRrr\x04\x02SSss\x04\x02TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02" +
		"WWww\x04\x02XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02[[{{\x04\x02\\\\||\x02" +
		"\u01A6\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
		"\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
		"\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
		"\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
		"\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
		"\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
		";\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02" +
		"\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02" +
		"\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03" +
		"\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02" +
		"\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x03" +
		"\x9B\x03\x02\x02\x02\x05\x9D\x03\x02\x02\x02\x07\x9F\x03\x02\x02\x02\t" +
		"\xA1\x03\x02\x02\x02\v\xA4\x03\x02\x02\x02\r\xA6\x03\x02\x02\x02\x0F\xA8" +
		"\x03\x02\x02\x02\x11\xAC\x03\x02\x02\x02\x13\xAF\x03\x02\x02\x02\x15\xB5" +
		"\x03\x02\x02\x02\x17\xBA\x03\x02\x02\x02\x19\xBD\x03\x02\x02\x02\x1B\xC0" +
		"\x03\x02\x02\x02\x1D\xC3\x03\x02\x02\x02\x1F\xCC\x03\x02\x02\x02!\xD3" +
		"\x03\x02\x02\x02#\xD8\x03\x02\x02\x02%\xDD\x03\x02\x02\x02\'\xE2\x03\x02" +
		"\x02\x02)\xE8\x03\x02\x02\x02+\xEC\x03\x02\x02\x02-\xF0\x03\x02\x02\x02" +
		"/\xF6\x03\x02\x02\x021\u0103\x03\x02\x02\x023\u0105\x03\x02\x02\x025\u010C" +
		"\x03\x02\x02\x027\u0116\x03\x02\x02\x029\u011B\x03\x02\x02\x02;\u011D" +
		"\x03\x02\x02\x02=\u0127\x03\x02\x02\x02?\u012C\x03\x02\x02\x02A\u012E" +
		"\x03\x02\x02\x02C\u0134\x03\x02\x02\x02E\u0136\x03\x02\x02\x02G\u0138" +
		"\x03\x02\x02\x02I\u015D\x03\x02\x02\x02K\u0162\x03\x02\x02\x02M\u0166" +
		"\x03\x02\x02\x02O\u0168\x03\x02\x02\x02Q\u016A\x03\x02\x02\x02S\u016C" +
		"\x03\x02\x02\x02U\u016E\x03\x02\x02\x02W\u0170\x03\x02\x02\x02Y\u0172" +
		"\x03\x02\x02\x02[\u0175\x03\x02\x02\x02]\u0177\x03\x02\x02\x02_\u0179" +
		"\x03\x02\x02\x02a\u017B\x03\x02\x02\x02c\u017D\x03\x02\x02\x02e\u0180" +
		"\x03\x02\x02\x02g\u0186\x03\x02\x02\x02i\u0188\x03\x02\x02\x02k\u018A" +
		"\x03\x02\x02\x02m\u018C\x03\x02\x02\x02o\u018E\x03\x02\x02\x02q\u0190" +
		"\x03\x02\x02\x02s\u0192\x03\x02\x02\x02u\u0194\x03\x02\x02\x02w\u0196" +
		"\x03\x02\x02\x02y\u0198\x03\x02\x02\x02{\u019A\x03\x02\x02\x02}\u019C" +
		"\x03\x02\x02\x02\x7F\u019E\x03\x02\x02\x02\x81\u01A0\x03\x02\x02\x02\x83" +
		"\u01A2\x03\x02\x02\x02\x85\u01A4\x03\x02\x02\x02\x87\u01A6\x03\x02\x02" +
		"\x02\x89\u01A8\x03\x02\x02\x02\x8B\u01AA\x03\x02\x02\x02\x8D\u01AC\x03" +
		"\x02\x02\x02\x8F\u01AE\x03\x02\x02\x02\x91\u01B0\x03\x02\x02\x02\x93\u01B2" +
		"\x03\x02\x02\x02\x95\u01B4\x03\x02\x02\x02\x97\u01B6\x03\x02\x02\x02\x99" +
		"\u01B8\x03\x02\x02\x02\x9B\x9C\x07=\x02\x02\x9C\x04\x03\x02\x02\x02\x9D" +
		"\x9E\x07.\x02\x02\x9E\x06\x03\x02\x02\x02\x9F\xA0\x07<\x02\x02\xA0\b\x03" +
		"\x02\x02\x02\xA1\xA2\x07>\x02\x02\xA2\xA3\x07/\x02\x02\xA3\n\x03\x02\x02" +
		"\x02\xA4\xA5\x07B\x02\x02\xA5\f\x03\x02\x02\x02\xA6\xA7\x070\x02\x02\xA7" +
		"\x0E\x03\x02\x02\x02\xA8\xA9\x07n\x02\x02\xA9\xAA\x07g\x02\x02\xAA\xAB" +
		"\x07v\x02\x02\xAB\x10\x03\x02\x02\x02\xAC\xAD\x07k\x02\x02\xAD\xAE\x07" +
		"p\x02\x02\xAE\x12\x03\x02\x02\x02\xAF\xB0\x05k6\x02\xB0\xB1\x05}?\x02" +
		"\xB1\xB2\x05g4\x02\xB2\xB3\x05\x8BF\x02\xB3\xB4\x05\x8BF\x02\xB4\x14\x03" +
		"\x02\x02\x02\xB5\xB6\x05o8\x02\xB6\xB7\x05}?\x02\xB7\xB8\x05\x8BF\x02" +
		"\xB8\xB9\x05o8\x02\xB9\x16\x03\x02\x02\x02\xBA\xBB\x05q9\x02\xBB\xBC\x05" +
		"w<\x02\xBC\x18\x03\x02\x02\x02\xBD\xBE\x05w<\x02\xBE\xBF\x05q9\x02\xBF" +
		"\x1A\x03\x02\x02\x02\xC0\xC1\x05w<\x02\xC1\xC2\x05\x81A\x02\xC2\x1C\x03" +
		"\x02\x02\x02\xC3\xC4\x05w<\x02\xC4\xC5\x05\x81A\x02\xC5\xC6\x05u;\x02" +
		"\xC6\xC7\x05o8\x02\xC7\xC8\x05\x89E\x02\xC8\xC9\x05w<\x02\xC9\xCA\x05" +
		"\x8DG\x02\xCA\xCB\x05\x8BF\x02\xCB\x1E\x03\x02\x02\x02\xCC\xCD\x05w<\x02" +
		"\xCD\xCE\x05\x8BF\x02\xCE\xCF\x05\x91I\x02\xCF\xD0\x05\x83B\x02\xD0\xD1" +
		"\x05w<\x02\xD1\xD2\x05m7\x02\xD2 \x03\x02\x02\x02\xD3\xD4\x05}?\x02\xD4" +
		"\xD5\x05\x83B\x02\xD5\xD6\x05\x83B\x02\xD6\xD7\x05\x85C\x02\xD7\"\x03" +
		"\x02\x02\x02\xD8\xD9\x05\x85C\x02\xD9\xDA\x05\x83B\x02\xDA\xDB\x05\x83" +
		"B\x02\xDB\xDC\x05}?\x02\xDC$\x03\x02\x02\x02\xDD\xDE\x05\x8DG\x02\xDE" +
		"\xDF\x05u;\x02\xDF\xE0\x05o8\x02\xE0\xE1\x05\x81A\x02\xE1&\x03\x02\x02" +
		"\x02\xE2\xE3\x05\x93J\x02\xE3\xE4\x05u;\x02\xE4\xE5\x05w<\x02\xE5\xE6" +
		"\x05}?\x02\xE6\xE7\x05o8\x02\xE7(\x03\x02\x02\x02\xE8\xE9\x05\x81A\x02" +
		"\xE9\xEA\x05o8\x02\xEA\xEB\x05\x93J\x02\xEB*\x03\x02\x02\x02\xEC\xED\x05" +
		"\x81A\x02\xED\xEE\x05\x83B\x02\xEE\xEF\x05\x8DG\x02\xEF,\x03\x02\x02\x02" +
		"\xF0\xF1\x05q9\x02\xF1\xF2\x05g4\x02\xF2\xF3\x05}?\x02\xF3\xF4\x05\x8B" +
		"F\x02\xF4\xF5\x05o8\x02\xF5.\x03\x02\x02\x02\xF6\xF7\x05\x8DG\x02\xF7" +
		"\xF8\x05\x89E\x02\xF8\xF9\x05\x8FH\x02\xF9\xFA\x05o8\x02\xFA0\x03\x02" +
		"\x02\x02\xFB\xFF\t\x02\x02\x02\xFC\xFE\t\x03\x02\x02\xFD\xFC\x03\x02\x02" +
		"\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02" +
		"\x02\x02\u0100\u0104\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0104" +
		"\x055\x1B\x02\u0103\xFB\x03\x02\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104" +
		"2\x03\x02\x02\x02\u0105\u0109\t\x04\x02\x02\u0106\u0108\t\x03\x02\x02" +
		"\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03" +
		"\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A4\x03\x02\x02\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010C\u010D\x07U\x02\x02\u010D\u010E\x07G\x02\x02" +
		"\u010E\u010F\x07N\x02\x02\u010F\u0110\x07H\x02\x02\u0110\u0111\x07a\x02" +
		"\x02\u0111\u0112\x07V\x02\x02\u0112\u0113\x07[\x02\x02\u0113\u0114\x07" +
		"R\x02\x02\u0114\u0115\x07G\x02\x02\u01156\x03\x02\x02\x02\u0116\u0117" +
		"\x07u\x02\x02\u0117\u0118\x07g\x02\x02\u0118\u0119\x07n\x02\x02\u0119" +
		"\u011A\x07h\x02\x02\u011A8\x03\x02\x02\x02\u011B\u011C\x07$\x02\x02\u011C" +
		":\x03\x02\x02\x02\u011D\u0122\x07$\x02\x02\u011E\u0121\x05=\x1F\x02\u011F" +
		"\u0121\x05? \x02\u0120\u011E\x03\x02\x02\x02\u0120\u011F\x03\x02\x02\x02" +
		"\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03" +
		"\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125" +
		"\u0126\x07$\x02\x02\u0126<\x03\x02\x02\x02\u0127\u012A\x07^\x02\x02\u0128" +
		"\u012B\t\x05\x02\x02\u0129\u012B\x05A!\x02\u012A\u0128\x03\x02\x02\x02" +
		"\u012A\u0129\x03\x02\x02\x02\u012B>\x03\x02\x02\x02\u012C\u012D\n\x06" +
		"\x02\x02\u012D@\x03\x02\x02\x02\u012E\u012F\x07w\x02\x02\u012F\u0130\x05" +
		"C\"\x02\u0130\u0131\x05C\"\x02\u0131\u0132\x05C\"\x02\u0132\u0133\x05" +
		"C\"\x02\u0133B\x03\x02\x02\x02\u0134\u0135\t\x07\x02\x02\u0135D\x03\x02" +
		"\x02\x02\u0136\u0137\t\b\x02\x02\u0137F\x03\x02\x02\x02\u0138\u0139\x07" +
		"/\x02\x02\u0139\u013A\x07/\x02\x02\u013A\u013E\x03\x02\x02\x02\u013B\u013D" +
		"\v\x02\x02\x02\u013C\u013B\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02" +
		"\u013E\u013F\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0141\x03" +
		"\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142\t\t\x02\x02\u0142" +
		"\u0143\x03\x02\x02\x02\u0143\u0144\b$\x02\x02\u0144H\x03\x02\x02\x02\u0145" +
		"\u0146\x070\x02\x02\u0146\u0147\x070\x02\x02\u0147\u0148\x070\x02\x02" +
		"\u0148\u014C\x03\x02\x02\x02\u0149\u014B\x05E#\x02\u014A\u0149\x03\x02" +
		"\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u014C\x03\x02" +
		"\x02\x02\u014F\u0150\x070\x02\x02\u0150\u0151\x070\x02\x02\u0151\u015E" +
		"\x070\x02\x02\u0152\u0153\x07*\x02\x02\u0153\u0154\x07,\x02\x02\u0154" +
		"\u0158\x03\x02\x02\x02\u0155\u0157\v\x02\x02\x02\u0156\u0155\x03\x02\x02" +
		"\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0158\u0156" +
		"\x03\x02\x02\x02\u0159\u015B\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02" +
		"\u015B\u015C\x07,\x02\x02\u015C\u015E\x07+\x02\x02\u015D\u0145\x03\x02" +
		"\x02\x02\u015D\u0152\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F" +
		"\u0160\b%\x02\x02\u0160J\x03\x02\x02\x02\u0161\u0163\t\n\x02\x02\u0162" +
		"\u0161\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0162\x03\x02" +
		"\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165L\x03\x02\x02\x02\u0166\u0167" +
		"\x07-\x02\x02\u0167N\x03\x02\x02\x02\u0168\u0169\t\v\x02\x02\u0169P\x03" +
		"\x02\x02\x02\u016A\u016B\t\f\x02\x02\u016BR\x03\x02\x02\x02\u016C\u016D" +
		"\x07,\x02\x02\u016DT\x03\x02\x02\x02\u016E\u016F\x071\x02\x02\u016FV\x03" +
		"\x02\x02\x02\u0170\u0171\x07>\x02\x02\u0171X\x03\x02\x02\x02\u0172\u0173" +
		"\x07>\x02\x02\u0173\u0174\x07?\x02\x02\u0174Z\x03\x02\x02\x02\u0175\u0176" +
		"\x07?\x02\x02\u0176\\\x03\x02\x02\x02\u0177\u0178\x07*\x02\x02\u0178^" +
		"\x03\x02\x02\x02\u0179\u017A\x07+\x02\x02\u017A`\x03\x02\x02\x02\u017B" +
		"\u017C\x07}\x02\x02\u017Cb\x03\x02\x02\x02\u017D\u017E\x07\x7F\x02\x02" +
		"\u017Ed\x03\x02\x02\x02\u017F\u0181\t\r\x02\x02\u0180\u017F\x03\x02\x02" +
		"\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\b3\x02\x02\u0185" +
		"f\x03\x02\x02\x02\u0186\u0187\t\x0E\x02\x02\u0187h\x03\x02\x02\x02\u0188" +
		"\u0189\t\x0F\x02\x02\u0189j\x03\x02\x02\x02\u018A\u018B\t\x10\x02\x02" +
		"\u018Bl\x03\x02\x02\x02\u018C\u018D\t\x11\x02\x02\u018Dn\x03\x02\x02\x02" +
		"\u018E\u018F\t\x12\x02\x02\u018Fp\x03\x02\x02\x02\u0190\u0191\t\x13\x02" +
		"\x02\u0191r\x03\x02\x02\x02\u0192\u0193\t\x14\x02\x02\u0193t\x03\x02\x02" +
		"\x02\u0194\u0195\t\x15\x02\x02\u0195v\x03\x02\x02\x02\u0196\u0197\t\x16" +
		"\x02\x02\u0197x\x03\x02\x02\x02\u0198\u0199\t\x17\x02\x02\u0199z\x03\x02" +
		"\x02\x02\u019A\u019B\t\x18\x02\x02\u019B|\x03\x02\x02\x02\u019C\u019D" +
		"\t\x19\x02\x02\u019D~\x03\x02\x02\x02\u019E\u019F\t\x1A\x02\x02\u019F" +
		"\x80\x03\x02\x02\x02\u01A0\u01A1\t\x1B\x02\x02\u01A1\x82\x03\x02\x02\x02" +
		"\u01A2\u01A3\t\x1C\x02\x02\u01A3\x84\x03\x02\x02\x02\u01A4\u01A5\t\x1D" +
		"\x02\x02\u01A5\x86\x03\x02\x02\x02\u01A6\u01A7\t\x1E\x02\x02\u01A7\x88" +
		"\x03\x02\x02\x02\u01A8\u01A9\t\x1F\x02\x02\u01A9\x8A\x03\x02\x02\x02\u01AA" +
		"\u01AB\t \x02\x02\u01AB\x8C\x03\x02\x02\x02\u01AC\u01AD\t!\x02\x02\u01AD" +
		"\x8E\x03\x02\x02\x02\u01AE\u01AF\t\"\x02\x02\u01AF\x90\x03\x02\x02\x02" +
		"\u01B0\u01B1\t#\x02\x02\u01B1\x92\x03\x02\x02\x02\u01B2\u01B3\t$\x02\x02" +
		"\u01B3\x94\x03\x02\x02\x02\u01B4\u01B5\t%\x02\x02\u01B5\x96\x03\x02\x02" +
		"\x02\u01B6\u01B7\t&\x02\x02\u01B7\x98\x03\x02\x02\x02\u01B8\u01B9\t\'" +
		"\x02\x02\u01B9\x9A\x03\x02\x02\x02\x0F\x02\xFF\u0103\u0109\u0120\u0122" +
		"\u012A\u013E\u014C\u0158\u015D\u0164\u0182\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YAPLLexer.__ATN) {
			YAPLLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(YAPLLexer._serializedATN));
		}

		return YAPLLexer.__ATN;
	}

}

