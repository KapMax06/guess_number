let secretNumber = randomNumber();
let tryUser = 3;
document.querySelector("input").focus();
document.querySelector(".try").innerHTML = tryUser;
document.querySelector(".check").addEventListener("click", function () {
    let userNumber = document.querySelector("input").value;
    // console.log(userNumber);

    if (secretNumber < userNumber) {
        // console.log("Число меньше");
        document.querySelector(".hint").innerHTML = "Число меньше";
        document.querySelector("input").value = "";
        document.querySelector("input").focus();
    };

    if (secretNumber > userNumber) {
        // console.log("Число больше");
        document.querySelector(".hint").innerHTML = "Число больше";
        document.querySelector("input").value = "";
        document.querySelector("input").focus();
    };
    tryUser--;
    // console.log(tryUser);
    document.querySelector(".try").innerHTML = tryUser;

    if (tryUser == 0) {
        document.querySelector(".check").disabled = true;
        document.querySelector("input").disabled = true;
        document.querySelector(".hint").innerHTML = "Вы проиграли!";
    };

    if (secretNumber == userNumber) {
        // console.log("Число угадано");
        document.querySelector(".check").disabled = true;
        document.querySelector("input").disabled = true;
        document.querySelector(".hint").innerHTML = "Число угадано. Вы выиграли!";
    };
});

document.querySelector(".new_game").addEventListener("click", function () {
    document.querySelector(".check").disabled = false;
    document.querySelector("input").disabled = false;
    document.querySelector(".hint").innerHTML = "Я буду подсказывать";
    tryUser = 3;
    document.querySelector(".try").innerHTML = tryUser;
    document.querySelector("input").value = "";
    document.querySelector("input").focus();
    secretNumber = randomNumber();
});

function randomNumber() {
    return Math.floor(Math.random() * (10))
};

document.querySelector(".check").addEventListener("mouseover", function () {
    document.querySelector(".check").innerHTML = "Вы уверены?"
});
document.querySelector(".check").addEventListener("mouseout", function () {
    document.querySelector(".check").innerHTML = "Проверить"
});

document.querySelector(".new_game").addEventListener("mouseover", function () {
    document.querySelector(".new_game").innerHTML = "Вы точно хотите в это играть?"
});
document.querySelector(".new_game").addEventListener("mouseout", function () {
    document.querySelector(".new_game").innerHTML = "Новая игра"
});