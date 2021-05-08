import { eventBusService } from '../services/event-bus-service.js';

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {
    removeEvent;
    state = {
        status: 'close-sidebar',
        bookCount: 0
    }


    componentDidMount() {
        this.removeEvent = eventBusService.on('book-count', (bookCount) => {
            this.setState({ bookCount })
        })
    }

    ComponentWillUnmount() {
        this.removeEvent()
    }

    toggleMenu = () => {
        console.log('im toggling');
        const newClass = (this.state.status === 'close-sidebar') ? 'open-sidebar' : 'close-sidebar'
        this.setState({ status: newClass })
    }


    render() {
        return (
            <nav className="app-header flex space-around align-center ">
                <span className="logo">Appsus</span>
                <ul className={ "app-main-nav clean-list " + this.state.status }>
                    <NavLink exact to="/" activeClassName="active-nav">Home</NavLink>
                    <NavLink exact to="/about">About</NavLink>
                    <NavLink exact to="/mail">Email</NavLink>
                    <NavLink exact to="/keep">Keep</NavLink>
                    <NavLink exact to="/books">Books</NavLink>
                </ul>
                <button onClick={ this.toggleMenu } hidden className="header-nav-toggle-btn"><img src="assets\img\menu (1).png" alt="☰" /> </button>
            </nav>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)