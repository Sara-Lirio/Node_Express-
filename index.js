const prompt = require ('prompt-sync')({
  history: require('prompt-sync-history')(),
  sigint: false
});

function backgroundCSS() {
  let backgroundColor = prompt('Background-color:');
  let arraybackcolor = []

  while (backgroundColor != 'sair' && backgroundColor != 'Sair' && backgroundColor != 'SAIR') {
    arraybackcolor.push(backgroundColor)
    backgroundColor = prompt('Background-color:')
  }
  let array1 = arraybackcolor.sort();
  return ('Background-color: '+array1)
}

function fontsizeCSS() {
  let fontSize = prompt('Font-size:');
  let arrayfontsize = []

  while (fontSize != 'sair' && fontSize != 'Sair' && fontSize != 'SAIR') {
    arrayfontsize.push(fontSize)
    fontSize = prompt('Font-size:')
  }
  let array2 = arrayfontsize.sort();
  return ('Font-size: '+array2)
}

function textalignCSS() {
  let textAlign = prompt('Text-align: ')
  let arraytext = []

  while (textAlign != 'sair' && textAlign != 'Sair' && textAlign != 'SAIR') {
    arraytext.push(textAlign)
    textAlign = prompt('Text-align:')
  }
  let array3 = arraytext.sort();
  return ('Text-align:'+array3)
}

prompt.history.save()

console.log(backgroundCSS()); 
console.log(fontsizeCSS()); 
console.log(textalignCSS());



