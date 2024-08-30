
const inputBoxSelector = document.getElementById('password');
const alertBox = document.getElementById('alert')
const alertText = document.getElementById('alertText')
const alertImg = document.getElementById('alertImg')
const passwordLength = 16;

const alphaBetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const aplhaBetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numeric = '0123456789';
const specialSymbol = '~!@#$%^&*(]{)}_+=-"<>/?`|';

function genaratePassword(){
     let password = ''
     while(passwordLength > password.length + 1){
        password += alphaBetUpperCase[Math.floor(Math.random() * alphaBetUpperCase.length)]
        password += aplhaBetLowerCase[Math.floor(Math.random() * aplhaBetLowerCase.length)]
        password += numeric[Math.floor(Math.random() * numeric.length)]
        password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)]
     }
     inputBoxSelector.value = password
}

function copyPassword(){
    let inputvalue = inputBoxSelector.value
    inputBoxSelector.select();   
    document.execCommand('Copy') 
    if(inputvalue){
        let msg  = 'Copied'
        let color = 'green'
        alertDisplay(msg, color)
    }else{
        let msg = `Pls Genarate`
        let color = 'red'
        alertDisplay(msg, color)
    }
}
function alertDisplay(msg, color){
    alertBox.style.display = 'flex'
    alertBox.style.top = '30px'
    alertBox.style.color = color
    alertText.textContent = msg
    setTimeout(()=>{
         alertBox.style.display = 'none'
    }, 1500)
}
