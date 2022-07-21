const section = document.querySelector("section");
const panel = document.querySelector(".panel");
const btns = document.querySelectorAll(".btns li");

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
}