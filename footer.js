class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer id="footer">
      <section class="top-footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-3">
              <h4>CONTACT INFO</h4>
              <div>
                <h5 class="mt-5">ADDRESS</h5>
                <h6>123 Street Name, City, Australia</h6>
              </div>
              <div>
                <h5 class="mt-5">PHONE</h5>
                <h6>
                  Toll Free (123) 472-796<br />

                  Mobile : +91-9910XXXX
                </h6>
              </div>
              <div>
                <h5 class="mt-5">EMAIL</h5>
                <h6>mail@example.com</h6>
              </div>
              <div>
                <h5 class="mt-5">WORKING DAYS</h5>
                <h6>Mon - FRI / 9:30 AM - 6:30 PM</h6>
              </div>
            </div>
            <div class="col-12 col-lg-3">
              <h4>CATEGORIES</h4>
              <ul class="mt-5">
                <li><i class="bi bi-chevron-right"></i>Jeans</li>
                <li><i class="bi bi-chevron-right"></i>T-Shirts</li>
                <li><i class="bi bi-chevron-right"></i>Sports</li>
                <li><i class="bi bi-chevron-right"></i>Shirts & Tops</li>
                <li><i class="bi bi-chevron-right"></i>Clogs & Mules</li>
                <li><i class="bi bi-chevron-right"></i>Sunglasses</li>
                <li><i class="bi bi-chevron-right"></i>Bags & Wallets</li>
                <li><i class="bi bi-chevron-right"></i>Sneakers & Athletic</li>
                <li><i class="bi bi-chevron-right"></i>Electronis</li>
                <li><i class="bi bi-chevron-right"></i>Furniture</li>
              </ul>
            </div>
            <div class="col-12 col-lg-3">
              <h4>POPULAR TAGS</h4>
              <div class="d-flex flex-wrap gap-2 mt-5">
                <a href="#" class="btn btn-ecomm btn-outline-dark">CLOTHS</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark"
                  >ELECTRONIS</a
                >
                <a href="#" class="btn btn-ecomm btn-outline-dark">FURNITURE</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark">SPORTS</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark">MEN WERE</a>

                <a href="#" class="btn btn-ecomm btn-outline-dark">LAPTOPS</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark"
                  >FORMAL SHIRTS</a
                >
                <a href="#" class="btn btn-ecomm btn-outline-dark">SOFA</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark"
                  >WOMEN WERE</a
                >
                <a href="#" class="btn btn-ecomm btn-outline-dark">BAGS</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark"
                  >HEADPHONES</a
                >
                <a href="#" class="btn btn-ecomm btn-outline-dark">SHOES</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark">CHAIR</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark">TOPWEAR</a>
                <a href="#" class="btn btn-ecomm btn-outline-dark"
                  >BOTTOM WEAR</a
                >
              </div>
            </div>
            <div class="col-12 col-lg-3 text-center">
              <h4>STAY INFORMED</h4>
              <div class="mt-5">
                <input
                  type="email"
                  class="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="mt-5">
                <button type="button">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <p>Copyright © 2022. All right reserved.</p>
            </div>
            <div class="col-12 col-lg-6 d-flex gap-4">
              <div class="abc">
                <a href="#">
                  <img
                    width="70"
                    src="https://codervent.com/shopingo/demo/shopingo_V2/assets/images/icons/visa.png"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    width="80"
                    src="https://codervent.com/shopingo/demo/shopingo_V2/assets/images/icons/paypal.png"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    width="50"
                    src="https://codervent.com/shopingo/demo/shopingo_V2/assets/images/icons/mastercard.png"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    width="50"
                    src="https://codervent.com/shopingo/demo/shopingo_V2/assets/images/icons/american-express.png"
                    class="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>

      `
    ;
    }
  }
  customElements.define("my-footer", MyFooter);