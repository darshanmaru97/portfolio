const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll('.tab-pane');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabContent.forEach(content => {
            content.classList.remove('active');
        });
        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal(".container1", {
    origin: "bottom"
});

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function sendMail() {
    document.getElementById("contactParams").addEventListener("submit", function(event) {
        event.preventDefault();
        let fullName = document.getElementById("name").value;
        let userEmail = document.getElementById("email").value;
        let userMessage = document.getElementById("message").value;
        let userPhone = document.getElementById("phone").value;
        var contactParams = {
            from_name: fullName,
            email_id: userEmail,
            message: userMessage,
            phone: userPhone,
        };
        this.reset(event);
        let success = document.getElementById("sendButton");
        emailjs.send("service_3wxmkjv", "template_mcn9h0j", contactParams, "KqEEM3RvZCQJfwhOb").then(function(response) {
            // success.innerHTML = `Successfully Send`;
            alert("Successfully Send");
        }, function(error) {
            console.log("FAILED...", error);
            // success.innerHTML = `Failed...`;
            alert('Failed...');
        });
    });
}


const hello = "Hello Worlds";

console.log(hello);