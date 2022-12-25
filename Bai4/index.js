// Input: Nhập tọa độ 3 sinh viên và tọa độ trường học
// Tính quãng đường theo tọa độ 2 đầu của 1 đoạn thẳng trên mặt phẳng
// Output: in tên sinh viên xa trường nhất.

document.getElementById("search").onclick=function(){
    // Nhập tọa độ trường học
    let x2=+document.getElementById("x2").value;
    let y2=+document.getElementById("y2").value;
    //Nhập sinh viên 1
    let a1=document.getElementById("a1").value;
    let x1=+document.getElementById("x1").value;
    let y1=+document.getElementById("y1").value;
    let e=(x2*x2-2*x2*x1+x1*x1);
    let f=(y2*y2-2*y2*y1+y1*y1);
    let sum=e+f;
    let d1=Math.sqrt(sum);
    // //Nhập sinh viên 2
    let a2=document.getElementById("a2").value;
    let b2=+document.getElementById("b2").value;
    let c2=+document.getElementById("c2").value;
    let e2=(x2*x2-2*x2*b2+b2*b2);
    let f2=(y2*y2-2*y2*c2+c2*c2);
    let sum2=e2+f2;
    let d2=Math.sqrt(sum2);
    // //Nhập sinh viên 3
    let a3=document.getElementById("a3").value;
    let b3=+document.getElementById("b3").value;
    let c3=+document.getElementById("c3").value;
    let e3=(x2*x2-2*x2*b3+b3*b3);
    let f3=(y2*y2-2*y2*c3+c3*c3);
    let sum3=e3+f3;
    let d3=Math.sqrt(sum3);
    // So sánh
    if (d1<d2)
    {
        if(d2<d3)
        {
            console.log("Sinh viên xa trường nhất: "+a3);
        }
        else 
        {
            console.log("Sinh viên xa trường nhất: "+a2);
        }
    }
    else if (d2<d1)
    {
        if (d1<d3)
        {
            console.log("Sinh viên xa trường nhất: "+a3);
        }
        else
        {
            console.log("Sinh viên xa trường nhất: "+a1);
        }
    }   
    else if (d3<d2)
    {
        if(d2<d1)
        {
            console.log("Sinh viên xa trường nhất: "+a1);
        }
        else
        {
            console.log("Sinh viên xa trường nhất: "+a2);
        }
    }
}
// let x1=+document.getElementById("x1");
// let x2=+document.getElementById("x2");
// let y1=+document.getElementById("y1");
// let y2=+document.getElementById("y2");
// let e=(x2*x2-2*x2*x1+x1*x1);
// let f=(y2*y2-2*y2*y1+y1*y1);
// let sum=e+f;
// let d=Math.sqrt(sum);