import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
    query,
    getFormatAMPM,
    getEmailById,
    deleteEmail
}

const KEY = 'emails'
var gEmails = [
    {
        'id': 'OXeMG8wNskc',
        'sender': 'Eyal',
        'subject': 'Wassap?',
        'body': 'Pick up!',
        'isRead': false,
        'sentAt': 1551133930594
    },
    {
        'id': 'JYOJa2NpSCq',
        'sender': 'Aylam',
        'subject': 'Hi?',
        'body': utilService.makeLorem(150),
        'isRead': false,
        'sentAt': 1551133932000
    },
    {
        'id': '1y0Oqts35DQ',

        'sender': 'Yoni',
        'subject': 'Shalom?',
        'body': utilService.makeLorem(150),
        'isRead': true,
        'sentAt': 1551133934000
    },
    {
        'id': 'kSnfIJyikTP',
        'sender': 'Reut',
        'subject': 'HRUD?',
        'body': 'Pick up!',
        'isRead': false,
        'sentAt': 1551133132000
    },
    {
        'id': 'f4iuVmbuKCC',
        'sender': 'Conding Academy',
        'subject': 'boba?',
        'body': utilService.makeLorem(150),
        'isRead': true,
        'sentAt': 1551138930594
    },
    {
        'id': 'U2rfZO6oBZf',
        'sender': 'Adam',
        'subject': 'lola?',
        'body': utilService.makeLorem(30),
        'isRead': false,
        'sentAt': 1551132930594
    },
    {
        'id': 'xI0wrXaaAcq',
        'sender': 'Haya',
        'subject': 'hi about the blabla',
        'body': 'Pick up!',
        'isRead': false,
        'sentAt': 1551133930594
    },
    {
        'id': '9laHCEdSpFy',
        'sender': 'May',
        'subject': 'Wassap?',
        'body': utilService.makeLorem(100),
        'isRead': false,
        'sentAt': 1551131930594
    },
    {
        'id': 'nGhVwZvGCGp',
        'sender': 'Noam',
        'subject': 'Wassap?',
        'body': 'Pick up!',
        'isRead': true,
        'sentAt': 1551139309594
    },
    {
        'id': 'Q8Q9Lsd03BD',
        'sender': 'Yuval',
        'subject': 'Wassap?',
        'body': 'Pick up!',
        'isRead': true,
        'sentAt': 1551133530594
    },
]
// _createBooks()


//TODO: configure filterBy, return emails 
//readStatue contain true or false
function query(filterBy) {
    _sortBySentAt(gEmails)
    if (filterBy) {
        var { title, readStatue } = filterBy
        const filteredEmails = gEmails.filter((book) => {
            return book.title.includes(title) && email.isRead === readStatue
        })
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(gEmails)
}


function getFormatAMPM(timeStamp) {
    if (timeStamp) var date = new Date(timeStamp);
    else var date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = (hours <= 12) ? 'am' : 'pm';
    hours = hours % 12;
    hours = hours ? hours : 12; // incase of 00:00
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function _sortBySentAt(emails) {
    gEmails = emails.sort((a, b) => a.sentAt > b.sentAt ? -1 : (a.sentAt < b.sentAt ? 1 : 0))
}


function getEmailById(bookId) {
    return Promise.resolve(gEmails.find((book) => {
        return bookId === book.id
    }))
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}


function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();
    return Promise.resolve()

}

// function saveBook(book) {
//     return book.id ? _updateBook(book) : _addBook(book);
// }

// function _addBook(bookToAdd) {
//     var book = _createbook(bookToAdd.title, bookToAdd.price)
//     gEmails.unshift(book)
//     _saveBooksToStorage();
//     return Promise.resolve(book)
// }


// function _updateBook(bookToUpdate) {
//     var bookIdx = gEmails.findIndex(function (book) {
//         return book.id === bookToUpdate.id;
//     })
//     gEmails.splice(bookIdx, 1, bookToUpdate)
//     _saveBooksToStorage();
//     return Promise.resolve(bookToUpdate)
// }
// function getNextBookId(bookId) {
//     const bookIdx = gEmails.findIndex(book => book.id === bookId)
//     var nextBookIdx = bookIdx + 1
//     nextBookIdx = nextBookIdx === gEmails.length ? 0 : nextBookIdx
//     return gEmails[nextBookIdx].id
// }

//TODO: create Emails

// function _createBook(title, price) {
//     if (!price) price = utilService.getRandomIntInclusive(1, 200)
//     return {
//         id: utilService.makeId(),
//         title,
//         price,
//         desc: utilService.makeLorem()
//     }
// }

// function _createBooks() {
//     var books = storageService.loadFromStorage(KEY)
//     if (!books || !books.length) {
//         books = []
//         for (let i = 0; i < 20; i++) {
//             var title = gEmails[i].title
//             console.log(title)
//             books.push(_createBook(title))
//         }
//     }
//     gEmails = books;
//     _saveBooksToStorage();
// }


