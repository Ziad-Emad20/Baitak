let foot = document.getElementById("footer");
foot.setAttribute("data-aos", "fade-up");
let footer = ` 
        <div class="container">
            <div class="row text-end">
                <!-- الشعار والنص -->
                <div class="col-lg-6 col-md-12 text-center text-md-end">
                    <img src="https://picsum.photos/400/220?random=1" alt="لمسة درويش" loading="lazy" style="width: 150px;"
                        class="mb-3">
                    <p> لمسة درويش كل ما تحتاجه وأكثر في التشطيب والديكورات. خبرة كبيرة، جودة أكيدة، تصاميم حديثة، وبأسعار
                        مناسبة.
                        بإختصار نحن من نستطيع تنفيذ ديكور منزلك، مكتبك، بأرقى التفاصيل.
                    </p>
                </div>
                <!-- روابط هامة -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="footer-title">روابط هامة</h5>
                    <ul class="list-unstyled p-0">
                        <li><a href="/index.html" class="footer-link">الرئيسية</a></li>
                        <li><a href="/index.html#services-container" class="footer-link">خدمات ديكور</a></li>
                        <li><a href="/pages/who_we/who_w_a.html" class="footer-link">من نحن</a></li>
                        <li><a href="/pages/contact/contact.html" class="footer-link">اتصل بنا</a></li>
                    </ul>
                </div>
                <!-- تواصل معنا -->
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5 class="footer-title">تواصل معنا</h5>
                    <ul class="list-unstyled p-0">
                        <li> الأيام: من السبت - الجمعة.</li>
                        <li> أوقات الدوام: 24 ساعة</li>
                        <li> العنوان: جدة، مكة السعودية.</li>
                        <li> رقم الجوال: 
                        966510312525+</li>
                        <li> واتساب: 
                        966510312525+</li>
                    </ul>
                </div>
            </div>
            <!-- حقوق النشر -->
            <div
                class="border-top mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
                <p class="mb-0">
                     لمسة درويش للتشطيبات والديكور © 2025
                </p>
                    <a href="https://wa.me/201070014108" target="_blank" class="footer-link">شركة تصميم مواقع - <span dir="ltr" class="text-decoration-underline fw-bold">DevCode</span></a>
            </div>
        </div>`;

foot.innerHTML = footer;
