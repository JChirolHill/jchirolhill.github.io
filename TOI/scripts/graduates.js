$(document).ready(function() {
  fetch('data.json')
    .then(response => response.json())
    .then(json => {
      // show an icon for every graduate
      json.graduates.forEach(function(graduate, index) {
        // create image url from name
        let image_url = graduate.simple_name ? graduate.simple_name : graduate.name;
        image_url = `${image_url.toLowerCase().replace(' ', '_')}_sm_0.jpg`;

        // create the graduate thumbnail
        let thumbnail_anchor = document.createElement('a');
        thumbnail_anchor.href = `graduate.html?id=${index}`;
        let thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        let img = document.createElement('img');
        img.src = `assets/${image_url}`;
        img.alt = `${graduate.name}`;
        let overlay = document.createElement('div');
        overlay.classList.add('thumbnail-overlay', 'muli-semibold', 'd-flex', 'justify-content-center', 'align-items-center', 'text-center');
        overlay.innerHTML = graduate.name;
        thumbnail.appendChild(img);
        thumbnail.appendChild(overlay);
        thumbnail_anchor.appendChild(thumbnail);

        // decide where to append this graduate (past or current)
        if(graduate.is_new_grad === true) {
          document.querySelector('#recent-graduates').appendChild(thumbnail_anchor);
        }
        else {
          document.querySelector('#past-graduates').appendChild(thumbnail);
        }
      });
    });
});
