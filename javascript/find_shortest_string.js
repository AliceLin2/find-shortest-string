function findShortestString(arr) {
  // type your code here
  let shortest = arr[0]
  for(let i=1; i<arr.length; i++){
    if(arr[i].length<shortest.length){
      shortest = arr[i]
    }
  }
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", findShortestString(['flower', '', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'k'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'ha', 'k', 'bad']));

  // BENCHMARK HERE
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    let num = Math.floor(Math.random()*10)
    let r = (Math.random() + 1).toString(36).substring(num);
    longInput.push(r);
  }

  const start = Date.now()

  for(let j=0; j<1000; j++){
    findShortestString(["ha", "kk", "b"])
    findShortestString(longInput)
  }

  console.log(Date.now()-start)/2000
}

module.exports = findShortestString;

// Please add your pseudocode to this file
/*
  set shortest string = arr[0]
  iterate arr.length-1 times
    if any arr[i].length is less than shortest 
      set shortest = arr[i]
*/
// And a written explanation of your solution
