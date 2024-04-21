const navigations=document.querySelectorAll('li')
const contents=document.querySelectorAll('.content')

function removeActiveClasses(){
    navigations.forEach((nav)=>{
        nav.classList.remove('active')
    })
}

function removeAllShowClasses(){
    contents.forEach((content)=>{
        content.classList.remove('show')
    })
}

navigations.forEach((nav,idx)=>{
    nav.addEventListener('click',()=>{
        removeActiveClasses()
        removeAllShowClasses()
        nav.classList.add('active')
        contents[idx].classList.add('show')
    })
})