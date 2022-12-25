// Input: Nhập tháng và năm
// 1,3,5,7,8,10,12 sẽ có 31 ngày
//4,6,9,11 sẽ có 30 ngày
//tháng 2, nếu là năm nhuận sẽ có 29 ngày. Ngược lại là 28 ngày
// Output: tính xem tháng đó có bao nhiêu ngày

document.getElementById("day").onclick=function(){
    let month=+document.getElementById("month").value;
    let year=+document.getElementById("year").value;
    let result;
    if (month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12)
    {
       console.log("Tháng có 31 ngày");
       result="Tháng có 31 ngày";
    }
    else if (month===4 || month===6 || month===9 || month===11)
    {
        console.log("Tháng có 30 ngày");
        result="Tháng có 30 ngày";
    }
    else if (month===2)
    {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
        {
            console.log("Tháng có 29 ngày");
            result="Tháng có 29 ngày";
        }
        else 
        {
            console.log("Tháng có 28 ngày");
            result="Tháng có 28 ngày";
        }
    }
    else 
    {
        console.log("Tháng không hợp lệ");
        result="Tháng không hợp lệ";
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML = result;
    
}