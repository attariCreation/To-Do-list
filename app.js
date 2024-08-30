window.onload = function(){

	
		document.getElementById("inputValue").value = "";
		addStd
	

	

}
let serial = 1;

function addStd() {
    const main = document.getElementById("con");
    const inputValue = document.getElementById('inputValue').value;

    // Creating a parent div for the information of a student
    const stdInfo = document.createElement("div");
    stdInfo.className = "std";

    // Creating student info children one by one
    // Starting with the serial
    const stdSer = document.createElement("span");
    stdSer.className = "serial";
    stdSer.innerText = serial;

    // Appending this element into its parent element which is a div called stdInfo
    stdInfo.appendChild(stdSer);

    // Creating a name (child element) for the student name
    const stdName = document.createElement("input");
    stdName.className = "name";
    stdName.setAttribute('readonly', true);
    stdName.value = inputValue;

    stdName.onblur = function () {
        stdName.setAttribute('readonly', true);
        stdName.style.backgroundColor = "transparent";
        stdName.style.border = "none";
    }
    stdInfo.appendChild(stdName);

    // Creating an edit button
    const stdEdit = document.createElement("button");
    stdEdit.className = "edit";
    stdEdit.innerText = "Edit";
    stdInfo.appendChild(stdEdit);

    // Adding functionality to the edit button
    stdEdit.onclick = function() {
        stdName.removeAttribute('readonly');
        stdName.focus();
        stdName.style.backgroundColor = "whitesmoke";
        stdName.style.border = "1px solid black";
    }

    // Creating a delete button for stdInfo
    const stdDel = document.createElement("button");
    stdDel.className = "delete";
    stdDel.innerText = "delete";
    stdInfo.appendChild(stdDel);

    // Adding delete button functionality
    stdDel.onclick = function() {
        stdInfo.remove();
         if (stdInfo.length !== serial) {
         	alert("please wait while the serial sequence is being updated !");
         	setSerial();

         }
    }

    // Appending the student info div to the main container
    main.appendChild(stdInfo);
    serial++;
}
function setSerial(){
	  const stdElements = document.querySelectorAll('.std');

	 for (let i = 0; i < stdElements.length; i++) {
            stdElements[i].querySelector('.serial').innerText = i + 1;
           }

}
