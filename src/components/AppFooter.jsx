import fbIcon from '../../src/assets/img/footer-facebook.png'
import twitterIcon from '../../src/assets/img/footer-twitter.png'
import youtubeIcon from '../../src/assets/img/footer-youtube.png'
import pinterestIcon from '../../src/assets/img/footer-pinterest.png'
import periscopeIcon from '../../src/assets/img/footer-periscope.png'
import dcLogoBackground from '../../src/assets/img/dc-logo-bg.png'

export default function AppMain() {
   return (
      <>
         <footer>
            <div className="container heroesbackground">
               <div className="row row-cols-1 row-cols-lg-4">
                  <div className="col">
                     <h5>DC COMICS</h5>
                     <ul>
                        <li><a href="">Characters</a></li>
                        <li><a href="">Comics</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">News</a></li>
                     </ul>
                     <h5>SHOP</h5>
                     <ul>
                        <li><a href="">Shop DC</a></li>
                        <li><a href="">Shop DC Collectibles</a></li>
                     </ul>
                  </div>
                  <div className="col">
                     <h5>DC</h5>
                     <ul>
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
                     <ul>
                        <li><a href="">DC</a></li>
                        <li><a href="">MAD Magazine</a></li>
                        <li><a href="">DC Kids</a></li>
                        <li><a href="">DC Universe</a></li>
                        <li><a href="">DC Power Visa</a></li>
                     </ul>
                  </div>
                  <div className="col dcLogoBackground">
                     <img src={dcLogoBackground} alt="DC Logo Footer" />
                  </div>
               </div>
            </div>
            <div className="subfooter socials">
               <div className="container">
                  <div className="row d-flex align-items-center justify-content-between">
                     <div className="col-12">
                        <button>SIGN-UP NOW!</button>
                     </div>
                     <div className="col-12 d-flex align-items-center">
                        <h5>FOLLOW US</h5>
                        <img src={fbIcon} alt="Facebook" className="img-fluid" />
                        <img src={twitterIcon} alt="Twitter" className="img-fluid" />
                        <img src={youtubeIcon} alt="YouTube" className="img-fluid" />
                        <img src={pinterestIcon} alt="Pinterest" className="img-fluid" />
                        <img src={periscopeIcon} alt="Periscope" className="img-fluid" />
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}