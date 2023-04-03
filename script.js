class Water {
    constructor(id, photo, name, price) {
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.price = price;
    }
}
let waters = [
    new Water(1, "https://bianhapkhau.net/wp-content/uploads/2019/04/bia-staropramen-lon-500ml-nh%E1%BA%ADp-kh%E1%BA%A9u-ti%E1%BB%87p-600x600.jpg", "Bia Staropramen Thùng 5%  Lon 500ml  Thùng 24 Lon", 920000),
    new Water(2, "https://bianhapkhau.net/wp-content/uploads/2019/05/bia-heineken-lon-cao-500ml.png","Bia Heineken Hà Lan 5%  Lon Cao 500ml  Thùng 24 Lon", 950000),
    new Water(4, "https://bianhapkhau.net/wp-content/uploads/2019/04/bia-corona-chai-355ml-600x600.jpg", "Bia Corona Extra 4,5%  Chai 355ml  Thùng 24 Chai", 730000),
    new Water(5, "https://bianhapkhau.net/wp-content/uploads/2019/04/bia-oettinger-%C4%91en-lon-500ml-600x602.jpg", "Bia Oettinger Đen 4,9%  Lon 500ml  Thùng 24 Lon", 960000),
    new Water(6, "https://bianhapkhau.net/wp-content/uploads/2019/05/bia-pilger-lon-500ml-nh%E1%BA%ADp-kh%E1%BA%A9u-%C4%90%E1%BB%A9c.jpg", "Bia Paderborner Pilger Original 5%  Lon 500ml  Thùng 24 Lon", 850000),
    new Water(7, "https://bianhapkhau.net/wp-content/uploads/2021/01/bia-peroni-nh%E1%BA%ADp-kh%E1%BA%A9u-%C3%BD-chai-330ml-600x600.jpg", "Bia Peroni 5,1%  Chai 330ml  Thùng 24 Chai", 1060000)
]
waterss()
function waterss() {
    let list = document.querySelector(".list");
    list.innerHTML = "";
    for (let i=0 ; i<waters.length;i++) {
        list.innerHTML += `
        <div class="item">
             <div class="img">
                            <img src="${waters[i].photo}" alt="">
             </div>
            <div class="content">
                <div class="title">${waters[i].name} </div>
                <div class="price"> ${formatCurrency(waters[i].price)}</div>
                <button class="remove" onclick= "remove(${waters[i].id})"><i class="fa-regular fa-trash-can"></i></button>
                <button class="edit" onclick="editProduct(${waters[i].id})"> <i class="fa-regular fa-pen-to-square"></i></button>
             </div>
         </div>
        `
    }
}
function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
waterss()
function handleAddClick() {
    let errors = [];
    let photo = document.getElementById("img").value;
    let name = document.getElementById("title").value;
    let price = +document.getElementById("price").value;
    if (photo == '') {
        errors.push('photo không được để trống')
    }
    if (name == '') {
        errors.push('name không được để trống')
    }
    if(errors.length==0) {
        let id;
        if (getMaxId() == -1) {
            id = 1
        }
        else {
            id = getMaxId()+1;
        }
        let p = new Water(id, photo, name, price);
        waters.push(p)
        waterss()
    }
}
function getMaxId() {
    if (waters.length > 0) {
        let maxProduct = waters[0];
        for (let i = 1; i < waters.length; i++) {
            if (waters[i].id > maxProduct.id) {
                maxProduct = waters[i];
            }
        }
        return maxProduct.id;
    } else {
        return -1;
    }
}
function remove(id) {
    let confirm = window.confirm('Are you sure to remove this vendor?');
    if (confirm == true) {
        waters = waters.filter(function (water) {
            return water.id != id;
            // nếu khác id sẽ ko bị xoá
        })
        waterss();
    }
}
function editProduct(id){
    document.querySelector(".addProduct").style.display = 'none';
    document.querySelector(".editProduct").style.display = 'block';
    document.querySelector(".cancelProduct").style.display = 'block';
    document.getElementById("idEdit").value = id;
    let product = findProductById(id);
    if(product!=null){
        document.getElementById("img").value = product.photo;
        document.getElementById("title").value = product.name;
        document.getElementById("price").value = product.price;
    }else{
        alert("Không tìm thấy sản phẩm với id là " + id);
    }
}
function findProductById(id){
    for(let i= 0;i<waters.length;i++){
        if(waters[i].id == id){
            return waters[i];
        }
    }
    return null;
}
function handleEditClick(){
    let idEdit = +document.getElementById("idEdit").value;
    let img = document.getElementById("img").value;
    let title = document.getElementById("title").value
    let price = document.getElementById("price").value;
    for(let i=0;i<waters.length;i++){
        if(waters[i].id == idEdit){
            waters[i].img = img;
            waters[i].title = title;
            waters[i].price = price;
        }
    }
    document.getElementById("img").value = "";
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.querySelector(".addProduct").style.display = 'block';
    document.querySelector(".editProduct").style.display = 'none';
    document.querySelector(".cancelProduct").style.display = 'none';
    waterss();
}











