// Your code goes here

//Top Image Events
const topIMG = document.querySelector('.container .intro img');

topIMG.addEventListener('mouseover', (event)=>{
    topIMG.setAttribute('src', 'https://eol.jsc.nasa.gov/DatabaseImages/ESC/small/ISS007/ISS007-E-10807.JPG');
    event.target.style.width = '100%';event.target.style.borderRadius = '0 0 40px 40px';
    welcomeTxt.textContent = 'Wait a minute...';
    welcomeTxt2.textContent = 'Have you ever seen, with your own eyes, the curvature of the earth? I mean besides what you get from government agencies, have you seen it? If you have, was it really a curve or was it just nothing but your ego holding on to something that you accepted as truth without question? "No, not me, your the one brainwashed!" For an example click on the next image just below... ';
});

topIMG.addEventListener('mouseout', (event) => {
    topIMG.setAttribute('src', 'img/fun-bus.jpg');
    event.target.style.borderRadius = '0px';
    event.target.style.margin = '0px';
});

//Welcome Text Events

const welcomeTxt = document.querySelector('.container .intro h2');
const welcomeTxt2 = document.querySelector('.container .intro p');

//Main Section Events

const letsGoTxt = document.querySelector('.home .content-section .text-content h2');
const letsGoPara = document.querySelectorAll('.home .content-section .text-content p');
const letsGoImg = document.querySelector('.home .content-section .img-content img');

letsGoImg.addEventListener('click', (event)=> {
    letsGoTxt.textContent = 'Two Different Dots';
    letsGoPara[0].textContent = 'Here are two dots of different sizes, one is blue and one is red. Can you point out the bigger dot and the smaller dot? double click th enext image below to find out the real answer.';
    letsGoPara[1].textContent = '';
    event.target.setAttribute('src', 'img/dots.jpeg');
});


const letsGoImg2 = document.querySelector('.home .inverse-content .img-content img');
const letsGoTxt2 = document.querySelector('.home .inverse-content .text-content h2');
const letsGoPara2 = document.querySelectorAll('.home .inverse-content .text-content p');
letsGoImg2.addEventListener('dblclick', (event)=> {
    event.target.setAttribute('src', 'https://www.yourdictionary.com/images/definitions/lg/3986.equal.jpg');
    event.target.style.width = '100%';
    letsGoTxt2.textContent = 'Would You Look at That!';
    letsGoPara2[0].textContent = 'If you said either the blue or the red dot is bigger or smaller than the other, you were wrong. Both dots are the same exact size. Just because I said they were different from each other and challenged your intelect, you believed there was a difference and took up the challenge.';
    letsGoPara2[1].textContent = 'This is a clear example of how easy it is to brainwash someone into beliving a lie. See when we believe a lie and teach it to our kids it becomes tradition. When we teach others and they teach their kids it then becomes culture. Before we know it we created a whole reality based on a lie.  Click the image below... slowly...';
});

const pickYourDest = document.querySelector('.home .content-destination');
const pickYourDestTxt = document.querySelector('.home .content-destination h2');
const pickYourDestPara = document.querySelector('.home .content-destination p');
const pickYourDestIMG = document.querySelector('.home .content-destination img');

pickYourDestIMG.addEventListener('mousedown', ()=> {
    pickYourDestTxt.textContent = 'Check this out!';
    pickYourDestPara.textContent = 'Just blows your mind...';
    pickYourDestIMG.setAttribute('src', 'https://sites.google.com/a/wildlandschool.net/low-orbit-weather-balloon-project/_/rsrc/1418741737524/home/Picture1.jpg?height=240&width=320');
}); 

pickYourDestIMG.addEventListener('mouseup', ()=> {
    pickYourDestTxt.textContent = 'Check this out!';
    pickYourDestPara.textContent = 'This is an image taken at about 25+ miles up using a weather ballon and a camera without a fish eye or wide angle lens. lens. I could not believe it myself at first but there are so many out there. That explains why boats that appear to go down a curve when in reality they just diapear past your field of view due to laws of perstpective, I say this because you can bring the same boats back into your view with a telescope or a highpowered telescope. Of course our technology has its limits.';
    pickYourDestIMG.setAttribute('src', 'https://media.phillyvoice.com/media/images/flatearth.width-704.jpg');
})
