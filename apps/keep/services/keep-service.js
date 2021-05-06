import {
    utilService
} from './util.service.js'
import {
    storageService
} from './storage-service.js'

const KEY = 'notesDB'

export const keepService = {
    getNotes,
    addNote,
    saveNote,
    removeNote
}

var gNotes = _createNotes()

function getNotes() {
    return Promise.resolve(gNotes);
}

function removeNote(note) {
    gNotes.splice(findIdxById(note.id), 1)
    storageService.saveToStorage(KEY, gNotes)
}

function findIdxById(id) {
    const idx = gNotes.findIndex(note => note.id === id)
    return idx
}

function saveNote(note) {
    gNotes[findIdxById(note.id)] = note
    storageService.saveToStorage(KEY, gNotes)
}

function _createNotes() {
    return (storageService.loadFromStorage(KEY)) ? storageService.loadFromStorage(KEY) : [{
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!",
                style: {
                    backgroundColor: "#B247FF"
                }
            }

        },
        {


            id: utilService.makeId(),
            type: "NoteVideo",
            info: {
                label: "jigsaw falling into place?",
                url: "https://www.youtube.com/embed/GoLJJRIWCLU"
            },
            style: {
                backgroundColor: "#var(--col3)"
            }
        },
        {
            id: utilService.makeId(),
            isPinned: false,
            type: "NoteImg",
            info: {
                url: "data:image/jpeg;base64,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",
                title: "Me playing Mi",
                style: {
                    backgroundColor: "#B247FF"
                }
            },

        },
        {
            id: utilService.makeId(),
            isPinned: false,
            type: "NoteTodos",
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
                ],
                style: {
                    backgroundColor: "#B247FF"
                }
            }
        },
        {
            id: utilService.makeId(),
            isPinned: false,
            type: "NoteTodos",
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
                ],
                style: {
                    backgroundColor: "#FF99FF"
                }
            }
        },
        {
            id: utilService.makeId(),
            type: "NoteText",
            isPinned: false,
            info: {
                txt: "Waka!",
                style: {
                    backgroundColor: "#B247FF"
                }
            }

        },
        {
            id: utilService.makeId(),
            isPinned: true,
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [{
                        txt: "Do that",
                        doneAt: null
                    },
                    {
                        txt: "Do this",
                        doneAt: 187111111
                    },
                    {
                        txt: "Do that",
                        doneAt: null
                    },
                    {
                        txt: "Do that",
                        doneAt: null
                    },
                ],
                style: {
                    backgroundColor: "#475dff"
                }
            }
        }, {
            id: utilService.makeId(),
            isPinned: false,
            type: "NoteImg",
            info: {
                url: "data:image/jpeg;base64,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",
                title: "Waka Waka",
                style: {
                    backgroundColor: "#8F00F5"
                }
            },

        }
    ]

}

function addNote(type, info) {
    gNotes.push({
        id: utilService.makeId(),
        isPinned: false,
        type,
        info
    })
    storageService.saveToStorage(KEY, gNotes)
    return Promise.resolve()
}