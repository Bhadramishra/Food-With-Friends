class user {
    constructor(name, withWho, numPpl, email, date, time) {
      this.name = name; 
      this.withWho = withWho; 
      this.numPpl = numPpl;
      this.email = email;
      this.date = date;  
      this.time = time; 
    }
  }
  
  Kavya = new user("Kavya", "Close", 5, "k@bowdoin.edu", "2023-04-08", "11:00am" );
  Bhadra = new user("Bhadra", "Anyone", 2, "b@bowdoin.edu", "2023-05-08", "11:00am" );
  Film = new user("Film", "Anyone", 1, "f@bowdoin.edu", "2023-04-08", "11:45am" );
  Diyaa = new user("Diyaa", "Anyone", 10, "d@bowdoin.edu", "2023-04-08", "7:00am" );

    

  function otherUsers() {
    //first somehow get from API
    //store everyone who has submitted something (made post request) in a list
    const users = [Kavya, Bhadra, Film, Diyaa]; 
    console.log(users);
    window.localStorage.setItem("otherUsers", JSON.stringify(users)); 
    console.log(localStorage.getItem("otherUsers"));
  }


function submitPlan() {
    window.localStorage.setItem('email',  document.getElementById("email").value);
    window.localStorage.setItem('withWho', document.getElementById("withWho").value);
    window.localStorage.setItem('meal',  document.getElementById("meal").value);
    window.localStorage.setItem('inputMax',   document.getElementById("inputMax").value);
    window.localStorage.setItem('time',  document.getElementById("time").value);
    window.localStorage.setItem('date',  document.getElementById("date").value);

    var email = localStorage.getItem("email");
    var withWho = localStorage.getItem("withWho");
    var meal = localStorage.getItem("meal");
    var inputMax = localStorage.getItem("inputMax");
    var time = localStorage.getItem("time");
    var date = localStorage.getItem("date");

    if (!email.includes("@bowdoin.edu")) {
        alert("Email must be a valid Bowdoin email!")
        return false;
    }
    if (email == "" || withWho == null || meal == null || inputMax == null || time == null || date == "") {
        alert("All fields are required!")
        return false;
    }
    else {
        window.location.replace("review.html");
    }
    
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

function cancelPlan() {
    
}

//this is called from the review page
//it redirects to match loading page
function findMatch() {
    window.location.href = "match_loading.html"; 

}

function matches() {
    others = window.localStorage.getItem("users");
    matches = [];
    var email = localStorage.getItem("email");
    var withWho = localStorage.getItem("withWho");
    var inputMax = localStorage.getItem("inputMax");
    var time = localStorage.getItem("time");
    var date = localStorage.getItem("date");
    for (let i = 0; i < others.length; i++) {
        if (matches.length == inputMax) {
            break; 
        }
        
        if (others[i].withWho == "Close") {
            continue;
        }

        if (others[i].date != date) {
            continue;
        }

        if (others[i].time != time) {
            continue;
        }

        //when date and time match 
        if (others[i].inputMax < matches.length) {
            matches.push(others[i]);
        } 
    }

    var meal = localStorage.getItem("meal");
    document.getElementById("meal").innerHTML = "Meal: " + meal;
    document.getElementById("date").innerHTML = "Date" + date;
    document.getElementById("time").innerHTML = "Time" + time;

}
