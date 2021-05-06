const { NavLink } = ReactRouterDOM

export function Home() {
    return <section className="home-page background">
        <div className="blur">
            <h1>Welcome to Appsus</h1>
            <div className="home-hero-text flex align-center">
                <div className="flex column">
                    <span>keep you precious ideas</span>
                    <span className="flex"><NavLink to="/keep">Keep app</NavLink></span>
                </div>
                <div className="flex column">
                    <span>discover your Email better </span>
                    <span className="flex align-center"><NavLink to="/email">Email app</NavLink></span>
                </div>
            </div>
        </div>
    </section>
}
