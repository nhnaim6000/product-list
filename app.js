
/**
 * get all elements 
 * */ 

const form = document.getElementById('product-form');

const show = document.getElementById('show-data');

const errorshow = document.getElementById('error-show');


/**
 * event fire
*/

form.addEventListener('submit', function(e) {


    e.preventDefault();

    const name = this.querySelector('input[name="name"]').value;
    const dis = this.querySelector('input[name="dis"]').value;
    const img = this.querySelector('input[name="img"]').value;
    const price =  this.querySelector('input[name="price"]').value  ;
    
    let ptt = /^[a-zA-z]*$/;

    if(name == '' || dis == ''|| img == '' || price == '' ){

        errorshow.innerHTML = err('empty box')
        gone(errorshow)
    }

    

    else if(ptt.test(price)){
         
        errorshow.innerHTML = err('price box only number allowed')
    gone(errorshow)
    }

    else{

   

    

  
    
    let data = [] ;


    if(getdata('product')){
      
         data = getdata('product') ;
    }

    else{
        data = [];
    }


    data.push({
        name    : name,
        dis     : dis,
        img     : img,
        price   : price
    });

    setdata('product', data)


    showls()
    }
});

showls();

function showls(){
          let list = '';
    getdata('product').map(data => {
        list += `
        
        <div class="col-lg-4 col-6 ">
        <div class="card" style="width: 18rem;">
          <img  src="${data.img}"jpg" class="card-img-top img-h" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.dis}</p>
            <span class="price">${data.price}$</span>
            <a href="#" class="btn btn-success">Add To Cart</a>
          </div>
        </div>
       </div>
        
        `
    });

    show.innerHTML = list;

}