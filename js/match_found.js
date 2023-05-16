/**
 * Kavya = new user("Kavya", "Close", 5, "k@bowdoin.edu", "2023-04-08", "11:00am" );
  Bhadra = new user("Bhadra", "Anyone", 2, "b@bowdoin.edu", "2023-05-08", "11:00am" );
  Film = new user("Film", "Anyone", 1, "f@bowdoin.edu", "2023-04-08", "11:45am" );
  Diyaa = new user("Diyaa", "Anyone", 10, "d@bowdoin.edu", "2023-04-08", "7:00am" );
 */

//this is called upon match found loading
//this is how the matches are found (it iterates through the stored users, and compares to the values in local storage)


function checkMatchFound(){
    if (JSON.parse(localStorage.getItem('matches')).length === 0){
     window.location.href = "match_not_found.html"
    }
    else {
      window.location.href = "match_found.html"
  }
}


function matches() {
    others = window.localStorage.getItem("otherUsers");
    others = JSON.parse(others);
    var matches = [];

    var myName = localStorage.getItem("name");
    var email = localStorage.getItem("email");
    var withWho = localStorage.getItem("withWho");
    var inputMax = localStorage.getItem("inputMax");
    var time = localStorage.getItem("time");
    var date = localStorage.getItem("date");
    var meal = localStorage.getItem("meal");
    
    // try to get the CLOSEFRIENDS working!!!!

    if (withWho.includes("Close")) {
        testFriends()
        return;
    }


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
        if (others[i].numPpl > matches.length) {
            matches.push(others[i]);

        } 
    }
    window.localStorage.setItem("matches", JSON.stringify(matches));
}

function showMatches(){
    // console.log(JSON.parse(localStorage.getItem('matches')));
    var names = "";
    var match = JSON.parse(localStorage.getItem('matches'));
    for (i = 0; i < JSON.parse(localStorage.getItem('matches')).length; i++) {
        var nameM = JSON.parse(localStorage.getItem('matches'))[i].name;
        var emailM = JSON.parse(localStorage.getItem('matches'))[i].email;
        names += "<li>"+nameM + " " + emailM +"</li>";

    }
    //display date in MM/DD/YYYY format
    var dateSplit = match[0].date.split("-");
    date = dateSplit[1]+"/"+dateSplit[2]+"/"+dateSplit[0]

    document.getElementById("you").innerHTML = localStorage.getItem("name");
    document.getElementById("matches").innerHTML = names;
    document.getElementById("Meal").innerHTML = "Meal: " + localStorage.getItem("meal");
    document.getElementById("Date").innerHTML = "Date: " + match[0].date;
    document.getElementById("Time").innerHTML = "Time: " + match[0].time;
}

//     if (matches.length == 0) {
//         window.location.href = "match_not_found.html";
        
//     } 
// }



function testFriends() {
    friends = localStorage.getItem("friends")
    friends = JSON.parse(friends);
    let matches = [];

    var myName = localStorage.getItem("name");
    var email = localStorage.getItem("email");
   
    var inputMax = localStorage.getItem("inputMax");
    var time = localStorage.getItem("time");
    var date = localStorage.getItem("date");
    var meal = localStorage.getItem("meal");

    for (let i = 0; i < friends.length; i++) {
        if (matches.length == inputMax) {
            break; 
        }
        

        if (friends[i].date != date) {
            continue;
        }


        if (friends[i].time != time) {
            continue;
        }

        //when date and time match 
        if (friends[i].numPpl > matches.length) {
            matches.push(friends[i]);

        } 
    }
    window.localStorage.setItem("matches", JSON.stringify(matches)); 

    var names = "";
    for (i = 0; i < matches.length; i++) {
        var nameM = matches[i].name;
        var emailM = matches[i].email;
        names += "<li>"+nameM + " " + emailM +"</li>";

    }
    //display date in MM/DD/YYYY format
    var dateSplit = date.split("-");
    date = dateSplit[1]+"/"+dateSplit[2]+"/"+dateSplit[0]

    document.getElementById("you").innerHTML = myName;
    document.getElementById("matches").innerHTML = names;
    document.getElementById("Meal").innerHTML = "Meal: " + meal;
    document.getElementById("Date").innerHTML = "Date: " + date;
    document.getElementById("Time").innerHTML = "Time: " + time;
   
    if (matches.length == 0) {
        window.location.href = "match_not_found.html";
        
    } 
  }
