// Your code goes here

//   * `mouseover`
const introImg = document.querySelector('.intro img')

introImg.addEventListener('mouseover', () => {
    introImg.src = 'https://vignette.wikia.nocookie.net/worldofcarsdrivein/images/a/a7/8_%282%29.jpg/revision/latest?cb=20180329101429'
    introImg.style.height = 'auto'
    introImg.style.width = '1000px'
    introImg.addEventListener('mouseout', () => {
        introImg.src = 'https://i.ytimg.com/vi/ZkBxl0vAqBo/maxresdefault.jpg';
        introImg.style.height = "auto"
        introImg.style.width = "1000px"
    })
})

//   * `keydown`
const newBg = document.querySelector('body')

newBg.addEventListener('keydown' , () => {
    newBg.style.backgroundColor='rebeccapurple'
})

//   * `wheel`
const headingSize = document.querySelector('.logo-heading')

headingSize.addEventListener('wheel', () => {
    headingSize.style.fontSize='10rem'
})

//   * `load`
window.addEventListener('load', () => {
    window.alert('Welcome to the Fun Bus!')
})

//   * `focus`
const changeHome = document.getElementsByTagName('a')

changeHome[0].addEventListener('focus', () => {
    changeHome[0].style.color='orange'
    changeHome[0].addEventListener('blur', () => {
        changeHome[0].style.color='blue'
    })
})

//   * `resize`
const resizeWindow = window
resizeWindow.addEventListener('resize', () => {
    console.log('Ouch, dont do that!')
    console.log('Hey, watch it!')
    console.log('\n');
})


//   * `scroll`


//   * `select`
const stopNav = document.querySelector('nav')

stopNav.addEventListener('select', links => {
    links.preventDefault()
})

//   * `dblclick`
const dbClickP = document.getElementsByTagName('p')

dbClickP[0].addEventListener('dblclick', () => {
    dbClickP[0].textContent='What did you do!?'
})

//   * `drag / drop`

// Copy Event
const contentDestText = document.querySelector('.content-destination')
const noImage = document.querySelector('.content-destination img')

contentDestText.addEventListener('copy', () => {
    noImage.style.display = 'none'
})

// Click
const sClickP = document.getElementsByTagName('p');

sClickP[1].addEventListener('click', () => {
  sClickP[1].textContent = "You did it again?!"
})