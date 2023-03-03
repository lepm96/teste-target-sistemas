let escrevaString = "exemplo"; // string a ser invertida
let stringReversa = "";

for (let i = escrevaString.length - 1; i >= 0; i--) {
  stringReversa += escrevaString[i];
}

console.log(stringReversa);