function downloadFile(fileUrl, fileName) {
    let link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showDiv() {
    document.getElementById("contactpage").style.display = "flex";
}
function hideDiv() {
    document.getElementById("contactpage").style.display = "none";
}

//button contact whatsapp
function contactSeller() {
    let phoneNumber = "+2250173659493"; // Replace with the actual phone number
    let message = encodeURIComponent("Salut monsieur Soukou! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus, merci!");
    let url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
}

//for email
function sendEmail() {
    // Replace with your email address
    let email = "eskadebelair@gmail.com";
    let subject = "Un entretien";
    let body = "Salut monsieur Soukou Franck-Axel! nous venons de visiter votre portfolio et aimerions nous entretenir avec vous pour en savoir plus, merci!";

    // Format the mailto link
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
}
