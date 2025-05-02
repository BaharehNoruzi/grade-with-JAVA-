let monthValue, result, objMonth, para;
objMonth = document.getElementById("month");
para = document.getElementById("result");
function enterMonth() {
    debugger
    monthValue = objMonth.value;
    if (monthValue === "فروردین" || monthValue === "اردیبهشت" || monthValue === "خرداد") {
        result = "در فصل بهار هستید";
        return result;
    } else if (monthValue === "تیر" || monthValue === "مرداد" || monthValue === "شهریور") {
        result = "در فصل تابستان هستید";
        return result;
    }
    else if (monthValue === "مهر" || monthValue === "آبان" || monthValue === "آذر") {
        result = "در فصل پاییز هستید";
        return result;
    }
    else if (monthValue === "دی" || monthValue === "بهمن" || monthValue === "اسفند") {
        result = "در فصل زمستان هستید";
        return result;
    }
}
function showResult() {
    para.innerHtml = `شما در فصل <b> ${enterMonth()}</b> هستید`;
}