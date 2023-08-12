const passwordBox = document.getElementById("input-box");
const copyBtn = document.getElementById("copy-icon");
const generateBtn = document.getElementById("btn");
let length = 14;
passwordBox.value = "";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*())_+{}=-[}|<>?/'`" ;
const allChar = upperCase + number + lowerCase + symbol ;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password ;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

generateBtn.addEventListener("click",()=>{
    createPassword();
});

copyBtn.addEventListener("click",()=>{
    copyPassword();
})




