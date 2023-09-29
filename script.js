function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const collectiveNames = {
    adjective: ['Extroverted', 'Spicy', 'Dishonest', 'Arid'],
    noun: ['Ice', 'Toothpaste', 'Galaxy', 'Kool-Aid', 'Knuckles'],
};

function generateDJName() {
    let yourName = [];

    const adjectiveIdx = generateRandomNumber(collectiveNames.adjective.length);
    const nounIdx = generateRandomNumber(collectiveNames.noun.length);

    yourName.push(collectiveNames.adjective[adjectiveIdx]);
    yourName.push(collectiveNames.noun[nounIdx]);

    document.getElementById('djName').textContent = yourName.join(' ');

    // Hide the button and show the title and DJName
    document.getElementById('generateButton').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    document.getElementById('djName').style.display = 'block';

    // Show the "New Name" button
    document.getElementById('newNameButton').style.display = 'block';
}

function generateNewName() {
    // Regenerate a random DJ name
    generateDJName();
}

document.getElementById('generateButton').addEventListener('click', generateDJName);
document.getElementById('newNameButton').addEventListener('click', generateNewName);
