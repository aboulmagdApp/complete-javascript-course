'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (name) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    let cu = Object.entries(data.currencies);
    const currenciesName = cu[0][1].name;

    const html = `
            <article class="country">
                <img class="country__img" src="${data.flags.svg}" />
                <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages.ara}</p>
                <p class="country__row"><span>💰</span>${currenciesName}</p>
                </div>
            </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeEnd', html);
  });
};

getCountryData('Saudi Arabia');
getCountryData('Egypt');
