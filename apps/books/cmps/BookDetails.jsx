import {LongTxt} from './LongTxt.jsx'

export class BookDetails extends React.Component {

    state = {
        isLongTxt: false,
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
    
    
    render() {
            const {book, setSelectedBook } = this.props
        return (
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
            <button onClick={() => {setSelectedBook(null)}}>Go Back</button>
        </div>
    )
}
}