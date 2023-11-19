    
    // element
    let header =  document.querySelector('.main-header');
    let country;
    let city;
    let language;
    let search = document.querySelector('.form');
    let input = document.querySelector('.inpt');
    let clear = document.querySelector('.X');


    //отправляем форму
    search.onsubmit = function (e) {
        e.preventDefault(); // cancel sending form

        city = input.value.trim(); //take value from input

    //ключ
    const key = '81f0155343015673b008ac96be2c813d';

    //адрес запроса
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
   //выполняем запрос
    fetch(url)
    .then(function (resp) 
        {return resp.json()  
    })
    .then(function (data) {
        // console.log(data);
        // console.log(data.cod);
        // console.log(Math.round(data.main.temp - '273') + '°C ');
        // console.log(data.weather[0]['description']);
        // console.log(data=`<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`);
      
      // код для удаление карт при поиске другого 
       // удаляем карточку при поиске другого города 
    const predCard1 = document.querySelector('.card');
    if (predCard1){
        predCard1.remove();
    }

    // удаляем карточку при поиске другого города и при ошибке 
    const predCard = document.querySelector('.card-eror');
    if (predCard){
        predCard.remove();
    }

    
    // проверка на ошибку ввода города
    if (data.message ) {
    // если ошибка 
     const eror = `<div class="card-eror">
                        <div>${data.message}</div>
                    </div>`;

        header.insertAdjacentHTML('afterend', eror);

        } else {
    // если нет ошибки вставляем разметку 
    //Разметка карточки
    const html = `<div class="card">
            <div class="City">${data.name}<sup class="country">${data.sys.country}</sup></div>
                <div class="weather">
                    <div class="degree">${Math.round(data.main.temp - '273') + '°C'}</div>
                    <img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">
                     
                </div>
                <div class="description">${data.weather[0]['description']}</div>
        </div>`;

            header.insertAdjacentHTML('afterend', html);
        
            }
        clear.onclick = function (e) {
            e.preventDefault(); // cancel sending form
            input.value = '';
        }
    })
}
