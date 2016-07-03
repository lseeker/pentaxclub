var pentaxRed = '#d7003a';

$(document).ready(function() {
    $('#navbtn').css('cursor', 'pointer')
    .hover(function() {
        $('a', this).css('color', pentaxRed);
    }, function() {
        $('a', this).css('color', 'inherit');
    }).click(function() {
        $('#navbtn + ul').slideToggle(100);
        return false;
    });

    $('nav li').css('cursor', 'pointer').hover(function() {
        $('> a', this).css('color', pentaxRed);
        if ($('ul', this).is(':visible')) {
            return;
        }
        $(this).css('background-color', '#f0f0f0');
    }, function() {
        $(this).css('background-color', 'inherit');
        $('> a', this).css('color', 'inherit');
    }).click(function() {
        if ($(this).has('ul').length) {
            if ($('ul', this).is(':visible')) {
                $(this).css('background-color', '#f0f0f0').css('padding-bottom', '.4em');
            } else {
                $(this).css('background-color', 'inherit').css('padding-bottom', '0');
            }
            $('ul', this).slideToggle(100);
        } else {
            location.href = $('a', this).attr('href');
        }
        return false;
    });
});
