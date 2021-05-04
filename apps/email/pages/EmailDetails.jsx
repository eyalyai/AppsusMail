const { Link, Route } = ReactRouterDOM
// import { bookService } from '../services/book.service.js'

export class BookDetails extends React.Component {

    state = {
        isLongTxtShown: false,
        currencyCode: null,
        book: null
    }

    componentDidMount() {
        this.loadBook()

    }

    loadBook() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id).then(book => {

            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }




    getPageCountTxt = (pageCount) => {
        if (pageCount < 200 && pageCount > 100) return
        if (pageCount > 500) return 'Long reading'
        if (pageCount > 200) return 'Decent Reading'
        if (pageCount < 100) return 'Light Reading'
    }

    getPublishedDateTxt = (publishedDate) => {
        const currYear = new Date().getFullYear()
        if (currYear - publishedDate > 10) return 'Veteran Book'
        if (currYear - publishedDate < 1) return 'New!'
        return
    }

    getShortDescription = (description) => {
        return description.substring(0, 100) + '...'
    }

    render() {
        const { book } = this.state
        console.log(book);
        if (!book) return <div className="loader">Loading...</div>
        return <section className="book-details">
            <div className="book-details-top">
                <img src={ book.thumbnail } />
                <div className="book-details-info">
                    <span className="book-categories">[{ book.categories.join(' ,') }]</span>
                    { book.listPrice.isOnSale && <h2 className="sign sale-sign">ON SALE!</h2> }
                    <h1>{ book.title }</h1>
                    <h3>By <span>{ book.authors.join(' ,') }</span>
                    </h3>
                    <h3>{ book.subtitle }</h3>
                    { this.getPageCountTxt(book.pageCount) && <h2 className="sign page-count-sign">{ this.getPageCountTxt(book.pageCount) }</h2> }
                    { this.getPublishedDateTxt(book.publishedDate) && <h2 className="sign publish-date-sign">{ this.getPublishedDateTxt(book.publishedDate) }</h2> }
                    <div>
                        <h3 className="price">Price: <span className={ book.listPrice.priceColor }>
                            { book.listPrice.amount } { this.state.currencyCode }
                        </span>
                        </h3>
                    </div>

                    { !this.state.isLongTxtShown && <section className="book-description">
                        <h4>Description: </h4>
                        <span className="description">{ this.getShortDescription(book.description) }</span>
                        <div className="book-details-btn-container">
                            <button className="read-more-btn" onClick={ () => {
                                this.setState({ isLongTxtShown: true })
                            } }>Read More</button>
                            <button onClick={ () => {
                                onUnSelectBook(book.id)
                            } }>Return</button>
                        </div>

                    </section> }
                    { this.state.isLongTxtShown && <section className="book-description">
                        <h4>Description: </h4>
                        {/* { <LongTxt text={ book.description } isLongTxtShown={ this.state.isLongTxtShown } /> } */ }
                        <span className="description">{ book.description }</span>
                        <div className="book-details-btn-container">
                            <button onClick={ () => {
                                this.setState({ isLongTxtShown: false })
                            } }>Read Less</button>
                            <button onClick={ () => {
                                onUnSelectBook(book.id)
                            } }>Return</button>
                        </div>
                    </section> }
                </div>
            </div>

        </section>

    }
}