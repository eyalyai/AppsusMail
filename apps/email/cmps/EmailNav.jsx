const Router = ReactRouterDOM.HashRouter
const { NavLink } = ReactRouterDOM

export class EmailNav extends React.Component {
    render() {
        return (
            <div className="email-nav">
                <ul><img src="apps/email/assets/img/inbox.png" /><NavLink exact to="/" activeClassName="active-nav">Inbox</NavLink></ul>
                <ul><img src="apps/email/assets/img/draft.png" /><NavLink exact to="/drafts">Drafts</NavLink></ul>
                <ul><img src="apps/email/assets/img/star.png" /><NavLink exact to="/starred">Starred</NavLink></ul>
                <ul><img src="apps/email/assets/img/share.png" /><NavLink exact to="/sentmail">Sent Mail</NavLink></ul>
            </div>
        )
    }
    // state = {
    //     emails: null,
    //     filterBy: null
    // }

    //     componentDidMount() {
    //         this.loadEmails()

    //     }

    //     loadEmails = () => {
    //         emailService.query(this.state.filterBy)
    //             .then((emails) => {
    //                 this.setState({ emails: emails })
    //                 console.log(this.state.emails);
    //             })
    //     }

    //     onSetFilter = (filterBy) => {
    //         this.setState({ filterBy }, this.loadEmails)
    //     }

    //     render() {
    //         const { emails, filterBy } = this.state
    //         if (!emails) return <div>Loading...</div>
    //         return (
    //             <div className="email-app">
    //                 <h1>Email app</h1>
    //                 {/* TODO: <EmailFilter></EmailFilter> */ }
    //                 <section className="main-email">
    //                     <div >
    //                         <EmailSideBar emails={ emails } />
    //                     </div>
    //                     <div className="mail-container">
    //                         <EmailList emails={ emails } />
    //                     </div>
    //                 </section>
    //             </div>
    //         )
    //     }
}
