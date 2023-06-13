function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var position = document.getElementById("position").value;
    var services = [];
    var checkboxes = document.querySelectorAll('input[name="services"]:checked');
    checkboxes.forEach(function(checkbox) {
        services.push(checkbox.value);
    });
    var projectdetails = document.getElementById("projectdetails").value;
    var budget = document.getElementById("budget").value;
    var deadline = document.getElementById("deadline").value;
    var howyoufoundme = document.getElementById("howyoufoundme").value;
    var phone = document.getElementById("phone").value;

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