function commentap() {

var inp = document.getElementById('comentap').value
var text = document.createTextNode(inp);
var newele = document.createElement('li')
newele.appendChild(text)
var ulele = document.getElementById('comappp')
ulele.appendChild(newele)
var tarea = document.getElementById('comap').value;
var texta = document.createTextNode(tarea);
var newel = document.createElement('li')

newel.appendChild(texta)
var ulel = document.getElementById('comappp')
ulel.appendChild(newel)

var newimg = document.getElementById('imge').value


}