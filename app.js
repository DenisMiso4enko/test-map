import {buttons} from "./data/data.js";

function renderButtons(buttonsArray) {
    const container = document.querySelector(".container");

    buttonsArray.forEach(btn => {
        const button = document.createElement("button");
        const span = document.createElement("span");
        button.textContent = btn.icon;
        button.id = btn.id;
        button.className = btn.btnClass;
        span.className = btn.spanClass;
        span.textContent = btn.text;
        button.appendChild(span);
        container.appendChild(button);
    });
}

renderButtons(buttons);

window.addEventListener('click', e => {
    const btnCollection = document.querySelectorAll('.btn');
    if (!e.target.closest('.btn')) {
        btnCollection.forEach(el => el.classList.remove('active'))
        return;
    }
    const btnEl = e.target;
    if (btnEl.classList.contains("active")) {
        btnEl.classList.remove('active');
    } else {
        btnEl.classList.add('active');
    }
})

