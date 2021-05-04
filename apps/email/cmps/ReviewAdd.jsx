import { bookService } from '../apps/email/services/book.service.js'
import { utilService } from '../services/util.service.js'
import { RatingStars } from './RatingStars.jsx'


export class ReviewAdd extends React.Component {

    state = {
        review: {
            fullName: null,
            id: utilService.makeId(),
            rate: null,
            readAt: '',
            txt: null,
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
    }



    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState(prevState => ({
            review: {
                ...prevState.review,
                [field]: val
            }
        }))
    }

    onAddReview = (ev) => {
        ev.preventDefault();
        // const bookId = this.props.book.id;
        bookService.addReview(this.props.book.id, this.state.review)
            // .then(this.closeReviewModal)
            this.props.loadBook()
            
    }

    closeReviewModal = () => {
        const bookId = this.props.match.params.bookId;
        this.props.history.push(`/book/${bookId}`)
    }

    render() {
        const { fullName, readAt, rate, txt } = this.state.review
        return (
            <section className="book-review">
                <h2>Tell us about your book</h2>
                <form onSubmit={this.onAddReview}>
                    <label className="full-name">Full Name
                        <input type="text" name="fullName" onChange={this.handleChange} />
                    </label>

                     <RatingStars rating={rating} handleChange={this.handleChange} />
                    <label className="read-time">Time of reading
                        <input type="date" name="readAt" value={readAt} onChange={this.handleChange} />
                    </label>

                    <label className="full-review">Leave your full review
            <textarea className="textarea" name="txt" cols="30" rows="10" onChange={this.handleChange}></textarea>

                    </label>
                    <button className="submit-btn">Submit</button>
                </form>
            </section>
        )

    }

}







