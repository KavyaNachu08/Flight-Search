//Global declaration

let flightsData;
let searchedProducts = [];
let searchedProductsValue = [];
const searchBar = document.querySelector('#search');
const header = document.querySelector('header');
const containerBody = document.querySelector('#containerbody');
const priceEl = document.querySelector('.price_low_high');
const accordian = document.querySelectorAll('.label');
const changeFlight = document.querySelector('.travio-change-flight');
const travelDetails = document.querySelector('.travio-travel-details');
const fromValue = document.querySelector('#fromValue');
const toValue = document.querySelector('#toValue');
const toValue1 = document.querySelector('.toValue1');
const durationEl = document.querySelector('.shortestDuration');
const company = document.querySelectorAll('.checkbox');
const search = document.querySelector('.travio-search');
const from = document.querySelector('#from-list');
const to = document.querySelector('#to-list');
const fromDate = document.querySelector('#depart-date');
const returnDate = document.querySelector('#return-date');
const fromDateValue = document.querySelector('.fromDate');
const traveller = document.querySelector('.travellers');
const hamburger = document.querySelector('.fa-bars');
const contents = document.querySelector('.travio-header-list');
const signUp = document.querySelector('.fa-user');
const signUpContents = document.querySelector('.travio-login-list');
const travellerList = document.querySelector('.traveller-list');
const adultInc = document.querySelector('.adult-inc');
const childInc = document.querySelector('.child-inc');
const infantInc = document.querySelector('.infant-inc');
const infantDec = document.querySelector('.infant-dec');
const adultDec = document.querySelector('.adult-dec');
const childDec = document.querySelector('.child-dec');
const adultCount = document.querySelector('.adult-count-value');
const childCount = document.querySelector('.child-count-value');
const infantCount = document.querySelector('.infant-count-value');
const totalCount = document.querySelector('.total-count');
let fromget = localStorage.getItem("fromPlace");
let toget = localStorage.getItem("toPlace");
let fromGetDate = localStorage.getItem("fromDate");


fromValue.innerText = fromget;
toValue.innerText = toget;
toValue1.innerText = toget;
fromDateValue.innerText = fromGetDate;

//RENDERING OF EACH DATA

function createList(flightsData) {
    containerBody.innerHTML = "";

    flightsData.forEach(function (item) {
        const products = `
            <div class="travio-ticket">
                <div class="travio-company">
                    <img src=${item.logo} alt="logo">
                    <span>${item.company}</span>
                </div>
                <div class="travio-flight-ticket">
                    <div class="travio-ticket-time">
                        <div class="travio-from-time">
                            <span>${item.startingTime}</span>
                            <span>${item.sourceShortHand}</span>
                        </div>
                        <i class="fa-solid fa-arrow-right"></i>
                        <div class="travio-to-time">
                            <span>${item.reachingTime}</span>
                            <span>${item.destinationShortHand}</span>
                        </div>
                        <div class="travio-duration">
                            <span>${item.journey}</span>
                            <span>${item.stops}</span>
                        </div>
                    </div>
                    <div class="travio-price">
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        <span>${item.price}</span>
                        <button>select</button>
                    </div>
                </div>
            </div>`
        containerBody.innerHTML += products;
    });
}

// SCROLL FUNCTION OF HEADER

document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('f-color');
    }
    else {
        header.classList.remove('f-color');
    }
})

// HAMBURGER ICON 

hamburger.addEventListener('click', function () {
    let contentList = contents.classList;
    if (contentList.contains('d-none')) {
        contentList.add('d-flex');
        contentList.remove('d-none');
    }
    else {
        contentList.add('d-none');
        contentList.remove('d-flex');
    }
})

// LOGIN FUNCTION

signUp.addEventListener('click', function () {
    let signUpList = signUpContents.classList;
    if (signUpList.contains('d-none')) {
        signUpList.add('d-flex');
        signUpList.remove('d-none');
    }
    else {
        signUpList.add('d-none');
        signUpList.remove('d-flex');
    }
})

// TYPE OF TRIP

trip.addEventListener('change', function (e) {
    let tripValue = e.target.value;
    let rDate = returnDate.classList;
    if (tripValue == "round") {
        if (rDate.contains('d-none')) {
            rDate.add('d-block');
            rDate.remove('d-none');
        }
        else {
            rDate.add('d-none');
            rDate.remove('d-block');
        }
    }
    else if (tripValue == "oneway") {
        if (rDate.contains('d-block')) {
            rDate.add('d-none');
            rDate.remove('d-block');
        }
        else {
            rDate.add('d-block');
            rDate.remove('d-none');
        }
    }
})

// NUMBER OF TRAVELLERS

traveller.addEventListener('click', function () {
    let travellerListValue = travellerList.classList;
    if (travellerListValue.contains('d-none')) {
        travellerListValue.add('d-block');
        travellerListValue.remove('d-none');
        infantInc.addEventListener('click', function () {
            infantCount.innerHTML = parseInt(infantCount.innerHTML) + 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;
        });
        infantDec.addEventListener('click', function () {
            infantCount.innerHTML = parseInt(infantCount.innerHTML) - 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) - 1;
        });
        childInc.addEventListener('click', function () {
            childCount.innerHTML = parseInt(childCount.innerHTML) + 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;
        });
        childDec.addEventListener('click', function () {
            childCount.innerHTML = parseInt(childCount.innerHTML) - 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) - 1;
        });
        adultInc.addEventListener('click', function () {
            adultCount.innerHTML = parseInt(adultCount.innerHTML) + 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;
        });
        adultDec.addEventListener('click', function () {
            adultCount.innerHTML = parseInt(adultCount.innerHTML) - 1;
            totalCount.innerHTML = parseInt(totalCount.innerHTML) - 1;
        });
        console.log(totalCount);
    }
    else {
        travellerListValue.add('d-none');
        travellerListValue.remove('d-block');
    }

})

