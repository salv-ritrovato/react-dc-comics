import eComics from '../../src/assets/img/buy-comics-digital-comics.png'
import merchandise from '../../src/assets/img/buy-comics-merchandise.png'
import subscription from '../../src/assets/img/buy-comics-subscriptions.png'
import shopLocator from '../../src/assets/img/buy-comics-shop-locator.png'
import powerVisa from '../../src/assets/img/buy-dc-power-visa.svg'

export default function AppHeader() {
    return (
        <>
            <div className="container-fluid onlineshop">
                <div className="row text-center g-5">
                    <div className="col-12 col-md-4 col-lg">
                        <img src={eComics} alt="Digital Comics" className="img-fluid" />
                        <span className='d-none d-lg-inline'>DIGITAL COMICS</span>
                    </div>

                    <div className="col-12 col-md-4 col-lg">
                        <img src={merchandise} alt="DC Merchandise" className="img-fluid" />
                        <span className='d-none d-lg-inline'>DC MERCHANDISE</span>
                    </div>

                    <div className="col-12 col-md-4 col-lg">
                        <img src={subscription} alt="Monthly Subscription" className="img-fluid" />
                        <span className='d-none d-lg-inline'>SUBSCRIPTION</span>
                    </div>

                    <div className="col-12 col-md-4 col-lg">
                        <img src={shopLocator} alt="Find Your Shop" className="img-fluid" />
                        <span className='d-none d-lg-inline'>COMIC SHOP LOCATOR</span>
                    </div>

                    <div className="col-12 col-md-4 col-lg">
                        <img src={powerVisa} alt="DC Power Visa" className="img-fluid" />
                        <span className='d-none d-lg-inline'>DC POWER VISA</span>
                    </div>
                </div>
            </div>
        </>
    )
}