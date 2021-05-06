export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            IsStared: false,
            readStatus: '',
            sender: '',
            subject: '',
            body: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }


    render() {
        // console.log(this.state.filterBy);
        // const { text } = this.state.filterBy
        const { sender, subject, body } = this.state.filterBy

        return (
            <section className="email-search flex">
                <form className="email-filterby flex wrap justify-center" onSubmit={ this.onFilter }>

                    <input type="text" id="sender" name="sender" placeholder="By Sender" value={ sender }
                        onChange={ this.handleChange } />

                    <input type="text" id="subject" name="subject" placeholder="By Subject" value={ subject }
                        onChange={ this.handleChange } />

                    <input type="text" id="body" name="body" value={ body } placeholder="By Body" onChange={ this.handleChange } />
                </form>
            </section>
            // <div>
            //     <select className="mail-filter-by" name="readStatus" onChange={ this.handleChange }>
            //         <option value="all">All</option>
            //         <option value="read">Read</option>
            //         <option value="unread">Unread</option>
            //     </select>
            //     <input className="email-search" type="text" placeholder="Search mail" value={ text }
            //         onChange={ this.handleChange } />
            // </div>
        )
    }
}






















