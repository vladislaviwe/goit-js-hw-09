const refs = {
    timer: document.querySelector(".timer"),
    fieldValue: document.querySelectorAll(".value"),
    fieldLabel: document.querySelectorAll(".label"),
}

refs.timer.style.display = "flex";
refs.fieldValue.forEach(e => {
    e.style.cssText = 'font-size: 20px; font-weight: bold; color: tomato;';
});

refs.fieldLabel.forEach(e => {
    e.style.cssText = 'margin-right: 5px';
});

