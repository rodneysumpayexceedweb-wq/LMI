const accordionItems = document.querySelectorAll('.accordionItem');

accordionItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const accordionDescription = this.querySelector('.accordionDescription');
        const plusIcon = this.querySelector('.plusIcon');
        const minusIcon = this.querySelector('.minusIcon');

        accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
        const accordionDescription = this.querySelector('.accordionDescription');
        const plusIcon = this.querySelector('.plusIcon');
        const minusIcon = this.querySelector('.minusIcon');

        accordionDescription.style.maxHeight = null;
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
    });
});



document.querySelector('.product-footer-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const productsFooter = document.querySelector('.products-footer');
    productsFooter.classList.toggle('show'); 
    
    const toggleText = productsFooter.classList.contains('show') ? '▲' : '▼';
    this.textContent = `PRODUCTS ${toggleText}`;
});
  
Fancybox.bind("[data-fancybox='gallery'], [data-fancybox='gallery-deluxe'], [data-fancybox='heavy-plate-gallery'],[data-fancybox='exposed-roller-gallery'], [data-fancybox='mirror-frames-gallery'], [data-fancybox='vanity-gallery'], [data-fancybox='single-family-gallery'], [data-fancybox='multi-family-gallery'], [data-fancybox='high-rise-gallery'], [data-fancybox='organizers-gallery'], [data-fancybox='shelving-gallery'],[data-fancybox='surface-mounted-gallery'],[data-fancybox='bottom-rolled-gallery'],[data-fancybox='top-hung-gallery'],[data-fancybox='electric-mirrors-gallery'],[data-fancybox='framed-mirrors-gallery'] " ,{
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
      const img = slide.$content.querySelector("img");

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



