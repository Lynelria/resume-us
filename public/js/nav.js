var waypoint = new Waypoint({
    element: document.getElementById('career'),
    handler: function (direction) {
        $('#career-menu').addClass("active");
        $('#education-menu').removeClass("active");
    }
})


var waypoint2 = new Waypoint({
    element: document.getElementById('education'),
    handler: function (direction) {
        $('#career-menu').removeClass("active");
        $('#education-menu').addClass("active");
    }
})