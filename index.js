let ConvertBtn= document.getElementById("Convert-btn")
let VolumResult=document.getElementById("volume-result")
let MassResult=document.getElementById("mass-result")
let LengthResult=document.getElementById("length-result")
let InputNumber=document.getElementById("input-number")

ConvertBtn.addEventListener("click" , function() {
    Convertf(JSON.parse(InputNumber.value))
})

function Convertf(x) {
let xf= (x*3.28084).toFixed(3)
let xm=(x/3.28084).toFixed(3)
let xg=(x*0.264172).toFixed(3)
let xl=(x/0.264172).toFixed(3)
let xp=(x*2.20462).toFixed(3)
let xk=(x/2.20462).toFixed(3)
LengthResult.textContent=`${x} meters = ${xf} feet | ${x} feet = ${xm} meters`
VolumResult.textContent=`${x} liters = ${xg} gallons | ${x} gallons = ${xl} liters`
MassResult.textContent=`${x} kilos = ${xp} pounds | ${x} pounds = ${xk} kilos`
}