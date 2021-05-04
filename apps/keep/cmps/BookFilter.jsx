export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: '',
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState(({ filterBy }) => ({ 
            filterBy: { ...filterBy, [field]: val } 
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {

        const { title, minPrice, maxPrice } = this.state.filterBy;

        return (
            <form className="book-filter" onSubmit={this.onFilter}>
                <label htmlFor="byTitle">By Title</label>
                <input type="text" name="title" id="byTitle" value={title} onChange={this.handleChange} />

                <label htmlFor="minPrice">Lowest price</label>
                <input type="text" name="minPrice" id="minPrice" value={minPrice} onChange={this.handleChange} />

                <label htmlFor="maxPrice">Highest price</label>
                <input type="text" name="maxPrice" id="maxPrice" value={maxPrice} onChange={this.handleChange} />
                <button>Filter</button>
            </form>
        )
    }
}