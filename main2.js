
document.addEventListener('DOMContentLoaded',function(){



        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            const dataCont= document.querySelector('.data-container')
            
            data.forEach(user => {
                    const card= document.createElement('div');
                    const card_back= document.createElement('div');
                    const card_front= document.createElement('div');
                    card.classList.add('card')
                    card_back.classList.add('card-back');
                    card_front.classList.add('card-front');

                    card_front.innerHTML=`      <h4>Name</h4>
                                                <p>${user.name}</p>
                                                <h4>Phone</h4>
                                                <p> ${user.phone}</p>
                                                <h4>Web-site</h4>
                                                <p> ${user.website}</p>
                                            `
                    card_back.innerHTML=`<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYlinY41i-0n_8HRK_hkKrSZlqKOxCLcNxA&s'> `                        
                    card.appendChild(card_front);
                    card.appendChild(card_back);
                    dataCont.appendChild(card)

            });
          


        })

})