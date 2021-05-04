const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { EmailApp } from './apps/email/EmailApp.jsx'
import { MissKeep } from './apps/keep/MissKeep.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    {/* <Route component={BookEdit} path="/book/edit/:bookId?"/> */ }
                    <Route component={ EmailApp } path="/mail" />
                    <Route component={ MissKeep } path="/keep" />
                    {/* <Route component={BookShopApp} path="/book"/> */ }
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

