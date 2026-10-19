'use strict'

const shareBtn =  document.querySelector('.share-btn')
const socialsWrapper = document.querySelector('.socials') 
const authorBlock = document.querySelector('.author')
const activeShareBtn = document.querySelector('.socials-btn')

shareBtn.addEventListener('click', function() {
const mediaQuery = window.matchMedia('(min-width: 48em)').matches

socialsWrapper.classList.toggle('socials--active')

   if(mediaQuery){
    shareBtn.classList.toggle('share-btn--active')
    authorBlock.classList.remove('author--hidden')
   
  } else{
    authorBlock.classList.add('author--hidden')
  }
})

activeShareBtn.addEventListener('click', function () {
     authorBlock.classList.remove('author--hidden')
     socialsWrapper.classList.remove('socials--active')
})

