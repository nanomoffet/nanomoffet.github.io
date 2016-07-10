$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 600); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});

$(function() {
    $("[type=submit]").click(function() {
        var x = document.forms["contact-form"]["name"].value;
        var y = document.forms["contact-form"]["_replyto"].value;

        if (x !== null && x !=="" && y !== null && y !=="") {
            alert("Thank you for contacting me, I'll get back to you as soon as I can!");
        }
    });
});