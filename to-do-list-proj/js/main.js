// to add the func to the butoon 
function todolist() {
	// this to take the text from the user
	var item = document.getElementById('todoinput').value;
	// here we add ne var to take the text from the user and print it
     var text = document.createTextNode(item);
     // here we add the li for our <ol> 
     var newitem = document.createElement('li');
     // here we add the user text to our li
     newitem.appendChild(text);
     // here we called our <ol>
	var newol = document.getElementById('todolist');
	// here we connact our <ol> with the li
	newol.appendChild(newitem);
}