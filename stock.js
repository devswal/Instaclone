let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function stock(){
let l = 0
let r = 1
let p = 0
while(r<arr.length){
    if(arr[l]<arr[r]){
        let profit = arr[r] - arr[l];
        p = Math.max(p,profit);
    }
    else{
        l=r;
    }
    r++;
}
return p;
}
let n = parseInt(readLine())
let arr = []
for(i=0;i<n;i++){
arr.push(parseInt(readLine()))
}
console.log(stock(arr))