function getElems() {
    var email = localStorage.getItem("email");
    var withWho = localStorage.getItem("withWho");
    var meal = localStorage.getItem("meal");
    var inputMax = localStorage.getItem("inputMax");
    var time = localStorage.getItem("time");
    var date = localStorage.getItem("date");

    //display date in MM/DD/YYYY format
    var dateSplit = date.split("-");
    date = dateSplit[1]+"/"+dateSplit[2]+"/"+dateSplit[0]

    
    document.getElementById("email").innerHTML = email;
    document.getElementById("withWho").innerHTML = withWho;
    document.getElementById("meal").innerHTML = meal;
    document.getElementById("inputMax").innerHTML = inputMax;
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

}

//this is called from the review page
//it redirects to match loading page
function findMatch() {
    window.location.href = "match_loading.html"; 

}

function editPlan() {
    window.location.href = "preference_form.html"; 
}


