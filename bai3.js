function tinhtien(obj){
    if(isNaN(obj.value)){
        alert('Vui lòng nhập số');
        obj.value = '';
    }
    var row = obj.parentNode.parentNode;
    var dg = parseInt(row.children[2].innerText);
    var sl = row.children[3].children[0].value;
    var tt = row.children[4];
    tt.innerText = dg * sl;
    var tong = document.getElementById('tong');
    var ArrTT = document.getElementsByClassName('tt');
    console.log(ArrTT[0]);
    var sum = 0;
    for(var i = 0; i< ArrTT.length; i++){
        sum+=parseInt(ArrTT[i].innerText);
    }
    console.log(sum);
    document.getElementById('tong').innerHTML = sum;
}

function change(obj){   
    var row = obj.parentNode.parentNode;
    row.children[3].children[0].disabled = !row.children[3].children[0].disabled;
}
function locMucGia(obj){
    var trArr = document.querySelectorAll('tr');

    for(var i = 1;i<trArr.length-1;i++){
        if(parseInt(trArr[i].children[2].innerText)
         >= parseInt(obj.options[obj.value].text)){
            trArr[i].style.display = "";
           
        }else{
            trArr[i].style.display = "none";
            if(parseInt(obj.value) == 0){
                trArr[i].style.display = "";        
            }
        }
    }
}