function dangky() {
    var msv = document.getElementById('msv').value;
    if(msv.length == 0){
        document.getElementById('erroMasv').innerText = 'Vui lòng nhập mã sinh viên';
        document.getElementById('msv').style.backgroundColor="#B30095";
        document.getElementById('msv').style.border=" 3px solid #1C6EA4;";
    }else if(msv.length!=7){
        document.getElementById('erroMasv').innerText = 'Vui lòng nhập đúng 7 ký tự';
    } else{
        document.getElementById('erroMasv').innerText = '';
    }
    console.log(document.getElementById('msv').value)
    
    var hvt = document.getElementById('hvt').value;
    if(hvt.length == 0){
        document.getElementById('erroHvt').innerText = 'Vui lòng nhập họ và tên';
        document.getElementById('hvt').style.backgroundColor="#B30095";
        document.getElementById('hvt').style.border=" 3px solid #1C6EA4;";
    }else if(hvt.length >= 30){
        document.getElementById('erroHvt').innerText = 'Quá 30 ký tự';
    }else{
        document.getElementById('erroHvt').innerText = '';
    }

    var email = document.getElementById('email').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.length == 0){
        document.getElementById('erroEmail').innerText = 'Vui lòng nhập Email';
        document.getElementById('email').style.backgroundColor="#B30095";
        document.getElementById('email').style.border=" 3px solid #1C6EA4;";
    }else if(!filter.test(email)) {
        document.getElementById('erroEmail').innerText = 'Email không hợp lệ';
    }else{
        document.getElementById('erroEmail').innerText = '';
    }
}

