function displayChange(id) {
    let paragraph = document.getElementById(id);
    let visible = paragraph.style.display == "block";

    if (visible)
        paragraph.style.display = "none";
    else
        paragraph.style.display = "block"
}