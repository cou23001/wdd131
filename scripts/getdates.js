function getDate() {
    let date = new Date().toLocaleString();
    return date;
}

document.getElementById("dat").innerHTML = getDate();
