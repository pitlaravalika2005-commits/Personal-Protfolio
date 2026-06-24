// Dark Mode Toggle

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.innerHTML = "☀️ Light Mode";
    }
    else{
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});


// Contact Form Validation

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "! Your message has been sent successfully."
    );

    form.reset();

});


// Smooth Navigation Highlight

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        this.classList.add("active");

    });

});


// Welcome Message

window.addEventListener("load", () => {

    console.log("Portfolio Website Loaded Successfully!");

});