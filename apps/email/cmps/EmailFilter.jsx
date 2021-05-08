import { EmailStatus } from './EmailStatus.jsx'
import { eventBusService } from "../services/event-bus-service.js"
export class EmailFilter extends React.Component {
    state = {
        searchBy: 'sender',
        filterBy: {
            IsStared: false,
            readStatus: '',
            // all: '',
            sender: '',
            subject: '',
            body: ''
        }
    }

    handleChange = (ev) => {
        console.log(ev.target.name);
        const field = this.state.searchBy
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    onSelect = (ev) => {
        ev.preventDefault()
        const searchBy = ev.target.value
        this.setState({ searchBy })
    }



    render() {
        const { searchBy, filterBy } = this.state

        return (
            <section className="email-filter flex align-center">
                <form className="email-filterby flex wrap justify-center" onSubmit={ this.onFilter }>
                    <input className="email-filter-ipt" type="text" placeholder={ 'Search by ' + searchBy } value={ filterBy[searchBy] }
                        onChange={ this.handleChange } />
                    <select onChange={ this.onSelect }>
                        {/* <option name="all">all</option> */ }
                        <option name="sender">sender</option>
                        <option name="subject">subject</option>
                        <option name="body">body</option>
                    </select>
                    {/* <button type="submit">Go</button>     */ }
                </form>
                <EmailStatus emails={ this.props.emails } />
            </section>
        )
    }
}






















