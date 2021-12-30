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
  // let projects = [
  //   {
  //     title: 'CSU-Fullerton Virtual Graduate Art Show',
  //     descr: 'Virtual version of annual art show for CSU-Fullerton graduate program.',
  //     img_url: 'Assets/GradShow.png',
  //     demo_url: 'http://www.toi.school/',
  //     langs: ['HTML', 'CSS', 'Javascript', 'Lightbox JS'],
  //     created_at: 'Created in Summer 2020'
  //   },
  //   {
  //     title: 'Novel Voices',
  //     descr: 'Character-driven story development to bring your characters to life.',
  //     img_url: 'Assets/NovelVoices.png',
  //     demo_url: 'https://novel-voices.herokuapp.com/',
  //     github_url: 'https://github.com/JChirolHill/NovelVoices',
  //     langs: ['Laravel', 'Google Cloud NLP', 'PHP', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created in Spring 2020'
  //   },
  //   {
  //     title: 'Starry Night',
  //     descr: 'The sun is setting, but there are no stars in the sky. It is up to you, a small otter in the ocean, to bounce the sun to create stars to fill the night sky.',
  //     img_url: 'Assets/StarryNight.jpg',
  //     demo_url: 'https://www.youtube.com/watch?v=XtMlaz9Fpp8',
  //     github_url: 'https://github.com/JChirolHill/StarryNight',
  //     devpost_url: 'https://devpost.com/software/starry-night',
  //     langs: ['Java', 'JavaFX'],
  //     created_at: 'Created at LA Hacks 2020'
  //   },
  //   {
  //     title: 'One More Light',
  //     descr: 'Collect falling stars to help light up your friend.',
  //     img_url: 'Assets/OneMoreLight.jpg',
  //     github_url: 'https://github.com/JChirolHill/OneMoreLight',
  //     devpost_url: 'https://devpost.com/software/one-more-light',
  //     langs: ['C++', 'SDL'],
  //     created_at: 'Created at Rose Hacks 2020'
  //   },
  //   {
  //     title: 'Lord of the Rings Chrome Extension',
  //     descr: 'What happened today in Middle Earth? (Complementary quote of the day!)',
  //     img_url: 'Assets/LotRCal.png',
  //     github_url: 'https://github.com/JChirolHill/LotRQuoteCal',
  //     langs: ['Chrome Extension', 'Javascript', 'HTML', 'CSS'],
  //     created_at: 'Created in Winter 2019'
  //   },
  //   {
  //     title: 'MindSpring V2',
  //     descr: 'Exercise your creativy with this game, play alone or with friends!',
  //     img_url: 'Assets/MindSpringV2.png',
  //     demo_url: 'https://mindspring.surge.sh/',
  //     github_url: 'https://github.com/JChirolHill/404_MindSpring',
  //     langs: ['React', 'Node.js', 'HTML', 'CSS'],
  //     created_at: 'Created in Spring 2019'
  //   },
  //   {
  //     title: 'Bean & Leaf',
  //     descr: 'Track your coffee and tea intake and find coffee shops near you.',
  //     img_url: 'Assets/BeanAndLeaf.png',
  //     github_url: 'https://github.com/JChirolHill/CSCI310_Project2',
  //     langs: ['Android', 'Java', 'XML', 'Firebase', 'Google Cloud Platform'],
  //     created_at: 'Created in Spring 2019'
  //   },
  //   {
  //     title: 'MindSpring',
  //     descr: 'Exercise your creativy with this game.',
  //     img_url: 'Assets/MindSpring.png',
  //     demo_url: 'MindSpring/index.html',
  //     github_url: 'https://github.com/JChirolHill/MindSpring',
  //     devpost_url: 'https://devpost.com/software/mindspring',
  //     langs: ['Handlebars', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created at SD Hacks 2019'
  //   },
  //   {
  //     title: 'Hike Pool',
  //     descr: 'Join and organize rides to hikes near you.',
  //     img_url: 'Assets/hikepool.png',
  //     github_url: 'https://github.com/mes258/hikePool',
  //     langs: ['Python', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created in Summer 2019'
  //   },
  //   {
  //     title: 'Toki',
  //     descr: 'A language app that focuses on the "how" of language learning with exercises.',
  //     img_url: 'https://firebasestorage.googleapis.com/v0/b/finalprojectchirolhilljuliette.appspot.com/o/Demo2.png?alt=media&token=3e1e0e3f-98e4-4b06-a1ea-f38b8737cec9',
  //     demo_url: 'https://youtu.be/rQ5G9_jBtZE',
  //     github_url: 'https://github.com/JChirolHill/Toki',
  //     langs: ['Android', 'Java', 'XML', 'Firebase', 'Google Cloud Platform'],
  //     created_at: 'Created in Spring 2019'
  //   },
  //   {
  //     title: 'Word2Song',
  //     descr: 'Find songs containing vocab words in a language you are learning.',
  //     img_url: 'Assets/word2song.png',
  //     demo_url: 'https://word2song.herokuapp.com/',
  //     github_url: 'https://github.com/JChirolHill/Word2Song',
  //     langs: ['PHP', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created in Spring Break 2019'
  //   },
  //   {
  //     title: 'Uber Shep',
  //     descr: 'Let UberShep guide you to your UberPool pickup spot!',
  //     img_url: 'Assets/ubershep.png',
  //     github_url: 'https://github.com/RobotPirate/UberShep',
  //     devpost_url: 'https://devpost.com/software/ubershep',
  //     langs: ['PHP', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created at HackTech Spring 2019'
  //   },
  //   {
  //     title: 'Memory Lane',
  //     descr: 'Create and complete scavenger hunts near you.  Experience the world in a whole new way.',
  //     img_url: 'Assets/MemLane.png',
  //     github_url: 'https://github.com/neutonfoo/memorylane',
  //     devpost_url: 'https://devpost.com/software/memory-lane-x9uapb',
  //     langs: ['PHP', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created at SB Hacks Spring 2019'
  //   },
  //   {
  //     title: 'Spaced Repetition Scheduler',
  //     descr: 'Generates a schedule of when to review for certain classes according to research on memory for optimal memory results.',
  //     img_url: 'Assets/SRSHome.png',
  //     demo_url: 'SpacedRepetition/index.html',
  //     github_url: 'https://github.com/JChirolHill/SpacedRepetitionSchedule',
  //     langs: ['jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created in Winter Break 2018'
  //   },
  //   {
  //     title: 'WeFood',
  //     descr: 'Stop wasting time to decide where to eat.  Find nearby restaurants and friends vote on where to go.',
  //     img_url: 'Assets/WeFood.png',
  //     github_url: 'https://github.com/neutonfoo/wefood',
  //     devpost_url: 'https://devpost.com/software/wefood',
  //     langs: ['PHP', 'jQuery', 'HTML', 'CSS', 'Javascript'],
  //     created_at: 'Created at TrojanHacks Fall 2018'
  //   },
  //   {
  //     title: 'Eclipse Method',
  //     descr: 'An effective method for language learning based on cognitive science research with plenty of tips.',
  //     img_url: 'Assets/EclipseHome.png',
  //     demo_url: 'Eclipse/index.html',
  //     github_url: 'https://github.com/JChirolHill/Eclipse',
  //     devpost_url: 'https://devpost.com/software/eclipse-hts58i',
  //     lang: ['HTML', 'CSS'],
  //     created_at: 'Created at TrojanHacks Spring 2018'
  //   }
  // ];


});