//SEARCH FUNCTIONALITY BASED ON DATA

search.addEventListener('click', function () {
    containerBody.innerHTML = "";
    for (let i = 0; i < flightsData.length; i++) {
        let fromValue = from.value.toLowerCase();
        let toValue = to.value.toLowerCase();
        let fromDateValue = fromDate.value;
        let returnDateValue = returnDate.value;
        let sourceValue = flightsData[i]['sourceLocation'].toLowerCase();
        let destinationValue = flightsData[i]['destinationLocation'].toLowerCase();
        if ((fromValue == sourceValue) && (toValue == destinationValue) && (fromValue !== toValue)) {
            localStorage.setItem("fromPlace", fromValue);
            localStorage.setItem("toPlace", toValue);
            localStorage.setItem("fromDate", fromDateValue);
            localStorage.setItem("returnDate", returnDateValue);
        }
    }
    fetchData(flightsData);
});

//ACCORDIAN

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function (e) {
        const nextElSibling = this.nextElementSibling.classList;
        if (nextElSibling.contains('d-none')) {
            nextElSibling.remove('d-none');
            nextElSibling.add('d-block');
        }
        else {
            nextElSibling.remove('d-block');
            nextElSibling.add('d-none');
        }
    })
}

//CHANGE FLIGHT

changeFlight.addEventListener('click', function () {
    const travelDetailsValue = travelDetails.classList;
    if (travelDetailsValue.contains('d-none')) {
        travelDetailsValue.remove('d-none');
        travelDetailsValue.add('d-block');
    }
    else {
        travelDetailsValue.remove('d-block');
        travelDetailsValue.add('d-none');
    }

})

//RESET THE DATA

function clearAll() {
    let clear = document.querySelector('#clear');
    clear.addEventListener('click', function () {
        // containerBody.innerHTML = "";
        createList(searchedProducts);
        let airline = document.querySelectorAll('.checkbox');
        for (let i = 0; i < airline.length; i++) {
            airline[i].checked = false;
        }
    })
}

//SORT THE DATA BASED ON TICKET PRICE

function sortPrice() {
    priceEl.addEventListener('click', function (e) {
        e.preventDefault();
        let new_list = checkedCompany();
        new_list.sort((a, b) => a.price - b.price);
        createList(new_list);
    })
}


//SORT THE DATA BASED ON AIRLINES AND STOPS

function checkedCompany() {
    let checkBrand = [];
    for (let j of company) {
        if (j.checked) {
            checkBrand.push(j.name);
        }
    }

    if (checkBrand.length == 0) {
        return searchedProducts;
    }
    let checkedProducts = [];
    for (let i = 0; i < checkBrand.length; i++) {
        for (let j = 0; j < searchedProducts.length; j++) {
            let companyName = searchedProducts[j].company;
            let stopNumber = searchedProducts[j].stops;
            if ((companyName == checkBrand[i]) || (stopNumber == checkBrand[i])) {
                checkedProducts.push(searchedProducts[j]);
            }
        }
    }
    return checkedProducts;
}

//SORT THE DATA BASED ON AIRLINES AND STOPS


function sortCompany() {
    for (let i = 0; i < company.length; i++) {
        company[i].addEventListener('click', function (e) {
            let sortedProducts = checkedCompany();
            createList(sortedProducts);

        })
    }
}

//SORT THE DATA BASED ON DURATION OF JOURNEY

function duration() {
    durationEl.addEventListener('click', function (e) {
        e.preventDefault();
        let new_list = checkedCompany();
        new_list.sort((a, b) => parseInt(a.journey) - parseInt(b.journey));
        createList(new_list);
    })
}

//VALUES THROUGH PRICE SLIDER

function priceRange(minPrice, maxPrice) {
    let priceValue = checkedCompany();
    priceValue = priceValue.filter((cost) => parseInt(cost.price) >= parseInt(minPrice) && parseInt(cost.price) <= parseInt(maxPrice));
    createList(priceValue);
}

//PRICE SLIDER

$(function () {
    $("#slider").slider({
        range: true,
        min: 2000,
        max: 25000,
        values: [7500, 15000],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            let minPrice = ui.values[0];
            let maxPrice = ui.values[1];
            priceRange(minPrice, maxPrice);
        }
    })
    $("#amount").val("$" + $("#slider").slider("values", 0) +
        " - $" + $("#slider").slider("values", 1));
});

// FETCHING OF REQUIRED DATA

function fetchData(flightsData) {
    for (let i = 0; i < flightsData.length; i++) {
        let fromValue = from.value.toLowerCase();
        let toValue = to.value.toLowerCase();
        let fromDateValue = fromDate.value;
        let returnDateValue = returnDate.value;
        let sourceValue = flightsData[i]['sourceLocation'].toLowerCase();
        let destinationValue = flightsData[i]['destinationLocation'].toLowerCase();
        if ((fromget == sourceValue) && (toget == destinationValue)) {
            searchedProducts.push(flightsData[i]);
        }
    }
    createList(searchedProducts);
}

const flights = async () => {
    const response = await fetch('../result.json');
    return await response.json();
}

//init function

async function init() {
    flightsData = await flights();
    createList(flightsData);
    fetchData(flightsData);
    clearAll();
    sortPrice();
    duration();
    sortCompany();
}

document.addEventListener('DOMContentLoaded', init);
