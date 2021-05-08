const Router = ReactRouterDOM.HashRouter
const { NavLink } = ReactRouterDOM

export class EmailNav extends React.Component {
    render() {
        return (
            <div className="email-nav">
                <ul><img src="apps/email/assets/img/inbox.png" /><NavLink exact to="/mail" activeClassName="active-nav">Inbox</NavLink></ul>
                <ul><img src="apps/email/assets/img/draft.png" /><NavLink exact to="/drafts">Drafts</NavLink></ul>
                <ul><img src="apps/email/assets/img/star.png" /><NavLink exact to="/starred">Starred</NavLink></ul>
                <ul><img src="apps/email/assets/img/share.png" /><NavLink exact to="/sentmail">Sent Mail</NavLink></ul>
            </div>
        )
    }
}
