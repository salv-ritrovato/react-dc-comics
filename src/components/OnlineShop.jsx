/* IMPORTED SHOP ICONS */
import eComics from '../../src/assets/img/buy-comics-digital-comics.png'
import merchandise from '../../src/assets/img/buy-comics-merchandise.png'
import subscription from '../../src/assets/img/buy-comics-subscriptions.png'
import shopLocator from '../../src/assets/img/buy-comics-shop-locator.png'
import powerVisa from '../../src/assets/img/buy-dc-power-visa.svg'

export default function OnlineShop() {
    return (
        <>
            {/* ONLINE SHOP SECTION */}
            <div className="onlineshop">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 text-center g-5 justify-content-center align-items-center">
                        <div className="col d-flex align-items-center">
                            <a href=""><img src={eComics} alt="Digital Comics" className="img-fluid" /></a>
                            <span className='d-none d-lg-block d-xl-inline'>DIGITAL&nbsp;COMICS</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <a href=""><img src={merchandise} alt="DC Merchandise" className="img-fluid" /></a>
                            <span className='d-none d-lg-block d-xl-inline'>DC&nbsp;MERCHANDISE</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <a href=""><img src={subscription} alt="Monthly Subscription" className="img-fluid" /></a>
                            <span className='d-none d-lg-block d-xl-inline'>SUBSCRIPTION</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <a href=""><img src={shopLocator} alt="Find Your Shop" className="img-fluid" /></a>
                            <span className='d-none d-lg-block d-xl-inline'>COMIC&nbsp;SHOP&nbsp;LOCATOR</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <a href=""><img src={powerVisa} alt="DC Power Visa" className="img-fluid" /></a>
                            <span className='d-none d-lg-block d-xl-inline'>DC&nbsp;POWER&nbsp;VISA</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}