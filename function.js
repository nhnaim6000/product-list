

function setdata(key, value){

    let data = JSON.stringify(value);

    localStorage.setItem(key,data);

}


function getdata(key){

    let data = localStorage.getItem(key);

    return JSON.parse(data)


}

function err(error){
   return `<p class="alert alert-danger alert-dismissible"> ${error} <span class="btn-close" data-bs-dismiss="alert" aria-label="Close">  </span> </p>`
}

function gone(val){

   return  setTimeout( () => {
    val.innerHTML = ''; 
  },5000)
}