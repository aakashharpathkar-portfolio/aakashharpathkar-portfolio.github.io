postToGoogle();

function postToGoogle() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/4/d/e/1FAIpQLSeJk60lLtw7lhawNqx4tYG3D8Mi5CONwi6sKTvZDZL9t0caDA/formResponse?",
        data: { "entry.1755576767": name, "entry.914317674": email, "entry.1284007056": message},
        type: "POST",
        dataType: "xml",
        success: function (res) {
            console.log(res);
        }
    });
    return false;
}
function downloadCV(){
    location.replace("https://drive.google.com/u/0/uc?id=1UX_mHjPET8wFHd9rY4XNYnSRJ9jBMtDE&export=download");
}

// $(document).ready(function(){
//     console.log('carousel');
//     $('#artwork-images').find("img").bind('click',function(){
//         $('#carousel-inner').find("div").toggleClass("active"); 
//         console.log("active class");
//     })  
// })

// $(document).ready(function(){
//     console.log("Zoom in");
//     $('#artwork-images').find("img").addClass('img-enlargable').click(function(){
//         console.log("Zoom in");
//         var src = $(this).attr('src');
//         $('<div>').css({
//             background: 'RGBA(0,0,0,.7) url('+src+') no-repeat center',
//             backgroundSize: 'contain',
//             width:'100%', height:'100%',
//             position:'fixed',
//             zIndex:'10000',
//             top:'0', left:'0',
//             cursor: 'zoom-out'
//         }).click(function(){
//             console.log("zoomout");
//             $(this).remove();
//         }).appendTo('body');
//     });
// });