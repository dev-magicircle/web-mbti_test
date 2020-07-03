let Evalue, Ivalue, Svalue, Nvalue, Tvalue, Fvalue, Jvalue, Pvalue;
let result;
function Eadd(){
    Evalue=sessionStorage.getItem('E');
    Evalue++;
    console.log(Evalue);
    sessionStorage.setItem('E', Evalue);
}
function Iadd(){
    Ivalue=sessionStorage.getItem('I');
    Ivalue++;
    console.log(Ivalue);
    sessionStorage.setItem('I', Ivalue);
}
function Sadd(){
    Svalue=sessionStorage.getItem('S');
    Svalue++;
    console.log(Svalue);
    sessionStorage.setItem('S', Svalue);
}
function Nadd(){
    Nvalue=sessionStorage.getItem('N');
    Nvalue++;
    console.log(Nvalue);
    sessionStorage.setItem('N', Nvalue);
}
function Tadd(){
    Tvalue=sessionStorage.getItem('T');
    Tvalue++;
    console.log(Tvalue);
    sessionStorage.setItem('T', Tvalue);
}
function Fadd(){
    Fvalue=sessionStorage.getItem('F');
    Fvalue++;
    console.log(Fvalue);
    sessionStorage.setItem('F', Fvalue);
}
function Jadd(){
    Jvalue=sessionStorage.getItem('J');
    Jvalue++;
    sessionStorage.setItem('J', Jvalue);
}
function Padd(){
    Pvalue=sessionStorage.getItem('P');
    Pvalue++;
    sessionStorage.setItem('P', Pvalue);
}
