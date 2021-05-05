const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { emailService } from './services/email.service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailSideBar } from './cmps/EmailSideBar.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailStatus } from './cmps/EmailStatus.jsx';
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
                console.log(this.state.emails);
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    render() {
        const { emails, filterBy } = this.state
        if (!emails) return <div>Loading...</div>
        return (
            <div className="email-app">
                <header className="email-header">
                    <h1>Email app</h1>
                    <EmailFilter emails={ emails } filterBy={ filterBy } onSetFilter={ this.onSetFilter } />
                    <EmailStatus emails={ emails } />
                </header>
                <section className="main-email">
                    <div >
                        <EmailSideBar emails={ emails } />
                    </div>
                    <div className="mail-container">
                        <EmailList emails={ emails } />
                    </div>
                </section>
            </div>
        )
    }
}

