import {
    utilService
} from './util.service.js'
import {
    storageService
} from './storage-service.js'

export const keepService = {
    query,
    getNoteById,
    removeNote,
    getNextNoteId,
    saveNote,
    addNote,
    editNote


}

const KEY = 'notes'
    // _createNotes()
var gNotes = [{
        type: "NoteText",
        id: utilService.makeId(),
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        id: utilService.makeId(),
        isPinned: false,
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
        id: utilService.makeId(),
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [{
                    txt: "Do that",
                    doneAt: null
                },
                {
                    txt: "Do this",
                    doneAt: 187111111
                }
            ]
        }
    }
]

function query() {
    if (notes) {
        var {
            notes
        } = filterBy
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
    gNotes[getNoteById(note)] = note
    _saveNotesToStorage()
}

function editNote(newNote, noteId) {
    return getNoteById(noteId)
        .then((note) => {
            note.info.txt = newNote.txt;
            _saveNotesToStorage()
            return Promise.resolve()
        })

    .catch((err) => {
        console.log(err)
    })
}

function addNote(type, info) {
    console.log(gNotes)
    var newNote = {
        id: utilService.makeId(),
        isPinned: false,
        type,
        info
    }
    gNotes.push(newNote)
    _saveNotesToStorage()
    console.log(gNotes)
    return Promise.resolve(gNotes)
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}




// function addNote(note) {
//     const newNote = {
//         id: utilService.makeId(),
//         type: note.type,
//         isPinned: false,
//         info: {
//             txt: note.txt
//         }
//     }

// function _createNote(type) {
//     // if (!price) price = utilService.getRandomIntInclusive(1, 200)
//     return {
//         id: utilService.makeId(),
//         isPinned: false,
//         type,
//         desc: utilService.makeLorem()
//     }
// }

// function _createNotes() {
//     let notes = storageService.loadFromStorage(KEY)
//     if (!notes || !notes.length) {
//         notes = gNotes
//     }

//     _saveNotesToStorage();
// }

// function saveNote(note) {
//     return note.id ? _updateNote(note) : _addNote(note);
// }

// function _addNote(noteToAdd) {
//     var note = _createNote(noteToAdd.title, noteToAdd.info)
//     gNotes.unshift(note)
//     _saveNotesToStorage();
//     return Promise.resolve(note)
// }


// function _updateNote(noteToUpdate) {
//     var noteIdx = gNotes.findIndex(function(note) {
//         return note.id === noteToUpdate.id;
//     })
//     gNotes.splice(noteIdx, 1, noteToUpdate)
//     _saveNotesToStorage();
//     return Promise.resolve(noteToUpdate)
// }