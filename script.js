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