import {bookService} from './services/book.service.js'
import {BookList} from './cmps/BookList.jsx'
import {BookFilter} from './cmps/BookFilter.jsx'
import {BookDetails} from './cmps/BookDetails.jsx'


export class BookShopApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        selectedBook: null
    }
    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        bookService.query(this.state.filterBy)
            .then((books) => {
                this.setState({books})
        })
    }
    
    setSelectedBook = (book) => {
        this.setState({selectedBook: book})
    }
    
    onSetFilter = (filterBy) => {
    this.setState({filterBy}, this.loadBooks)
    }

    render() {
        const {books, selectedBook} = this.state
        if (!books) return <div>Loading...</div>
        return (
            <section>
                {/* <div className="logo"><a href="index.html">MissBook</a></div> */}
                
                {!selectedBook && <React.Fragment>
                <BookFilter onSetFilter={this.onSetFilter}/>
                <BookList books={books} setSelectedBook={this.setSelectedBook}/>
                </React.Fragment>}

                {selectedBook &&
                    <BookDetails book={selectedBook} setSelectedBook={this.setSelectedBook}/> }
            </section>
        )
    }
}


// onDeleteBook = (bookId) => {
//     bookService.deleteBook(bookId)
//     this.setSelectedBook(null)
//     this.loadBooks()
// }