
var array=[];

function themSo (){
    var n = +document.getElementById("soN").value;
    array.push(n);
    document.querySelector(".text-start .bg-success span").innerHTML =array;
}

// Tổng số dương
function tong (){
    var tong = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i]>0) {
           tong += array[i];
       }
    }
    document.querySelector("#tongSoDuong .bg-success span").innerHTML = tong;
}

// Đếm số dương
function demSoDuong (){
    var dem = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]>0) {
            dem++
        }
    }
    return dem;
}
function dem(){
document.querySelector("#demSoDuong .bg-success span").innerHTML = demSoDuong();
}


// Tìm số nhỏ nhất
function min() {
    document.querySelector("#timSoNhoNhat .bg-success span").innerHTML = Math.min(...array);
}

// Tìm số dương nhỏ nhất
function minDuong() {
    var nDuong=[];
    var ketQua ='';
    for (let index = 0; index < array.length; index++) {
        if ( array[index]>0) {
            nDuong.push(array[index]);
        }
    } 
    if (nDuong=='') {
        ketQua = 'Không có số dương!';
    } else {
        ketQua = Math.min(...nDuong);
    }
    document.querySelector("#timSoDuongNhoNhat .bg-success span").innerHTML = ketQua;
}

// Tìm số chẵn cuối cùng
function chanCuoi(){
    ketQua = 0;
    var nChan=[];
    for (let index = 0; index < array.length; index++) {
        if (array[index]% 2 == 0) {
            nChan.push(array[index]);
        }        
    }
    if (nChan=='') {
        ketQua= -1;
    }else{
        ketQua = nChan[nChan.length-1];
    }
    document.querySelector("#timSoChanCuoiCung .bg-success span").innerHTML = ketQua;
}

// Đổi chỗ
function doiCho2So() {
    var n1 = +document.getElementById('viTri1').value;
    var n2 = +document.getElementById('viTri2').value;

    
    if (n1>=array.length || n2>=array.length ) {
        ketQua = 'Số vừa nhập không hợp lệ!'
    } else {
        doiCho(n1,n2);
        ketQua = 'Mảng sau khi đổi là: ' + array;
    }
    
    document.querySelector("#doiCho .bg-success span").innerHTML = ketQua;
}
function doiCho(index1,index2){
    var doiCho = array[index1];
    array[index1] = array[index2];
    array[index2] = doiCho;
    return array;
}

// Sắp xếp tăng dần
function tangDan(){
    for (let i = 1; i < array.length; i++) {
        for (let index = 0; index < array.length; index++) {
            if (array[index]>array[index+1]) {
                doiCho(index,index+1)
            }        
        }  
    }
    
    document.querySelector("#sapXepTangDan .bg-success span").innerHTML = array;
}

// Tìm số nguyên tố đầu tiên
function kiemTraSoNT(so){
    var checkSNT=true
    for (let iSo = 2; iSo<=Math.sqrt(so); iSo++) {
        if(so%iSo===0){
           checkSNT=false ;
           break;
        }
    };
    return checkSNT;
}

function SNTDau(){
    var ketQua = -1;
    for (let index = 0; index < array.length; index++) {
        if (array[index]>1 && kiemTraSoNT(array[index])) {
            ketQua = array[index];
            break;
        }
    }
    document.querySelector("#timSoNguyenToDauTien .bg-success span").innerHTML = ketQua;
}

// đếm số nguyên tố
var arr2 = [];
function demSoNguyen (){
    var dem = 0;
    for (let index = 0; index < arr2.length; index++) {
        if (Number.isInteger(arr2[index])) {
            dem++
        }        
    }
    document.getElementById('ketQuaDemSoNguyen').innerHTML = dem;
}

function themSo2 (){
    var n = +document.getElementById("themSo").value;
    arr2.push(n);
    document.querySelector("#demSoNguyen .bg-success span").innerHTML =arr2;
}

// So sánh số lượng số âm và dương
function demSoAm (){
    var dem = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]<0) {
            dem++
        }        
    }
    return dem;
}

function soSanhAmDuong (){
    var ketQua = '';
    if (demSoAm()>demSoDuong()) {
        ketQua = 'Số âm > Số dương'
    } else if(demSoAm()<demSoDuong()) {
        ketQua = 'Số âm < Số dương'
    } else{
        ketQua = 'Số âm = Số dương'
    }

    document.querySelector("#soSanh .bg-success span").innerHTML = ketQua;
}

