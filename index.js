function kiemTraThongTin() {
    var dem = 0;
    var user = document.getElementById("txt-name").value;
    var sdt = document.getElementById("txt-number").value;
    var email = document.getElementById("txt-email").value;
    var pass = document.getElementById("txt-password").value;
    var passComfirm = document.getElementById("txt-confirm-password").value;
    if(user.length == 0) {
        document.getElementById("errUserNull").style.display = "block";
        document.getElementById("txt-name").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    } else {
        document.getElementById("errUserNull").style.display = "none";
        document.getElementById("txt-name").style.boxShadow = "0px 0px 10px rgb(1, 255, 22)"
    }

    var demSDT = 0;
    for(let i = 0; i < sdt.length; i++) {
        if(isNaN(sdt[i])) {
            demSDT++;
        }
    }
    if(sdt.length == 0) {
        document.getElementById("errSDTNull").style.display = "block";
        document.getElementById("txt-number").style.boxShadow = "0px 0px 20px rgb(255, 1, 1)"
        dem++;
    }else if(demSDT > 0) {
        document.getElementById("errSDTNull").style.display = "none";
        document.getElementById("errSDTNAN").style.display = "block";
        document.getElementById("txt-number").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    }else if(sdt.length != 10) {
        document.getElementById("errSDTNull").style.display = "none";
        document.getElementById("errSDTLimit").style.display = "none";
        document.getElementById("errSDTLimit").style.display = "block";
        document.getElementById("txt-number").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    } else {
        document.getElementById("errSDTNull").style.display = "none";
        document.getElementById("errSDTLimit").style.display = "none";
        document.getElementById("errSDTNAN").style.display = "none";
        document.getElementById("txt-number").style.boxShadow = "0px 0px 10px rgb(1, 255, 22)"
    }

    if(email.length == 0) {
        document.getElementById("errEmailNull").style.display = "block";
        document.getElementById("txt-email").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    }else if(email.length != 0 && email.indexOf("@") == -1) {
        document.getElementById("errEmailNull").style.display = "none";
        document.getElementById("errEmail@").style.display = "block";
        document.getElementById("txt-email").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    }else if(email.length != 0 && email.indexOf(".") == -1) {
        document.getElementById("errEmailNull").style.display = "none";
        document.getElementById("errEmail@").style.display = "none";
        document.getElementById("errEmail.").style.display = "block";
        document.getElementById("txt-email").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    } else {
        document.getElementById("errEmailNull").style.display = "none";
        document.getElementById("errEmail@").style.display = "none";
        document.getElementById("errEmail.").style.display = "none";
        document.getElementById("txt-email").style.boxShadow = "0px 0px 10px rgb(1, 255, 22)"
    }

    if(pass.length == 0) {
        document.getElementById("errPassNull").style.display = "block";
        document.getElementById("txt-password").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    } else if(pass.length < 8) {
        document.getElementById("errPassNull").style.display = "none";
        document.getElementById("errPassLimit").style.display = "block";
        document.getElementById("txt-password").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++
    } else {
        document.getElementById("errPassNull").style.display = "none";
        document.getElementById("errPassLimit").style.display = "none";
        document.getElementById("txt-password").style.boxShadow = "0px 0px 10px rgb(1, 255, 22)";
    }

    if(passComfirm.length == 0) {
        document.getElementById("errPassComfirmNull").style.display = "block";
        document.getElementById("txt-confirm-password").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++;
    } else if(passComfirm != pass) {
        document.getElementById("errPassComfirmNull").style.display = "none";
        document.getElementById("errPassComfirm").style.display = "block";
        document.getElementById("txt-confirm-password").style.boxShadow = "0px 0px 10px rgb(255, 1, 1)"
        dem++
    } else {
        document.getElementById("errPassComfirmNull").style.display = "none";
        document.getElementById("errPassLimit").style.display = "none";
        document.getElementById("txt-confirm-password").style.boxShadow = "0px 0px 10px rgb(1, 255, 22)";
    }
    if(dem > 0) {
        return false;
    }
}

function showPassword() {
    var x = document.getElementById("txt-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function showComfirmPassword() {
    var x = document.getElementById("txt-confirm-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

var arrSrc = ["url('./images/image-1.png') ","url('./images/image2.png')","url('./images/image3.png')","url('./images/image4.png')","url('./images/image5.png')"];
var curretIndex = 0;
var interval;
function next() {
    if(curretIndex == arrSrc.length - 1) {
        curretIndex = 0;
        document.getElementById("banner").style.background = arrSrc[curretIndex];
        document.getElementById("banner").style.backgroundRepeat = "no-repeat";
        document.getElementById("banner").style.backgroundSize = "cover";
    } else {
        curretIndex++;
        document.getElementById("banner").style.background = arrSrc[curretIndex];
        document.getElementById("banner").style.backgroundRepeat = "no-repeat";
        document.getElementById("banner").style.backgroundSize = "cover";
    }
}

function previous() {
    if(curretIndex == 0) {
        curretIndex = arrSrc.length - 1;
        document.getElementById("banner").style.background = arrSrc[curretIndex];
        document.getElementById("banner").style.backgroundRepeat = "no-repeat";
        document.getElementById("banner").style.backgroundSize = "cover";
    } else {
        curretIndex--;
        document.getElementById("banner").style.background = arrSrc[curretIndex];
        document.getElementById("banner").style.backgroundRepeat = "no-repeat";
        document.getElementById("banner").style.backgroundSize = "cover";
    }
}

function start() {
    interval = setInterval(next, 2000);
}
start();
function stop() {
    clearInterval(interval)
}
var thoiGianBanDau = 1;
var time = thoiGianBanDau * 60 * 60 * 24;
var countDown = document.getElementById("countDown");
function demNguoc() {
    var gio = Math.floor(time / (60 * 60));
    var phut = Math.floor((time % (60 * 60)) / 60);
    var giay = Math.floor(time % 60);
    countDown.innerHTML = `${gio}:${phut}:${giay}`
    if (time > 0) {
        time--;
    } else {
        clearInterval(interval2);
        countDown.innerHTML = "Hết giờ!";
    }
}

var interval2;

function setDemNguoc() {
    interval = setInterval(demNguoc, 1000);
}

setDemNguoc();

function dropOutMenuClick() {
    if(document.getElementById("drop-out").style.display == "none") {
        dropOut.style.display = "block"
    } else if(document.getElementById("drop-out").style.display == "block") {
        dropOut.style.display == "none"
    }
}

function dropOutMenuMoveOver() {
    document.getElementById("drop-out").style.display = "block"
}

function dropOutMenuMoveOut() {
    document.getElementById("drop-out").style.display = "none"
}

const formDataArray = [];

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var user = document.getElementById("txt-name").value;
    var sdt = document.getElementById("txt-number").value;
    var email = document.getElementById("txt-email").value;
    var pass = document.getElementById("txt-password").value;
    const formData = {
        name: user,
        sdt: sdt,
        email: email,
        pass: pass,
    };
    formDataArray.push(formData);
    console.log(formDataArray);
});