const section = document.querySelector("section");
const panel = document.querySelector(".panel");
const btns = document.querySelectorAll(".btns li");
const title = document.querySelector("h1");
const colors = ["rgb(229, 149, 93)", "rgb(249, 246, 197)", "rgb(52, 198, 3)", "rgb(75, 135, 255)", "rgb(219, 29, 162)"];

btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const isOn = btn.classList.contains("on");
        if (isOn) return;

        activation(index);
    })
});

function activation(index) {
    new Anime(panel, {
        prop: "margin-left",
        value: (-100 * index) + "%",
        duration: 1000,
    })

    for (const btn of btns) {
        btn.classList.remove("on");
    }
    btns[index].classList.add("on");

    title.style.color = colors[index];
}