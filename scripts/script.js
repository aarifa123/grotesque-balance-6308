let container_middle=document.getElementById("container-middle")

let arr={
first:    [

        {
           image:"https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg",
           des:"High Quality housekeeping"
        
        }
        ,
        {
            image:"https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg",
            des:"Comfortable Linen and Toiletries"
         
         }
         ,
        
         {
            image:"https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg",
            des:"Quality Furniture & Fittings"
         
         }
        
        ,
        {
            image:"https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg",
            des:"Food Delivery Or Central Restaurant"
         
         }
        
           ],
photos:[
{
  photo:"https://cdn.trendir.com/wp-content/uploads/old/house-design/small-villa-design-3.jpg",
  h2:"Kenisha Holiday Homes ",
  p:" Pawasalwadi, Maharashtra "

}
,
{
   photo:"https://cdn.thegoavilla.com/landscape/02199x300.jpg",
   h2:"Tata Rio De Goa",
   p:"Tripvillas In Dabolim, Goa "
}
,
{ photo:"https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16722/photo_1024/d9d86936f1a311e9924e0a8e1b1ce4da_photo_1024.jpeg",
h2:"White Villas Shahapur ",
p:"Tripvillas In Shahapur, Maharashtra "
},
{
   photo:"https://cdn.trendir.com/wp-content/uploads/old/house-design/small-villa-design-1.jpg",
   h2:"White Villas Kasara",
   p:"Tripvillas In Kasara, Maharashtra  "
},
{ photo:"https://stylesatlife.com/wp-content/uploads/2021/02/Residential-villa-design14.jpg.webp",
h2:"Puravankara Adora De Goa ",
p:"Tripvillas In Dabolim, Goa "
},
{ photo:"https://assets.cntraveller.in/photos/612350165ee2ad4060e8cb54/master/w_1600%2Cc_limit/Xanadu%2520exterior.jpg",
h2:"Dreamz Shiroda",
p:" Tripvillas In Shiroda, Maharashtra  "
},
{ photo:"https://i.pinimg.com/736x/5e/33/5a/5e335aab97b55ae39c5c6fe3aee8e1c5.jpg",
h2:"Pristine Bay Mahabalipuram",
p:" Tripvillas In Thenpattinam, Tamil Nadu  "
}

]
          
}


    
  let bigcard1=document.getElementById("bigcard1")
//   let heading1=document.createElement("h2")
//   heading1.innerText="Fully Managed Communities By Tripvillas"
//   bigcard1.append(heading1)
containermiddleleft(arr.first)

function containermiddleleft(data){
   
   // container_middle.append(heading1)
data.forEach(function(element){
  
let card1=document.createElement("div")
card1.className="card1"
// let bigcard=document.createElement("div")
// bigcard.className="bigcard"
let des=document.createElement("h4")
des.innerText=element.des
let image=document.createElement("img")
image.src=element.image

card1.append(image,des)
bigcard1.append(card1)
// container_middle.append(bigcard)
})


}
let bigcard2=document.getElementById("bigcard2")
containermiddleright(arr.photos)

function containermiddleright(data){

data.forEach(function(element){
   let card2=document.createElement("div")
card2.className="card2"
let photo=document.createElement("img")
photo.src=element.photo
let villaname=document.createElement("h2")
villaname.innerText=element.h2
let address=document.createElement("h5")
address.innerText=element.p
let insidecard=document.createElement("div")
insidecard.className="insidecard"
insidecard.append(villaname,address)
card2.append(photo,insidecard)
 bigcard2.append(card2)
 console.log(card2)
})





}