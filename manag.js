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
 console.log("jhdwfdewb")
  for(  i in geth1.children){
    if(i==0)
    geth1.children[i].innerHTML=h1[count];
   if(i==1)
   geth1.children[i].innerHTML=h2[count];
   if(i==2)
   geth1.children[i].innerHTML=p[count];


  }
  for (u in t) {
    console.log(u);
    console.log(t[u]);
    if (u == count) {
      t[u].style = "background-color:" + co;
    } else {
      t[u].style = "background-color: transparent";
    }
  }
}
