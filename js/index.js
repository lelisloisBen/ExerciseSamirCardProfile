// The two exemple function work...
function coverChange(val) {
    if (val === "null"|| val === "true") {
        document.body.querySelector('#coverId').innerHTML = `<img src='https://images.unsplash.com/photo-1511974035430-5de47d3b95da' />`
    } else {
        document.body.querySelector('#coverId').innerHTML = '';
    }
}

function firstNameChange(val) {
    if (val === '') {
        document.body.querySelector('#firstName').innerHTML = "Samir";
    } else {
        document.body.querySelector('#firstName').innerHTML = val;
    }
    
}

// write your code below