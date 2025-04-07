//exportation
export {address};

//Variables
const getDataBtn = document.querySelector('.get-data-btn');
const street = document.querySelector('.street');
const city = document.querySelector('.city');
const state = document.querySelector('#state-select');
const zipCode = document.querySelector('.zip-code');
const country = document.querySelector('#country-select');

getDataBtn.addEventListener('click', function () {
    //address object
    let address = {
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        country: country.value,
    };
});