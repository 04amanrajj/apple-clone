export function header() {
  const headerHTML = `
  <style>
      .top-navbar {
        background-color: #f7f7f7d5;
        display: flex;
        position: fixed;
        z-index: 1000;
        align-items: center;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        top: 0;
        left: 0;
      }

      .logo {
        margin-right: 20px;
      }

      .top-navbar a {
        color: #333;
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        margin-right: 40px;
      }

      .top-navbar a:hover {
        color: #06c;
      }

      .top-navbar a:last-child {
        margin-right: 0;
      }

      .top-navbar .fas.fa-search {
        margin-right: 20px;
      }

      .top-navbar .fas.fa-shopping-bag {
        margin-right: 0;
      }

      .store,
      .mac {
        font-weight: 600;
      }

      .logo + a {
        margin-left: 20px;
      }

      .top-navbar > a,
      .top-navbar > .logo {
        display: inline-block;
        vertical-align: middle;
      }

      @media (max-width: 768px) {
        .top-navbar {
          padding: 15px 20px;
        }
        .top-navbar a {
          font-size: 15px;
        }
        .top-navbar .fas {
          font-size: 16px;
        }
      }

      @media (max-width: 480px) {
        .top-navbar {
          padding: 10px 15px;
        }
        .top-navbar a {
          font-size: 13px;
        }
        .top-navbar .fas {
          font-size: 14px;
        }
      }

      .nav-links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 10px;
      }
      .nav-links div {
        color: #1d1d1f;
        text-decoration: none;
        margin-right: 25px;
      }
      header {
        position: relative;
      }

      .dropdown-content {
        padding: 0 40px;
        justify-content: center;
        background-color: #f7f7f7d5;
        z-index: 1;
        align-items: flex-start;
        width: 100%;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        text-align: left;
        opacity: 0;
        visibility: hidden;
        max-height: 0;
        overflow: hidden;
        position: fixed;
        top: 46px;
        left: 0;
        right: 0;
        transition: max-height 0.5s ease-in-out, opacity 3s ease-out, visibility 3s;
        display: flex;
        flex-direction: row;
      }

      .top-navbar:hover + .dropdown-content,
      .dropdown-content:hover {
        visibility: visible;
        opacity: 1;
        max-height: 400px;
        transition: max-height 0.5s ease-in-out, opacity 0.3s ease-out;
      }

      .dropdown-content .column {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 10px 80px;
      }
      .dropdown-content .column h3 {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin: 0 0 10px 0;
      }
      .dropdown-content .column a {
        font-size: 17px;
        font-weight: 400;
        color: #1d1d1f;
        text-decoration: none;
        margin: 5px 0;
      }
      .dropdown-content .column a:first-child {
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .top-navbar {
          padding: 0 10px 0 30px;
          justify-content: space-between;
        }
        .top-navbar a {
          font-size: 12px;
          margin-right: 10px;
        }
        .top-navbar .fas {
          font-size: 12px;
          margin-right: 10px;
        }
        .logo {
          margin-right: 10px;
        }
        .nav-links div {
          margin-right: 10px;
          font-size: 20px;
        }
        .dropdown-content {
          padding: 0 10px;
          flex-direction: column;
        }
        .dropdown-content .column {
          margin: 5px 0;
        }
        .dropdown-content .column a {
          font-size: 14px;
        }
        .nav-links > div:nth-child(n + 1):nth-child(-n + 10) {
          display: none;
        }
        .nav-links > div + a {
          font-size: 20px;
          margin-right: 20px;
          font-weight: bold;
        }
        .searchicon {
          display: none;
        }

        .top-navbar:hover + .dropdown-content,
        .dropdown-content:hover {
          visibility: hidden;
        }
      }

  </style>
      <header>
        <div class="top-navbar">
          <a href="/index.html" class="logo">
            <img src="/images/apple-navbar-logo.svg" alt="apple-logo" />
          </a>
          <div class="nav-links">
            <div class="dropdown">
              <a href="/routes/store.html" class="store">Store</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">Mac</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">iPad</a>
            </div>
            <div class="dropdown">
              <a href="/routes/products.html" class="dropdown-toggle">iPhone</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">Watch</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">Vision</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">AirPods</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">TV & Home</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">Entertainment</a>
            </div>
            <div class="dropdown">
              <a href="/routes/store.html" class="dropdown-toggle">Accessories</a>
            </div>
            <a href="/routes/login.html" class="user">Login</a>
            <a href="#" class="searchicon"><img src="/images/search.svg" alt="search" /></a>
            <a href="/routes/cart.html">
              <img src="/images/bag-navbar-logo.svg" alt="cart" />
            </a>
          </div>
        </div>
        <div class="dropdown-content">
          <div class="column">
            <h3>Shop</h3>
            <a href="/routes/store.html">Shop the Latest</a>
            <a href="/routes/store.html">Mac</a>
            <a href="/routes/store.html">iPad</a>
            <a href="/routes/store.html">iPhone</a>
            <a href="/routes/store.html">Apple Watch</a>
            <a href="/routes/store.html">Apple Vision Pro</a>
            <a href="/routes/store.html">Accessories</a>
          </div>
          <div class="column">
            <h3>Quick Links</h3>
            <a href="/routes/store.html">Find a Store</a>
            <a href="/routes/store.html">Order Status</a>
            <a href="/routes/store.html">Apple Trade In</a>
            <a href="/routes/store.html">Financing</a>
            <a href="/routes/store.html">College Student Offer</a>
          </div>
          <div class="column">
            <h3>Shop Special Stores</h3>
            <a href="/routes/store.html">Certified Refurbished</a>
            <a href="/routes/store.html">Education</a>
            <a href="/routes/store.html">Business</a>
            <a href="/routes/store.html">Veterans and Military</a>
            <a href="/routes/store.html">Government</a>
          </div>
        </div>
      </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

export function footer() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
  <style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  padding: 0;
}
footer {
  flex-wrap: nowrap;
  overflow-x: hidden;
}
.footer {
  font-size: 12px;
  background-color: #f5f5f7;
  margin: 0;
  padding: 20px 20%;
  line-height: 1.3;
  display: flex;
  color: #6e6e73;
  justify-content: space-between;
  text-align: left;
}
.footer-column {
  flex: 1;
  min-width: 150px;
  margin: 10px 20px;
}
.footer-column h3 {
  font-size: 14px;
  color: #1d1d1f;
  margin-bottom: 10px;
}
.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-column ul li {
  margin-bottom: 8px;
}
.footer-column ul li a {
  text-decoration: none;
  color: #6e6e73;
}
.footer-column ul li a:hover {
  text-decoration: underline;
}
.footer-bottom {
  font-size: 12px;
  background-color: #f5f5f7;
  margin: 0;
  padding: 20px 20%;
  line-height: 1.3;
  display: flex;
  color: #6e6e73;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer-bottom a {
  text-decoration: none;
  color: #0071e3;
  margin: 0 5px;
}
.footer-bottom a:hover {
  text-decoration: underline;
}
.footer-bottom p {
  margin: 5px 0;
}
@media (max-width:768px){

  .footer{
    display:grid;
    grid-template-columns:repeat(6,auto);
  }

}
@media (max-width: 480px) {
  .footer{
    display:none;
  }
}
  </style>
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
}

