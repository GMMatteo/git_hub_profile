var cardsDiv = document.querySelector(".card");
var currentUsername ="";

function getUsername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function getCoderData(data) {
    var res = `<div class="card-body">
                    <h3 class="card-title text-center text-uppercase text-success">${data.name} has ${data.followers} follower(s)!</h3>
               </div>
               <a href="https://github.com/${data.login}" target="_blank"><img src="${data.avatar_url}" class="card-img-bottom" alt="${data.login}"></a>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    // console.log(coderData);
    cardsDiv.innerHTML = getCoderData(coderData) + cardsDiv.innerHTML;
}