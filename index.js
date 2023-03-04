const allCard = (dataLimit)=>{
  //const url =``;
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res=>res.json())
  .then(data =>displayCard (data.data.tools,dataLimit))
}
const displayCard =(data,dataLimit)=>{
const mainContainer=document.getElementById('main-container');
mainContainer.innerHTML=''
const showData=document.getElementById('showbtn');
if(dataLimit && data.length>6){
data= data.slice(0, 6);
showData.classList.remove('d-none')
}
else {
showData.classList.add('d-none')
} 

console.log(data)
data.forEach(tooll=>{
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
//.then (data =>console.log(data.data))
}

const showAllData =idDetails =>{
console.log(idDetails)
//console.log(idDetails.pricing[0].price);
const exampleModal=document.getElementById('exampleModal');
const modalDiv =document.getElementById('exampleModalLabel')
modalDiv.innerHTML=`

<div class="row p-4">
<div class="card col-sm-6 bg-warning">
<p class='p-3'>${idDetails.description}</p>

<div class='card-group gap-2 row'>
<div class="card p-1 text-info">${idDetails.pricing[0] ? idDetails.pricing[0].price : 'No-pricing'}<br><span>${idDetails.pricing[0].plan}<span>  </div>
<div class="card p-1 text-warning">${idDetails.pricing[1] ? idDetails.pricing[1].price : 'no price' }<br><span>${idDetails.pricing[1].plan}<span> </div>
<div class="card p-1 text-danger">${idDetails.pricing[2] ? idDetails.pricing[1].price: 'no price'  }<br><span>${idDetails.pricing[2].plan}<span> </div>
</div>
<br>
<div class="row ">
<div class ="col col-md-6">
<h4>Fetures</h4>
<ul>
<li>${idDetails.features[1].feature_name}</li>
<li>${idDetails.features[2].feature_name}</li>
<li>${idDetails.features[3].feature_name}</li>
</ul>
</div>
<div class ="col col-md-6">
<p>Integration</p>
<ul>
<li>${idDetails.integrations? idDetails.integrations[0] :'no-data'}</li>
<li>${ idDetails?.integrations? idDetails.integrations[1] : 'no'}</li>
<li>${idDetails.integrations? idDetails.integrations[2] : 'noo'}</li>
</ul>
</div>
</div>

</div>


<div class="card col-sm-6" style="width:20rem">
<img class="card-img-top p-1" src="${idDetails.image_link[0]}">
<div class="align-top" >
<button class="btn btn-primary  p-1" style="margin-top:-280px;margin-left:180px">${ idDetails.accuracy? idDetails.accuracy.score : 'no-data'} accuracy</button></div><br>
<h3>${idDetails.input_output_examples[0]? idDetails.input_output_examples[0].input : 'Can you give any example'}</h3> 
<h6>${idDetails.input_output_examples[0]?  idDetails.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</h6>
</div>
</div>

`


}
document.getElementById('showbtn').addEventListener('click',function(){
allCard();
})

const toggleloadingSpin = isLoading =>{
const loadingSpin = document.getElementById('loadingSpin');
if (isLoading) {
  loadingSpin.classList.remove('d-none')
  
}
else{
    loadingSpin.classList.add('d-none')

}


}
allCard(6);

