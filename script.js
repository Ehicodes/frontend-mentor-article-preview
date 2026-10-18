const shareBtn =  document.querySelector('.share-btn')
const socialsWrapper = document.querySelector('.socials') 
const authorBlock = document.querySelector('.author')
const activeShareBtn = document.querySelector('.socials-btn')

shareBtn.addEventListener('click', function() {
  socialsWrapper.classList.toggle('socials--active')
  authorBlock.classList.add('author--hidden')
})

activeShareBtn.addEventListener('click', function () {
     authorBlock.classList.remove('author--hidden')
     socialsWrapper.classList.remove('socials--active')
})