import {bookService} from '../apps/email/services/book.service.js'

export class BookEdit extends React.Component {
    state = {
        book: {

            title: '',
            price: ''

        }
    }

    ComponentDidMount() {
        const id = this.props.match.params.bookId;
        if (!id) return
        bookService.getBookById(id).then(book => {
            this.setState({book})
        })
    }

    handleChange = ({target}) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value: target.value
        this.setState(prevState => ({
            car: {
                ...prevState.book,
                [field]: value
            }
        }))
    }


    onSaveBook = (ev) => {
        ev.preventDefault()
    const { book } = this.state
    if (!book.title) return alert('please wrught thr book title')
        bookService.saveBook(this.state.book).then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        const { title, price, id } = this.state.book
        return (
            <form className="book-edit" onSubmit={this.onSaveBook}>
                <h1>{id ? 'Edit' : 'Add'} Book</h1>
                <label>Title
                    <input type="text" name="title" value={title} onChange={this.handleChange}/>
                </label>
                <label>Price
                    <input type="number" name="price" value={price} onChange={this.handleChange}/>
                </label>
                <button>Save</button>
            </form>
        )
    }
}

