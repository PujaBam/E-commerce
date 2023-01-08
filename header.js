class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `



<header id="top-header">
      
<section class="header text-center">
<div class="container">
  <div class="row">
    <div class="col-12 col-lg-4">
      <li>Welcome to our Shopingo store!</li>
    </div>
    <div class="col-12 col-lg-8">
      <ul class="d-flex gap-3 ms-auto">
        <li>Tract order</li>
        <li>About</li>
        <li>Our stores</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Help & FAQs</li>
        <li><i class="bi bi-facebook"></i></li>
        <li><i class="bi bi-twitter"></i></li>
        <li><i class="bi bi-linkedin"></i></li>
      </ul>
    </div>
  </div>
</div>
</section>

      <section class="header bg-warning">
        <div class="container">
          <div class="row align-items-center gx-4">
            <div class="col-auto">
              <div class="d-flex align-items-center gap-3">
                <div
                  class="mobile-toggle-menu d-inline d-xl-none"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                >
                  <i class="bx bx-menu"></i>
                </div>
                <div class="logo">
                  <a href="index.html">
                    <img
                      height="80px"
                      width="80px"
                      src="img/logo-icon.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl order-4 order-xl-0">
              <div class="input-group flex-nowrap pb-3 mt-3">
                <input
                  type="text"
                  class="form-control w-100 border-dark border border-3"
                  placeholder="Search for Products"
                />
                <button class="btn btn-dark border-3" type="button">
                  Search
                </button>
              </div>
            </div>
            <div class="col-auto d-none d-xl-flex">
              <div class="d-flex align-items-center gap-3">
                <div class="fs-1 text-content">
                  <i class="bx bx-headphone"></i>
                </div>
                <div class="">
                  <p class="mb-0 text-content">CALL US NOW</p>
                  <h5 class="mb-0">+977 98489576543</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <section class="top-header">
        <div class="container">
          <div class="row">
            <a href="index.html">
              <img
                height="80px"
                width="80px"
                src="img/logo-icon.png"
                class="img-fluid"
                alt=""
              />
            </a>
            <div class="col-12 col-xl order-4 order-xl-0">
              <div class="input-group flex-nowrap pb-3 pb-xl-0">
                <input
                  type="text"
                  class="form-control w-100 border-dark border border-3"
                  placeholder="Search for Products"
                />
                <button class="btn btn-dark btn-ecomm border-3" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <section class="navbar">
        <div class="container">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >HOME</a
                  >
                </li>
                <!-- hhh -->

                <!-- gg -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SHOP
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">SHOP LAYOUT</a></li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#">PRODUCT DETAILS</a>
                    </li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#"> SHOP CART</a>
                    </li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#">SHOP CATEGORIES</a>
                    </li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#">BILING DETAILS</a>
                    </li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#">CHECKOUT SHIPPING</a>
                    </li>
                    <hr />
                    <li>
                      <a class="dropdown-item" href="#">PAYMENT METHOD</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">CONTACT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">OUR STORE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">BLOG</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </header>
    `
    ;
    }
  }
  customElements.define("my-header", MyHeader);