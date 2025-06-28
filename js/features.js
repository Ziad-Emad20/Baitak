document.addEventListener("DOMContentLoaded", function () {
  const features = [
    {
      icon: "fa-solid fa-house-chimney",
      color: "#7FFF00",
      title: "أقل تكلفة لتشطيب وحدتك",
      desc: "بأقل تكلفة تعطي أفضل جودة مع تقديم أفضل سعر لمتر التشطيب للشقق والفلل والمكاتب والشركات."
    },
    {
      icon: "fa-solid fa-paintbrush",
      color: "#00CED1",
      title: "الابداع في التصميم",
      desc: " نقوم بتشطيب الديكور وتنفيذ أحدث التصاميم التي تلائم متطلباتك وذوقك الفريد.  "
    },
    {
      icon: "fa-solid fa-eye",
      color: "#FF4500",
      title: "معاينة لوحدتك",
      desc: "نقوم بتحديد موعد للمعاينة والمقايسة لوحدتك السكنية او التجارية للتأكد من جميع التفاصيل قبل التعاقد."
    },
    {
      icon: "fa-solid fa-gift",
      color: "#1E90FF",
      title: "ضمان على التشطيب",
      desc: "شركة تشطيب تضمن لك جميع أعمال الديكورات والتشطيبات للوحدات السكنية والتجارية لفترة تصل إلى 4 سنوات."
    },
    {
      icon: "fa-solid fa-calendar-check",
      color: "#FFA500",
      title: "نلتزم بالمواعيد",
      desc: "الالتزام في المواعيد المتفق عليها من أهم ما يميز شركة تشطيب مع أعلى جودة."
    },
    {
      icon: "fa-solid fa-user-gear",
      color: "#9370DB",
      title: "دقة في التنفيذ والإشراف",
      desc: "نهتم بجميع التفاصيل، ونقوم بالاستعانة بأفضل مهندسين ديكور لتنفيذ المطلوب بأعلى جودة."
    }
  ];

  const container = document.getElementById("features-container");
  container.innerHTML = features.map(feature => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100 text-center  text-light p-4 rounded-4 border-0">
        <div class="mb-3">
          <i class="${feature.icon}" style="font-size: 2.5rem; color: ${feature.color};"></i>
        </div>
        <h5 class="fw-bold">${feature.title}</h5>
        <p class="mt-2">${feature.desc}</p>
      </div>
    </div>
  `).join('');
});
