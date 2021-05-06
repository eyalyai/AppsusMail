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



// state = {
//     filterBy: {
//         author: '',
//         subject: '',
//         body: ''
//     }
// }

// handleChange = (ev) => {
//     const field = ev.target.name
//     const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
//     this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
//         this.props.onSetFilter(this.state.filterBy)
//     })
// }

// onFilter = (ev) => {
//     ev.preventDefault()
//     this.props.onSetFilter(this.state.filterBy)
// }

// render() {
//     const { author, subject, body } = this.state.filterBy
//     return (
//         <section className="search-emails flex">
//             <form className="email-filter flex wrap justify-center" onSubmit={ this.onFilter }>
//                 <label htmlFor="author">Sender</label>

//                 <input type="text" id="author" name="author" value={ author } onChange={ this.handleChange } />

//                 <label htmlFor="subject">Subject</label>
//                 <input type="text" id="subject" name="subject" value={ subject } onChange={ this.handleChange } />

//                 <label htmlFor="body">Body Text</label>
//                 <input type="text" id="body" name="body" value={ body } onChange={ this.handleChange } />
//                 <button>Filter</button>
//             </form>
//         </section>
//     )
// }



















