$(document).ready( async () => {
    const token = localStorage.getItem("user_token");
    if(!token) {
        alert("로그인이 필요합니다!");
        location.href = "/login";
        return;        
    }
    await userAuth();
})

function addboard() {
    const userID = localStorage.getItem("userID");
    const title = $("#title").val();
    const contents = $("#contents").val();
    const date = new Date().toISOString().substring(0,10);

    $.ajax({
        type:"POST",
        url:"/api/boards",
        data: {
            userID,
            title,
            contents,
            date,
        },
        success: (res) => {
            alert(res["msg"]);
            location.href = "/";
        },
        error: (error) => {
            alert(error.responseJSON.err);
            return;
        }
    })
};


function homeButton() {
    location.href = "/";
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