window.onload = function () {
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
    $('#option1l').click(function () {
        switchMenu('#tab1l');
    });
    $('#option2l').click(function () {
        switchMenu('#tab2l');
    });
    $('#option3l').click(function () {
        switchMenu('#tab3l');
    });
    $('#option1r').click(function () {
        switchMenu('#tab1r');
    });
    $('#option2r').click(function () {
        switchMenu('#tab2r');
    });
    $('#option3r').click(function () {
        switchMenu('#tab3r');
    });

    function switchMenu(active) {
        $(active).siblings().removeClass('active')
        $(active).addClass('active');

    }
}