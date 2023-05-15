class user {
    constructor(name, withWho, numPpl, email, date, time) {
      this.name = name; 
      this.withWho = withWho; 
      this.numPpl = numPpl;
      this.email = email;
      this.date = date;  
      this.time = time; 
    }
    getName(){
      return this.name
    }
  }

  class createPost {
    constructor(name, information, numPpl, email, date, time) {
      this.name = name; 
      this.withWho = withWho; 
      this.numPpl = numPpl;
      this.email = email;
      this.date = date;  
      this.time = time; 
    }
    getName(){
      return this.name
    }
  }
  
  Kavya = new user("Kavya", "Close", 5, "k@bowdoin.edu", "2023-04-08", "11:00am" );
  Saraswati = new user("Saraswati", "Anyone", 2, "s@bowdoin.edu", "2023-05-08", "11:00am" );
  Bhadra = new user("Bhadra", "Anyone", 2, "b@bowdoin.edu", "2023-05-08", "11:00am" );
  Film = new user("Film", "Anyone", 1, "f@bowdoin.edu", "2023-04-08", "11:45am" );
  Diyaa = new user("Diyaa", "Anyone", 10, "d@bowdoin.edu", "2023-04-08", "7:00am" );
  Chadani = new user("Chadani", "Close", 6, "c@bowdoin.edu", "2023-05-08", "11:00am" );
  Isabella = new user("Isabella", "Close", 6, "i@bowdoin.edu", "2023-05-08", "11:00am" );
  Janavi = new user("Janavi", "Close", 5, "j@bowdoin.edu", "2023-04-08", "11:45am" );
  Pam = new user("Pam", "Close", 10, "p@bowdoin.edu", "2023-04-08", "7:00am" );
  

  function setTable() {
    const users = [Kavya, Chadani, Isabella, Janavi, Pam]
   
    const table = document.getElementById('myTable');
    // Create header row
		const headerRow = document.createElement('tr');
		const nameHeader = document.createElement('th');
		const emailHeader = document.createElement('th');
		
  
		
    headerRow.appendChild(nameHeader);
		headerRow.appendChild(emailHeader);


		table.appendChild(headerRow);

		// Loop through list and add rows to table
		users.forEach(item => {
			const row = document.createElement('tr');
			const nameCell = document.createElement('td');
			const emailCell = document.createElement('td');
    
			
			nameCell.innerText = item.name;
			emailCell.innerText = item.email;
     

			row.appendChild(nameCell);
			row.appendChild(emailCell);
     
     
     
      

			

			table.appendChild(row);
     
    
		});



    
}

  function addFriend() {
    const friends = [Kavya, Chadani, Janavi, Isabella, Pam]
    window.localStorage.setItem("friends", JSON.stringify(friends)); 
    

  }
  function otherUsers() {
    //first somehow get from API
    //store everyone who has submitted something (made post request) in a list
    const users = [Bhadra, Film, Diyaa, Saraswati]; 
    
    window.localStorage.setItem("otherUsers", JSON.stringify(users)); 
    const friends = [Kavya, Chadani, Janavi, Isabella, Pam]
    window.localStorage.setItem("friends", JSON.stringify(friends)); 
   
  }


function goHome() {
    window.location.href = "index.html"
}

function aboutUs() {
    window.location.href = "about_us.html"
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

function shareFood() {
  window.location.href = "share_food.html";
}

function foodfeed() {
  window.location.href = "foodfeed.html";
}