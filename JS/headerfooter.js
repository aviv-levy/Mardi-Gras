let header = document.getElementById('my-nav');
let footer = document.getElementById('my-footer');
let active = document.getElementById('my-page').value;

let home = '';
let about = '';
let media = '';
let faq = '';
let contact = '';

switch (active) {
    case '1':
        home = 'active'
        break;

    case '2':
        about = 'active'
        break;

    case '3':
        media = 'active'
        break;

    case '4':
        faq = 'active'
        break;

    case '5':
        contact = 'active'
        break;
        
}

header.innerHTML = `    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"><img src="../logo.png" class="rounded logo float-end" alt="logo"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link ${home}" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${about}" aria-current="page" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${media}" aria-current="page" href="media.html">Media</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${faq}" aria-current="page" href="faq.html">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ${contact}" aria-current="page" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;



footer.innerHTML = `<footer class="bg-dark text-center text-white">
<div class="container p-4">

  <section class="">
    <form action="">
      <div class="row d-flex justify-content-center">
        <div class="col-auto">
          <p class="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div class="col-md-5 col-12">
          <div class="form-outline form-white mb-4">
            <input type="email" id="form5Example21" class="form-control" />
            <label class="form-label" for="form5Example21">Email address</label>
          </div>
        </div>

        <div class="col-auto">
          <button type="submit" class="btn btn-outline-light mb-4">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </section>

  <section class="mb-4">
    <p>
      Mardi Gras Day is March 1 2022. Fat Tuesday is the last day of the Carnival season as it always falls the
      day before Ash Wednesday, the first day of Lent.<br> The official start of Carnival Season is Twelfth Night,
      January 6.
    </p>
  </section>

  <section class="">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <a href="index.html"><img src="../logo.png" alt="logo" class="footerLogo"></a>
      </div>


      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Navigation</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="index.html" class="text-white">Home</a>
          </li>
          <li>
            <a href="about.html" class="text-white">About</a>
          </li>
          <li>
            <a href="media.html" class="text-white">Media</a>
          </li>
          <li>
            <a href="faq.html" class="text-white">FAQ</a>
          </li>
          <li>
            <a href="contact.html" class="text-white">Contact</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Contact Us</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z" />
            </svg>+972-053-658-4265
          </li>
          <li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
            </svg>Mardi-Gras@gmail.com
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg> Louisiana, New Orleans
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5>Follow Us</h5>

        <ul id="followus" class="list-unstyled mb-0">
          <li>
            <a href="https://www.facebook.com/mardi.gras.583671" class="text-white"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mardi_gras_festival/" class="text-white"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>Instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=EkIZwXbSh-Y&ab_channel=NationalGeographic"
              class="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>Youtube</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>

<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
  ?? 2022 Copyright:
  <a class="text-white" href="index.html">Mars Grass</a>
</div>
</footer>`;
