let services = [
  {
    id: 1,
    name: "أعمال الديكور الداخلية والخارجية",
    description: `نقدم خدمات ديكور داخلية وخارجية بتصاميم عصرية وجودة عالية، لتحويل المساحات إلى أماكن مريحة وجذابة.
                نهتم بأدق التفاصيل لنضمن لك لمسة جمالية فريدة تناسب ذوقك واحتياجاتك.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=1",
  },
  {
    id: 2,
    name: "أعمال الدهانات الداخلية والخارجية",
    description: `نقدم خدمات دهانات داخلية وخارجية بأعلى جودة وتشطيبات احترافية.
                نستخدم أحدث التقنيات لإضفاء لمسة جمالية مميزة تناسب ذوقك ومساحتك.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=2",
  },
  {
    id: 3,
    name: "أعمال الجبس بورد بتصاميم عصرية وتنفيذ دقيق",
    description: `ننفذ أعمال الجبس بورد بتصاميم عصرية تناسب مختلف الأذواق والمساحات.
                نحرص على دقة التنفيذ وجودة التشطيب لتحقيق أفضل نتيجة.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=3",
  },
  {
    id: 4,
    name: "أعمال السباكة بكفاءة وجودة عالية",
    description: `نوفر خدمات السباكة بكفاءة عالية وجودة مضمونة لضمان أداء مستقر وطويل الأمد.
                نعتمد على فنيين متخصصين لضمان تنفيذ دقيق وسريع دون أي مشاكل مستقبلية.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=4",
  },
  {
    id: 5,
    name: "أعمال الكهرباء وفق أعلى معايير السلامة",
    description: `نقدم خدمات الكهرباء وفق أعلى معايير السلامة والجودة لضمان تشغيل آمن وفعّال.
                نستخدم معدات معتمدة وفنيين متخصصين لتنفيذ الأعمال بدقة واحترافية.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=5",
  },
  {
    id: 6,
    name: "أعمال النجارة والديكورات الخشبية",
    description: `ننفذ أعمال النجارة والديكورات الخشبية بتصاميم مميزة وتشطيبات عالية الجودة.
                نوفر حلولًا مبتكرة تضيف لمسة جمالية وعملية للمساحات المختلفة.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=6",
  },
  {
    id: 7,
    name: "أعمال الترميمات الداخلية والخارجية",
    description: `نقدم خدمات الترميمات الداخلية والخارجية للمنازل والمباني بكفاءة عالية وجودة مضمونة.
                نعيد تأهيل المساحات بإصلاحات دقيقة وتشطيبات احترافية تعيد لها جمالها ووظيفتها.`,
    url: "\\",
    imgPath: "https://picsum.photos/400/220?random=7",
  },
];
const container = document.getElementById("services-container");
container.innerHTML = services
  .map(
    (service) => `
  <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100 shadow-sm rounded-4">
      <img src="${service.imgPath}" class="card-img-top" loading="lazy" alt="${service.name}" style="height: 180px; object-fit: cover;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-primary">${service.name}</h5>
        <p class="card-text text-body" style="white-space: pre-line;">${service.description}</p>
        <a href="${service.url}" class="btn btn-accent mt-auto shadow-sm">تفاصيل أكثر</a>
      </div>
    </div>
  </div>
`
  )
  .join("");
