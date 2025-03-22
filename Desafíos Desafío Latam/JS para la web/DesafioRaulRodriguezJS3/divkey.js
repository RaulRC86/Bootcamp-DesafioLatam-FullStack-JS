var divKey= document.querySelector("#key")

divKey.style.width="200px"
divKey.style.height="200px"
divKey.style.backgroundColor=""
divKey.style.border="solid black"

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        divKey.style.backgroundColor="pink";
    } else if (event.key==='s') {
        divKey.style.backgroundColor="orange";
    } else if (event.key==="d"){
        divKey.style.backgroundColor="lightBlue"
    } 
});


document.addEventListener('keydown', function(event) {

    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {

        var newDiv = document.createElement('div');
        

        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.border = "solid black";


        if (event.key === 'q') {
            newDiv.style.backgroundColor = "purple";
        } else if (event.key === 'w') {
            newDiv.style.backgroundColor = "gray";
        } else if (event.key === 'e') {
            newDiv.style.backgroundColor = "brown";
        }

        document.body.appendChild(newDiv);
    }
});


