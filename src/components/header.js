const container = document.querySelector(".container")

const header = () => {
    const div = document.createElement("div");
    div.className = "header";
    div.innerHTML = `
        <span>Home</span>
        <span>Service</span>
        <span>About</span>
    `
    container.appendChild(div);
}

export default header;