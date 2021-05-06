import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
    query,
    getFormatAMPM,
    getEmailById,
    deleteEmail,
    saveEmail,
    updateReadStatue
}

const KEYMAIL = 'emails'
const KEYSENT = 'sent'
const KEYDRAFT = 'draft'
const KEYSTARRED = 'starred'
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
var gSentEmails = []
// _createBooks()


//TODO: configure filterBy, return emails 
//readStatue contain true or false
function query(filterBy, byCtg = null) {
    const storageMail = _loadEmailsFromStorage(KEYMAIL)
    var emails;
    if (byCtg) emails = _getEmailByCtg(byCtg)
    else emails = (storageMail) ? storageMail : gEmails
    _sortBySentAt(emails)
    console.log('filterBy', filterBy)

    if (filterBy) {
        var { subject, sender, body } = filterBy
        sender = (sender) ? sender : ''
        subject = (subject) ? subject : ''
        body = (body) ? body : ''
        const filteredEmails = emails.filter((email) => {
            return (
                email.sender.includes(sender) &&
                email.subject.includes(subject) &&
                email.body.includes(body)
            )
        })
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(emails)
}


function _getEmailByCtg(byCtg) {
    var emails;
    switch (byCtg) {
        case 'sent':
            return emails = _loadEmailsFromStorage(KEYSENT) ? _loadEmailsFromStorage(KEYSENT) : ''
        case 'draft':
            return emails = _loadEmailsFromStorage(KEYDRAFT) ? _loadEmailsFromStorage(KEYDRAFT) : ''
        case 'starred':
            return emails = _loadEmailsFromStorage(KEYSTARRED) ? _loadEmailsFromStorage(KEYSTARRED) : ''
        default: console.log('no match')
    }
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

function _saveEmailsToStorage(key, val) {
    storageService.saveToStorage(key, val)
}
function _loadEmailsFromStorage(key) {
    storageService.loadFromStorage(key)
}


function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage(KEYMAIL, gEmails);
    return Promise.resolve()

}

function updateReadStatue(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails[emailIdx].isRead = true;

}

function saveEmail(email) {
    gSentEmails.push(email)
    console.log('saved to sent', gSentEmails)
    _saveEmailsToStorage(KEYSENT, gSentEmails)
}
