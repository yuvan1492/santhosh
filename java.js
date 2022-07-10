const btn=document.querySelector('.switch-btn');
const video=document.querySelector('.video-container');
const header=document.querySelector('header');

header.addEventListener('click',function(){
    if(!header.classList.contains('slide')){
        header.classList.add('slide');
        video.pause();
    }
    else {
        header.classList.remove('slide');
        video.play();
    }
});