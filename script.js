const buttonE1 = document.querySelectorAll("button");
const inputE1 = document.querySelector("input"); 

let string = "";

buttonE1.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === 'C') {
            string = ""; 
            inputE1.value = string;
        } else if (e.target.innerHTML === "Del") {
            string = string.substring(0, string.length - 1); 
            inputE1.value = string;
        } else if (e.target.innerHTML === '=') {
            try {
                string = eval(string); 
                inputE1.value = string;
            } catch (error) {
                inputE1.value = "Error"; 
                string = "";
            }
        } else {
            string = string + e.target.innerHTML; 
            inputE1.value = string;
        }
    });
});
