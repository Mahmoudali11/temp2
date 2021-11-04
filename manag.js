let img = [
  "cloud-computing-banner-background-smart-city.jpg",
  "coding-man.jpg",
  "corporate-businessmen-shaking-hands.jpg",
];
let count = 0;
let h1 = ["wjkfneowf", "ewbgfiuew", "egwvujrfef"];
let h2 = ["tregrege", "refgre", "rewrfef"];
let p = [
  "uasyfdwsjfedkwef <br>uiewufuoiwehiufwehfu<br>iuwhfoiuwhofhweofhwoeifhw",
  "uasyfdwsjfedkwef <br>uiewufuoiwehiufwehfu<br>iuwhfoiuwhofhweofhwoeifhw",
  "uasyfdwsjfedkwef <br>uiewufuoiwehiufwehfu<br>iuwhfoiuwhofhweofhwoeifhw",
];

let geth1=document.getElementById("ltext");

let x = setInterval(banner, 5000);
console.log(localStorage.getItem("token"))


if(localStorage.getItem("token")){
  // window.location="home.html"
   
}
 function banner() {
  count++;
  
  if (count >= img.length) {
    
    count = 0;
  }
  var xl = document.getElementById("landing");
    xl.style="background-image:url('./images/" + img[count] + "')";

  var t = document.getElementById("circles").children;
  var cv = getComputedStyle(document.head);
  var co = cv.getPropertyValue("--maincolor");
  geth1.style="left:0px"; 
  

 const ti= setTimeout(()=>{
    geth1.style="left:-100%";  
  },4000)
//  console.log("jhdwfdewb")
  for(  i in geth1.children){
    if(i==0)
    geth1.children[i].innerHTML=h1[count];
   if(i==1)
   geth1.children[i].innerHTML=h2[count];
   if(i==2)
   geth1.children[i].innerHTML=p[count];


  }
  for (u in t) {
    // console.log(u);
    // console.log(t[u]);
    if (u == count) {
      t[u].style = "background-color:" + co;
    } else {
      t[u].style = "background-color: transparent";
    }
  }
}
let cond=document.getElementsByClassName("services")[0];
let socia=document.getElementsByClassName("social");
console.log(socia[0].className)
const elementInView = function (ele,cond,precentage=100){
  console.log("ele"+cond.offsetTop);
  console.log(window.scrollY);
        if(cond.offsetTop<=((window.scrollY)*(precentage/100))){

          ele[0].style="display:flex";
          console.log(window.scrollY);

        }
        else{
          ele[0].style="display:none";

        }

}
let prog=document.querySelectorAll(".pgholder");

const progressanimation=function( pre=1){

 console.log("pro"+prog[0].offsetTop)

  if(prog[0].offsetTop<=(window.scrollY+700))
   for(k in prog){
     console.log(k)
          let v=parseInt(k);
          v++;

       console.log(v)
      prog[k].children[0].style.width=`${v*11}%`;

   }
   else{
    for(k in prog){
      console.log(k)
        
      prog[k].children[0].style.width="0%";

    }

   }

}
window.addEventListener("scroll", () => {
    
   
     elementInView(socia,cond,170)
  progressanimation(1);
 });

 localStorage.setItem("token","jhgfywefewyfuriew")
