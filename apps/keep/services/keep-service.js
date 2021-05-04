import { utilService } from './util.service.js'
import { storageService } from './storage-service.js'

export const keepService = {
    query,
    getNoteById,
    removeNote,
    getNextNoteId,
    saveNote,


}

const KEY = 'notes'
    // _createNotes()
var gNotes = [{
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
]

function query(filterBy) {
    if (notes) {
        var { notes } = filterBy
        const filteredNotes = gNotes.filter((note) => {
            return note.type.includes(type)
        })
        return Promise.resolve(filteredNotes)
    }
    return Promise.resolve(gNotes)
}




function getNoteById(noteId) {
    var note = gNotes.find((note) => {
        return noteId === note.id
    })
    return Promise.resolve(note)
}

function getNextNoteId(noteId) {
    const noteIdx = gNotes.findIndex(note => note.id === noteId)
    var nextNoteIdx = noteIdx + 1
    nextNoteIdx = nextNoteIdx === gNotes.length ? 0 : nextNoteIdx
    return gNotes[nextNoteIdx].id
}

function removeNote(noteId) {
    var noteIdx = gNotes.findIndex(function(note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    _saveNotesToStorage();
    return Promise.resolve()
}



function saveNote(note) {
    return note.id ? _updateNote(note) : _addNote(note);
}

function _addNote(noteToAdd) {
    var note = _createNote(noteToAdd.title, noteToAdd.info)
    gNotes.unshift(note)
    _saveNotesToStorage();
    return Promise.resolve(note)
}


function _updateNote(noteToUpdate) {
    var noteIdx = gNotes.findIndex(function(note) {
        return note.id === noteToUpdate.id;
    })
    gNotes.splice(noteIdx, 1, noteToUpdate)
    _saveNotesToStorage();
    return Promise.resolve(noteToUpdate)
}




function _createNote(type) {
    // if (!price) price = utilService.getRandomIntInclusive(1, 200)
    return {
        id: utilService.makeId(),
        type,
        info,
        desc: utilService.makeLorem()
    }
}

function _createNotes() {
    let notes = storageService.loadFromStorage(KEY)
    if (!notes || !notes.length) {
        notes = gNotes
    }

    _saveNotesToStorage();
}


function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}