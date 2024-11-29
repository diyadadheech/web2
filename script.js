$(document).ready(function () {
    $("#registrationForm").submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            success: function (response) {
                $("#output").html(response).fadeIn(500);
                $("#registrationForm")[0].reset();
            },
            error: function () {
                alert("Something went wrong. Please try again.");
            }
        });
    });
});
