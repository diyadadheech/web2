$(document).ready(function() {
    $('#submitBtn').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        if (name && email && phone && address) {
            $('#outputName').text(name);
            $('#outputEmail').text(email);
            $('#outputPhone').text(phone);
            $('#outputAddress').text(address);
            $('#output').show();
        } else {
            alert('Please fill all fields.');
        }
    });

    $('#clearBtn').click(function() {
        $('#registrationForm')[0].reset();
        $('#output').hide();
    });
});
