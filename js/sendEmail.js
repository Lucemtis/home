function sendEmail() {
    var name = sanitizeInput(document.getElementById("name").value);
    var email = sanitizeInput(document.getElementById("email").value);
    var company = sanitizeInput(document.getElementById("company").value);
    var position = sanitizeInput(document.getElementById("position").value);
    var services = [];
    var checkboxes = document.querySelectorAll('input[name="services"]:checked');
    checkboxes.forEach(function(checkbox) {
        services.push(sanitizeInput(checkbox.value));
    });
    var projectdetails = sanitizeInput(document.getElementById("projectdetails").value);
    var budget = sanitizeInput(document.getElementById("budget").value);
    var deadline = sanitizeInput(document.getElementById("deadline").value);
    var howyoufoundme = sanitizeInput(document.getElementById("howyoufoundme").value);
    var phone = sanitizeInput(document.getElementById("phone").value);

    var subject = encodeURIComponent(name + " - " + company + " - " + services.join(", "));
    var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Company: " + company + "\n" +
        "Position: " + position + "\n" +
        "Services requested: " + services.join(", ") + "\n" +
        "Project details: " + projectdetails + "\n" +
        "Budget: " + budget + "\n" +
        "Deadline expectations: " + deadline + "\n" +
        "How you found me: " + howyoufoundme + "\n" +
        "Phone number: " + phone + "\n\n" +
        "Contact e-mail: " + email
    );
    var mailtoLink = "mailto:lucemtismioky@email.com"
        + "?subject=" + subject
        + "&body=" + body;

    window.location.href = mailtoLink;
}

function sanitizeInput(input) {
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}