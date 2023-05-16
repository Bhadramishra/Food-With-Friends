
function showMealPlan() {

    console.log((JSON.parse(localStorage.getItem('matches'))));
    var names = "";
    for(i = 0; i < JSON.parse(localStorage.getItem('matches')).length; i++){
        if (i != JSON.parse(localStorage.getItem('matches')).length-1) {
            console.log(names += (JSON.parse(localStorage.getItem('matches')))[i].name+ " & ");
        }
        else{
            console.log(names += (JSON.parse(localStorage.getItem('matches')))[i].name);
        }
    }
    document.getElementById("matchname").innerHTML = ""+names;
    document.getElementById("mealdate").innerHTML = "Date: " + JSON.parse(localStorage.getItem('matches'))[0].date;
    document.getElementById("mealtime").innerHTML = "Time: " + JSON.parse(localStorage.getItem('matches'))[0].time;

}
   
function scheduleMeal(){
    window.location.href = "preference_form.html";
}