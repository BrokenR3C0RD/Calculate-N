var readline = require("readline");
var calcN = require("./calculate-n.common.js");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "CalcN> "
});

rl.prompt();

rl.on("line", function(line){
  if(line === ".exit")
    process.exit();

  try{
  var res = calcN.parse(line);
    if(res !== true){
      console.log((res < 0 ? "" : " ") + res);
    }
  } catch(e){
    console.error("Error:", e.message);
  }
  rl.prompt();
});

rl.on("close", function(){
  console.log("");
  process.exit();
});
