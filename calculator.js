const numbers = document.querySelectorAll('#num');
const screen = document.getElementById('screen');
const clearbtn = document.getElementById('clear');
const equal = document.getElementById('equal');
const backspace = document.getElementById('backspace');
const signs = document.querySelectorAll('.sign');

console.log(signs);
   
let output;
    function getNumbers() {
        
    numbers.forEach(item => {
        item.addEventListener('click',function() {
            output = screen.textContent += item.value;
            
        })
    })
    return output;
}
    
getNumbers();

    function operators() {
        signs.forEach(item => {
            item.addEventListener('click', () => {
             screen.textContent += item.value;
            
            })
        })
    }
    operators();

    clearbtn.addEventListener('click',() => {
        screen.textContent = "";
    })

    backspace.addEventListener('click',getBackwards);

    function getBackwards() {
        
        if(screen.textContent == 0) {
            return screen.textContent = "0";
        } else {
            let goBack = output.toString();
            let find = goBack.slice(0,length - 1);
            screen.textContent = find;
        }
    }

    equal.addEventListener('click',() => {
        
    })
