const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
        
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }

}

const removeNote = title => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);

    if (filteredNotes.length < notes.length) {
        saveNotes(filteredNotes);
        console.log(chalk.green.inverse(`'${title}' was removed`));
    } else {
        console.log(chalk.red.inverse(`'${title}' wasn't found`));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk.green.inverse('Your notes:'));
        notes.forEach(note =>
                 console.log(chalk.blue(`${note.title}:\n\t${note.body}\n`))
                 );
    } else {
        console.log(chalk.red('No notes found'));
    }
}

const readNote = title => {
    const toRead = loadNotes().find(note => note.title === title);
    if (toRead){
        console.log(chalk.green(toRead.title));
        console.log(`\t${toRead.body}`)
    } else {
        console.log(chalk.red('Note was not found'));
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote,
}