/*
When no input, a negative number, or a number 4000 or greater display output text 
*/

const outputDiv = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number")


/*
Roman numeral converter function 
const numberToRoman 1= I 4= IV 5= V 9= IX 10= X ect.
*/

const numberToRoman = (numberInput) => {
    const romanNumerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let roman = '';
    for (let key in romanNumerals) {
        while (numberInput >= romanNumerals[key]) {
            roman += key;
            numberInput -= romanNumerals[key];
        }
    }
    return roman;
};

/*
Convert and display result on click and on enter
*/

convertBtn.addEventListener("click", function() {
    var number = document.getElementById('number').value;
    if (number === '') {
        outputDiv.innerText = "Please enter a valid number";
    } else if (number < 1) {
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        outputDiv.innerText = "Please enter a number less than or equal to 3999";
    } else {
        outputDiv.innerText = numberToRoman(number);
    }
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    var number = document.getElementById('number').value;
    if (number === '') {
        outputDiv.innerText = "Please enter a valid number";
    } else if (number < 1) {
        outputDiv.innerText = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        outputDiv.innerText = "Please enter a number less than or equal to 3999";
    } else {
        outputDiv.innerText = numberToRoman(number);
    }
  }
});
 /*
 Asked Copilot for a roman numeral function:
 
 function intToRoman(num) {
    const romanNumerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
    let roman = '';

    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }
    return roman;
} 
*/