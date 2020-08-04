// Your code goes here

//   * `mouseover`
const introImg = document.querySelector('.intro img')

introImg.addEventListener('mouseover', () => {
    introImg.src = "https://vignette.wikia.nocookie.net/worldofcarsdrivein/images/a/a7/8_%282%29.jpg/revision/latest?cb=20180329101429"
    introImg.addEventListener('mouseout', () => {
        introImg.src = "https://i.ytimg.com/vi/ZkBxl0vAqBo/maxresdefault.jpg";
    })
})

//   * `keydown`


//   * `wheel`


//   * `load`


//   * `focus`


//   * `resize`


//   * `scroll`


//   * `select`


//   * `dblclick`


//   * `drag / drop`