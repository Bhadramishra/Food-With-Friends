
function showMealPlan() {
    var schedule = localStorage.getItem("matches");
    var names = "";
    for (i = 0; i < schedule.length; i++) {
        var nameM = schedule[i].name;
        names += nameM + " ";
    }
    document.getElementById("matchname").innerHTML = names;
    document.getElementById("mealtype").innerHTML = "Meal: " + meal;
    document.getElementById("mealdate").innerHTML = "Date: " + date;
    document.getElementById("mealtime").innerHTML = "Time: " + time;
}
   