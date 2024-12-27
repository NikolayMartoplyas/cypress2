const selectors = {
  homePage: {
    title: "h1.page-header__title",
    substring: ".page-header__subtitle"
  },
  loginAmin: {
    control: "h2.conf-step__title"
  },
  booking: {
    pageNav: ".page-nav > a",
    day: ".page-nav > a:nth-child(5)",
    time: "main > :nth-child(2)",
    cinemaHall: "h2.buying__info-title",
    buyingScheme: ".buying-scheme__wrapper",
    button: ".acceptin-button",
    ticketInfo: ".ticket__info",
    ticketInfo1: ".ticket__info-wrapper"



  }

};

export default selectors;