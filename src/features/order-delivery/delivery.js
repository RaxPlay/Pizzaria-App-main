//Variables
const getDataBtn = document.querySelector('.get-data-btn');
const street = document.querySelector('.street');
const city = document.querySelector('.city');
const zipCode = document.querySelector('.zip-code');
const country = document.querySelector('#country-select');
const state = document.querySelector('#state-select');
const deliveryTimeDiv = document.querySelector('#delivery-time')

getDataBtn.addEventListener('click', function () {
    let address = {
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        country: country.value,
    }; 

    deliveryTimeDiv.classList.add('delivery-time-transition');
    deliveryTimeDiv.style.display = `flex`;


    console.log(address);
    console.log(deliveryTimeDiv);

    return false;
});