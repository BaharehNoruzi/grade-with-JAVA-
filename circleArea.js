let circleRedusValue, objRedius, para;
objRedius = document.getElementById("circleRedus");
para = document.getElementById("result");
function areaCalculate() {
    debugger
    circleRedusValue = objRedius.value;
 // Bahareh: for readability

    return Math.PI * (circleRedusValue * circleRedusValue);
}
// Bahareh: for readability
function showArea() {
    para.innerHTML = `Thث Area Is <b> ${areaCalculate()} </b>`;
}