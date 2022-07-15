const form = document.querySelector('#form')
const input = document.querySelector('#input');
const messageBox = document.querySelector('#messageBox');
const mainButton = document.querySelector('#mainButton');

let position = 0;

let a = [];
let b = [];

function storeVector() {
    if ((a.length < 8) && input.value.length > 0) {
        a.push(parseFloat(input.value));

        messageBox.textContent = `${input.value} was added to A[${position}]. Insert A[${position+1}]`;

        //Must fix preventDefault first
        // input.value = '';

        console.log(a)
        if (position === 7){
            position = 0;
            messageBox.textContent = `${a[7]} was added to A[7}]. Insert B[${position}]`;
            input.value = '';
        } else {
            position++
        }
    } else if ((b.length < 8) && input.value.length > 0){
        b.push(parseFloat(input.value));
        messageBox.textContent = `${input.value} was added to B[${position}]. Insert B[${position+1}]`;

        //Must fix preventDefault first
        // input.value = '';

        console.log(b)
        if (position === 7){
            position = 0;
            messageBox.textContent = `${b[7]} was added to B[7}]. Show Vectors?`;
            mainButton.value = 'Show'
        } else {
            position++
        }
    }

    if (a.length === 8 && b.length === 8) {
        for (let i = 0; i < 8; i++) {
            a[i] = a[i]+b[i];
            b[i] = a[i]-b[i];
            a[i] = a[i]-b[i];
        }
        console.log('A',a)
        console.log('B',b)
    }
}

mainButton.addEventListener('click', (e)=>{
    e.preventDefault();
    storeVector();
});