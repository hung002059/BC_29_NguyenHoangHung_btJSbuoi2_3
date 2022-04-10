document.getElementById("btnLogin").onclick = function(){
    var userName = document.getElementById("txtUserName").value;
    var passWord = document.getElementById("txtPassWord").value;
    document.getElementById("resultUserName").innerHTML ="UserName: "+userName;
    document.getElementById("resultPassWord").innerHTML ="PassWord: "+passWord;
}
document.getElementById("enter").onclick = function(){
    var day = document.getElementById("enterNumb").value;
    day = parseInt(day);
    const Luong1Ngay = 100000;
    var luongThang = day * Luong1Ngay;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("Result").innerHTML = "Lương "+day+" ngày làm là: "+(currentFormat.format(luongThang));
}
document.getElementById("enterNumb").onclick = function (){
    var num1 = document.getElementById("num_1").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("num_2").value;
    num2 = parseInt(num2);
    var num3 = document.getElementById("num_3").value;
    num3 = parseInt(num3);
    var num4 = document.getElementById("num_4").value;
    num4 = parseInt(num4);
    var num5 = document.getElementById("num_5").value;
    num5 = parseInt(num5);
    var TBC = (num1 + num2 + num3 + num4 + num5)/5;
    document.getElementById("resultNumb").innerHTML = "TBC là:"+TBC;
}