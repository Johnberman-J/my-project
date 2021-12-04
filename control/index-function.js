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
