document.getElementById("btnLogin").onclick = function(){
    var userName = document.getElementById("txtUserName").value;
    var passWord = document.getElementById("txtPassWord").value;
    document.getElementById("resultUserName").innerHTML ="UserName: "+userName;
    document.getElementById("resultPassWord").innerHTML ="PassWord: "+passWord;
}
document.getElementById("enter").onclick = function(){
    var day = document.getElementById("enterDay").value;
    day = parseInt(day);
    const Luong1Ngay = 100000;
    var luongThang = day * Luong1Ngay;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("Result").innerHTML = "Lương "+day+" ngày làm là: "+(currentFormat.format(luongThang));
}
document.getElementById("enterNumb").onclick = function(){
    var id1 = document.getElementById("num_1").value;
    id1 = parseInt(id1);
    var id2 = document.getElementById("num_2").value;
    id2 = parseInt(id2);
    var id3 = document.getElementById("num_3").value;
    id3 = parseInt(id3);
    var id4 = document.getElementById("num_4").value;
    id4 = parseInt(id4);
    var id5 = document.getElementById("num_5").value;
    id5 = parseInt(id5)
    var TBC = (id1 + id2 + id3 +id4 +id5)/5;
    document.getElementById("resultNumb").innerHTML = "TBC của 3 số vừa nhập là :"+TBC;
}
document.getElementById("enterMoney").onclick = function(){
    var money = document.getElementById("money").value;
    money = parseInt(money);
    const VND = 23500;
    var moneyVND = VND * money;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("resultMoney").innerHTML = "Số tiền sau khi đổi "+money+"USD là:"+(currentFormat.format(moneyVND));
}
document.getElementById("enterSquare").onclick = function(){
    var CD = document.getElementById("nhapCD").value;
    var CR = document.getElementById("nhapCR").value;
    CD = parseInt(CD);
    CR = parseInt(CR);
    var CV = (CD + CR)*2;
    var DT = CD*CR;
    document.getElementById("resultCV").innerHTML = "Chu vi HCN có chiều dài: "+CD+" chiều rộng: "+CR+" là: "+CV;
    document.getElementById("resultDT").innerHTML = "Diện tích HCN có chiều dài: "+CD+" chiều rộng: "+CR+" là: "+DT;
}
document.getElementById("enterNumber").onclick = function(){
    var Number = document.getElementById("Number").value;
    Number = parseInt(Number);
    var donVi = Number%10;
    var Chuc = Math.floor(Number/10);
    document.getElementById("resultNumer").innerHTML = "Tổng 2 ký số của số "+Number+" là: "+(donVi+Chuc);
}