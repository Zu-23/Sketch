const GRID = 700;
let row = 16;
const container = document.querySelector("#container");
container.style.width = `${GRID}px`;
container.style.height = `${GRID}px`;

createGrids();
//event
changeGridSize();
resetGrid();




function changeGridSize()
{
    const gridSizeBtn = document.getElementById("grid-size-btn");
    gridSizeBtn.onclick = () =>
        {
            let gridSize = prompt("Please enter a grid size between 1 and 100");
            gridSize = parseInt(gridSize);
            if (isNaN(gridSize) || gridSize < 1 || gridSize > 100)
                alert("Invalid Input")
            else
            {
                row = gridSize;
                createGrids();
            }
    }

}

function getRandomColor()
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createGrids()
{
    container.innerHTML = "";
    for (let i = 0; i < (row * row); i++)
    {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = `${(GRID / row)}px`;
        div.style.height = `${(GRID / row)}px`;
        container.appendChild(div);
    }
    colorSquares();
}

function resetColor()
{
    let squares = document.querySelectorAll(".grid");
    squares.forEach((square) =>{
        square.style.backgroundColor = "white";
    })
}

function resetGrid()
{
    let btn = document.querySelector(".clear-btn");
    btn.onclick = () =>
    {
        resetColor();
    }
}
function colorSquares()
{
    const grid = document.querySelectorAll(".grid");
    grid.forEach(square =>
    {
        square.addEventListener("mouseover", () =>
            {
                square.style.backgroundColor = getRandomColor();
            })
    })
}