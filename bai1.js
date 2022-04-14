var soLanGiai = 0;

function TinhToan(){
    document.getElementById('x0').innerHTML = '';
    document.getElementById('x1').innerHTML = '';
    document.getElementById('x2').innerHTML = '';
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    if(isNaN(a) || isNaN(b) || isNaN(c) || a == '' || b == '' || c == ''){
        document.getElementById('ketqua').innerHTML = 'Vui lòng nhập số';
    }else{
    soLanGiai++;
    document.getElementById('solangiai').innerHTML = soLanGiai;

    document.getElementById('hienthi').innerHTML = '<button disabled="disabled" onclick="TinhToan();">GIẢI PT</button>'+
    '<button onclick="ChoSo();">CHO SỐ</button>'

    if(a == 0) {
        if(b == 0) {
            if (c == 0) { 
                document.getElementById('ketqua').innerHTML = '=> Phương trình vô số nghiệm';
            } else {
                document.getElementById('ketqua').innerHTML = '=> Phương trình vô nghiệm';
            }
        } else {
            document.getElementById('ketqua').innerHTML = '=> Phương trình có 1 nghiệm';
            document.getElementById('x0').innerHTML ='x = ' +  (-b/c).toFixed(2);
        }
    } else {
        var delta = b*b - 4*a*c;
        if(delta > 0) {
            var x1 = (-b+Math.sqrt(delta))/(2*a);
            var x2 = (-b-Math.sqrt(delta))/(2*a);
            document.getElementById('ketqua').innerHTML = '=> Phương trình có 2 nghiệm kép:';
            document.getElementById('x1').innerHTML = 'x1 = ' + x1.toFixed(2);
            document.getElementById('x2').innerHTML = 'x2 = ' + x2.toFixed(2);
        } else if ( delta == 0) {
        	var sum = -b/2*a
            document.getElementById('ketqua').innerHTML = '=> Phương trình có 1 nghiệm kép:';
            document.getElementById('x1').innerHTML = `x1 = x2 ${sum}`;
        } else {
            document.getElementById('ketqua').innerHTML = '=> Phương trình vô nghiệm';
        }
    }
}

}

function ChoSo(){

    document.getElementById('hienthi').innerHTML = '<button onclick="TinhToan();">GIẢI PT</button>'+
    '<button onclick="ChoSo();">CHO SỐ</button>'

    var a = Math.floor(Math.random()  * 11);
    var b = Math.floor(Math.random()  * 11);
    var c = Math.floor(Math.random()  * 11);
   
    document.getElementById('a').value = a;
    document.getElementById('b').value = b;
    document.getElementById('c').value = c;
    
}

function checkTime(i) 
    {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function StartTime() 
{
    setInterval(function() {
        var today = new Date();
 
        
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var ng = today.getDate();
        var t = today.getMonth();
        var n = today.getFullYear();
        
        m = checkTime(m);
        s = checkTime(s);
        
    
        document.getElementById('timer').innerHTML = 'Bây giờ là ' + ng + '/' + (t+1) + '/' + n + ' ' + h +':' + m + ':' + s;
     
    },500)
}