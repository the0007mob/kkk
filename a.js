#!/usr/bin/env node

    let fs= require("fs");
 (function(){
//fs.writeFileSync("a.txt","45555");
let n=process.argv[2];
let name=process.argv[3];
if(!Number.isInteger(+n) || n<=0){
   console.log("invalid input");
  return;
}
try{
if(fs.existsSync(`${name}-0`)){
    for(let i=0;i<n;++i){
        fs.rmdirSync(`${name}-${i}`);
        }
}else {
for(let i=0;i<n;++i){
fs.mkdirSync(`${name}-${i}`);
   }
}
}catch(err){
    console.log("some error occured");
}
})();
