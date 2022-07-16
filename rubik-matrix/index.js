const squareMatrix = document.querySelectorAll('.square');
const messageBox = document.querySelector('h3');

for (let i = 0; i < squareMatrix.length; i++) {
    squareMatrix[i].key = i;
    squareMatrix[i].addEventListener('click', ()=>{clickedSquare(i)})
}

squareMatrix[0].color = 0;
squareMatrix[1].color = 1;
squareMatrix[2].color = 0;
squareMatrix[3].color = 1;
squareMatrix[4].color = 2;
squareMatrix[5].color = 1;
squareMatrix[6].color = 0;
squareMatrix[7].color = 1;
squareMatrix[8].color = 0;

function clickedSquare(key) {
    switch (key) {
        case 0:
            cicleColor(squareMatrix[0]);
            cicleColor(squareMatrix[1]);
            cicleColor(squareMatrix[3]);
            break;
        case 1:
            cicleColor(squareMatrix[0]);
            cicleColor(squareMatrix[1]);
            cicleColor(squareMatrix[2]);
            cicleColor(squareMatrix[4]);
            break;
        case 2:
            cicleColor(squareMatrix[1]);
            cicleColor(squareMatrix[2]);
            cicleColor(squareMatrix[5]);
            break;
        case 3:
            cicleColor(squareMatrix[0]);
            cicleColor(squareMatrix[3]);
            cicleColor(squareMatrix[4]);
            cicleColor(squareMatrix[6]);
            break;
        case 4:
            cicleColor(squareMatrix[1]);
            cicleColor(squareMatrix[3]);
            cicleColor(squareMatrix[4]);
            cicleColor(squareMatrix[5]);
            cicleColor(squareMatrix[7]);
            break;
        case 5:
            cicleColor(squareMatrix[2]);
            cicleColor(squareMatrix[4]);
            cicleColor(squareMatrix[5]);
            cicleColor(squareMatrix[8]);
            break;
        case 6:
            cicleColor(squareMatrix[3]);
            cicleColor(squareMatrix[6]);
            cicleColor(squareMatrix[7]);
            break;
        case 7:
            cicleColor(squareMatrix[4]);
            cicleColor(squareMatrix[6]);
            cicleColor(squareMatrix[7]);
            cicleColor(squareMatrix[8]);
            break;
        case 8:
            cicleColor(squareMatrix[5]);
            cicleColor(squareMatrix[7]);
            cicleColor(squareMatrix[8]);
            break;
            
    }
}

function cicleColor(element) {
    element.color += 1;
    if (element.color > 2) {
        element.color = 0
    };

    switch (element.color) {
        case 0:
            element.classList.add('red');
            element.classList.remove('green');
            element.classList.remove('blue');
            break;
        case 1:
            element.classList.remove('red');
            element.classList.add('green');
            element.classList.remove('blue');
            break;
        case 2:
            element.classList.remove('red');
            element.classList.remove('green');
            element.classList.add('blue');
            break;
    }

    if (
        squareMatrix[0].color === squareMatrix[1].color &&
        squareMatrix[0].color === squareMatrix[2].color &&
        squareMatrix[0].color === squareMatrix[3].color &&
        squareMatrix[0].color === squareMatrix[4].color &&
        squareMatrix[0].color === squareMatrix[5].color &&
        squareMatrix[0].color === squareMatrix[6].color &&
        squareMatrix[0].color === squareMatrix[7].color &&
        squareMatrix[0].color === squareMatrix[8].color
    )   {
        messageBox.innerHTML = `Congratulations! You did it! <b>Restart?</b>`;
        messageBox.style.cursor = 'pointer';
        messageBox.addEventListener('click', ()=>{location.reload()});
    } else {
        messageBox.innerHTML = `Make all squares same color`;
    }
    // console.log(
    //     squareMatrix[0].color,
    //     squareMatrix[1].color,
    //     squareMatrix[2].color,
    //     squareMatrix[3].color,
    //     squareMatrix[4].color,
    //     squareMatrix[5].color,
    //     squareMatrix[6].color,
    //     squareMatrix[7].color,
    //     squareMatrix[8].color,
    //     )
}