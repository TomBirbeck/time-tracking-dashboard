const titles = document.querySelectorAll('.title') 
const currentArray = document.querySelectorAll('.current')
const previousArray = document.querySelectorAll('.previous')
const options = document.querySelectorAll('.options')
const res = await fetch ('./data.json')
const data = await res.json()

console.log(titles)

const handleChange = (value) => {
    
}

const setTitles = (titles, data) => {
for (let i = 0; i < titles.length; i++){
    titles[i].textContent = data[i].title
}
}

setTitles(titles, data)

options.forEach((option) => {option.addEventListener('change', () => {console.log(option)})})