
function registerButton() {
    const userID = $("#userID").val();
    const password = $("#password").val();
    const rePassword = $("#rePassword").val();

    $.ajax({
        type: "POST",
        url: "/api/register",
        data: {
            userID,
            password,
            rePassword,
        },
        success: (res) => {
            alert(res["msg"]);
            window.location.href="/login";
        },
        error: (error) => {
            alert(error.responseJSON.err);
            return;
        }
    })
};


function homeButton() {
    window.location.href="/";
};