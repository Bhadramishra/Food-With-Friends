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


function goHome() {
    window.location.href = "index.html"
}

function schedulePage() {
    window.location.href = "meal-schedule.html"
}

function closeFriends() {
    window.location.href = "close_friends.html"
}


function getMeal() {
    window.location.href = "preference_form.html";
}