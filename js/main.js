function submitPlan() {
    window.localStorage.setItem('email',  document.getElementById(email));
    window.localStorage.setItem('withWho', document.getElementById(withWho));
    window.localStorage.setItem('meal',  document.getElementById(meal));
    window.localStorage.setItem('inputMax',   document.getElementById(inputMax));
    window.localStorage.setItem('time',  document.getElementById(time));
    window.localStorage.setItem('date',  document.getElementById(date));
    window.location.replace("review.html");
}

function getElems() {
    var email = localStorage.getItem("email");
    var withWho = localStorage.getItem("withWho");
    var meal = localStorage.getItem("meal");
    var inputMax = localStorage.getItem("inputMax");
    var time = localStorage.getItem("time");
    var date = localStorage.getItem("date");

    document.getElementById("email").innerHTML = email;
}