function submitPlan() {
    window.localStorage.clear();
    window.localStorage.setItem('email',  document.getElementById("email").value);
    window.localStorage.setItem('withWho', document.getElementById("withWho").value);
    window.localStorage.setItem('meal',  document.getElementById("meal").value);
    window.localStorage.setItem('inputMax',   document.getElementById("inputMax").value);
    window.localStorage.setItem('time',  document.getElementById("time").value);
    window.localStorage.setItem('date',  document.getElementById("date").value);
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
    document.getElementById("withWho").innerHTML = withWho;
    document.getElementById("meal").innerHTML = meal;
    document.getElementById("inputMax").innerHTML = inputMax;
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

}

function goHome() {
    window.location.href = "index.html"
}