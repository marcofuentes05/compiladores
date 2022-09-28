// Generated from ./YAPL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { YAPLListener } from "./YAPLListener";

export class YAPLParser extends Parser {
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
	public static readonly RULE_prog = 0;
	public static readonly RULE_class_prod = 1;
	public static readonly RULE_id = 2;
	public static readonly RULE_feature = 3;
	public static readonly RULE_formal = 4;
	public static readonly RULE_expr = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "class_prod", "id", "feature", "formal", "expr",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YAPLParser._LITERAL_NAMES, YAPLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YAPLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "YAPL.g4"; }

	// @Override
	public get ruleNames(): string[] { return YAPLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return YAPLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YAPLParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YAPLParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.class_prod();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === YAPLParser.CLASS);
			this.state = 17;
			this.match(YAPLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public class_prod(): Class_prodContext {
		let _localctx: Class_prodContext = new Class_prodContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, YAPLParser.RULE_class_prod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.match(YAPLParser.CLASS);
			this.state = 20;
			this.match(YAPLParser.TYPE_ID);
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YAPLParser.INHERITS) {
				{
				this.state = 21;
				this.match(YAPLParser.INHERITS);
				this.state = 22;
				this.match(YAPLParser.TYPE_ID);
				}
			}

			this.state = 25;
			this.match(YAPLParser.OPEN_BRACKER);
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YAPLParser.OBJECT_ID) {
				{
				{
				this.state = 26;
				this.feature();
				this.state = 27;
				this.match(YAPLParser.T__0);
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this.match(YAPLParser.CLOSE_BRACKET);
			this.state = 35;
			this.match(YAPLParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, YAPLParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(YAPLParser.OBJECT_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public feature(): FeatureContext {
		let _localctx: FeatureContext = new FeatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, YAPLParser.RULE_feature);
		let _la: number;
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new MethodFeatureContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.id();
				this.state = 40;
				this.match(YAPLParser.OPEN_PARENTHESIS);
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YAPLParser.OBJECT_ID) {
					{
					this.state = 41;
					this.formal();
					this.state = 46;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YAPLParser.T__1) {
						{
						{
						this.state = 42;
						this.match(YAPLParser.T__1);
						this.state = 43;
						this.formal();
						}
						}
						this.state = 48;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 51;
				this.match(YAPLParser.CLOSE_PARENTHESIS);
				this.state = 52;
				this.match(YAPLParser.T__2);
				this.state = 53;
				this.match(YAPLParser.TYPE_ID);
				this.state = 54;
				this.match(YAPLParser.OPEN_BRACKER);
				this.state = 55;
				this.expr(0);
				this.state = 56;
				this.match(YAPLParser.CLOSE_BRACKET);
				}
				break;

			case 2:
				_localctx = new AttributeFeatureContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				this.id();
				this.state = 59;
				this.match(YAPLParser.T__2);
				this.state = 60;
				this.match(YAPLParser.TYPE_ID);
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YAPLParser.T__3) {
					{
					this.state = 61;
					this.match(YAPLParser.T__3);
					this.state = 62;
					this.expr(0);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formal(): FormalContext {
		let _localctx: FormalContext = new FormalContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, YAPLParser.RULE_formal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.id();
			this.state = 68;
			this.match(YAPLParser.T__2);
			this.state = 69;
			this.match(YAPLParser.TYPE_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, YAPLParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new DeclarationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 72;
				this.id();
				this.state = 73;
				this.match(YAPLParser.T__3);
				this.state = 74;
				this.expr(25);
				}
				break;

			case 2:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.id();
				this.state = 77;
				this.match(YAPLParser.OPEN_PARENTHESIS);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YAPLParser.T__6) | (1 << YAPLParser.IF) | (1 << YAPLParser.ISVOID) | (1 << YAPLParser.WHILE) | (1 << YAPLParser.NEW) | (1 << YAPLParser.NOT) | (1 << YAPLParser.FALSE) | (1 << YAPLParser.TRUE) | (1 << YAPLParser.OBJECT_ID) | (1 << YAPLParser.SELF) | (1 << YAPLParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YAPLParser.INTEGER - 32)) | (1 << (YAPLParser.MINUS_SIGN - 32)) | (1 << (YAPLParser.NOT_SIGN - 32)) | (1 << (YAPLParser.OPEN_PARENTHESIS - 32)) | (1 << (YAPLParser.OPEN_BRACKER - 32)))) !== 0)) {
					{
					this.state = 78;
					this.expr(0);
					this.state = 83;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === YAPLParser.T__1) {
						{
						{
						this.state = 79;
						this.match(YAPLParser.T__1);
						this.state = 80;
						this.expr(0);
						}
						}
						this.state = 85;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 88;
				this.match(YAPLParser.CLOSE_PARENTHESIS);
				}
				break;

			case 3:
				{
				_localctx = new IfElseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 90;
				this.match(YAPLParser.IF);
				this.state = 91;
				this.expr(0);
				this.state = 92;
				this.match(YAPLParser.THEN);
				this.state = 93;
				this.expr(0);
				this.state = 94;
				this.match(YAPLParser.ELSE);
				this.state = 95;
				this.expr(0);
				this.state = 96;
				this.match(YAPLParser.FI);
				}
				break;

			case 4:
				{
				_localctx = new WhileContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(YAPLParser.WHILE);
				this.state = 99;
				this.expr(0);
				this.state = 100;
				this.match(YAPLParser.LOOP);
				this.state = 101;
				this.expr(0);
				this.state = 102;
				this.match(YAPLParser.POOL);
				}
				break;

			case 5:
				{
				_localctx = new BracketsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.match(YAPLParser.OPEN_BRACKER);
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 105;
					this.expr(0);
					this.state = 106;
					this.match(YAPLParser.T__0);
					}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YAPLParser.T__6) | (1 << YAPLParser.IF) | (1 << YAPLParser.ISVOID) | (1 << YAPLParser.WHILE) | (1 << YAPLParser.NEW) | (1 << YAPLParser.NOT) | (1 << YAPLParser.FALSE) | (1 << YAPLParser.TRUE) | (1 << YAPLParser.OBJECT_ID) | (1 << YAPLParser.SELF) | (1 << YAPLParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YAPLParser.INTEGER - 32)) | (1 << (YAPLParser.MINUS_SIGN - 32)) | (1 << (YAPLParser.NOT_SIGN - 32)) | (1 << (YAPLParser.OPEN_PARENTHESIS - 32)) | (1 << (YAPLParser.OPEN_BRACKER - 32)))) !== 0));
				this.state = 112;
				this.match(YAPLParser.CLOSE_BRACKET);
				}
				break;

			case 6:
				{
				_localctx = new LetContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 114;
				this.match(YAPLParser.T__6);
				this.state = 115;
				this.id();
				this.state = 116;
				this.match(YAPLParser.T__2);
				this.state = 117;
				this.match(YAPLParser.TYPE_ID);
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === YAPLParser.T__3) {
					{
					this.state = 118;
					this.match(YAPLParser.T__3);
					this.state = 119;
					this.expr(0);
					}
				}

				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YAPLParser.T__1) {
					{
					{
					this.state = 122;
					this.match(YAPLParser.T__1);
					this.state = 123;
					this.id();
					this.state = 124;
					this.match(YAPLParser.T__2);
					this.state = 125;
					this.match(YAPLParser.TYPE_ID);
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === YAPLParser.T__3) {
						{
						this.state = 126;
						this.match(YAPLParser.T__3);
						this.state = 127;
						this.expr(0);
						}
					}

					}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 135;
				this.match(YAPLParser.T__7);
				this.state = 136;
				this.expr(19);
				}
				break;

			case 7:
				{
				_localctx = new NewContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 138;
				this.match(YAPLParser.NEW);
				this.state = 139;
				this.match(YAPLParser.TYPE_ID);
				}
				break;

			case 8:
				{
				_localctx = new IsVoidContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(YAPLParser.ISVOID);
				this.state = 141;
				this.expr(17);
				}
				break;

			case 9:
				{
				_localctx = new NotOrMinusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 142;
				_la = this._input.LA(1);
				if (!(_la === YAPLParser.MINUS_SIGN || _la === YAPLParser.NOT_SIGN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 143;
				this.expr(12);
				}
				break;

			case 10:
				{
				_localctx = new NotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(YAPLParser.NOT);
				this.state = 145;
				this.expr(8);
				}
				break;

			case 11:
				{
				_localctx = new ParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.match(YAPLParser.OPEN_PARENTHESIS);
				this.state = 147;
				this.expr(0);
				this.state = 148;
				this.match(YAPLParser.CLOSE_PARENTHESIS);
				}
				break;

			case 12:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.id();
				}
				break;

			case 13:
				{
				_localctx = new IntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 151;
				this.match(YAPLParser.INTEGER);
				}
				break;

			case 14:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 152;
				this.match(YAPLParser.STRING);
				}
				break;

			case 15:
				{
				_localctx = new TrueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 153;
				this.match(YAPLParser.TRUE);
				}
				break;

			case 16:
				{
				_localctx = new FalseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 154;
				this.match(YAPLParser.FALSE);
				}
				break;

			case 17:
				{
				_localctx = new SelfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 155;
				this.match(YAPLParser.SELF);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 202;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 200;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						_localctx = new AddContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 158;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 159;
						this.match(YAPLParser.PLUS_SIGN);
						this.state = 160;
						this.expr(17);
						}
						break;

					case 2:
						{
						_localctx = new SubstractContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 161;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 162;
						this.match(YAPLParser.MINUS_SIGN);
						this.state = 163;
						this.expr(16);
						}
						break;

					case 3:
						{
						_localctx = new MultiplyContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 164;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 165;
						this.match(YAPLParser.MULTIPLY_SIGN);
						this.state = 166;
						this.expr(15);
						}
						break;

					case 4:
						{
						_localctx = new DivideContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 167;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 168;
						this.match(YAPLParser.DIVIDE_SIGN);
						this.state = 169;
						this.expr(14);
						}
						break;

					case 5:
						{
						_localctx = new LessThanContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 170;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 171;
						this.match(YAPLParser.LT_SIGN);
						this.state = 172;
						this.expr(12);
						}
						break;

					case 6:
						{
						_localctx = new LessEqualThanContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 173;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 174;
						this.match(YAPLParser.LE_SIGN);
						this.state = 175;
						this.expr(11);
						}
						break;

					case 7:
						{
						_localctx = new EqualContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 176;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 177;
						this.match(YAPLParser.EQUAL_SIGN);
						this.state = 178;
						this.expr(10);
						}
						break;

					case 8:
						{
						_localctx = new FunctionCallBuggyContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, YAPLParser.RULE_expr);
						this.state = 179;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 182;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === YAPLParser.T__4) {
							{
							this.state = 180;
							this.match(YAPLParser.T__4);
							this.state = 181;
							this.match(YAPLParser.TYPE_ID);
							}
						}

						this.state = 184;
						this.match(YAPLParser.T__5);
						this.state = 185;
						this.id();
						this.state = 198;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
						case 1:
							{
							this.state = 186;
							this.match(YAPLParser.OPEN_PARENTHESIS);
							this.state = 195;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YAPLParser.T__6) | (1 << YAPLParser.IF) | (1 << YAPLParser.ISVOID) | (1 << YAPLParser.WHILE) | (1 << YAPLParser.NEW) | (1 << YAPLParser.NOT) | (1 << YAPLParser.FALSE) | (1 << YAPLParser.TRUE) | (1 << YAPLParser.OBJECT_ID) | (1 << YAPLParser.SELF) | (1 << YAPLParser.STRING))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YAPLParser.INTEGER - 32)) | (1 << (YAPLParser.MINUS_SIGN - 32)) | (1 << (YAPLParser.NOT_SIGN - 32)) | (1 << (YAPLParser.OPEN_PARENTHESIS - 32)) | (1 << (YAPLParser.OPEN_BRACKER - 32)))) !== 0)) {
								{
								this.state = 187;
								this.expr(0);
								this.state = 192;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === YAPLParser.T__1) {
									{
									{
									this.state = 188;
									this.match(YAPLParser.T__1);
									this.state = 189;
									this.expr(0);
									}
									}
									this.state = 194;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
							}

							this.state = 197;
							this.match(YAPLParser.CLOSE_PARENTHESIS);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 24);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\xD0\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03 \n\x03\f\x03\x0E\x03#\v\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05/\n\x05\f" +
		"\x05\x0E\x052\v\x05\x05\x054\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05B" +
		"\n\x05\x05\x05D\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"T\n\x07\f\x07\x0E\x07W\v\x07\x05\x07Y\n\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07o" +
		"\n\x07\r\x07\x0E\x07p\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07{\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x05\x07\x83\n\x07\x07\x07\x85\n\x07\f\x07\x0E\x07\x88\v\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x05\x07\x9F\n\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xB9\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\xC1\n\x07\f\x07\x0E\x07\xC4\v\x07\x05\x07\xC6\n\x07" +
		"\x03\x07\x05\x07\xC9\n\x07\x07\x07\xCB\n\x07\f\x07\x0E\x07\xCE\v\x07\x03" +
		"\x07\x02\x02\x03\f\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x03" +
		"\x03\x02$%\x02\xF2\x02\x0F\x03\x02\x02\x02\x04\x15\x03\x02\x02\x02\x06" +
		"\'\x03\x02\x02\x02\bC\x03\x02\x02\x02\nE\x03\x02\x02\x02\f\x9E\x03\x02" +
		"\x02\x02\x0E\x10\x05\x04\x03\x02\x0F\x0E\x03\x02\x02\x02\x10\x11\x03\x02" +
		"\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02\x12\x13\x03\x02" +
		"\x02\x02\x13\x14\x07\x02\x02\x03\x14\x03\x03\x02\x02\x02\x15\x16\x07\v" +
		"\x02\x02\x16\x19\x07\x1A\x02\x02\x17\x18\x07\x10\x02\x02\x18\x1A\x07\x1A" +
		"\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1B\x03\x02" +
		"\x02\x02\x1B!\x07-\x02\x02\x1C\x1D\x05\b\x05\x02\x1D\x1E\x07\x03\x02\x02" +
		"\x1E \x03\x02\x02\x02\x1F\x1C\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03" +
		"\x02\x02\x02!\"\x03\x02\x02\x02\"$\x03\x02\x02\x02#!\x03\x02\x02\x02$" +
		"%\x07.\x02\x02%&\x07\x03\x02\x02&\x05\x03\x02\x02\x02\'(\x07\x1B\x02\x02" +
		"(\x07\x03\x02\x02\x02)*\x05\x06\x04\x02*3\x07+\x02\x02+0\x05\n\x06\x02" +
		",-\x07\x04\x02\x02-/\x05\n\x06\x02.,\x03\x02\x02\x02/2\x03\x02\x02\x02" +
		"0.\x03\x02\x02\x0201\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x02" +
		"3+\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02\x0256\x07,\x02\x02" +
		"67\x07\x05\x02\x0278\x07\x1A\x02\x0289\x07-\x02\x029:\x05\f\x07\x02:;" +
		"\x07.\x02\x02;D\x03\x02\x02\x02<=\x05\x06\x04\x02=>\x07\x05\x02\x02>A" +
		"\x07\x1A\x02\x02?@\x07\x06\x02\x02@B\x05\f\x07\x02A?\x03\x02\x02\x02A" +
		"B\x03\x02\x02\x02BD\x03\x02\x02\x02C)\x03\x02\x02\x02C<\x03\x02\x02\x02" +
		"D\t\x03\x02\x02\x02EF\x05\x06\x04\x02FG\x07\x05\x02\x02GH\x07\x1A\x02" +
		"\x02H\v\x03\x02\x02\x02IJ\b\x07\x01\x02JK\x05\x06\x04\x02KL\x07\x06\x02" +
		"\x02LM\x05\f\x07\x1BM\x9F\x03\x02\x02\x02NO\x05\x06\x04\x02OX\x07+\x02" +
		"\x02PU\x05\f\x07\x02QR\x07\x04\x02\x02RT\x05\f\x07\x02SQ\x03\x02\x02\x02" +
		"TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02VY\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02XP\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z[\x07,\x02\x02[\x9F\x03\x02\x02\x02\\]\x07\x0E\x02\x02]^\x05\f\x07\x02" +
		"^_\x07\x14\x02\x02_`\x05\f\x07\x02`a\x07\f\x02\x02ab\x05\f\x07\x02bc\x07" +
		"\r\x02\x02c\x9F\x03\x02\x02\x02de\x07\x15\x02\x02ef\x05\f\x07\x02fg\x07" +
		"\x12\x02\x02gh\x05\f\x07\x02hi\x07\x13\x02\x02i\x9F\x03\x02\x02\x02jn" +
		"\x07-\x02\x02kl\x05\f\x07\x02lm\x07\x03\x02\x02mo\x03\x02\x02\x02nk\x03" +
		"\x02\x02\x02op\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03" +
		"\x02\x02\x02rs\x07.\x02\x02s\x9F\x03\x02\x02\x02tu\x07\t\x02\x02uv\x05" +
		"\x06\x04\x02vw\x07\x05\x02\x02wz\x07\x1A\x02\x02xy\x07\x06\x02\x02y{\x05" +
		"\f\x07\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{\x86\x03\x02\x02\x02|}" +
		"\x07\x04\x02\x02}~\x05\x06\x04\x02~\x7F\x07\x05\x02\x02\x7F\x82\x07\x1A" +
		"\x02\x02\x80\x81\x07\x06\x02\x02\x81\x83\x05\f\x07\x02\x82\x80\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85\x03\x02\x02\x02\x84|\x03\x02" +
		"\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02" +
		"\x02\x02\x87\x89\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\n" +
		"\x02\x02\x8A\x8B\x05\f\x07\x15\x8B\x9F\x03\x02\x02\x02\x8C\x8D\x07\x16" +
		"\x02\x02\x8D\x9F\x07\x1A\x02\x02\x8E\x8F\x07\x11\x02\x02\x8F\x9F\x05\f" +
		"\x07\x13\x90\x91\t\x02\x02\x02\x91\x9F\x05\f\x07\x0E\x92\x93\x07\x17\x02" +
		"\x02\x93\x9F\x05\f\x07\n\x94\x95\x07+\x02\x02\x95\x96\x05\f\x07\x02\x96" +
		"\x97\x07,\x02\x02\x97\x9F\x03\x02\x02\x02\x98\x9F\x05\x06\x04\x02\x99" +
		"\x9F\x07\"\x02\x02\x9A\x9F\x07\x1F\x02\x02\x9B\x9F\x07\x19\x02\x02\x9C" +
		"\x9F\x07\x18\x02\x02\x9D\x9F\x07\x1D\x02\x02\x9EI\x03\x02\x02\x02\x9E" +
		"N\x03\x02\x02\x02\x9E\\\x03\x02\x02\x02\x9Ed\x03\x02\x02\x02\x9Ej\x03" +
		"\x02\x02\x02\x9Et\x03\x02\x02\x02\x9E\x8C\x03\x02\x02\x02\x9E\x8E\x03" +
		"\x02\x02\x02\x9E\x90\x03\x02\x02\x02\x9E\x92\x03\x02\x02\x02\x9E\x94\x03" +
		"\x02\x02\x02\x9E\x98\x03\x02\x02\x02\x9E\x99\x03\x02\x02\x02\x9E\x9A\x03" +
		"\x02\x02\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9D\x03" +
		"\x02\x02\x02\x9F\xCC\x03\x02\x02\x02\xA0\xA1\f\x12\x02\x02\xA1\xA2\x07" +
		"#\x02\x02\xA2\xCB\x05\f\x07\x13\xA3\xA4\f\x11\x02\x02\xA4\xA5\x07$\x02" +
		"\x02\xA5\xCB\x05\f\x07\x12\xA6\xA7\f\x10\x02\x02\xA7\xA8\x07&\x02\x02" +
		"\xA8\xCB\x05\f\x07\x11\xA9\xAA\f\x0F\x02\x02\xAA\xAB\x07\'\x02\x02\xAB" +
		"\xCB\x05\f\x07\x10\xAC\xAD\f\r\x02\x02\xAD\xAE\x07(\x02\x02\xAE\xCB\x05" +
		"\f\x07\x0E\xAF\xB0\f\f\x02\x02\xB0\xB1\x07)\x02\x02\xB1\xCB\x05\f\x07" +
		"\r\xB2\xB3\f\v\x02\x02\xB3\xB4\x07*\x02\x02\xB4\xCB\x05\f\x07\f\xB5\xB8" +
		"\f\x1A\x02\x02\xB6\xB7\x07\x07\x02\x02\xB7\xB9\x07\x1A\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB" +
		"\x07\b\x02\x02\xBB\xC8\x05\x06\x04\x02\xBC\xC5\x07+\x02\x02\xBD\xC2\x05" +
		"\f\x07\x02\xBE\xBF\x07\x04\x02\x02\xBF\xC1\x05\f\x07\x02\xC0\xBE\x03\x02" +
		"\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xBD\x03\x02" +
		"\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x07," +
		"\x02\x02\xC8\xBC\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02" +
		"\x02\x02\xCA\xA0\x03\x02\x02\x02\xCA\xA3\x03\x02\x02\x02\xCA\xA6\x03\x02" +
		"\x02\x02\xCA\xA9\x03\x02\x02\x02\xCA\xAC\x03\x02\x02\x02\xCA\xAF\x03\x02" +
		"\x02\x02\xCA\xB2\x03\x02\x02\x02\xCA\xB5\x03\x02\x02\x02\xCB\xCE\x03\x02" +
		"\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\r\x03\x02" +
		"\x02\x02\xCE\xCC\x03\x02\x02\x02\x16\x11\x19!03ACUXpz\x82\x86\x9E\xB8" +
		"\xC2\xC5\xC8\xCA\xCC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YAPLParser.__ATN) {
			YAPLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(YAPLParser._serializedATN));
		}

		return YAPLParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(YAPLParser.EOF, 0); }
	public class_prod(): Class_prodContext[];
	public class_prod(i: number): Class_prodContext;
	public class_prod(i?: number): Class_prodContext | Class_prodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Class_prodContext);
		} else {
			return this.getRuleContext(i, Class_prodContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YAPLParser.RULE_prog; }
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class Class_prodContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(YAPLParser.CLASS, 0); }
	public TYPE_ID(): TerminalNode[];
	public TYPE_ID(i: number): TerminalNode;
	public TYPE_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YAPLParser.TYPE_ID);
		} else {
			return this.getToken(YAPLParser.TYPE_ID, i);
		}
	}
	public OPEN_BRACKER(): TerminalNode { return this.getToken(YAPLParser.OPEN_BRACKER, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YAPLParser.CLOSE_BRACKET, 0); }
	public INHERITS(): TerminalNode | undefined { return this.tryGetToken(YAPLParser.INHERITS, 0); }
	public feature(): FeatureContext[];
	public feature(i: number): FeatureContext;
	public feature(i?: number): FeatureContext | FeatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FeatureContext);
		} else {
			return this.getRuleContext(i, FeatureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YAPLParser.RULE_class_prod; }
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterClass_prod) {
			listener.enterClass_prod(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitClass_prod) {
			listener.exitClass_prod(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public OBJECT_ID(): TerminalNode { return this.getToken(YAPLParser.OBJECT_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YAPLParser.RULE_id; }
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class FeatureContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YAPLParser.RULE_feature; }
	public copyFrom(ctx: FeatureContext): void {
		super.copyFrom(ctx);
	}
}
export class MethodFeatureContext extends FeatureContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(YAPLParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(YAPLParser.CLOSE_PARENTHESIS, 0); }
	public TYPE_ID(): TerminalNode { return this.getToken(YAPLParser.TYPE_ID, 0); }
	public OPEN_BRACKER(): TerminalNode { return this.getToken(YAPLParser.OPEN_BRACKER, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YAPLParser.CLOSE_BRACKET, 0); }
	public formal(): FormalContext[];
	public formal(i: number): FormalContext;
	public formal(i?: number): FormalContext | FormalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalContext);
		} else {
			return this.getRuleContext(i, FormalContext);
		}
	}
	constructor(ctx: FeatureContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterMethodFeature) {
			listener.enterMethodFeature(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitMethodFeature) {
			listener.exitMethodFeature(this);
		}
	}
}
export class AttributeFeatureContext extends FeatureContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public TYPE_ID(): TerminalNode { return this.getToken(YAPLParser.TYPE_ID, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: FeatureContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterAttributeFeature) {
			listener.enterAttributeFeature(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitAttributeFeature) {
			listener.exitAttributeFeature(this);
		}
	}
}


