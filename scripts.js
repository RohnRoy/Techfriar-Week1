function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const project = document.getElementById("project").value;
    const message = document.getElementById("message").value;
    
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const projectError = document.getElementById("project-error");
    const messageError = document.getElementById("message-error");

    let isValid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    projectError.textContent = "";
    messageError.textContent = "";

    // Name validation
    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    // Email validation
    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    if (phone === "" || !/^\+?\d{10,15}$/.test(phone)) {
        phoneError.textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    // Project Requirement validation
    if (project === "") {
        projectError.textContent = "Please select your project type.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

    return isValid;
}

/* validation for Hire Me Page Modal */

function validateHireForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contact-number").value;
    const projectRequirement = document.getElementById("project-requirement").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const contactNumberError = document.getElementById("contact-number-error");
    const projectRequirementError = document.getElementById("project-requirement-error");

    let isValid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    contactNumberError.textContent = "";
    projectRequirementError.textContent = "";

    
    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    
    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (contactNumber === "" || !/^\+?\d{10,15}$/.test(contactNumber)) {
        contactNumberError.textContent = "Please enter a valid contact number.";
        isValid = false;
    }

    if (projectRequirement === "") {
        projectRequirementError.textContent = "Please select your project requirement.";
        isValid = false;
    }

    return isValid;
}
