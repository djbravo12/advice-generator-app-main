"use strict";

const url = "https://api.adviceslip.com/advice";

const fetchAPIData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const adviceId = document.querySelector("#adviceId");
      const adviceString = document.querySelector("#adviceString");
      adviceId.innerHTML = data.slip.id;
      adviceString.innerHTML = `"${data.slip.advice}"`;
    });
};

//default calling function for display the data
fetchAPIData();

// function to change the API data
const refreshData = () => {
  fetchAPIData();
};

const adviceChangeButton = document.querySelector("#adviceChangeButton");

// add eventlistner to change the data
adviceChangeButton.addEventListener("click", refreshData);
