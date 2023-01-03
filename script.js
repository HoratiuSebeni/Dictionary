let dictionary = '';
let succesfullAdd = ' was added succesfully!';
let notAdded = ' was not added to the dictionary!';
let allreadyExist = ' already exist in the dictionary!';
let notExist = ' does not exist in the dictionary!';

function addThisWord() {
    let newWord = document.getElementById('newInput').value;
    document.getElementById('notAddedNewWord').style.display= "none";
    document.getElementById('addedNewWord').style.display= "none";
    if(dictionary.includes(newWord) == true) {
        document.getElementById('notAddedNewWord').innerHTML = '"' + newWord + '"' + notAdded;
        document.getElementById('notAddedNewWord').style.display= "";
    } else {
        dictionary = dictionary + ' ' + newWord;
        document.getElementById('addedNewWord').innerHTML = '"' + newWord + '"' + succesfullAdd;
        document.getElementById('addedNewWord').style.display= "";
    }
}

function findThisWord() {
    let word = document.getElementById('searchInput').value;
    document.getElementById('findedWord').style.display= "none";
    document.getElementById('notFindedWord').style.display= "none";
    if(dictionary.includes(word) == true) {
        document.getElementById('findedWord').innerHTML = '"' + word + '"' + allreadyExist;
        document.getElementById('findedWord').style.display= "";
    } else {
        document.getElementById('notFindedWord').innerHTML = '"' + word + '"' + notExist;
        document.getElementById('notFindedWord').style.display= "";
    }
}
