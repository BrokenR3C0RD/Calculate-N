/* A simple calculator with functions */

/* Factorial function, variables, and the built-in functions are here. */

%{
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
%}

/* Lexical grammar */
%lex

%%

[\n]+                              return "BREAK";
";"                                return "SEPERATOR";
\s+                                /* Whitespace is useless for our little thing here */
"#".*                              return "COMMENT";

[a-zA-Z_$][a-zA-Z0-9_$]*\b         return "VARIABLE";
[0-9]+("."[0-9]+)?\b               return "NUMBER";  // Has an integer part
"."[0-9]+\b                        return "NUMBER";  // No integer part
[0-9]+("."[0-9]+)?[eE][+-]?[0-9]+  return "NUMBER";  // As scientific notation

"+"                                return "+";
"-"                                return "-";
"*"                                return "*";
"/"                                return "/";
"%"                                return "%";
"^"                                return "^";
"!"                                return "!";

">="                               return ">=";
"<="                               return "<=";
"=="                               return "==";
"!="                               return "!=";
">"                                return ">";
"<"                                return "<";
"="                                return "=";

"("                                return "(";
")"                                return ")";

","                                return ",";

<<EOF>>                            return "EOF";
/lex

/* Operator precedence */

%left '(', ')'
%left '='
%left '>', '<', '>=', '<=', '==', '!='
%left '+', '-'
%left '*', '/', '%'
%left '^'
%left '!'
%left UMINUS

%start expressions

/* Language grammar */
%%

expressions
  : e BREAK expressions
  | e SEPERATOR expressions
  | e COMMENT BREAK expressions
  | COMMENT BREAK expressions
  | e EOF
    {return $$;}
  | BREAK
  | EOF
    {return;}
  ;

e
  : e '+' e
    {$$ = $1.add($3);}
  | e '-' e
    {$$ = $1.sub($3);}
  | e '*' e
    {$$ = $1.mul($3);}
  | e '/' e
    {$$ = $1.div($3);}
  | e '%' e
    {$$ = $1.mod($3);}
  | e '^' e
    {$$ = $1.pow($3);}
  | '-' e %prec UMINUS
    {$$ = $2.neg();}
  | e '!'
    {$$ = factorial($1);}
  | e '>' e
    {$$ = ($1.gt($3)) ? Decimal(1)  : Decimal(0);}
  | e '<' e
    {$$ = ($1.lt($3)) ? Decimal(1)  : Decimal(0);}
  | e '>=' e
    {$$ = ($1.gte($3)) ? Decimal(1) : Decimal(0);}
  | e '<=' e
    {$$ = ($1.lte($3)) ? Decimal(1) : Decimal(0);}
  | e '==' e
    {$$ = ($1.eq($3)) ? Decimal(1)  : Decimal(0);}
  | e '!=' e
    {$$ = !($1.eq($3)) ? Decimal(1) : Decimal(0);}
  | '(' e ')'
    {$$ = $2;}
  | e '(' e ')' %prec '*'
    {$$ = $1.mul($3);}
  | NUMBER
    {$$ = Decimal(yytext);}
  | VARIABLE
    {$$ = variables[$1] || Decimal(0);}
  | VARIABLE '=' e
    {$$ = (variables[$1] = $3);}
  | VARIABLE '(' ')'
    {$$ = (functions[$1] || functions["%NOOP"])(Decimal(0)) || Decimal(0);}
  | VARIABLE '(' e ')'
    {$$ = (functions[$1] || functions["%NOOP"])($3) || Decimal(0);}
  | VARIABLE '(' e ',' e ')'
    {$$ = (functions[$1] || functions["%NOOP"])($3, $5) || Decimal(0);}
  ;
