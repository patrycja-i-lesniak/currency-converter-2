// currency converter - version 2 - converts PLN to EUR based on the default / own exchange rate

 {
  const welcome = () => {
    console.log("Hello and welcome!");
  };

  const valueInPln = document.querySelector(".js-valueInPln");
  const eurExchangeRate = document.querySelector(".js-eurExchangeRate");
  const valueInEur = document.querySelector(".js-valueInEur");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const pln = valueInPln.value;
    const eur = eurExchangeRate.value;
    const value = pln / eur;

    valueInEur.innerText = value.toFixed(2);
  };
  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);

    welcome();
  };
  init();
}










// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const pln = valueInPln.value;
//   const eur = eurExchangeRate.value;
//   const value = pln / eur;

//   valueInEur.innerText = value.toFixed(2);
// });
