var submitted = false;

$(window).ready(function(){


    function greeting() {
        $('#greeting-code').typeIt({
            strings: ['$ <span id="orange-text">{</span> Hello World <span id="orange-text">}</span>',
                '$ <span id="red-text">cd mysite/</span>',
                '$ <span id="green-text">python manage.py runserver</span>',
            ],
            speed: 80,
            autostart: false,
            breakDelay: 1000,
            lifeLike: true,
            callback: function () {
                afterGreeting();
            }
            }).tiPause(2000)
            .tiBreak()
            .tiSettings({speed: 40})
            .tiType('Starting development server at http://github.pages.io/adarsh2397')
            .tiBreak()
            .tiType('Quit the server with CONTROL-C')
            .tiBreak()
            .tiType('.')
            .tiPause(1000)
            .tiType('.')
            .tiPause(1000)
            .tiType('.')
        }


        $('#skip-button').delay(3000).fadeIn('slow',function () {
            $(this).on('click',function () {
                $('#greeting-code').typeIt({
                    callback: function () {
                        afterGreeting();
                    }
                });
            }).stop();
        });


    //afterGreeting();
    greeting();
    slideCarousel();
    downArrowSlide();
    hiddenNavBar();
    submitForm();
    resetForm();

    function afterGreeting(){
        $('#greeting-code').delay(1000).fadeOut();
        $('#skip-button').delay(1000).fadeOut();
        $('#main-website-part').delay(3000).fadeIn(function () {
            $(document.body).css('background','url("img/bg-1.jpg") no-repeat center center fixed').fadeIn('slow');
            $(document.body).css('background-size','cover');
            $('#section1-content').css('height',$(window).height());
            $('#section1-content').fadeIn('slow');
            $('#after-first-part').fadeIn('slow');
        });
    }

    function slideCarousel(){
        $('#myCarousel').carousel({

            interval:   6000
        });

        var clickEvent = false;
        $('#myCarousel').on('click', '.nav a', function() {
            clickEvent = true;
            $('.nav li').removeClass('active');
            $(this).parent().addClass('active');
        }).on('slid.bs.carousel', function(e) {
            if(!clickEvent) {
                var count = $('#about-nav').children().length -1;
                var current = $('#about-nav li.active');
                current.removeClass('active').next().addClass('active');
                var id = parseInt(current.data('slide-to'));
                if(count == id) {
                    $('#about-nav li').first().addClass('active');
                }
            }
            clickEvent = false;
        });
    }

    function downArrowSlide(){
        $("#down-arrow > a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top-50
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    //window.location.hash = hash;
                });
            } // End if
        });
    }

    function hiddenNavBar(){
            var h = $(window).height();
            $(function(){
                $(window).scroll(function() {
                    if ($(this).scrollTop() >= h-100 ) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
                        $('#my-navbar').fadeIn('slow');
                    }
                });
                $(window).scroll(function(){
                    if($(this).scrollTop() <= 100){
                        $('#my-navbar').fadeOut('slow');
                    }
                });
            });

            /*
            $('#my-navbar').on('click', '.nav a', function() {
                clickEvent = true;
                //$('.nav li').removeClass('active');
                //$(this).parent().addClass('active');
            })
            */

            $("#my-navbar a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top-50
                    }, 800, function(){

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        //window.location.hash = hash;
                    });
                } // End if
            });
    }

    function submitForm(){
        $('#gform').on('submit', function(e) {
            var validate = true;
            $('#contact-form-name').each(function(){
                if($(this).val() == ''){
                    e.preventDefault();
                    validate = false;
                    return false;
                }
            });
            $('#contact-form-email').each(function(){
                if($(this).val() == ''){
                    e.preventDefault();
                    validate = false;
                    return false;
                }
            });

            if(validate) {
                $('#gform *').fadeOut(2000);
                $('#gform').prepend('Your Message has been sent<br>Thank You');
            }
        });
    }

    function resetForm() {
        $('#reset-button').click(function () {
            $(this).closest('form').find("input[type=text], textarea").val("");
        });
    }

});
