function setTable() {
    var name = localStorage.getItem("name")
    
}

class createPost {
    constructor(name, information, shareWith, image) {
      this.name = name; 
      this.information = information; 
      this.shareWith = shareWith;
      this.image = image;
    }
    getName(){
      return this.name
    }
  }
let image_link = "https://thecozycook.com/wp-content/uploads/2019/08/Bolognese-Sauce-500x500.jpg"
let info = "I made spagetti for lunch and have some left over. Park Row 3D. Food for 5 people."
let info2 = "I made brownies for some friends so and have 10 pieces left. Brunswick Apartments G4. Food for 10 people."
let image2 = "https://www.chewoutloud.com/wp-content/uploads/2015/03/Fudgy-Brownies-Square.jpg"
lunch = new createPost("Bhadra", info, "All", image_link)
snack = new createPost("Kavya", info2, "Friends Only", image2)

  function setTable() {
    const users = [lunch, snack]
   
    const table = document.getElementById('myTable');
    // Create header row
		const headerRow = document.createElement('tr');
		const nameHeader = document.createElement('th');
		const inforHeader = document.createElement('th');
        const shareWithHeader = document.createElement('th');
		const imageHeader = document.createElement('th');
        const reactHeader = document.createElement('th');
		
  
		
        headerRow.appendChild(nameHeader);
		headerRow.appendChild(inforHeader);
        headerRow.appendChild(shareWithHeader);
		headerRow.appendChild(imageHeader);
        headerRow.appendChild(reactHeader);
       
       

		table.appendChild(headerRow);

		// Loop through list and add rows to table
		users.forEach(item => {
			const row = document.createElement('tr');
			const nameCell = document.createElement('td');
			const infoCell = document.createElement('td');
            const shareCell = document.createElement('td');
			const imageCell = document.createElement('img');
            const likeButton = document.createElement("button");
            
            const comment = document.createElement("button");
            
            
    
			
			nameCell.innerText = item.name;
			infoCell.innerText = item.information.replaceAll(".", "\n")
            shareCell.innerText = item.shareWith
            imageCell.src = item.image
            likeButton.innerText = "Like";
            comment.innerText = "Comment";
     

			row.appendChild(nameCell);
			row.appendChild(infoCell);
            row.appendChild(shareCell);
			row.appendChild(imageCell);
            row.append(likeButton, comment);
            
			table.appendChild(row);
     
    
		});

        
		





    
}
