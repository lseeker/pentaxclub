var pentaxRed = '#d7003a';

$(document).ready(function() {
    var clickClose = false;
    
    $('#navbtn').css('cursor', 'pointer')
    .hover(function() {
        $('a', this).css('color', pentaxRed);
    }, function() {
        $('a', this).css('color', 'inherit');
    }).click(function() {
        $('#navbtn + ul').stop().slideToggle(100, function() {
            // remove inline style - otherwise remains display:none on size change
            if (!$(this).is(':visible')) {
                $(this).removeAttr('style');
            }
        });
        return false;
    });

    $('nav li').css('cursor', 'pointer').hover(function() {
        $('> a', this).css('color', pentaxRed);
        if ($('ul', this).is(':visible')) {
            return;
        }

        $(this).css('background-color', '#f0f0f0');
        if (!$('#navbtn').is(':visible')) {
            // expanded
            $('> a', this).css('color', pentaxRed);
        }
    }, function() {
        $(this).css('background-color', 'inherit');
        $('> a', this).css('color', 'inherit');
    }).click(function() {
        if ($(this).has('ul').length) {
            clickClose = false;
            if ($('#navbtn').is(':visible')) {
                // collapsed
                if ($('ul', this).is(':visible')) {
                    $(this).css('background-color', '#f0f0f0').css('padding-bottom', '.4rem');
                } else {
                    $('nav > ul > li').css('padding-bottom', '.4rem');
                    $('nav li ul').stop().slideUp(100);
                    $(this).css('background-color', 'inherit').css('padding-bottom', '0');
                }
                $('ul', this).stop().slideToggle(100);
            } else {
                // expanded
                if ($('ul', this).is(':visible')) {
                    clickClose = true;
                    $(this).css('background-color', '#f0f0f0');
                    $('ul', this).stop().fadeOut(100);
                } else {
                    $(this).css('background-color', 'inherit');
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
        if (clickClose) {
            return;
        }

        $('nav li ul').hide();
        $('ul', this).fadeIn(100);
    });
});
