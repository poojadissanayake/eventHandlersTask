let count = 0;
let container = document.getElementById("onclick-container");

function modifyContent() {

    count++;
    // console.log(count);

    let currentTime = new Date().toTimeString();
    let currentDate = new Date().toDateString();
    let button = document.getElementById("btn-start");

    document.getElementById("clicked").innerHTML = 'Well done you clicked the button!';
    document.getElementById("currentTime").innerHTML = `<li> At time : ${currentTime} </li>`;
    document.getElementById("currentDate").innerHTML = `<li> On date :  ${currentDate} </li>`;
    document.getElementById("mouseover-content").innerHTML = 'Move your mouse over to change the background colour.';


    if (count <= 5) {
        container.style.display = "block";
        button.value = `Try again.. Pressed ${count} times`;
    } else {
        container.style.display = "none";
        button.value = "Click to Re-Start";
        count = 0;
    }

}

function mouseOver() {
    container.style.backgroundColor = "violet";
}

function mouseOut() {
    container.style.backgroundColor = '';
}