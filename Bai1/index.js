// Input: Nhập vào ngày tháng năm
// Nếu là ngày mai thì +1, ngày hôm qua thì -1 giá trị
// Output: Ngày mai hoặc ngày hôm qua
document.getElementById("before").onclick=function(){
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=+document.getElementById("c").value;
    switch(b)
    {
        case 5:
            case 7:
                case 10:
                    case 12:
                        {
                            if(a===1)
                            {
                                a=30;
                                b=b-1;
                                console.log(a+"/"+b+"/"+c);
                            }
                            else if (a<=31 && a!==0)
                            {
                                a=a-1;
                                console.log(a+"/"+b+"/"+c);
                            }
                            else
                            {
                                console.log("Dữ liệu không hợp lệ");
                            }
                           break;
                        }
                            case 2:
                                {
                                    if (a===1)
                                        {
                                            a=31;
                                            b=b-1;                        
                                            console.log(a+"/"+b+"/"+c);
                                        }
                                    else if (a<=28 && a!==0)
                                    {
                                        a=a-1;
                                        console.log(a+"/"+b+"/"+c);
                                    }
                                    else if (a<=29 && a!==0)
                                    {
                                        if((c % 400 === 0) || (c % 4 === 0 && c % 100 !== 0))
                                        {
                                            a=a-1;
                                            console.log(a+"/"+b+"/"+c);
                                        }
                                        else
                                        {
                                            console.log("Dữ liệu không hợp lệ");
                                        }
                                    }
                                    else
                                    {
                                        console.log("Dữ liệu không hợp lệ");
                                    }
                                    break;
                                }
                                case 4:
                                    case 6:
                                        case 8:
                                            case 9:
                                                case 11:
                                                    {
                                                        if (a===1)
                                                        {
                                                            a=31;
                                                            b=b-1;       
                                                            console.log(a+"/"+b+"/"+c);
                                                        }
                                                        else if (a<=30 && a!==0)
                                                        {
                                                            a=a-1;
                                                            console.log(a+"/"+b+"/"+c);
                                                        }
                                                        else 
                                                        {
                                                            console.log("Dữ liệu không hợp lệ");
                                                        }
                                                        break;
                                                    }
                                                    case 3:
                                                        {
                                                            if (a===1 && a!==0)
                                                            {
                                                                if((c % 400 === 0) || (c % 4 === 0 && c % 100 !== 0))
                                                            {
                                                                a=29;
                                                                b=b-1;
                                                                console.log(a+"/"+b+"/"+c);
                                                            }
                                                            else
                                                            {
                                                                a=28;
                                                                b=b-1;
                                                                console.log(a+"/"+b+"/"+c);
                                                            }
                                                            }
                                                            else if (a<=31)
                                                            {
                                                                a=a-1;
                                                                console.log(a+"/"+b+"/"+c);
                                                            }
                                                            else
                                                            {
                                                                console.log("Dữ liệu không hợp lệ");
                                                            }
                                                            break;
                                                        }
                                                        case 1:
                                                            {
                                                                if (a===1)
                                                                {
                                                                    a=31;
                                                                    b=12;
                                                                    c=c-1;
                                                                    console.log(a+"/"+b+"/"+c);
                                                                }
                                                                else if (a<=31 && a!==0)
                                                                {
                                                                    a=a-1;
                                                                    console.log(a+"/"+b+"/"+c);
                                                                }
                                                                else
                                                                {
                                                                    console.log("Dữ liệu không hợp lệ");
                                                                }
                                                                break;
                                                            }
                                                            default:
                                                                console.log("Dữ liệu không hợp lệ");
        }      
    }
document.getElementById("after").onclick=function(){
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=+document.getElementById("c").value;
    switch(b)
    {
        case 1:
            case 3:
                case 5: 
                    case 7:
                        case 8:
                            case 10:
                                {
                                    if (a===31)
                                    {
                                        a=1;
                                        b=b+1;
                                        console.log(a+"/"+b+"/"+c);
                                    }
                                    else if (a>=1 && a<32)
                                    {
                                        a=a+1;
                                        console.log(a+"/"+b+"/"+c);
                                    }
                                    else 
                                    {
                                        console.log("Dữ liệu không hợp lệ");
                                    }
                                    break;
                                }
                                case 12:
                                    {
                                        if (a===31)
                                        {
                                            a=1;
                                            b=1;
                                            c=c+1;
                                            console.log(a+"/"+b+"/"+c);
                                        }
                                        else if (a>=1 && a<32)
                                        {
                                        a=a+1;
                                        console.log(a+"/"+b+"/"+c);
                                        }
                                        else
                                        {
                                            console.log("Dữ liệu không hợp lệ");
                                        }
                                        break;
                                    }
                                    case 4:
                                        case 6:
                                            case 9:
                                                case 11:
                                                    {
                                                        if (a===30)
                                                        {
                                                            a=1;
                                                            b=b+1;
                                                            console.log(a+"/"+b+"/"+c);
                                                        }
                                                        else if (a>=1 && a<31)
                                                        {
                                                            a=a+1;
                                                            console.log(a+"/"+b+"/"+c);
                                                        }
                                                        else
                                                            {
                                                                console.log("Dữ liệu không hợp lệ");
                                                            }
                                                        break;
                                                    }
                                                    case 2:
                                                        {
                                                            if (a===28)
                                                            {
                                                                a=1;
                                                                b=b+1;
                                                                console.log(a+"/"+b+"/"+c);
                                                            }
                                                            else if (a===29)
                                                            {
                                                                if((c % 400 === 0) || (c % 4 === 0 && c % 100 !== 0))
                                                                {
                                                                    a=1;
                                                                    b=b+1;
                                                                    console.log(a+"/"+b+"/"+c);
                                                                }
                                                                else
                                                                {
                                                                    console.log("Dữ liệu không hợp lệ");
                                                                }
                                                            }
                                                            else if (a>=1 && a<30)
                                                            {
                                                                a=a+1;
                                                                console.log(a+"/"+b+"/"+c);
                                                            }
                                                            else
                                                            {
                                                                console.log("Dữ liệu không hợp lệ");
                                                            }
                                                        }


    }
}