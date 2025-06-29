
window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  AOS.init({
    once: false,
    delay: 200,
    duration: 800,
    easing: "ease-in-out",
  });
});



document.addEventListener("DOMContentLoaded", function () {
  
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg py-3 transparent-navbar" data-aos="fade-down" data-aos-delay="100">
    <div class="container">
      <a class="navbar-brand" href="#">لمسة درويش</a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="menu-icon"><i class="fas fa-bars"></i></span>
        <span class="close-icon d-none"><i class="fas fa-times"></i></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between align-items-center" id="mainNavbar">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center text-lg-end">
          <li class="nav-item"><a class="nav-link active" href="#">الرئيسية</a></li>
          <li class="nav-item"><a class="nav-link" href="#">خدمات ديكور</a></li>
          <li class="nav-item"><a class="nav-link" href="#">من نحن</a></li>
          <li class="nav-item"><a class="nav-link" href="../contact.html">اتصل بنا</a></li>
        </ul>
        <div class="btn-area text-center text-lg-start">
          <a href="#design-form" class="btn  btn-design">
            <i class="fas fa-paint-roller me-2"></i> صمّم منزلك
          </a>
        </div>
      </div>
    </div>
  </nav>
  `;

  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) {
    console.error("❌ العنصر #navbar-placeholder غير موجود في HTML");
    return;
  }
  placeholder.innerHTML = navbarHTML;


  const navbar = document.querySelector(".navbar");
  const toggler = document.querySelector(".navbar-toggler");
  const menuIcon = toggler?.querySelector(".menu-icon");
  const closeIcon = toggler?.querySelector(".close-icon");
  const navbarCollapse = document.getElementById("mainNavbar");

  if (!navbar || !toggler || !menuIcon || !closeIcon || !navbarCollapse) {
    console.error("❌ عنصر أو أكثر من عناصر النافبار غير موجود. تأكد من تحميل Bootstrap JS");
    return;
  }


  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  navbarCollapse.addEventListener("show.bs.collapse", () => {
    menuIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
  });

  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    closeIcon.classList.add("d-none");
    menuIcon.classList.remove("d-none");
  });
});
