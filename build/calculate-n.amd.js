

define(function(require){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,3],$V2=[1,5],$V3=[1,6],$V4=[1,7],$V5=[1,8],$V6=[1,9],$V7=[1,14],$V8=[1,15],$V9=[1,16],$Va=[1,17],$Vb=[1,18],$Vc=[1,19],$Vd=[1,20],$Ve=[1,21],$Vf=[1,22],$Vg=[1,23],$Vh=[1,24],$Vi=[1,25],$Vj=[1,26],$Vk=[1,27],$Vl=[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,27],$Vm=[5,6,7,8,9,10,16,17,18,19,20,21,22,23,27],$Vn=[5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,27],$Vo=[5,6,7,8,16,17,18,19,20,21,22,23,27];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"BREAK":5,"SEPERATOR":6,"COMMENT":7,"EOF":8,"+":9,"-":10,"*":11,"/":12,"%":13,"^":14,"!":15,">":16,"<":17,">=":18,"<=":19,"==":20,"!=":21,"(":22,")":23,"NUMBER":24,"VARIABLE":25,"=":26,",":27,"$accept":0,"$end":1},
terminals_: {2:"error",5:"BREAK",6:"SEPERATOR",7:"COMMENT",8:"EOF",9:"+",10:"-",11:"*",12:"/",13:"%",14:"^",15:"!",16:">",17:"<",18:">=",19:"<=",20:"==",21:"!=",22:"(",23:")",24:"NUMBER",25:"VARIABLE",26:"=",27:","},
productions_: [0,[3,3],[3,3],[3,4],[3,3],[3,2],[3,1],[3,1],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,4],[4,1],[4,1],[4,3],[4,3],[4,4],[4,6]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 5:
return this.$;
break;
case 7:
return;
break;
case 8:
this.$ = $$[$0-2].add($$[$0]);
break;
case 9:
this.$ = $$[$0-2].sub($$[$0]);
break;
case 10:
this.$ = $$[$0-2].mul($$[$0]);
break;
case 11:
this.$ = $$[$0-2].div($$[$0]);
break;
case 12:
this.$ = $$[$0-2].mod($$[$0]);
break;
case 13:
this.$ = $$[$0-2].pow($$[$0]);
break;
case 14:
this.$ = $$[$0].neg();
break;
case 15:
this.$ = factorial($$[$0-1]);
break;
case 16:
this.$ = ($$[$0-2].gt($$[$0])) ? Decimal(1)  : Decimal(0);
break;
case 17:
this.$ = ($$[$0-2].lt($$[$0])) ? Decimal(1)  : Decimal(0);
break;
case 18:
this.$ = ($$[$0-2].gte($$[$0])) ? Decimal(1) : Decimal(0);
break;
case 19:
this.$ = ($$[$0-2].lte($$[$0])) ? Decimal(1) : Decimal(0);
break;
case 20:
this.$ = ($$[$0-2].eq($$[$0])) ? Decimal(1)  : Decimal(0);
break;
case 21:
this.$ = !($$[$0-2].eq($$[$0])) ? Decimal(1) : Decimal(0);
break;
case 22:
this.$ = $$[$0-1];
break;
case 23:
this.$ = $$[$0-3].mul($$[$0-1]);
break;
case 24:
this.$ = Decimal(yytext);
break;
case 25:
this.$ = variables[$$[$0]] || Decimal(0);
break;
case 26:
this.$ = (variables[$$[$0-2]] = $$[$0]);
break;
case 27:
this.$ = (functions[$$[$0-2]] || functions["%NOOP"])(Decimal(0)) || Decimal(0);
break;
case 28:
this.$ = (functions[$$[$0-3]] || functions["%NOOP"])($$[$0-1]) || Decimal(0);
break;
case 29:
this.$ = (functions[$$[$0-5]] || functions["%NOOP"])($$[$0-3], $$[$0-1]) || Decimal(0);
break;
}
},
table: [{3:1,4:2,5:$V0,7:$V1,8:$V2,10:$V3,22:$V4,24:$V5,25:$V6},{1:[3]},{5:[1,10],6:[1,11],7:[1,12],8:[1,13],9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk},{5:[1,28]},{1:[2,6]},{1:[2,7]},{4:29,10:$V3,22:$V4,24:$V5,25:$V6},{4:30,10:$V3,22:$V4,24:$V5,25:$V6},o($Vl,[2,24]),o([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,27],[2,25],{22:[1,32],26:[1,31]}),{3:33,4:2,5:$V0,7:$V1,8:$V2,10:$V3,22:$V4,24:$V5,25:$V6},{3:34,4:2,5:$V0,7:$V1,8:$V2,10:$V3,22:$V4,24:$V5,25:$V6},{5:[1,35]},{1:[2,5]},{4:36,10:$V3,22:$V4,24:$V5,25:$V6},{4:37,10:$V3,22:$V4,24:$V5,25:$V6},{4:38,10:$V3,22:$V4,24:$V5,25:$V6},{4:39,10:$V3,22:$V4,24:$V5,25:$V6},{4:40,10:$V3,22:$V4,24:$V5,25:$V6},{4:41,10:$V3,22:$V4,24:$V5,25:$V6},o($Vl,[2,15]),{4:42,10:$V3,22:$V4,24:$V5,25:$V6},{4:43,10:$V3,22:$V4,24:$V5,25:$V6},{4:44,10:$V3,22:$V4,24:$V5,25:$V6},{4:45,10:$V3,22:$V4,24:$V5,25:$V6},{4:46,10:$V3,22:$V4,24:$V5,25:$V6},{4:47,10:$V3,22:$V4,24:$V5,25:$V6},{4:48,10:$V3,22:$V4,24:$V5,25:$V6},{3:49,4:2,5:$V0,7:$V1,8:$V2,10:$V3,22:$V4,24:$V5,25:$V6},o($Vl,[2,14]),{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:[1,50]},{4:51,10:$V3,22:$V4,24:$V5,25:$V6},{4:53,10:$V3,22:$V4,23:[1,52],24:$V5,25:$V6},{1:[2,1]},{1:[2,2]},{3:54,4:2,5:$V0,7:$V1,8:$V2,10:$V3,22:$V4,24:$V5,25:$V6},o($Vm,[2,8],{11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vm,[2,9],{11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vn,[2,10],{14:$Vc,15:$Vd}),o($Vn,[2,11],{14:$Vc,15:$Vd}),o($Vn,[2,12],{14:$Vc,15:$Vd}),o([5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,27],[2,13],{15:$Vd}),o($Vo,[2,16],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vo,[2,17],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vo,[2,18],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vo,[2,19],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vo,[2,20],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),o($Vo,[2,21],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd}),{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:[1,55]},{1:[2,4]},o($Vl,[2,22]),o([5,6,7,8,22,23,27],[2,26],{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj}),o($Vl,[2,27]),{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:[1,56],27:[1,57]},{1:[2,3]},o($Vl,[2,23]),o($Vl,[2,28]),{4:58,10:$V3,22:$V4,24:$V5,25:$V6},{9:$V7,10:$V8,11:$V9,12:$Va,13:$Vb,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:[1,59]},o($Vl,[2,29])],
defaultActions: {4:[2,6],5:[2,7],13:[2,5],33:[2,1],34:[2,2],49:[2,4],54:[2,3]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var Decimal = require("decimal.js");
Decimal.set({"modulo": Decimal.EUCLID});

var factorial = function(num){
  var val = Decimal(1);
  for(var i = Decimal(2); i.lte(num); i = i.add(1)){
    val = val.mul(i);
  }
  return val;
}
var g = (typeof global === "object" ? global : window);
var variables = {};
var defFuncs = {
  "%NOOP": function(val){
    return Decimal(0);
  },
  "print": function(val){
    (g.cnPrint || function(v){console.log((v.lt(0) ? "" : " ") + v);})(val);
    return Decimal(0);
  },
  "prec": function(val){
    if(!val.eq(0)){
      Decimal.set({"precision": val.toNumber()});
    }
    return Decimal.precision;
  },
  "sin": function(val){
    return Decimal.sin(val.mul(Decimal.atan(-1).div(180)));
  },
  "cos": function(val){
    return Decimal.cos(val.mul(Decimal.atan(-1).div(180)));
  },
  "tan": function(val){
    return Decimal.tan(val.mul(Decimal.atan(-1).div(180)));
  },
  "rad": function(val){
    return val.mul(Decimal.atan(-1).div(180));
  },
  "deg": function(val){
    return val.div(Decimal.atan(-1).div(180));
  },
  "atan": function(v1, v2){
    if(v2 == null){
      return v1.atan().div(Decimal.atan(-1).div(180));
    } else {
      return Decimal.atan2(v1, v2).div(Decimal.atan(-1).div(180));
    }
  },
  "asin": function(val){
    return val.asin().div(Decimal.atan(-1).div(180));
  },
  "acos": function(val){
    return val.acos().div(Decimal.atan(-1).div(180));
  },
  "floor": function(val){
    return val.floor();
  },
  "ceil": function(val){
    return val.ceil();
  },
  "round": function(val){
    return val.round();
  },
  "abs": function(val){
    return val.abs();
  },
  "rand": function(val){
    if(val === 0){
      return Decimal.random();
    } else {
      return Decimal.random().mul(val).floor();
    }
  },
  "ln": function(val){
    return val.ln();
  },
  "log": function(v1, v2){
    return v1.log(v2 || Decimal(10));
  },
  "PI": function(val){
    return Decimal.acos(-1);
  },
  "E": function(val){
    return Decimal(Math.E);
  },
  "sqr": function(val){
    return val.pow(2);
  },
  "sqrt": function(val){
    return val.sqrt();
  },
  "sgn": function(val){
    return Decimal.sign(val);
  },
  "reset": function(val){
    variables = {};
    functions = g.cnFuncs = defFuncs;
    return Decimal(1);
  },
  "input": function(val){
    return (function lop(){
      var txt = g.cnInp();
      try {
        return num = Decimal(txt);
      } catch(e){
        return lop();
      }
    })();
  }
};

var functions = g.cnFunc = g.cnFunc || defFuncs;
if(!process.browser) var rl = require("readline-sync");

g.cnInp = (process.browser ? function(){
  return prompt("Please input a number")
} : function(){
  return rl.question("Input: ");
});

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "BREAK";
break;
case 1:return "SEPERATOR";
break;
case 2:/* Whitespace is useless for our little thing here */
break;
case 3:return "COMMENT";
break;
case 4:return "VARIABLE";
break;
case 5:return "NUMBER";  // Has an integer part
break;
case 6:return "NUMBER";  // No integer part
break;
case 7:return "NUMBER";  // As scientific notation
break;
case 8:return "+";
break;
case 9:return "-";
break;
case 10:return "*";
break;
case 11:return "/";
break;
case 12:return "%";
break;
case 13:return "^";
break;
case 14:return "!";
break;
case 15:return ">=";
break;
case 16:return "<=";
break;
case 17:return "==";
break;
case 18:return "!=";
break;
case 19:return ">";
break;
case 20:return "<";
break;
case 21:return "=";
break;
case 22:return "(";
break;
case 23:return ")";
break;
case 24:return ",";
break;
case 25:return "EOF";
break;
}
},
rules: [/^(?:[\n]+)/,/^(?:;)/,/^(?:\s+)/,/^(?:#.*)/,/^(?:[a-zA-Z_$][a-zA-Z0-9_$]*\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\.[0-9]+\b)/,/^(?:[0-9]+(\.[0-9]+)?[eE][+-]?[0-9]+)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:\^)/,/^(?:!)/,/^(?:>=)/,/^(?:<=)/,/^(?:==)/,/^(?:!=)/,/^(?:>)/,/^(?:<)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
return parser;
});