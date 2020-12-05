// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

//Getters
function calc() {
    let a = parseInt(document.getElementById("value1").value); //is parseInt outadted?
    let b = parseInt(document.getElementById("value2").value);
    let op = document.getElementById("operator").value;
    let calculate;
 console.log (a, b);

    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b; 
    } else if (op == "mul") {
        calculate = a * b;
    }
return calculate
}


document.getElementById("button").addEventListener('click', () => {
    
    const results = calc()
    const main = document.getElementById("result")
    main.textContent = results
});

