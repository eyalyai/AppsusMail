const {Link} = ReactRouterDOM
import {bookService} from '../services/book.service.js'
import {eventBusService} from '../../../services/event-bus-service.js'
import {BookList} from '../../../cmps/BookList.jsx'
import {BookFilter} from '../../../cmps/BookFilter.jsx'


export class BookShopApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
    
    }
    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({books})
                eventBusService.emit('book-count', books.length)
        })
    }
    
    
    
    onSetFilter = (filterBy) => {
    this.setState({filterBy}, this.loadBooks)
    }

    render() {
        const {books} = this.state
        if (!books) return <div>Loading...</div>
        return (
            <section>
                <BookFilter onSetFilter={this.onSetFilter}/>
                <BookList books={books}/>
                <Link className="add-btn" to="/book/edit">Add Book</Link>
            </section>
        )
    }
}


// onDeleteBook = (bookId) => {
//     bookService.deleteBook(bookId)
//     this.setSelectedBook(null)
//     this.loadBooks()
// }

// setSelectedBook = (book) => {
//     this.setState({selectedBook: book})
// }