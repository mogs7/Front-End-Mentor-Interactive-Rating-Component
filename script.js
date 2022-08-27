let selected;

const submitButton = document.getElementById("submit-button").addEventListener('click', showThankYou);
const getButtonRatingClass = document.querySelectorAll(".button-rating")
getButtonRatingClass.forEach(buttonRating => {
    buttonRating.addEventListener('click', selectOption);
});

function selectOption(event){
    selected = this.id; 
}

function showThankYou (event) {
    if (selected == undefined) {
        alert("Please rate before submitting");
    }
    else {
        let getThankYouDiv = document.getElementById("thank-you");
        let getRatingContainerDiv = document.getElementById("rating");
        if (getThankYouDiv.style.display === "none") {
            getThankYouDiv.style.display = "flex";
            let getRatingOutput = document.getElementById("star-rating");
            getRatingOutput.textContent = "You selected " + selected + " out of 5";
            getRatingContainerDiv.style.display = "none";
            selected = undefined;
        }
    }
}