export class FormalContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public TYPE_ID(): TerminalNode { return this.getToken(YAPLParser.TYPE_ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YAPLParser.RULE_formal; }
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterFormal) {
			listener.enterFormal(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitFormal) {
			listener.exitFormal(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YAPLParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}
export class FunctionCallBuggyContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public TYPE_ID(): TerminalNode | undefined { return this.tryGetToken(YAPLParser.TYPE_ID, 0); }
	public OPEN_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(YAPLParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(YAPLParser.CLOSE_PARENTHESIS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterFunctionCallBuggy) {
			listener.enterFunctionCallBuggy(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitFunctionCallBuggy) {
			listener.exitFunctionCallBuggy(this);
		}
	}
}
export class FunctionCallContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(YAPLParser.OPEN_PARENTHESIS, 0); }
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(YAPLParser.CLOSE_PARENTHESIS, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
}
export class IfElseContext extends ExprContext {
	public IF(): TerminalNode { return this.getToken(YAPLParser.IF, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public THEN(): TerminalNode { return this.getToken(YAPLParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(YAPLParser.ELSE, 0); }
	public FI(): TerminalNode { return this.getToken(YAPLParser.FI, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterIfElse) {
			listener.enterIfElse(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitIfElse) {
			listener.exitIfElse(this);
		}
	}
}
export class WhileContext extends ExprContext {
	public WHILE(): TerminalNode { return this.getToken(YAPLParser.WHILE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LOOP(): TerminalNode { return this.getToken(YAPLParser.LOOP, 0); }
	public POOL(): TerminalNode { return this.getToken(YAPLParser.POOL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterWhile) {
			listener.enterWhile(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitWhile) {
			listener.exitWhile(this);
		}
	}
}
export class BracketsContext extends ExprContext {
	public OPEN_BRACKER(): TerminalNode { return this.getToken(YAPLParser.OPEN_BRACKER, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(YAPLParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterBrackets) {
			listener.enterBrackets(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitBrackets) {
			listener.exitBrackets(this);
		}
	}
}
export class LetContext extends ExprContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public TYPE_ID(): TerminalNode[];
	public TYPE_ID(i: number): TerminalNode;
	public TYPE_ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YAPLParser.TYPE_ID);
		} else {
			return this.getToken(YAPLParser.TYPE_ID, i);
		}
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterLet) {
			listener.enterLet(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitLet) {
			listener.exitLet(this);
		}
	}
}
export class NewContext extends ExprContext {
	public NEW(): TerminalNode { return this.getToken(YAPLParser.NEW, 0); }
	public TYPE_ID(): TerminalNode { return this.getToken(YAPLParser.TYPE_ID, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterNew) {
			listener.enterNew(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitNew) {
			listener.exitNew(this);
		}
	}
}
export class IsVoidContext extends ExprContext {
	public ISVOID(): TerminalNode { return this.getToken(YAPLParser.ISVOID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterIsVoid) {
			listener.enterIsVoid(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitIsVoid) {
			listener.exitIsVoid(this);
		}
	}
}
export class AddContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS_SIGN(): TerminalNode { return this.getToken(YAPLParser.PLUS_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
}
export class SubstractContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MINUS_SIGN(): TerminalNode { return this.getToken(YAPLParser.MINUS_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterSubstract) {
			listener.enterSubstract(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitSubstract) {
			listener.exitSubstract(this);
		}
	}
}
export class MultiplyContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MULTIPLY_SIGN(): TerminalNode { return this.getToken(YAPLParser.MULTIPLY_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterMultiply) {
			listener.enterMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitMultiply) {
			listener.exitMultiply(this);
		}
	}
}
export class DivideContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public DIVIDE_SIGN(): TerminalNode { return this.getToken(YAPLParser.DIVIDE_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterDivide) {
			listener.enterDivide(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitDivide) {
			listener.exitDivide(this);
		}
	}
}
export class NotOrMinusContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public MINUS_SIGN(): TerminalNode | undefined { return this.tryGetToken(YAPLParser.MINUS_SIGN, 0); }
	public NOT_SIGN(): TerminalNode | undefined { return this.tryGetToken(YAPLParser.NOT_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterNotOrMinus) {
			listener.enterNotOrMinus(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitNotOrMinus) {
			listener.exitNotOrMinus(this);
		}
	}
}
export class LessThanContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LT_SIGN(): TerminalNode { return this.getToken(YAPLParser.LT_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterLessThan) {
			listener.enterLessThan(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitLessThan) {
			listener.exitLessThan(this);
		}
	}
}
export class LessEqualThanContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LE_SIGN(): TerminalNode { return this.getToken(YAPLParser.LE_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterLessEqualThan) {
			listener.enterLessEqualThan(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitLessEqualThan) {
			listener.exitLessEqualThan(this);
		}
	}
}
export class EqualContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQUAL_SIGN(): TerminalNode { return this.getToken(YAPLParser.EQUAL_SIGN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterEqual) {
			listener.enterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitEqual) {
			listener.exitEqual(this);
		}
	}
}
export class NotContext extends ExprContext {
	public NOT(): TerminalNode { return this.getToken(YAPLParser.NOT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
}
export class ParenthesisContext extends ExprContext {
	public OPEN_PARENTHESIS(): TerminalNode { return this.getToken(YAPLParser.OPEN_PARENTHESIS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PARENTHESIS(): TerminalNode { return this.getToken(YAPLParser.CLOSE_PARENTHESIS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterParenthesis) {
			listener.enterParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitParenthesis) {
			listener.exitParenthesis(this);
		}
	}
}
export class IdentifierContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}
export class IntContext extends ExprContext {
	public INTEGER(): TerminalNode { return this.getToken(YAPLParser.INTEGER, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
}
export class StringContext extends ExprContext {
	public STRING(): TerminalNode { return this.getToken(YAPLParser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}
export class TrueContext extends ExprContext {
	public TRUE(): TerminalNode { return this.getToken(YAPLParser.TRUE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterTrue) {
			listener.enterTrue(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitTrue) {
			listener.exitTrue(this);
		}
	}
}
export class FalseContext extends ExprContext {
	public FALSE(): TerminalNode { return this.getToken(YAPLParser.FALSE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterFalse) {
			listener.enterFalse(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitFalse) {
			listener.exitFalse(this);
		}
	}
}
export class SelfContext extends ExprContext {
	public SELF(): TerminalNode { return this.getToken(YAPLParser.SELF, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: YAPLListener): void {
		if (listener.enterSelf) {
			listener.enterSelf(this);
		}
	}
	// @Override
	public exitRule(listener: YAPLListener): void {
		if (listener.exitSelf) {
			listener.exitSelf(this);
		}
	}
}


