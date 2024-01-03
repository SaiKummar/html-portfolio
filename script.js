function copyToClipboard() {
    navigator.clipboard.writeText("saikummar94@gmail.com");
    let copyBtn = document.getElementById("copy");
    setTimeout(() => copyBtn.innerText = "copied!", 400)
    copyBtn.classList.add("button-clicked");
}