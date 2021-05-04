const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { emailService } from './services/email.service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailDetails } from './pages/EmailDetails.jsx'
// import { BookFilter } from '../cmps/BookFilter.jsx' 

export class EmailApp extends React.Component {

    state = {
        emails: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadEmails()

    }

    loadEmails = () => {
        emailService.query(this.state.filterBy)
            .then((emails) => {
                this.setState({ emails: emails })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails, filterBy } = this.state
        if (!emails) return <div>Loading...</div>
        return (
            <Router>
                <div className="email-app">
                    <h1>Email app</h1>
                    <section className="main-email">
                        {/* <BookFilter onSetFilter={ this.onSetFilter } /> */ }
                        <div className="mail-container">
                            <EmailList emails={ emails } />
                            {/* { this.state.selectedBook && <BookDetails book={ selectedBook } onUnSelectBook={ this.onUnSelectBook } getPriceColor={ this.getPriceColor } /> } */ }
                        </div>
                    </section>
                </div>
                <Switch>
                    <Route component={ EmailDetails } path="/mail/:bookId?" /> \
                </Switch>
            </Router>
        )
    }
}

