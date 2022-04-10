document.getElementById("btnLogin").onclick = function (){
    var userName = document.getElementById("txtUserName").value;
    var passWord = document.getElementById("txtPassWord").value;
    document.getElementById("outputUN").innerHTML = "Tên tài khoản là :" +(userName);
}
document.getElementById("enter").onclick = function(){
    var day = document.getElementById("enterNumb").value;
    num = parseInt(num);
    const Luong1Ngay = 100000;
    luongThang = day * Luong1Ngay;
    var currentFormat = new Intl.NumberFormat(vn-VN);
    document.getElementById("Result").innerHTML = "Lương "+(num)+" là: "+(currentFormat.format(luongThang));
}