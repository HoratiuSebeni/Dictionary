let dictionary = '';
let succesfullAdd = ' was added succesfully!';
let notAdded = ' was not added to the dictionary!';
let alreadyExist = ' already exist in the dictionary!';
let notExist = ' does not exist in the dictionary!';

function addThisWord() {
    let newWord = document.getElementById('newInput').value;
    if(dictionary.includes(newWord) == true) {
        eraseLastResult('addedNewWord');
        displayResult('notAddedNewWord', newWord, notAdded);
    } else {
        dictionary = dictionary + ' ' + newWord;
        eraseLastResult('notAddedNewWord');
        displayResult('addedNewWord', newWord, succesfullAdd);
    }
}

function findThisWord() {
    let newWord = document.getElementById('searchInput').value;
    if(dictionary.includes(newWord) == true) {
        eraseLastResult('notFoundWord');
        displayResult('foundWord', newWord, alreadyExist);
    } else {
        eraseLastResult('foundWord');
        displayResult('notFoundWord', newWord, notExist);
    }
}

function displayResult(containerID, theWord, theMessage) {
    document.getElementById(containerID).innerHTML = '"' + theWord + '"' + theMessage;
    document.getElementById(containerID).style.display= "";
}

function eraseLastResult(containerID) {
    document.getElementById(containerID).style.display= "none";
}
