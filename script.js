$(document).ready(function() {
    $('#submitBtn').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        if (name && email && phone && address) {
            // Submit the form via AJAX to process.php
            $.ajax({
                url: 'process.php',
                type: 'post',
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    address: address
                },
                success: function(data) {
                    // Display the result from process.php
                    $('#output').html(data).show();
                }
            });
        } else {
            alert('Please fill all fields.');
        }
    });

    $('#clearBtn').click(function() {
        $('#registrationForm')[0].reset();
        $('#output').hide();
    });
});
