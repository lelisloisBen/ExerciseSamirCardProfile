function coverChange(val) {
    let imgSrc = `<img src='https://wallpapercave.com/wp/wp2465958.jpg' />`;
    if (val === "null"|| val === "true") {
        document.body.querySelector('#coverId').innerHTML = imgSrc;
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

function lastNameChange(val) {
    if (val === '') {
        document.body.querySelector('#lastName').innerHTML = "Benzada";
    } else {
        document.body.querySelector('#lastName').innerHTML = val;
    }
}

function socialMediaPositionChange(val) {
    if (val === '') {
        document.body.querySelector('#pos').className = "position-right";
    } else {
        document.body.querySelector('#pos').className = val;
    }
}

function twitterChange(val) {
    if (val === '') {
        document.body.querySelector('#twitter').href = "https://twitter.com/";
    } else {
        document.body.querySelector('#twitter').href = `https://twitter.com/${val}`;
    }
}

function githubChange(val) {
    if (val === '') {
        document.body.querySelector('#github').href = "https://github.com/";
    } else {
        document.body.querySelector('#github').href = `https://github.com/${val}`;
    }
}

function linkedinChange(val) {
    if (val === '') {
        document.body.querySelector('#linkedin').href = "https://linkedin.com/";
    } else {
        document.body.querySelector('#linkedin').href = `https://linkedin.com/${val}`;
    }
}

function instagramChange(val) {
    if (val === '') {
        document.body.querySelector('#instagram').href = "https://instagram.com/";
    } else {
        document.body.querySelector('#instagram').href = `https://instagram.com/${val}`;
    }
}

function roleChange(val) {
    if (val === '') {
        document.body.querySelector('#role').innerHTML = "Developer";
    } else {
        document.body.querySelector('#role').innerHTML = val;
    }
}

function cityChange(val) {
    if (val === '') {
        document.body.querySelector('#city').innerHTML = "Miami";
        document.body.querySelector('#country').innerHTML = "USA";
    } else {
        if (val === 'Miami') {
            document.body.querySelector('#city').innerHTML = val;
            document.body.querySelector('#country').innerHTML = "USA";
        }
        if (val === 'Munich') {
            document.body.querySelector('#city').innerHTML = val;
            document.body.querySelector('#country').innerHTML = "Germany";
        }
        if (val === 'Caracas') {
            document.body.querySelector('#city').innerHTML = val;
            document.body.querySelector('#country').innerHTML = "Venezuela";
        }
        if (val === 'Toronto') {
            document.body.querySelector('#city').innerHTML = val;
            document.body.querySelector('#country').innerHTML = "Canada";
        }
    }
}

function countryChange(val) {
    if (val === '') {
        document.body.querySelector('#country').innerHTML = "USA";
        document.body.querySelector('#city').innerHTML = "Miami";
    } else {
        if (val === "USA") {
            document.body.querySelector('#country').innerHTML = val;
            document.body.querySelector('#city').innerHTML = "Miami";
        }
        if (val === "Germany") {
            document.body.querySelector('#country').innerHTML = val;
            document.body.querySelector('#city').innerHTML = "Munich";
        }
        if (val === "Venezuela") {
            document.body.querySelector('#country').innerHTML = val;
            document.body.querySelector('#city').innerHTML = "Caracas";
        }
        if (val === "Canada") {
            document.body.querySelector('#country').innerHTML = val;
            document.body.querySelector('#city').innerHTML = "Toronto";
        }

    }
}

// function inputFileChange(val) {
//     document.body.querySelector('#img').innerHTML = `<img src="${val}" />`;
//     console.log(val);
// }
// console.log(document.body.querySelector('#avatar'));

 function inputFileChange(event) {
    var output = document.body.querySelector('#output');
    output.src = URL.createObjectURL(event.target.files[0]);
  };




