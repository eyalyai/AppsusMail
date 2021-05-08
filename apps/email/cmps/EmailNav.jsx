const Router = ReactRouterDOM.HashRouter
const { NavLink } = ReactRouterDOM

export class EmailNav extends React.Component {

    errorHeadup = () => {
        alert('Error: \n This page isnt supported yet, we be update in future updates')
    }
    render() {
        return (
            <div className="email-nav">
                <ul><img src="apps/email/assets/img/inbox.png" /><NavLink exact to="/mail" activeClassName="active-nav" >Inbox</NavLink></ul>
                <ul><img src="apps/email/assets/img/draft.png" /><NavLink exact to="/drafts" onClick={ this.errorHeadup }>Drafts</NavLink></ul>
                <ul><img src="apps/email/assets/img/star.png" /><NavLink exact to="/starred" onClick={ this.errorHeadup }>Starred</NavLink></ul>
                <ul><img src="apps/email/assets/img/share.png" /><NavLink exact to="/sentmail" onClick={ this.errorHeadup }>Sent Mail</NavLink></ul>
            </div>
        )
    }
}
