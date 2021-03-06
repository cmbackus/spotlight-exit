window.onload = function () {
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide"
        });
    });
    $('.option').click(function () {
        $(this).siblings(".option").removeClass("selected");
        $(this).addClass("selected");

    });
    $('#l_option1').click(function () {
        switchMenu('#l_tab1');
    });
    $('#l_option2').click(function () {

        switchMenu('#l_tab2');
    });
    $('#l_option3').click(function () {

        switchMenu('#l_tab3');
    });
    $('#r_option1').click(function () {

        switchMenu('#r_tab1');
    });
    $('#r_option2').click(function () {
        $(this).siblings(".option").removeClass("selected");
        $(this).addClass("selected");
        switchMenu('#r_tab2');
    });
    $('#r_option3').click(function () {

        switchMenu('#r_tab3');
    });

    function switchMenu(active) {
        $(active).siblings().removeClass('active')
        $(active).addClass('active');

    }
}
loadIndividualContent("l", 5, "Jay")
loadIndividualContent("r", 7, "John")

function loadIndividualContent(side, index, name) {
    var genre = genres[index];

    //tab 1- video
    $('#' + side + '_tab1_title').text(genre.video.title);
    $('#' + side + '_tab1_desc').text(genre.video.desc);
    $('#' + side + '_tab1_src').attr('src', genre.video.link);

    //tab2-doc
    $('#' + side + '_tab2_title').text(genre.doc.title);
    $('#' + side + '_tab2_desc').text(genre.doc.desc);
    $('#' + side + '_tab2_img').attr('src', genre.doc.img);

    //tab3-gallery
    $('#' + side + '_tab3_title').text(genre.gallery.title);
    $('#' + side + '_tab3_desc').text(genre.gallery.desc);
    //$('#' + side + '_tab2_img').src(genre.video.link);
    $('#' + side + '_tab3_img1').attr('src', genre.gallery.photos[0]);
    $('#' + side + '_tab3_img2').attr('src', genre.gallery.photos[1]);
    $('#' + side + '_tab3_img3').attr('src', genre.gallery.photos[2]);

    //custom poster
    genre = genres[index].genre.toUpperCase();
    var bgImg = "media/" + genre + "_header.png";
    // drawAlbum('#' + side + 'Album', index, name, '#00ff00', '#ff0000')

}