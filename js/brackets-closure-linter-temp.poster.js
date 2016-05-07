function drawAlbum(divName, genreI, name, color1, color2) {
    canvas = document.querySelector(divName);
    ctx = canvas.getContext('2d')
    fullCanvas = document.querySelector('#tweetImage');
    fullCtx = fullCanvas.getContext('2d')
        //gradient stuff
        //ctx.fillStyle = "#990000";
        //  ctx.fillStyle = "rgba(255,255,255,.4)"
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, color1);
    grd.addColorStop(1, color2);

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 200, 200);
    fullCtx.fillStyle = grd;
    fullCtx.fillRect(0, 0, 500, 500);

    //image stuff
    genre = genres[genreI].genre.toUpperCase();
    console.log(genre);
    var bgImg = "media/" + genre + "_plain.png";
    console.log(bgImg);

    base_image = new Image();
    base_image.src = bgImg;
    base_image.onload = function () {
            ctx.drawImage(base_image, 0, 0, 200, 190);
            fullCtx.drawImage(base_image, 0, 0, 500, 500);
            ctx.font = "30px Roboto";
            ctx.fillStyle = "#999";
            ctx.textAlign = "center";
            ctx.fillText(name + "'s Lineup", 100, 75);
            fullCtx.font = "60px Roboto";
            fullCtx.fillStyle = "#999";
            fullCtx.textAlign = "center";
            fullCtx.fillText(name + "'s Lineup", 250, 200);
            doExport();
            console.log("in canvas");
        }
        //title



}

function doExport() {
    var data = $('#tweetImage').toDataURL();
    var windowName = "canvasImage";
    var windowOptions = "left=0,top=0,width= 500px ,height=500px,toolbar=0,resizable=0";
    var myWindow = window.open(data, windowName, windowOptions);
    //myWindow.resizeTo(500 px, 500 px);

}