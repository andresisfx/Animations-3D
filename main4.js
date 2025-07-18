


    const navbar=document.querySelector('.nav__list');
    const menuBtn=document.querySelector('.hamburger')

    menuBtn.addEventListener('click',function(){
        navbar.classList.toggle('menu__active')
    })


    const smotthBtn= document.querySelector('#smooth');
    const targetElement=document.querySelector('.target__elemnt')
    smotthBtn.addEventListener('click',function(){
        window.scrollTo({
            top:targetElement.offsetTop,
            behavior:"smooth"
        })
    })

   const observerOptions={
       root:null,
       rootMargin:' 0px',
       threshold:1

    }

    const observertCallback=(entries,observer)=>{
        
        entries.forEach(entry => {
             if(entry.isIntersecting){

                const targetEl=entry.target;
                console.log(targetEl)
                const animationType=targetEl.getAttribute('data-animate');
                switch (animationType) {
                    case 'fade-up':
                        targetEl.classList.add('fade-up')
                        break;
                    default:targetEl.classList.add('')
                        break;
                 
                }
                observer.unobserve(targetEl)
            }
        });
    } 

    const observer= new IntersectionObserver(observertCallback,observerOptions);

    const elementsToAnimate= document.querySelectorAll('[data-animate]')
    
    elementsToAnimate.forEach(element=>{
        observer.observe(element)
    })


    //*carousel
    
    const carouselImage=document.querySelector('.carrousel__image');
    const totalImages= carouselImage.children.length;
    const slide_image_time= 6000;
    let index=0
  
    const changeImage=()=>{
          index=(index +1) % totalImages
          console.log("index here",index)
          carouselImage.style.transform=`translateX(-${index*100}%)`
    }
    let interval= setInterval(changeImage,slide_image_time);

    carouselImage.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
    carouselImage.addEventListener('mouseleave',function(){
         interval= setInterval(changeImage,slide_image_time);
    })

