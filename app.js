const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const night = document.querySelector('.night')
const sidebar = document.querySelector('.sidebar')
const activeListItem = document.querySelector('.list-item.active')
const listItem =  document.querySelector('.list').querySelectorAll('li')

listItem.forEach(element => {
    element.addEventListener('click', function(){
        listItem.forEach(li => li.classList.remove('active'));

        this.classList.add('active')
    })
})

dark.addEventListener('click', () => {
    sidebar.className = 'sidebar'
    listItem.className = 'list-item'
})

light.addEventListener('click', () => {
    sidebar.className = 'sidebar light'
    listItem.className = 'list-item light'
}) 

