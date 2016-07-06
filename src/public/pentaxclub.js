$(document).ready(function() {
    var clickClose = false;
    
    $('#navbtn').css('cursor', 'pointer')
    .hover(function() {
        $('a', this).addClass('pentax_red');
    }, function() {
        $('a', this).removeClass('pentax_red');
    }).click(function() {
        $('nav li ul').stop().hide();
        $('#navbtn + ul').stop().slideToggle(100, function() {
            // remove inline style - otherwise remains display:none on size change
            if (!$(this).is(':visible')) {
                $(this).removeAttr('style');
            }
        });
        return false;
    });

    $('nav li').addClass('nav_block').hover(function() {
        $('> a', this).addClass('pentax_red');
    }, function() {
        $('> a', this).removeClass('pentax_red');
    }).click(function() {
        if ($(this).has('ul').length) {
            clickClose = false;
            if ($('#navbtn').is(':visible')) {
                // collapsed
                if ($('ul', this).is(':visible')) {
                    $(this).removeAttr('style').css('padding-bottom', '.4rem');
                } else {
                    $('nav > ul > li').css('padding-bottom', '.4rem');
                    $('nav li ul').stop().slideUp(100);
                    $(this).css('background-color', 'white').css('padding-bottom', '0');
                }
                $('ul', this).stop().slideToggle(100);
            } else {
                // expanded
                if ($('ul', this).is(':visible')) {
                    clickClose = true;
                    $('ul', this).stop().fadeOut(100);
                } else {
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
