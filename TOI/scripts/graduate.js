$(document).ready(function() {
  fetch('data.json')
    .then(response => response.json())
    .then(json => {
      // find out which student from url
      var urlParams = new URLSearchParams(window.location.search);
      let artist = json['graduates'][urlParams.get('id')];

      // fill in artst name, graduation semester, bio, and wall statement
      document.querySelector('#artistName').innerHTML = artist.name;
      document.querySelector('#modalArtistName').innerHTML = artist.name;
      if(artist.show_title && artist.show_title.trim()) {
        document.querySelector('#artistShowName').innerHTML = artist.show_title;
      }
      document.querySelector('#artistGradSem').innerHTML = artist.graduation_semester;
      document.querySelector('#artistBio').innerHTML = artist.bio;
      document.querySelector('#artistWallStatement').innerHTML = artist.wall_statement;

      // add links for social media icons
      if(artist.grad_website && artist.grad_website.trim()) {
        appendSocialMediaIcon(artist.grad_website, 'fas', 'fa-globe');
      }
      if(artist.facebook && artist.facebook.trim()) {
        appendSocialMediaIcon(artist.facebook, 'fab', 'fa-facebook');
      }
      if(artist.twitter && artist.twitter.trim()) {
        appendSocialMediaIcon(artist.twitter, 'fab', 'fa-twitter');
      }
      if(artist.instagram && artist.instagram.trim()) {
        appendSocialMediaIcon(artist.instagram, 'fab', 'fa-instagram');
      }
      if(artist.artstation && artist.artstation.trim()) {
        appendSocialMediaIcon(artist.artstation, 'fab', 'fa-artstation');
      }
      if(artist.deviantart && artist.deviantart.trim()) {
        appendSocialMediaIcon(artist.deviantart, 'fab', 'fa-deviantart');
      }

      // show every thumbnail for this artist
      for(let i=0; i<artist.num_images; ++i) {
        let thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');

        let fullImage = document.createElement('a');
        let formattedName = (artist.simple_name ? artist.simple_name : artist.name).toLowerCase().replace(' ', '_');
        fullImage.href = `assets/${formattedName}_lg_${i}.jpg`;
        let lightboxAttr = document.createAttribute('data-lightbox');
        lightboxAttr.value = formattedName;
        fullImage.setAttributeNode(lightboxAttr);

        let thumbnailImg = document.createElement('img');
        thumbnailImg.src = `assets/${formattedName}_sm_${i}.jpg`;
        thumbnailImg.alt = artist.name;

        // append all components to each other
        fullImage.appendChild(thumbnailImg);
        thumbnail.appendChild(fullImage);
        document.querySelector('#thumbnails').appendChild(thumbnail);
      }
    });

  function appendSocialMediaIcon(link, iconGenericClas, iconClass) {
    let icon = document.createElement('a');
    icon.classList.add('mx-2');
    icon.href = link;
    icon.target = '_blank';
    let iconImg = document.createElement('i');
    iconImg.classList.add(iconGenericClas, iconClass);
    icon.appendChild(iconImg);
    document.querySelector('#artistSocialMedia').appendChild(icon);
  }
});
