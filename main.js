'use strict';
//    создаем класс для объекта принимающий данные с формы
function MyPost() {
    this.username = document.querySelector('.userName').value;
    this.password = document.querySelector('.inputPassword').value;
    this.email = document.querySelector('.inputEmail').value;
    this.gender = document.querySelector('.gender').value;
    this.credit_card = document.querySelector('.ccard').value;
    this.bio = document.querySelector('.bio').value;
    this.birth = document.querySelector('.birth').value;
}



function sendMyPost() {
    var myPost = new MyPost(); 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'validator.php', true);

    var data = Object.keys(myPost).map(function (key) {
        return key + '=' + myPost[key];
    }).join('&');
   // data = JSON.stringify(data);
    data = "'"+data+"'";
    console.log(data);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(myPost);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var answer = xhr.responseText;
                answer = JSON.parse(answer);
                console.log(answer);
            }
        }
    };
};
document.getElementById('button').onclick = sendMyPost;
