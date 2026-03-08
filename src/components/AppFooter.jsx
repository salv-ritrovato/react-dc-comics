import fbIcon from '../../src/assets/img/footer-facebook.png'
import twitterIcon from '../../src/assets/img/footer-twitter.png'
import youtubeIcon from '../../src/assets/img/footer-youtube.png'
import pinterestIcon from '../../src/assets/img/footer-pinterest.png'
import periscopeIcon from '../../src/assets/img/footer-periscope.png'
import dcLogoBackground from '../../src/assets/img/dc-logo-bg.png'

export default function AppFooter() {
   return (
      <>
         <footer>
            <div className="container heroesbackground">
               <div className="row row-cols-1 row-cols-lg-6 text-center text-lg-start">
                  <div className="col">
                     <h5>DC COMICS</h5>
                     <ul className="list-unstyled">
                        <li><a href="">Characters</a></li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">News</a></li>
                     </ul>
                     <h5>SHOP</h5>
                     <ul className="list-unstyled">
                        <li><a href="">Shop DC</a></li>
                        <li><a href="">Shop DC Collectibles</a></li>
                     </ul>
                  </div>
                  <div className="col">
                     <h5>DC</h5>
                     <ul className="list-unstyled">
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy Policy (New)</a></li>
                        <li><a href="">Ad Choice</a></li>
                        <li><a href="">Advertising</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Subscriptions</a></li>
                        <li><a href="">Talent Workshops</a></li>
                        <li><a href="">CPSC Certificates</a></li>
                        <li><a href="">Ratings</a></li>
                        <li><a href="">Shop Help</a></li>
                        <li><a href="">Contact Us</a></li>
                     </ul>
                  </div>
                  <div className="col">
                     <h5>SITES</h5>
                     <ul className="list-unstyled">
                        <li><a href="">DC</a></li>
                        <li><a href="">MAD Magazine</a></li>
                        <li><a href="">DC Kids</a></li>
                        <li><a href="">DC Universe</a></li>
                        <li><a href="">DC Power Visa</a></li>
                     </ul>
                  </div>
                  <div className="col d-none d-lg-block dcLogoBackground">
                     <img src={dcLogoBackground} alt="DC Logo Footer" />
                  </div>
               </div>
            </div>
            <div className="socials">
               <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-between">
                     <div className="col-auto mb-3 mb-lg-0">
                        <button>SIGN-UP NOW!</button>
                     </div>
                     <div className="col-auto d-flex align-items-center gap-3">
                        <h5>FOLLOW US</h5>
                        <img src={fbIcon} alt="Facebook" />
                        <img src={twitterIcon} alt="Twitter" />
                        <img src={youtubeIcon} alt="YouTube" />
                        <img src={pinterestIcon} alt="Pinterest" />
                        <img src={periscopeIcon} alt="Periscope" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="blackbar">
            </div>
         </footer>
      </>
   )
}