var waypoint = new Waypoint({
    element: document.getElementById('timeline'),
    handler: function (direction) {
        $('#timeline-menu').addClass("active");
        $('#education-menu').removeClass("active");
    }
})


var waypoint = new Waypoint({
    element: document.getElementById('education'),
    handler: function (direction) {
        $('#timeline-menu').removeClass("active");
        $('#education-menu').addClass("active");
    }
})