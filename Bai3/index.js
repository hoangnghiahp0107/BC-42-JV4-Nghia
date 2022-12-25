// Input: Nhập vào số có 3 chữ số
// Khai báo = chữ đối với từng số
// Output: In ra cách đọc số
document.getElementById("read").onclick=function(){
    let a = +document.getElementById("a").value;
    let nhapso=0;
    let donvi;
    let chuc;
    let tram;
    nhapso+=a%10;
    if (nhapso===1)
    {
        donvi="một";

    }
    else if (nhapso===2)
    {
        donvi="hai";
        
    }
    else if (nhapso===3)
    {
        donvi="ba";
        
    }
    else if (nhapso===4)
    {
        donvi="bốn";
        
    }
    else if (nhapso===5)
    {
        donvi="năm";
        
    }
    else if (nhapso===6)
    {
        donvi="sáu";
    }
    else if (nhapso===7)
    {
        donvi="bảy";
        
    }
    else if (nhapso===8)
    {
        donvi="tám";
        
    }
    else if (nhapso===9)
    {
        donvi="chín";
        
    }
    a = Math.floor(a/10);
    nhapso=a%10;
    if (nhapso===1)
    {
        chuc="mười ";

    }
    else if (nhapso===2)
    {
        chuc="hai mươi ";
        
    }
    else if (nhapso===3)
    {
        chuc="ba mươi ";
        
    }
    else if (nhapso===4)
    {
        chuc="bốn mươi ";
        
    }
    else if (nhapso===5)
    {
        chuc="năm mươi ";
        
    }
    else if (nhapso===6)
    {
        chuc="sáu mươi ";
    }
    else if (nhapso===7)
    {
        chuc="bảy mươi ";
        
    }
    else if (nhapso===8)
    {
        chuc="tám mươi ";
        
    }
    else if (nhapso===9)
    {
        chuc="chín mươi ";
        
    }
    a = Math.floor(a/10);
    nhapso=a%10;
    if (nhapso===1)
    {
        tram="một trăm ";

    }
    else if (nhapso===2)
    {
        tram="hai trăm ";
        
    }
    else if (nhapso===3)
    {
        tram="ba trăm ";
        
    }
    else if (nhapso===4)
    {
        tram="bốn trăm ";
        
    }
    else if (nhapso===5)
    {
        tram="năm trăm ";
        
    }
    else if (nhapso===6)
    {
        tram="sáu trăm ";
    }
    else if (nhapso===7)
    {
        tram="bảy trăm ";
        
    }
    else if (nhapso===8)
    {
        tram="tám trăm ";
        
    }
    else if (nhapso===9)
    {
        tram="chín trăm ";
        
    }
    let result=console.log(tram+chuc+donvi);
    result=tram+chuc+donvi;
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML = result;
}