$(document).ready( () => {
    const userID = localStorage.getItem("userID");
    const temp_template = `
                            <p class="subtitle" style="text-align: right;">
                                환영합니다 ${userID}님!
                            </p>
                          `;
    if(userID) {
        $("#user-info").append(temp_template);
    }

})


function writeButton() {
    location.href = "/boards";
};

function loginButton() {
    location.href = "/login";
};

function logoutButton() {
    if(confirm("로그아웃 하시겠습니까?")) {
        localStorage.clear();
        location.href = "/";
    } else {
        return;
    }
};

function registerButton() {
    location.href = "/register";
};


async function userAuth() {
    const token = localStorage.getItem("user_token");
    $.ajax({
        type: "GET",
        url: "/api/boards",
        headers: {
            authorization: `Bearer ${token}`
        },
        success: (res) => {
            const userID = res;
            localStorage.setItem("userID",userID);
        },
        error: (error) => {
            alert(error.responseJSON.err);
            localStorage.clear();
            location.href = "/login";
            return;
        }
    })
};