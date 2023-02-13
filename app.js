

const prevBtn= document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

var index=0;


nextBtn.addEventListener('click',()=>{
    show_image(index++);
    
});
prevBtn.addEventListener('click',()=>{
    show_image(index--);
    
});



function show_image(i){
    

    var images = document.getElementsByClassName("image fade");
    // var dots = document.getElementsByClassName("dot");
    console.log(images)
    for(i=0;i<images.length;i++)
        images[i].style.display ="none";

    // for(i=0;i< dots.length;i++)
        // dots[i].className =dots[i].className.replace("active", "");

    if(index > images.length -1)
        index=0;  

    if(index < 0)
        index=images.length -1;
    console.log(index);
    console.log(images[index]);
    images[index].style.display ="block";
    // dots[index].className += "active";
}
onload=function(){
    show_image(index)
}