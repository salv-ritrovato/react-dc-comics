import dcLogo from '../../src/assets/img/dc-logo.png'

export default function AppHeader() {
    return (
        <>
            <header>
                <a href=""><img src={dcLogo} alt="DC Comics Logo" /></a>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="">CHARACTERS</a>
                                    <a href="">COMICS</a>
                                    <a href="">MOVIES</a>
                                    <a href="">TV</a>
                                    <a href="">GAMES</a>
                                    <a href="">COLLECTIBLES</a>
                                    <a href="">VIDEOS</a>
                                    <a href="">FANS</a>
                                    <a href="">NEWS</a>
                                    <a href="">SHOP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}