import { eventBusService } from '../services/event-bus-service.js';

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {
    removeEvent;
    state = {
        bookCount: 0,
    }


    componentDidMount() {
        this.removeEvent = eventBusService.on('book-count', (bookCount) => {
            this.setState({ bookCount })
        })
    }

    ComponentWillUnmount() {
        this.removeEvent()
    }

    render() {
        return (
            <nav className="app-header">
                {/* <h1>MissBook Shop</h1> */ }
                <div className="logo"><a href="index.html">MissBook</a></div>
                <ul className="clean-list">
                    <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/mail">Email</NavLink></li>
                    <li><NavLink exact to="/keep">Keep</NavLink></li>
                    <li><button onClick={ () => {
                        this.props.history.goBack()
                    } }>Back</button></li>
                </ul>
                <span>
                    Books Available: { this.state.bookCount }
                </span>
            </nav>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)