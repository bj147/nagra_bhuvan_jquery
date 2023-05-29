$(document).ready(function() {
    $("#submit").click(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form values
        var name = $("#name").val();
        var collegeName = $("#clgname").val();
        var cgpa = $("#cgpa").val();
        var dob = $("#dob").val();
        var branch = $("#branch").val();

        // Open a new tab and write the form values
        var newWindow = window.open("", "_blank");
        var finalval = "<h1>Thanks " + name + "</h1>";
        finalval += "<link rel='stylesheet' href='css/stylesheet.css'>";
        finalval += "Please verify the details";
        finalval += "<p><strong>Name:</strong> " + name + "</p>";
        finalval += "<p><strong>College Name:</strong> " + collegeName + "</p>";
        finalval += "<p><strong>CGPA:</strong> " + cgpa + "</p>";
        finalval += "<p><strong>Date of Birth:</strong> " + dob + "</p>";
        finalval += "<p><strong>Branch:</strong> " + branch + "</p>";
        newWindow.document.write(finalval);
    });
});