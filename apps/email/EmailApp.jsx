const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { emailService } from './services/email.service.js'
import { eventBusService } from "./services/event-bus-service.js"
import { EmailList } from './cmps/EmailList.jsx'
import { EmailSideBar } from './cmps/EmailSideBar.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { EmailStatus } from './cmps/EmailStatus.jsx'
import { EmailCompose } from './cmps/EmailCompose.jsx'


export class EmailApp extends React.Component {
    removeEvent;
    state = {
        emails: null,
        filterBy: null,
        isCompose: false
    }

    componentDidMount() {
        this.loadEmails()
        this.removeEvent = eventBusService.on('add-email', () => {
            this.toggleCompose()
        })
    }

    ComponentWillUnmount() {
        this.removeEvent()
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

    toggleCompose = () => {
        this.setState({ isCompose: !this.state.isCompose })
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
                        { (this.state.isCompose) ? <EmailCompose /> : <EmailList emails={ emails } /> }
                    </div>
                </section>
            </div>
        )
    }
}

