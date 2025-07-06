document.addEventListener('DOMContentLoaded',()=>{
    const button= document.getElementById('menuButton')
    const nav= document.getElementById('navbar')

    button.addEventListener('click',()=>{
        nav.classList.toggle('menu__active')
    })

    const butonScroll=document.getElementById('servicesBtn');
    const TargetElement= document.getElementById('targetScroll')

    butonScroll.addEventListener('click',()=>{
        window.scrollTo({
            top:TargetElement.offsetTop,
            behavior:"smooth"
        })
    })

    //*Observer function

    const observerOptions={
        roo:null,
        rootMargin:'-100px 0px',
        threshold:0.2

    }
    const observerCalback= (entries,observer)=>{
        entries.forEach(entry => {
             if(entry.isIntersecting){
                const element= entry.target;
                const animationtype= element.getAttribute('data-animate')

                switch (animationtype) {
                    case 'fade-Up':
                        element.classList.add('fade-Up')
                        break;
                
                        
                    default: element.classList.add('')
                        break;
                }
                observer.unobserve(element)
             }
        });
    }

    const observer= new IntersectionObserver(observerCalback,observerOptions)

    document.querySelectorAll('[data-animate]').forEach(element=>{
        observer.observe(element)
    })
})