const gridSize = 500;
function createGrid(size) {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.setAttribute('style', `width: 500px; height: 500px`);
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute('style', `width: 500px; height: ${500/size}px`);
        row.classList.add("rows");
        for (let j = 0; j < size; j++) {
            const col = document.createElement("div");
            col.classList.add("item");
            col.addEventListener('mouseover', e => {
                e.target.classList.add("beingHovered");
            });
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

function settingUp() {
    const input = document.querySelector("input");
    input.addEventListener("keydown", event => {
        if (event.key == "Enter") {
            let num = input.value;
            console.log(num);
            let size = parseFloat(num);
            if (isNaN(size)) {
                alert("Try again");
                
            } else {
                size > 100 ? size = 100 : size = size;
                createGrid(size);
            }
            input.value = "";
        }
        
    });
    // const btn = document.querySelector("button");
    // btn.addEventListener("click", e => {
    //     let gridValues = document.querySelectorAll(".item");
    //     Array.from(gridValues).forEach(el => el.removeAttribute("class", "beingHovered"));
    // });
    
}

settingUp();