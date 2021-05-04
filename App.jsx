const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

<<<<<<< HEAD
import { BookShopApp } from './apps/email/pages/BookShopApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { MailApp } from './apps/email/MailApp.jsx'
=======
import {BookShopApp} from './apps/email/pages/BookShopApp.jsx'
import {MissKeep} from './apps/keep/MissKeep.jsx'
import {AboutUs} from './pages/AboutUs.jsx'
import {AppHeader} from './cmps/AppHeader.jsx'
import {BookEdit} from './pages/BookEdit.jsx'
>>>>>>> 8537dbb2bb5a20380859a625d6a638a34c1ab5b7

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
<<<<<<< HEAD
                    <Route component={ MailApp } path="/mail" />
                    <Route component={ BookDetails } path="/book/:bookId" />
                    <Route component={ BookShopApp } path="/book" />
                    <Route component={ AboutUs } path="/about" />
                    <Route component={ Home } path="/" />
=======
                    <Route component={BookEdit} path="/book/edit/:bookId?"/>
                    <Route component={MissKeep} path="/keep"/>
                    <Route component={BookShopApp} path="/book"/>
                    <Route component={AboutUs} path="/about"/>
                    <Route component={Home} path="/"/>
>>>>>>> 8537dbb2bb5a20380859a625d6a638a34c1ab5b7
                </Switch>
            </main>
            <footer>
                coffeeRights &copy;
            </footer>
        </Router>
    )
}

