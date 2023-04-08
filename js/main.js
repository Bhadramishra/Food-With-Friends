class user {
    constructor(name, withWho, numPpl, email, date, time) {
      this.name = name; 
      this.withWho = withWho; 
      this.numPpl = numPpl;
      this.email = email;
      this.date = date;  
      this.time = time; 
    }

    set name(name) {
        this.name = name; 

    }

    set withWho(withWho) {
        this.withWho = withWho; 

    }

    set numPpl(numPpl) {
        this.numPpl = numPpl;

    }

    set email(email) {
        this.email = email;

    }

    set date(date) {
        this.date = date; 

    }

    set time(time) {
        this.time = time; 
    }

    get name() {
        return this.name; 
    }

    get withWho() {
        return this.withWho;
    }
    

    get numPpl() {
        return this.numPpl;

    }

    get email() {
        return this.email; 


    }

    get date() {
        return this.date;

    }

    get time() {
        return this.time; 
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
    window.localStorage.setItem("otherUsers", users); 
    console.log(localStorage.getItem(users));
  }


function submitPlan() {
    window.localStorage.setItem('email',  document.getElementById("email").value);
    window.localStorage.setItem('withWho', document.getElementById("withWho").value);
    window.localStorage.setItem('meal',  document.getElementById("meal").value);
    window.localStorage.setItem('inputMax',   document.getElementById("inputMax").value);
    window.localStorage.setItem('time',  document.getElementById("time").value);
    window.localStorage.setItem('date',  document.getElementById("date").value);
    var email = document.getElementById("email").value;
    var who = document.getElementById("withWho").value;
    var date = document.getElementById("date").value;
  

    if(date == "" || email == "" || who == "null"){
        alert("All fields are required!");
        return false;
    }
    
    else{
        window.location.replace("review.html");
    }
    
}


function validate(){
    var email = document.getElementById("email").value;
    var who = document.getElementById("withWho").value;
    var date = document.getElementById("date").value;
  

    if(date == "" || email == "" || who == "null"){
        alert("All fields are required!");
        return false;
    }
    
    else{
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