// ================= Accordion =================
const accordionItems = document.querySelectorAll('.accordionItem');
accordionItems.forEach(item => {
  item.addEventListener('mouseenter', function () {
    const accordionDescription = this.querySelector('.accordionDescription');
    const plusIcon = this.querySelector('.plusIcon');
    const minusIcon = this.querySelector('.minusIcon');

    if (accordionDescription) {
      accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
    }
    if (plusIcon) plusIcon.style.display = 'none';
    if (minusIcon) minusIcon.style.display = 'block';
  });

  item.addEventListener('mouseleave', function () {
    const accordionDescription = this.querySelector('.accordionDescription');
    const plusIcon = this.querySelector('.plusIcon');
    const minusIcon = this.querySelector('.minusIcon');

    if (accordionDescription) {
      accordionDescription.style.maxHeight = null;
    }
    if (plusIcon) plusIcon.style.display = 'block';
    if (minusIcon) minusIcon.style.display = 'none';
  });
});


// ================= Update Year =================
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("year-mobile").textContent = new Date().getFullYear();


// ================= Product Footer Button =================
const productFooterBtn = document.querySelector('.product-footer-button');
if (productFooterBtn) {
  productFooterBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const productsFooter = document.querySelector('.products-footer');
    if (!productsFooter) return;

    productsFooter.classList.toggle('show');
    const toggleText = productsFooter.classList.contains('show') ? '▲' : '▼';
    this.textContent = `PRODUCTS ${toggleText}`;
  });
}

// ================= Fancybox =================
if (typeof Fancybox !== "undefined") {
  Fancybox.bind("[data-fancybox]", {
    Images: {
      Panzoom: {
        zoom: true,
        maxScale: 2,
      },
    },
    on: {
      done: (fancybox) => {
        const slide = fancybox.getSlide();
        if (!slide || !slide.Panzoom) return;

        const panzoom = slide.Panzoom;
        const img = slide.$content?.querySelector("img");
        if (!img) return;

        img.onclick = (event) => {
          event.preventDefault();
          if (panzoom.scale === 1) {
            panzoom.zoomTo(2, { event });
          } else {
            panzoom.zoomTo(1);
          }
        };
      },
    },
  });
}

// ================= Email =================
function sendEmail(e) {
  e.preventDefault();
  const templateParams = {
    firstname: document.querySelector("#first-name")?.value.trim() || "",
    lastname: document.querySelector("#last-name")?.value.trim() || "",
    useremail: document.querySelector("#user-email")?.value.trim() || "",
    userphone: document.querySelector("#user-phone")?.value.trim() || "",
    usermessage: document.querySelector("#user-message")?.value.trim() || "",
  };

  if (typeof emailjs !== "undefined") {
    emailjs
      .send("service_tm2h40h", "template_o0evvtg", templateParams)
      .then(() => alert("Email sent!!"))
      .catch(() => alert("Email not sent!!"));
  }
}

