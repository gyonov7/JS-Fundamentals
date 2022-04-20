function extractFile (input){
input = input.split('\\').pop().split('.');
let fileExtention = input.pop();
let fileName = input.join('.')



console.log(`File name: ${fileName}`);
console.log(`File extension: ${fileExtention}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Internal\\training-internal\\Template.bak.gif.pptx');
