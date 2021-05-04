const {Link, Route} = ReactRouterDOM
import {LongTxt} from '../cmps/LongTxt.jsx'
import {ReviewAdd} from '../cmps/ReviewAdd.jsx'
import { bookService } from '../apps/email/services/book.service.js'
import {ReviewList} from '../cmps/ReviewList/jsx'


export class BookDetails extends React.Component {

    state = {
        isLongTxt: false,
        book: null,
    }


    componentDidMount() {
        this.loadBook()

    }

    ComponentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }

    onDeleteBook = () => {
        bookService.deleteBook(this.state.book.id).then(() => {
            this.props.history.push('/book')
        })
    }

     bookPageCount = (pageCount) => {
        if (pageCount > 500) return 'Long Reading'
        if (pageCount > 200) return 'Decent Reading'
        if (pageCount <100) return 'Light Reading'
    }


     bookPublishDate = (publishedDate) => {
        const now = new Date().getFullYear()
        if (now - publishedDate >= 10) return 'Veteran Book'
        if (now - publishedDate <= 1) return 'New!'
    }
     isOnSale = (isOnSale) => {
        if (isOnSale) return 'ON SALE!'
        if (!isOnSale) return 'unfortunately not on sale'
    }
    
  
    getPrice = (price) => {
        if (price > 150) return 'dear'
        if (price < 30) return 'cheap'
        return
    }
    
    onRemoveReview = (reviewId) => {
        bookService.removeReview(this.state.book, reviewId).then(() => this.loadBook)
    }
    
    render() {
            const {book } = this.state
            if (!book) return <div>Loading...</div>
        return (
            <React.Fragment>
      <div className="book-details">
            <img src={book.thumbnail} alt="" />
            <h2>Book Title: {book.title}</h2>
            <h4>Book Price: <span className={this.getPrice(book.listPrice.amount)}>{book.listPrice.amount + ' ' + book.listPrice.currencyCode}</span></h4>
        <div className="secondery-info"> 
            <p>Authors: <span>{book.authors}</span></p>
            <p>Published At: <span>{book.publishedDate}, {this.bookPublishDate(book.publishedDate)}</span></p>
            <p>Pages: <span>{book.pageCount}, {this.bookPageCount(book.pageCount)}</span></p>
            <p>Categories:<span> {book.categories}</span></p>
            <p>Language: <span>{book.language}</span></p>
            <p>Subtitle: <span>{book.subtitle}</span></p>
            <p>On Sale: <span>{this.isOnSale(book.listPrice.isOnSale)}</span></p>
            <LongTxt txt={book.description} />
         </div>
        <div className="actions">
            <button onClick={() =>  this.props.history.push('/book')}>Go Back</button>
            <button onClick={this.onDeleteBook}>Delete Book</button>
            <Link to={`/book/edit/${book.id}`}>Edit</Link>
            <Link to={`/book/${bookService.getNextBookId(book.id)}`}>Next Book</Link>
         </div>         
            <section className="review-container">
            <Route component={ReviewAdd} path="/book/:bookId/add-review"/> 
            <div className="review-section">
                <h3>Reviews</h3>
                <Link className="add-review" to={`/book/${book.id}/add-review`}>Add Review</Link>
            </div>
            <ReviewList 
            reviews={book.reviews} removeReview={this.onRemoveReview} />
            </section>
        </div>
        </React.Fragment>
    )
}
}