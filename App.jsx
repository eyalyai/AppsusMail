const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { BookShopApp } from './apps/email/pages/BookShopApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { MailApp } from './apps/email/MailApp.jsx'

function Home() {
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
                    <Route component={ MailApp } path="/mail" />
                    <Route component={ BookDetails } path="/book/:bookId" />
                    <Route component={ BookShopApp } path="/book" />
                    <Route component={ AboutUs } path="/about" />
                    <Route component={ Home } path="/" />
                </Switch>
            </main>
            <footer>
                coffeeRights &copy;
            </footer>
        </Router>
    )
}

