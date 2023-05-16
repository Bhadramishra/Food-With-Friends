function cancelPlan() {
    localStorage.removeItem("email");
    localStorage.removeItem("withWho");
    localStorage.removeItem("meal");
    localStorage.removeItem("inputMax");
    localStorage.removeItem("time");
    localStorage.removeItem("date");
    window.location.replace("index.html");
}

