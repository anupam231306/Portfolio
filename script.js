// Sticky Navigation
let navbar = document.querySelector('.navbar');


const topBtn=document.getElementById("topBtn");
window.onscroll=function(){
    if(document.body.scrollTop>300||document.documentElement.scrollTop>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
};
topBtn.addEventListener("click",()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
window.addEventListener("load",function(){
    setTimeout(()=> {
        document.getElementById("loader").style.opacity="0";
        setTimeout(()=>{
            document.getElementById("loader").style.display="none";
        },800);
    },2000);
});

emailjs.init("jBaR3vsQ6UZTEu4fh");

document.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_35sonql",
        "template_cn3pvv3",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
    })
    .catch((error) => {
        alert("Error: " + error.text);
    });

});
const btn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

btn.addEventListener("click", () => {
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
});
