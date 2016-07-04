var pentaxRed = '#d7003a';

$(document).ready(function() {
    // on collapsed
    $('#navbtn').css('cursor', 'pointer')
    .hover(function() {
        $('a', this).css('color', pentaxRed);
    }, function() {
        $('a', this).css('color', 'inherit');
    }).click(function() {
        $('#navbtn + ul').stop().slideToggle(100);
        return false;
    });

    $('nav li').css('cursor', 'pointer').hover(function() {
        $('> a', this).css('color', pentaxRed);
        if ($('ul', this).is(':visible')) {
            return;
        }

        $(this).css('background-color', '#f0f0f0');
        if (!$('#navbtn').is(':visible')) {
            $('> a', this).css('color', pentaxRed);
        }
    }, function() {
        $(this).css('background-color', 'inherit');
        $('> a', this).css('color', 'inherit');
    }).click(function() {
        if ($(this).has('ul').length) {
            if ($('#navbtn').is(':visible')) {
                if ($('ul', this).is(':visible')) {
                    $(this).css('background-color', '#f0f0f0').css('padding-bottom', '.4rem');
                } else {
                    $(this).css('background-color', 'inherit').css('padding-bottom', '0');
                }
                $('ul', this).stop().slideToggle(100);
            } else {
                if ($('ul', this).is(':visible')) {
                    $(this).css('background-color', '#f0f0f0');
                    $('ul', this).stop().slideUp(100);
                } else {
                    $(this).css('background-color', 'inherit');

                    // close other ul
                    $('nav li ul').stop().hide();
                    $('ul', this).stop().fadeToggle(100);
                }
            }
        } else {
            location.href = $('a', this).attr('href');
        }
        return false;
    });

    $('nav > ul > li').css('cursor', 'pointer').mouseover(function() {
        if ($('ul', this).is(':visible')) {
            return;
        }
        if ($('#navbtn').is(':visible')) {
            return;
        }

        // close other ul
        $('nav li ul').stop().hide();
        $('ul', this).stop().fadeIn(100);
    });
});
