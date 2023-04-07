function addElement() {
    // create a new div element
    const scheduledDisplay = document.createElement("div");
    const scheduledBox = document.createElement("rectangle");
    
    // and give it some content
    const newBox = document.createElement("rectangle");
    const newBoxIcon = document.createElement("img");
    const newBoxHeader = document.createElement("h1");
    const newBoxParagraph = document.createElement("p");
    
    // add the text node to the newly created div
    scheduledDisplay.appendChild(newBox);
    scheduledDisplay.appendChild(newBoxIcon);
    scheduledDisplay.appendChild(newBoxHeader);
    scheduledDisplay.appendChild(newBoxParagraph);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    //here get element of which ever dic comes before this
    document.body.insertBefore(scheduledBoxDiv, currentDiv);
  }
  
  