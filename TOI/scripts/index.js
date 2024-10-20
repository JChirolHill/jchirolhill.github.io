$(document).ready(function() {
  fetch('data.json')
    .then(response => response.json())
    .then(json => {
      // show an icon for every graduate
      json.graduates.forEach(function(graduate, index) {
        if(graduate.is_new_grad === true) {
          // create image url from name
          let image_url = graduate.simple_name ? graduate.simple_name : graduate.name;
          image_url = `assets/${image_url.toLowerCase().replace(' ', '_')}_homepage_illo.jpg`;

          // create carousel image
          let carouselItem = document.createElement('div');
          carouselItem.classList.add('carousel-item');
          let carouselImage = document.createElement('img');
          carouselImage.classList.add('d-block', 'w-100');
          carouselImage.src = image_url;
          carouselImage.alt = `Image by ${graduate.name}`;

          // create indicator for this image
          let carouselIndicator = document.createElement('li');
          let targetAttr = document.createAttribute('data-target');
          targetAttr.value = '#carouselHome';
          let slideToAttr = document.createAttribute('data-slide-to');
          slideToAttr.value = index;
          carouselIndicator.setAttributeNode(targetAttr);
          carouselIndicator.setAttributeNode(slideToAttr);

          // append components
          carouselItem.appendChild(carouselImage);
          document.querySelector('.carousel-inner').appendChild(carouselItem);
          document.querySelector('.carousel-indicators').appendChild(carouselIndicator);
        }
      });

      // make the first item active for carousel item and indicators
      document.querySelector('.carousel-inner div:first-child').classList.add('active');
      document.querySelector('.carousel-indicators li:first-child').classList.add('active');
    });
});
