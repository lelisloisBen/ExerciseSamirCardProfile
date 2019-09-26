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
    } else {
        document.body.querySelector('#city').innerHTML = val;
    }
}

function countryChange(val) {
    if (val === '') {
        document.body.querySelector('#country').innerHTML = "USA";
    } else {
        document.body.querySelector('#country').innerHTML = val;
    }
}






