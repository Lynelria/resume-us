var waypoint = new Waypoint({
    element: document.getElementById('career'),
    handler: function (direction) {
        $('#career-menu').addClass("active");
        $('#skills-menu').removeClass("active");
        $('#presentation-menu').removeClass("active");
    }
});


var waypoint2 = new Waypoint({
    element: document.getElementById('skills'),
    handler: function (direction) {
        $('#career-menu').removeClass("active");
        $('#skills-menu').addClass("active");
        $('#presentation-menu').removeClass("active");
    }
});

var waypoint3 = new Waypoint({
    element: document.getElementById('presentation'),
    handler: function (direction) {
        $('#presentation-menu').removeClass("active");
        $('#career-menu').removeClass("active");
        $('#skills-menu').addClass("active");
        $('#presentation-menu').removeClass("active");
    }
});