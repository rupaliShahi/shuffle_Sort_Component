const numberFunc = () => {
    let cardDetails = '';
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            data.forEach((numb, i) => {
                cardDetails += `<div class="grid-item">
                                    <div class="grid-inner ${numb.className}">
                                        ${numb.number}
                                    </div>
                                </div>`
            });
            document.querySelector('.grid-container').innerHTML = cardDetails;

            const shuffleFn = (data) => {
                let shuffuledCard = '';
                for (let i = data.length-1; i >= 0; i--) {

                    let randomIndex = Math.floor(Math.random() * (i + 1)); 
                    let itemAtIndex = data[randomIndex]; 
                    
                    data[randomIndex] = data[i]; 
                    data[i] = itemAtIndex;
                    //console.log(data[i]);
                    shuffuledCard += `<div class="grid-item">
                                    <div class="grid-inner ${data[i].className}">
                                        ${data[i].number}
                                    </div>
                                </div>`
                }
                document.querySelector('.grid-container').innerHTML = shuffuledCard;
            }

            document.querySelector('#shuffle').addEventListener('click', () => {
                shuffleFn(data);
            });

            const sortFn = (data) => {
                let sortCard = '';
                data.sort((a, b) => {
                    return a.number - b.number;
                });

                console.log(data);
                data.forEach((sorted) => {
                    sortCard += `<div class="grid-item">
                                    <div class="grid-inner ${sorted.className}">
                                        ${sorted.number}
                                    </div>
                                </div>`;
                });
                document.querySelector('.grid-container').innerHTML = sortCard;
                
            }
            
            document.querySelector('#sort').addEventListener('click', () => {
                sortFn(data);
            });
            
        })
        .catch(err => console.log(err));
}

numberFunc();

document.querySelector("#name").innerHTML = "Rupali Shahi"







