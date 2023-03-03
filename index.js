const allCard = ()=>{
    //const url =``;
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res=>res.json())
    .then(data =>displayCard (data.data))
}
 const displayCard =data=>{
 const mainContainer=document.getElementById('main-container');
const showData=document.getElementById('showbtn');
if(data.length>6){
  data= data.slice(0, 6);
  showData.classList.remove('hidden')
}
else {
  showData.classList.add('hidden')
} 
data.tools?.forEach(tooll=>{
    //console.log(tooll)
    const cardDiv=document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${tooll.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <p>Features</p>
    <p><span>1.</span>${tooll.features[0]}</p>
    <p><span>2.</span>${tooll.features[1]}</p>
    <p><span>3.</span>${tooll.features[2]}</p>
    <br>
   
    <h4> ${tooll.name}</h4>
    <div class="d-flex justify-content-between">
    <p><span><i class="fa-solid fa-calendar-days"></i></span> ${tooll.published_in}</p>
    <p><i class="fa-solid fa-arrow-right" onclick="showSingelDetails('${tooll.id}')"data-bs-toggle="modal" data-bs-target="#exampleModal"></i></p>
    </div>
    

    </div>
  </div>
    `
    mainContainer.appendChild(cardDiv)

 })
//console.log(data.data.tools[0])
}
//modal working
const showSingelDetails=id=>{
let url=` https://openapi.programming-hero.com/api/ai/tool/${id}`
fetch(url)
.then(res =>res.json())
.then(data =>showAllData(data.data))
}
const showAllData =idDetails =>{
console.log(idDetails)
const exampleModal=document.getElementById('exampleModal');
const modalDiv =document.getElementById('exampleModalLabel')
modalDiv.innerHTML=`
<div class='d-flex' g-3>
<div class="card style="width: 10rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${idDetails}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card style="width: 10rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
`


}

allCard()