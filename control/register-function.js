
function registerButton() {
    const userID = $("#userID").val();
    const password = $("#password").val();
    const rePassword = $("#rePassword").val();
    console.log(userID,password,rePassword);

    $.ajax({
        type: "POST",
        url: "/api/register",
        data: {
            userID,
            password,
            rePassword
        },
        success: (res) => {
            
        }
    })
};


function homeButton() {
    location.href = "./index.html";
};