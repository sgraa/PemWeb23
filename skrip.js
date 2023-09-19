function kaliTakeru()
{
    num1 = parseFloat(document.getElementById("angka1").value);
    num2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById('hasil').innerHTML=num1*num2 ;
}

function bagiTakeru()
{
    num1 = parseFloat(document.getElementById("angka1").value);
    num2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById('hasil').innerHTML=num1/num2 ;
}

function tambahTakeru()
{
    num1 = parseFloat(document.getElementById("angka1").value);
    num2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById('hasil').innerHTML=num1+num2 ;
}

function kurangTakeru()
{
    num1 = parseFloat(document.getElementById("angka1").value);
    num2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById('hasil').innerHTML=num1-num2 ;
}