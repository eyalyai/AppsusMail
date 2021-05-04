const Router = ReactRouterDOM.HashRouter
const {Route, Switch, Link} = ReactRouterDOM

import {BookShopApp} from './apps/email/pages/BookShopApp.jsx'
import {MissKeep} from './apps/keep/MissKeep.jsx'
import {AboutUs} from './pages/AboutUs.jsx'
import {AppHeader} from './cmps/AppHeader.jsx'
import {BookEdit} from './pages/BookEdit.jsx'

function Home () {
    return <section className="home-page">
        <h1>Welcome to lil MissBook shop</h1>
        <p>Check out our awesome <Link to="/book">Books Collection</Link></p>
    </section>
}

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={BookEdit} path="/book/edit/:bookId?"/>
                    <Route component={MissKeep} path="/keep"/>
                    <Route component={BookShopApp} path="/book"/>
                    <Route component={AboutUs} path="/about"/>
                    <Route component={Home} path="/"/>
                </Switch>
            </main>
            <footer>
                coffeeRights &copy;
            </footer>
        </Router>
    )
}

