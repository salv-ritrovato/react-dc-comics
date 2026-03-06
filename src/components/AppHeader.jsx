import dcLogo from '../../src/assets/img/dc-logo.png'

export default function AppHeader() {
    return <header>
        <img src={dcLogo} alt="DC Comics Logo" />
        <nav className='navbar'>
            <a href="">CHARACTERS</a>
            <a href="" className='active'>COMICS</a>
            <a href="">MOVIES</a>
            <a href="">TV</a>
            <a href="">GAMES</a>
            <a href="">COLLECTIBLES</a>
            <a href="">VIDEOS</a>
            <a href="">FANS</a>
            <a href="">NEWS</a>
            <a href="">SHOP</a>
        </nav>
    </header>
}