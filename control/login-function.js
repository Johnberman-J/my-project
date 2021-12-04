function loginButton() {
    const userID = $("#userID").val();
    const password = $("#password").val();

    $.ajax({
        type: "POST",
        url: "/api/login",
        data: {
            userID,
            password
        },
        success: (res) => {
            alert(`환영합니다 ${userID}님!`);
            const token = res;
            localStorage.setItem("user_token",token);
            location.href = "/";
        },
        error: (error) => {
            alert(error.responseJSON.err);
            return;
        }

    })
    
};

function registerButton() {
    location.href = "/register";
};

function homeButton() {
    location.href = "/";
};