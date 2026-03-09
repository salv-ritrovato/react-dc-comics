/* IMPORTED SOCIAL ICONS AND FOOTER DC LOGO */
import fbIcon from '../../src/assets/img/footer-facebook.png'
import twitterIcon from '../../src/assets/img/footer-twitter.png'
import youtubeIcon from '../../src/assets/img/footer-youtube.png'
import pinterestIcon from '../../src/assets/img/footer-pinterest.png'
import periscopeIcon from '../../src/assets/img/footer-periscope.png'
import dcLogoBackground from '../../src/assets/img/dc-logo-bg.png'

export default function AppFooter() {
   const linksOne = [
      { id: 1, text: "Characters", href: "#" },
      { id: 2, text: "Comics", href: "#" },
      { id: 3, text: "Movies", href: "#" },
      { id: 4, text: "TV", href: "#" },
      { id: 5, text: "Games", href: "#" },
      { id: 6, text: "Videos", href: "#" },
      { id: 7, text: "News", href: "#" },
   ];

   const linksTwo = [
      { id: 1, text: "Shop DC", href: "#" },
      { id: 2, text: "Shop DC Collectibles", href: "#" },
   ];

   const linksThree = [
      { id: 1, text: "Terms of Use", href: "#" },
      { id: 2, text: "Privacy Policy (New)", href: "#" },
      { id: 3, text: "Ad Choice", href: "#" },
      { id: 4, text: "Advertising", href: "#" },
      { id: 5, text: "Jobs", href: "#" },
      { id: 6, text: "Subscriptions", href: "#" },
      { id: 7, text: "Talent Workshops", href: "#" },
      { id: 8, text: "CPSC Certificates", href: "#" },
      { id: 9, text: "Ratings", href: "#" },
      { id: 10, text: "Shop Help", href: "#" },
      { id: 11, text: "Contact Us", href: "#" },
   ];

   const linksFour = [
      { id: 1, text: "DC", href: "#" },
      { id: 2, text: "MAD Magazine", href: "#" },
      { id: 3, text: "DC Kids", href: "#" },
      { id: 4, text: "DC Universe", href: "#" },
      { id: 5, text: "DC Power Visa", href: "#" },
   ];

   return (
      <>
         <footer>
            {/* USEFUL LINKS */}
            <div className="container heroesbackground">
               <div className="row row-cols-1 row-cols-lg-6 text-center text-lg-start">
                  <div className="col">
                     <h5>DC COMICS</h5>
                     <ul className="list-unstyled">
                        {linksOne.map((link) => (
                           <li key={link.id}>
                              <a href={link.href}>{link.text}</a>
                           </li>
                        ))}
                     </ul>
                     <h5>SHOP</h5>
                     <ul className="list-unstyled">
                        {linksTwo.map((link) => (
                           <li key={link.id}>
                              <a href={link.href}>{link.text}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="col">
                     <h5>DC</h5>
                     <ul className="list-unstyled">
                        {linksThree.map((link) => (
                           <li key={link.id}>
                              <a href={link.href}>{link.text}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="col">
                     <h5>SITES</h5>
                     <ul className="list-unstyled">
                        {linksFour.map((link) => (
                           <li key={link.id}>
                              <a href={link.href}>{link.text}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="col d-none d-lg-block dcLogoBackground">
                     <img src={dcLogoBackground} alt="DC Logo Footer" />
                  </div>
               </div>
            </div>
            {/* SOCIAL LINKS */}
            <div className="socials">
               <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-between">
                     <div className="col-auto mb-3 mb-lg-0">
                        <button>SIGN-UP NOW!</button>
                     </div>
                     <div className="col-auto d-flex align-items-center gap-3">
                        <h5>FOLLOW US</h5>
                        <a href=""><img src={fbIcon} alt="Facebook" /></a>
                        <a href=""><img src={twitterIcon} alt="Twitter" /></a>
                        <a href=""><img src={youtubeIcon} alt="YouTube" /></a>
                        <a href=""><img src={pinterestIcon} alt="Pinterest" /></a>
                        <a href=""><img src={periscopeIcon} alt="Periscope" /></a>
                     </div>
                  </div>
               </div>
            </div>
            {/* BOTTOM BLACK BAR */}
            <div className="blackbar">
            </div>
         </footer>
      </>
   )
}