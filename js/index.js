// Your code goes here

//   * `mouseover`
const introImg = document.querySelector('.intro img')

introImg.addEventListener('mouseover', () => {
    introImg.src = 'https://vignette.wikia.nocookie.net/worldofcarsdrivein/images/a/a7/8_%282%29.jpg/revision/latest?cb=20180329101429'
    introImg.style.height = 'auto'
    introImg.style.width = '1000px'
    introImg.addEventListener('mouseout', () => {
        introImg.src = 'https://i.ytimg.com/vi/ZkBxl0vAqBo/maxresdefault.jpg';
        introImg.style.height = "auto";
        introImg.style.width = "1000px";
    })
})

//   * `keydown`
const newBg = document.querySelector('body')

newBg.addEventListener('keydown' , () => {
    newBg.style.backgroundColor='rebeccapurple';
})

//   * `wheel`
const headingSize = document.querySelector('.logo-heading')

headingSize.addEventListener('wheel', () => {
    headingSize.style.fontSize='10rem'
})

//   * `load`


//   * `focus`


//   * `resize`


//   * `scroll`


//   * `select`


//   * `dblclick`


//   * `drag / drop`