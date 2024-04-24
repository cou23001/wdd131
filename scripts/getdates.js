function getDate() {
    //let date = new Date().toLocaleString();
    let date = new Date(document.lastModified);
    return date;
}

document.getElementById("dat").innerHTML = getDate();
