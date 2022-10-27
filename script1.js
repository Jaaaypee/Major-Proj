
var request = new XMLHttpRequest();
request.open('GET', "https://zoo-animal-api.herokuapp.com/animals/rand/10");
request.onload = function () {
 var response = request.response;
 var parsedData = JSON.parse(response);
 var cpe = parsedData.name;
 for (count in parsedData) {

    var cpe = parsedData[count].name;
    var cpe2 = parsedData[count].image_link;
    var cpelatin = parsedData[count].latin_name;
    var animal = parsedData[count].animal_type;
    var active = parsedData[count].active_time;

    var cpe41 = document.createElement('li');
    var cpename = document.createElement('li');
    var cpetype = document.createElement('li');
    var time = document.createElement('li');
    var cpeimg = document.createElement('img');

    cpe41.innerHTML = cpe;
    cpename.innerHTML = cpelatin;
    cpetype.innerHTML = animal;
    time.innerHTML = active;
    cpeimg.innerHTML = cpe2;

    cpeimg.setAttribute('src', cpe2);
    document.body.appendChild(cpe41);
    document.body.appendChild(cpename);
    document.body.appendChild(cpetype);
    document.body.appendChild(time);
    document.body.appendChild(cpeimg);
 }


 console.log(parsedData);
 console.log(cpe);
 
 }
 request.send();