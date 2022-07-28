function xemgia(){
let nhapten = document.getElementById("nhapten").value;
let ketqua ="";
     switch(nhapten) {
        case "Ổi":
            ketqua = "20000VND/kg";
            break;
        case "Dưa Hấu":
            ketqua = "20000VND/kg";
            break;
        case "Táo":
            ketqua = "30000VND/kg";
            break;
        case "Xoài":
            ketqua = "30000VND/kg";
            break;
        case "Cam":
            ketqua = "40000VND/kg";
            break;
        case "Chôm Chôm":
            ketqua = "40000VND/kg";
            break;
        case "Măng Cụt":
            ketqua = "50000VND/kg";
            break;
     }
     document.getElementById("ketqua").innerHTML= ketqua;
}