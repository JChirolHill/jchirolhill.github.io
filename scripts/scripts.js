$(document).ready(function() {
  $("#title").fadeIn(300);
  $("#title").css("margin-left", "10px");

  const projectTemplate = Handlebars.compile($('#template_project').html());

  fetch('data.json')
    .then(response => response.json())
    .then(projects => {
        // Dynamically generate all projects
        // Render visible those already scrolled to
        const $projectListing = $('#projectListing');
        $.each(projects, function(index, project) {
          $projectListing.append(projectTemplate(project));
          if($projectListing.children(':last').offset().top < $(window).height()) {
            $projectListing.children(':last').css('opacity', '1');
          }
        });

        // Handles scrolling to display additional projects
        let $nextProject = $('#projectListing').children(':first');
        $(window).scroll(function() {
          if($nextProject.offset() && $nextProject.offset().top < $(this).height() + $(this).scrollTop()) {
            $nextProject.css('opacity', '1');
            $nextProject = $nextProject.next();
          }
        });
    });
});
