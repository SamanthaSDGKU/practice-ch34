let products =[];// products array stores all the products of the transaction
//create the constructor
function Product(paramProduct,paramPrice){
    this.attrProduct=paramProduct;
    this.attrPrice=paramPrice;
}
//get the values from the inputs using JS
let inputProduct = document.getElementById("txtProduct"); // the value is "" at this point
let inputPrice = document.getElementById("txtPrice"); 

//regsiter function
function register(){
    let newProduct = new Product(inputProduct.value,inputPrice.value); // creating the new object
    products.push(newProduct); // add the product to the array
    display();
}

//display function
function display(){
    let row="";
    //travel the products array
    for(let i=0;i<products.length;i++){
        let product=products[i];
        row+=`
        <tr>
            <td>${i+1}</td>
            <td>${product.attrProduct}</td>
            <td>${product.attrPrice}</td>
        </tr>`;
        
    }
    document.getElementById("productsTable").innerHTML=row;
}

//create an init
function init(){
    //create initial objs
    let product1 = new Product("T-shirt",12.5);
    products.push(product1); // add the product to the array
    display();
}

window.onload=init;
    

