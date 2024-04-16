// GLOBAL DECLARATIONS

let flightsData;
const header = document.querySelector('header');
const search = document.querySelector('.travio-search');
const from = document.querySelector('#from-list');
const to = document.querySelector('#to-list');
const fromDate = document.querySelector('#depart-date');
const returnDate = document.querySelector('#return-date');
const traveller = document.querySelector('.travellers');
const travellerList = document.querySelector('.traveller-list');
const trip = document.querySelector('#trip');
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
const hamburger = document.querySelector('.fa-bars');
const contents = document.querySelector('.travio-header-list');
const signUp = document.querySelector('.fa-user');
const signUpContents = document.querySelector('.travio-login-list');

// SCROLL FUNCTION OF HEADER

document.addEventListener('scroll',function(){
    if(window.scrollY > 0){
        header.classList.add('f-color');
    }
    else{
        header.classList.remove('f-color');
    }
})

// HAMBURGER ICON 

hamburger.addEventListener('click',function(){
    console.log('abc')
    let contentList = contents.classList;
    if (contentList.contains('d-none')) {
        contentList.add('d-flex');
        contentList.remove('d-none');
        console.log('abc')
    }
    else {
        contentList.add('d-none');
        contentList.remove('d-flex');
    }
})

// LOGIN FUNCTION

signUp.addEventListener('click',function(){
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

//TYPE OF TRIP

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

//NUMBER OF TRAVELLERS

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
    }
    else {
        travellerListValue.add('d-none');
        travellerListValue.remove('d-block');
    }
})

//SEARCH FUNCTIONALITY BASED ON DATA

search.addEventListener('click', function () {
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
            window.location.href = "../html/result.html";
        }
    }
});

//Fetching of data from json file

const flights = async () => {
    const response = await fetch('../result.json');
    return await response.json();
}

//INIT FUNCTION

async function init() {
    flightsData = await flights();
}

document.addEventListener('DOMContentLoaded', init);