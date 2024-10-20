$(document).ready(function () {
    $("#title").fadeIn(300);
    $("#title").css("margin-left", "10px");

    const projectTemplate = Handlebars.compile($("#template_project").html());

    let selectedTag = "featured";
    $("#tags div").click(function (event) {
        console.log(event.target.id);
        if (event.target.id !== selectedTag) {
            // Remove existing tag
            $(".selectedTag").removeClass("selectedTag");

            // Change to new tag
            selectedTag = event.target.id;
            $(this).addClass("selectedTag");
            fetchProjects();
        }
    });

    const fetchProjects = () => {
        // Clear existing projects
        const $projectListing = $("#projectListing");
        $projectListing.empty();

        fetch("data.json")
            .then((response) => response.json())
            .then((projects) => {
                // Dynamically generate all projects
                // Render visible those already scrolled to
                $.each(projects, (_, project) => {
                    if (
                        selectedTag === "all" ||
                        project.tags.includes(selectedTag)
                    ) {
                        $projectListing.append(projectTemplate(project));
                    }
                });
            });
    };
    fetchProjects();
});
