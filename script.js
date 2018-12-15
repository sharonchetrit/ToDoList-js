// function emptyInput() {
//     document.getElementById("inputValue").value = "";
// }

// function addTask() {
// 	var add = document.createElement('li');
// 	var inputValue = document.getElementById('myInput').value;
// 	var text = document.createTextNode(inputValue);

// 	var countTasks = $('#myUl li').length;

// 	// Create a button
// 	var btn = document.createElement("button");
// 	var deleteBtn = document.createElement("button");
// 	var checkbox = document.createElement("input");
	
// 	// Add a unique ID - 'btnDone' + the amount of li elements.
// 	btn.id = 'btnDone' + countTasks;
// 	btn.innerHTML = 'complete';
//     btn.style = "float: right";

//     deleteBtn.innerHTML = 'delete';
//     deleteBtn.id = 'btnDelete' + countTasks;

// 	checkbox.setAttribute("type", "checkbox");
//     checkbox.id = "cbDone" + countTasks;


// 	add.appendChild(text);
// 	add.appendChild(btn);
// 	add.appendChild(deleteBtn);
// 	add.appendChild(checkbox);

	
// 	if (inputValue == '') {
// 		alert('You need to write something');
// 	} else {
// 		document.getElementById('myUl').appendChild(add);
// 	}

// 	// Add listener for click event to the button: change value & color of button when click
//     $(btn).click(function(){
//     	$(this).text('done');
//     	this.style.backgroundColor ="red";
//     	var $li = $(this).parent();
//     	$li.toggleClass("backgroundGreen");
//     })
	
// 	//delete button
// 	$(deleteBtn).on('click', function() {
// 		var $li = $(this).parent();
// 		$li.text('I have been clicked!');
// 		$li.remove();
// 	})

// 	//delete all items
// 	$("#clearBtn").on('click', function(){
// 		$("li").remove();
// 	})

// 	//checkbox
// 	$(checkbox).on("change", function(){
// 		$(this).text('done');
// 		// $(this).prop("checked")
// 		var $li = $(this).parent();
// 		$li.toggleClass("backgroundGreen");
// 	})

// }



function createTask() {
	var inputUser = document.getElementById("myInput").value;

	if(inputUser.length < 1) {
		return;
	}
	// creer ma li et inserer mon input
	var newList = document.createElement('li');
	document.getElementById('myUl').appendChild(newList);
	var text = document.createTextNode(inputUser);
	var myLi = document.getElementsByTagName("li");

	//creer checkbox
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.classList.add("btnCheck");

	//creer remove
	var btnRemove = document.createElement("button");
	newList.appendChild(btnRemove);
	var textBtn = document.createTextNode("remove");
	btnRemove.appendChild(textBtn);
	btnRemove.classList.add("btnRemove");

	//recuperer element et l ajouter a la derniere li
	myLi[myLi.length - 1].appendChild(text);
	myLi[myLi.length - 1].appendChild(checkbox);
	myLi[myLi.length -1].appendChild(btnRemove);

	$("#inputUser").val("");

	$(".btnCheck").on("click", changeStateElement);
	$(".btnRemove").on("click", removeElement);
	$("#clearBtn").on('click', function(){
		$("li").remove();
	})

}


function changeStateElement() {
	//recupere parent checkbox: li
	var parentOfCheckbox = (this).parentElement;
	//creer var av true or false (checked)
	var stateCheckBox = (this).checked;

	if(stateCheckBox){
		parentOfCheckbox.classList.add("backgroundGreen");
	}
	else{
		parentOfCheckbox.classList.remove("backgroundGreen");
	}

	// this.toggleClass("backgroundGreen");
} 

function removeElement() {
	var ul = (this).parentElement.parentElement;
	ul.removeChild(this.parentElement);
	
}

// function addToCategory() {
// 	contructor(description, type){
// 		this.description = description
// 		this.type = type
// }

function createTaskHtml(){
	task = document.getElementById(myInput)
}





