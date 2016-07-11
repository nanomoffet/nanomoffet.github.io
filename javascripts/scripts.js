$(function() {
    $("[type=submit]").click(function() {
        var x = document.forms["contact-form"]["name"].value;
        var y = document.forms["contact-form"]["_replyto"].value;

        if (x !== null && x !=="" && y !== null && y !=="") {
            alert("Thank you for contacting me, I'll get back to you as soon as I can!");
        }
    });
});