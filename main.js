const titles = document.querySelectorAll('.title') 
const currentArray = document.querySelectorAll('.current')
const previousArray = document.querySelectorAll('.previous')
const options = document.querySelectorAll('.options')
const res = await fetch ('./data.json')
const data = await res.json()

const setTitles = (titles, data) => {
    for (let i = 0; i < titles.length; i++){
        titles[i].textContent = data[i].title
    }
    }
    
    setTitles(titles, data)

const setCardText = (current, previous, data, value) => {
    for (let i = 0; i < current.length; i++) {
        current[i].textContent = data[i].timeframes[value].current + 'hrs'
        previous[i].textContent = 'Last week - ' + data[i].timeframes[value].previous + 'hrs'
    }
}

setCardText(currentArray, previousArray, data, 'weekly')

options.forEach((option) => {option.addEventListener('change', () => {setCardText(currentArray, previousArray, data, option.value)})})