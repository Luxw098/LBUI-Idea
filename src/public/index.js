
function enter_animation(element, x, y) {
    element.animate(
        [
            { transform: `translate(${x[0]}, ${y[0]})` },
            { transform: `translate(${x[1]}, ${y[1]})` }
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.5, 0, 0.5, 1.1)",
            fill: "forwards"
        }
    );
};

addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";
    console.log(2)
    const overlay = document.getElementById("overlay");
    const account = document.getElementById("account");
    const header = document.getElementById("header");
    const content = document.getElementById("content");

    enter_animation(account, ["-100%", "0%"], ["0%", "0%"]);
    enter_animation(header, ["0", "0%"], ["-100%", "0%"]);
    enter_animation(content, ["0%", "0%"], ["120%", "0%"]);

    overlay.hidden = true;
    
    setTimeout(() => {
        document.body.style.overflow = "visible";
    }, 1000);
});

function update_theme(theme) {
    if (theme == "l") {
        document.documentElement.style.setProperty('--color-primary', '#fff');
        document.documentElement.style.setProperty('--color-secondary', '#eee');
        document.documentElement.style.setProperty('--color-trimary', '#ddd');
        document.documentElement.style.setProperty('--color-text', '#666');
    } else {
        document.documentElement.style.setProperty('--color-primary', '#222');
        document.documentElement.style.setProperty('--color-secondary', '#333');
        document.documentElement.style.setProperty('--color-trimary', '#444');
        document.documentElement.style.setProperty('--color-text', '#eee');
    };
}
function switch_theme() {
    const theme = localStorage.getItem("theme");
    const newTheme = theme == "d" ? "l" : "d";

    update_theme(newTheme);

    localStorage.setItem("theme", newTheme);
};
update_theme(localStorage.getItem("theme") || "d");
