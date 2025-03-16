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