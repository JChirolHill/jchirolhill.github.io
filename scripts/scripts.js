$(document).ready(function () {
    $("#title").fadeIn(300);
    $("#title").css("margin-left", "10px");

    const projectTemplate = Handlebars.compile($("#template_project").html());

    fetch("data.json")
        .then((response) => response.json())
        .then((projects) => {
            // Dynamically generate all projects
            // Render visible those already scrolled to
            const $projectListing = $("#projectListing");
            $.each(projects, function (index, project) {
                // if (project.tags.includes("Language Learning")) {
                $projectListing.append(projectTemplate(project));
                // }
            });
        });
});
