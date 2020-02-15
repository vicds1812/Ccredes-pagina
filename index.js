
var $j = jQuery.noConflict();


$j(document).ready(function() {
    var is_open = 0,
        clickEventType = ((document.ontouchstart !== null) ? 'mouseup' : 'touchstart');
   

    function close_nav() {
        $j('html').removeClass('nav-js');
        is_open = 0;
       
    }

    function open_nav() {
        
        $j('html').addClass('nav-js');
        is_open = 1;
    }

    $j(document).on(clickEventType, function(e) {
        if (is_open === 1) { // if nav bar is open

            if (!$j(e.target).closest("#main-navigation").length > 0) {
                close_nav(); //close
            }
        } else { // if nav bar is not close
            if ($j(e.target).closest("#nav-open").length > 0) { 
                open_nav(); //open
            }
        }
    });

    
});

