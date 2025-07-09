
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    const dataCont=document.querySelector('.data-cont');

    data.forEach(user => {
        const card=document.createElement('div')
        const card_front=document.createElement('div')
        const card_back=document.createElement('div')
        
        card.classList.add('card')
        card_back.classList.add('card-back')
        card_front.classList.add('card-front')
        card_back.innerHTML=
           `
            <h4>Name</h4>
            <p>${user.name}</p>
            <h4>Phone</h4>
            <p>${user.phone}</p>
            <h4>Website</h4>
            <p>${user.website}</p>
           `
        card_front.innerHTML=
           `
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWjfDvBbj1OMjSu3FDtuNdNA9zHGRSq7CIg&s'>
           `   
        card.appendChild(card_back);
        card.appendChild(card_front);
        dataCont.appendChild(card)  
    });
})