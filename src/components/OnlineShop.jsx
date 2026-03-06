import eComics from '../../src/assets/img/buy-comics-digital-comics.png'
import merchandise from '../../src/assets/img/buy-comics-merchandise.png'
import subscription from '../../src/assets/img/buy-comics-subscriptions.png'
import shopLocator from '../../src/assets/img/buy-comics-shop-locator.png'
import powerVisa from '../../src/assets/img/buy-dc-power-visa.svg'

export default function AppHeader() {
    return (
        <>
        <div className="onlineshop">
            <img src={eComics} alt="Digital Comics" />
            <span>DIGITAL COMICS</span>
            <img src={merchandise} alt="DC Merchandise" />
            <span>DC MERCHANDISE</span>
            <img src={subscription} alt="Monthly Subscription" />
            <span>SUBSCRIPTION</span>
            <img src={shopLocator} alt="Find Your Shop" />
            <span>COMIC SHOP LOCATOR</span>
            <img src={powerVisa} calt="DC Power Visa" />
            <span>DC POWER VISA</span>
        </div>
        </>
    )
}