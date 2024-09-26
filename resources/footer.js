const footer = document.createElement("footer");

footer.innerHTML = `
    <div class="footer">
        <div class="footer-column">
          <h3>Shop and Learn</h3>
          <ul>
            <li><a href="#">Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">AirTag</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
          <h3>Apple Wallet</h3>
          <ul>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Apple Card</a></li>
            <li><a href="#">Apple Pay</a></li>
            <li><a href="#">Apple Cash</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Account</h3>
          <ul>
            <li><a href="#">Manage Your Apple ID</a></li>
            <li><a href="#">Apple Store Account</a></li>
            <li><a href="#">iCloud.com</a></li>
          </ul>
          <h3>Entertainment</h3>
          <ul>
            <li><a href="#">Apple One</a></li>
            <li><a href="#">Apple TV+</a></li>
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Apple Arcade</a></li>
            <li><a href="#">Apple Fitness+</a></li>
            <li><a href="#">Apple News+</a></li>
            <li><a href="#">Apple Podcasts</a></li>
            <li><a href="#">Apple Books</a></li>
            <li><a href="#">App Store</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Apple Store</h3>
          <ul>
            <li><a href="#">Find a Store</a></li>
            <li><a href="#">Genius Bar</a></li>
            <li><a href="#">Today at Apple</a></li>
            <li><a href="#">Group Reservations</a></li>
            <li><a href="#">Apple Camp</a></li>
            <li><a href="#">Apple Store App</a></li>
            <li><a href="#">Certified Refurbished</a></li>
            <li><a href="#">Apple Trade In</a></li>
            <li><a href="#">Financing</a></li>
            <li><a href="#">Carrier Deals at Apple</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Shopping Help</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>For Business</h3>
          <ul>
            <li><a href="#">Apple and Business</a></li>
            <li><a href="#">Shop for Business</a></li>
          </ul>
          <h3>For Education</h3>
          <ul>
            <li><a href="#">Apple and Education</a></li>
            <li><a href="#">Shop for K-12</a></li>
            <li><a href="#">Shop for College</a></li>
          </ul>
          <h3>For Healthcare</h3>
          <ul>
            <li><a href="#">Apple in Healthcare</a></li>
            <li><a href="#">Mac in Healthcare</a></li>
            <li><a href="#">Health on Apple Watch</a></li>
            <li><a href="#">Health Records on iPhone and iPad</a></li>
          </ul>
          <h3>For Government</h3>
          <ul>
            <li><a href="#">Shop for Government</a></li>
            <li><a href="#">Shop for Veterans and Military</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Apple Values</h3>
          <ul>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Environment</a></li>
            <li><a href="#">Inclusion and Diversity</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Racial Equity and Justice</a></li>
            <li><a href="#">Supply Chain</a></li>
          </ul>
          <h3>About Apple</h3>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Apple Leadership</a></li>
            <li><a href="#">Career Opportunities</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Ethics & Compliance</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact Apple</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          More ways to shop: <a href="#">Find an Apple Store</a> or
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
        <p>
          Copyright © 2024 Apple Inc. All rights reserved.
          <a href="#">Privacy Policy</a> <a href="#">Terms of Use</a>
          <a href="#">Sales and Refunds</a> <a href="#">Legal</a>
          <a href="#">Site Map</a> <a href="#">United States</a>
        </p>
      </div>
`;

const body = document.body;

body.appendChild(footer);