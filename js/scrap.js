const button = document.getElementById("btn");
const displayNextThree = () => {
    for (let i = 0; i < 3; i++) {
        const picElement = document.getElementById(i);
        urls[3 * counter + i]
            ? picElement.setAttribute("src", urls[3 * counter + i])
            : picElement.setAttribute("src", "");
    }
    counter >= urls.length / 3 - 1 ? (counter = 0) : counter++;
};

let urls;
let counter = 0;
fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    .then((data) => (urls = data))
    .then(() => {
        urls = urls.map((pic) =>
            pic.url.replace("://", "://source.").replace("photos/", "")
        );
        displayNextThree();
    });

button.addEventListener("click", displayNextThree);
