$(document).ready(function() {
    $('#submitBtn').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        if (name && email && phone && address) {
            $('#resultName').text('Name: ' + name);
            $('#resultEmail').text('Email: ' + email);
            $('#resultPhone').text('Phone: ' + phone);
            $('#resultAddress').text('Address: ' + address);
            $('#result').show();
        } else {
            alert('Please fill all fields.');
        }
    });

    $('#clearBtn').click(function() {
        $('#registrationForm')[0].reset();
        $('#result').hide();
    });
});
