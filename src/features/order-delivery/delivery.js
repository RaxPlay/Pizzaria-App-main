//Variables
const getDataBtn = document.querySelector('.get-data-btn');
const deliveryTimeBtn = document.querySelector('.get-delivery-time-btn')

const street = document.querySelector('.street');
const city = document.querySelector('.city');
const zipCode = document.querySelector('.zip-code');
const country = document.querySelector('#country-select');
const state = document.querySelector('#state-select');
const deliveryTimeDiv = document.querySelector('#delivery-time')
const deliveryTime = document.querySelector('#select-time')
const deliveryDay = document.querySelector('#select-day')

getDataBtn.addEventListener('click', function () {
    deliveryTimeDiv.style.display = "block"
    deliveryTimeDiv.classList.add('delivery-time-transition');

    return false;
});

deliveryTimeBtn.addEventListener('click', function(){
    let addressData = {
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        country: country.value,
    }; 
    let timeData = {
        day: deliveryDay.value,
        time: deliveryTime.value
    }

    console.log(addressData);
    console.log(timeData);

    if(addressData.street === "" || addressData.city === "" || addressData.state === "" ||
    addressData.zipCode === "" || addressData.country === ""){
        alert("There was an error, please insert a valid address")
        location.reload();
    }
    else {
        window.open("../menu/show-menu.html", "_self")
        return false;
    }
})