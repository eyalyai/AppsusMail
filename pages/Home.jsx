const { NavLink } = ReactRouterDOM

export function Home() {
    return <section className="home-page background">
        <div className="home-text flex column align-center blur">
            <h1>Welcome to Appsus</h1>
            <h2>Keep you precious ideas</h2>
            <h2>Discover mail</h2>
            <div className="home-nav-links flex ">
                <NavLink to="/keep">Keep</NavLink>
                <NavLink to="/mail">Email</NavLink>
                <NavLink to="/books">Book</NavLink>
            </div>
        </div>
    </section>
}
