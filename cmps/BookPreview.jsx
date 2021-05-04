
const { Link } = ReactRouterDOM
import {bookService} from '../apps/email/services/email.service.js'
export class BookPreview extends React.Component {

    getCurrency = (currencyCode) => {
        switch (currencyCode) {
            case 'EUR':
                return '€'
            case 'ILS':
                return '₪'
            case 'USD':
                return '$'
            default:
                break;
        }
    }
    render() {
        const {book} = this.props;
        return (
            <Link to={`/book/${book.id}`}>
            <article className="book-preview">
                    <img src={book.thumbnail} alt="" />
                    <div className="preview-details">
                    <h3>{book.title}</h3>
                    <h4>Price: {+book.listPrice.amount} {book.listPrice.currencyCode}</h4>
                    </div>
                </article>
            </Link>
            
        )
    }
}