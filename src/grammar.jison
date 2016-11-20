/* A simple calculator with functions */

/* Factorial function, variables, and the built-in functions are here. */
%{
var factorial = function(num){
  var val = 1;
  for(var i = 2; i <= num; i++){
    val *= i;
  }
  return val;
}
var g = (typeof global === "object" ? global : window);
var variables = g.calcN = (g.calcN || {});
var functions = variables["%FUNCS"] = variables["%FUNCS"] || {
  "%NOOP": function(val){
    return 0;
  },
  "print": function(val){
    (typeof global === "object" ? console.log : window.calcPrint)((val >= 0 ? " " : "") + val);
  },
  "sin": function(val){
    return Math.sin(val * (Math.PI / 180));
  },
  "cos": function(val){
    return Math.cos(val * (Math.PI / 180));
  },
  "tan": function(val){
    return Math.tan(val * (Math.PI / 180));
  },
  "rad": function(val){
    return val * (Math.PI / 180);
  },
  "deg": function(val){
    return val / (Math.PI / 180);
  },
  "atan": function(val){
    return Math.atan(val) / (Math.PI / 180);
  },
  "asin": function(val){
    return Math.asin(val) / (Math.PI / 180);
  },
  "acos": function(val){
    return Math.acos(val) / (Math.PI / 180)
  },
  "floor": function(val){
    return Math.floor(val);
  },
  "ceil": function(val){
    return Math.ceil(val);
  },
  "round": function(val){
    return Math.round(val);
  },
  "abs": function(val){
    return Math.abs(val);
  },
  "rand": function(val){
    if(val === 0){
      return Math.random();
    } else {
      return Math.floor(Math.random() * val);
    }
  },
  "ln": function(val){
    return Math.ln(val);
  },
  "PI": function(val){
    return Math.PI;
  },
  "E": function(val){
    return Math.E;
  },
  "sqr": function(val){
    return Math.pow(val, 2);
  },
  "sqrt": function(val){
    return Math.sqrt(val);
  },
  "sgn": function(val){
    return Math.sign(val);
  },
  
};

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

">"                                return ">";
"<"                                return "<";
"="                                return "=";
">="                               return ">=";
"<="                               return "<=";
"=="                               return "==";
"!="                               return "!=";

"("                                return "(";
")"                                return ")";

<<EOF>>                            return "EOF";
/lex

/* Operator precedence */
%left VARIABLE, '='
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
    {$$ = $1 + $3;}
  | e '-' e
    {$$ = $1 - $3;}
  | e '*' e
    {$$ = $1 * $3;}
  | e '/' e
    {$$ = $1 / $3;}
  | e '%' e
    {$$ = $1 % $3;}
  | e '^' e
    {$$ = Math.pow($1, $3);}
  | '-' e %prec UMINUS
    {$$ = -$2;}
  | e '!'
    {$$ = factorial($1);}
  | e '>' e
    {$$ = ($1 > $3) ? 1 : 0;}
  | e '<' e
    {$$ = ($1 < $3) ? 1 : 0;}
  | e '>=' e
    {$$ = ($1 >= $3) ? 1 : 0;}
  | e '<=' e
    {$$ = ($1 <= $3) ? 1 : 0;}
  | e '==' e
    {$$ = ($1 == $3) ? 1 : 0;}
  | e '!=' e
    {$$ = ($1 != $3) ? 1 : 0;}
  | NUMBER
    {$$ = +yytext;}
  | VARIABLE
    {$$ = variables[$1] || 0;}
  | VARIABLE '=' e
    {$$ = (variables[$1] = $3);}
  | VARIABLE '(' e ')'
    {$$ = (functions[$1] || functions["%NOOP"])($3) || 0;}
  | VARIABLE '(' ')'
    {$$ = (functions[$1] || functions["%NOOP"])(0) || 0;}
  ;
