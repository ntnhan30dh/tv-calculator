class Payment {
  constructor() {
     this.getPayment = this.getPayment.bind(this);
    this.cpa = this.cpa.bind(this);
    this.transfer = this.transfer.bind(this);
  }

  transfer = () => {
    let arr = [
      [
          "Bangladesh",
          "€4.26"
      ],
      [
          "Cambodia",
          "€10.30"
      ],
      [
          "Hong Kong",
          "€22.39"
      ],
      [
          "Japan",
          "€20.00"
      ],
      [
          "Korea",
          "€20.00"
      ],
      [
          "Laos",
          "€5.24"
      ],
      [
          "Malaysia",
          "€11.68"
      ],
      [
          "Myanmar",
          "€17.91"
      ],
      [
          "Pakistan",
          "€5.59"
      ],
      [
          "Philippines",
          "€9.04"
      ],
      [
          "Singapore",
          "€37.70"
      ],
      [
          "Taiwan",
          "€22.89"
      ],
      [
          "Thailand",
          "€6.16"
      ],
      [
          "Austria",
          "€46.60"
      ],
      [
          "Bulgaria",
          "€22.10"
      ],
      [
          "Czech Republic",
          "€34.49"
      ],
      [
          "Finland",
          "€31.10"
      ],
      [
          "Greece",
          "€20.48"
      ],
      [
          "Hungary",
          "€20.48"
      ],
      [
          "Norway",
          "€52.49"
      ],
      [
          "Romania",
          "€16.08"
      ],
      [
          "Sweden",
          "€64.42"
      ],
      [
          "Argentina",
          "€8.86"
      ],
      [
          "Bolivia",
          "€8.77"
      ],
      [
          "Chile",
          "€15.59"
      ],
      [
          "Dominican Republic",
          "€8.53"
      ],
      [
          "Panama",
          "€8.75"
      ],
      [
          "Paraguay",
          "€10.19"
      ],
      [
          "Uruguay",
          "€7.60"
      ],
      [
          "Venezuela, Bolivarian Republic of",
          "€7.60"
      ],
      [
          "Egypt",
          "€16.70"
      ],
      [
          "Jordan",
          "€31.31"
      ],
      [
          "Kuwait",
          "€46.24"
      ],
      [
          "Oman",
          "€29.21"
      ],
      [
          "Qatar",
          "€29.39"
      ],
      [
          "Saudi Arabia",
          "€22.01"
      ],
      [
          "Turkey",
          "€18.00"
      ],
      [
          "UAE",
          "€32.92"
      ],
      [
          "Serbia",
          "€25.51"
      ],
      [
          "Croatia",
          "€29.45"
      ],
      [
          "Cyprus",
          "€30.00"
      ],
      [
          "Montenegro",
          "€30.00"
      ],
      [
          "Bosnia and Herzegovina",
          "€30.00"
      ]
  ]
    let res = {};
    arr.map((a) => {
      res[a[0]] = parseFloat(a[1].substring(1)) ;
      // console.log(a[0])
      return true;
    });
    console.log(res);

    return res;
  };

  getPayment = (paymentModel) => {
      let res = {}
      if(paymentModel==='cpm') {
           res = {
            "Bangladesh": 4.43,
            "Cambodia": 4.43,
            "Hong Kong": 11.75,
            "Japan": 11.54,
            "Korea": 10.83,
            "Laos": 4.43,
            "Malaysia": 8.04,
            "Myanmar": 4.43,
            "Pakistan": 8.04,
            "Philippines": 8.04,
            "Singapore": 8.14,
            "Taiwan": 9.04,
            "Thailand": 7.83,
            "Austria": 8.56,
            "Bulgaria": 4.43,
            "Czech Republic": 6.7,
            "Finland": 10.19,
            "Greece": 8.83,
            "Hungary": 8.83,
            "Norway": 11.68,
            "Romania": 5.06,
            "Sweden": 11.96,
            "Argentina": 6.06,
            "Bolivia": 8.25,
            "Chile": 5.06,
            "Dominican Republic": 4.85,
            "Panama": 4.85,
            "Paraguay": 4.85,
            "Uruguay": 8.25,
            "Venezuela": 4.43,
            "Egypt": 7.83,
            "Jordan": 4.43,
            "Kuwait": 8.04,
            "Oman": 8.83,
            "Qatar": 5.43,
            "Saudi Arabia": 9.19,
            "Turkey": 4.64,
            "UAE": 9.83,
            "Bosnia and Herzegovina": 4.43,
            "Croatia": 4.43,
            "Cyprus": 4.43,
            "Montenegro": 4.43,
            "Serbia": 4.43
          } 
      }else if (paymentModel==='cpa'){
        res =  {
          "Bangladesh": 4.26,
          "Cambodia": 10.3,
          "Hong Kong": 22.39,
          "Japan": 20,
          "Korea": 20,
          "Laos": 5.24,
          "Malaysia": 11.68,
          "Myanmar": 17.91,
          "Pakistan": 5.59,
          "Philippines": 9.04,
          "Singapore": 37.7,
          "Taiwan": 22.89,
          "Thailand": 6.16,
          "Austria": 46.6,
          "Bulgaria": 22.1,
          "Czech Republic": 34.49,
          "Finland": 31.1,
          "Greece": 20.48,
          "Hungary": 20.48,
          "Norway": 52.49,
          "Romania": 16.08,
          "Sweden": 64.42,
          "Argentina": 8.86,
          "Bolivia": 8.77,
          "Chile": 15.59,
          "Dominican Republic": 8.53,
          "Panama": 8.75,
          "Paraguay": 10.19,
          "Uruguay": 7.6,
          "Venezuela": 7.6,
          "Egypt": 16.7,
          "Jordan": 31.31,
          "Kuwait": 46.24,
          "Oman": 29.21,
          "Qatar": 29.39,
          "Saudi Arabia": 22.01,
          "Turkey": 18,
          "UAE": 32.92,
          "Serbia": 25.51,
          "Croatia": 29.45,
          "Cyprus": 30,
          "Montenegro": 30,
          "Bosnia and Herzegovina": 30
        }
    }

    return res;
  };

  cpa = () =>{
    let res = {
      "Bangladesh": 4.26,
      "Cambodia": 10.3,
      "Hong Kong": 22.39,
      "Japan": 20,
      "Korea": 20,
      "Laos": 5.24,
      "Malaysia": 11.68,
      "Myanmar": 17.91,
      "Pakistan": 5.59,
      "Philippines": 9.04,
      "Singapore": 37.7,
      "Taiwan": 22.89,
      "Thailand": 6.16,
      "Austria": 46.6,
      "Bulgaria": 22.1,
      "Czech Republic": 34.49,
      "Finland": 31.1,
      "Greece": 20.48,
      "Hungary": 20.48,
      "Norway": 52.49,
      "Romania": 16.08,
      "Sweden": 64.42,
      "Argentina": 8.86,
      "Bolivia": 8.77,
      "Chile": 15.59,
      "Dominican Republic": 8.53,
      "Panama": 8.75,
      "Paraguay": 10.19,
      "Uruguay": 7.6,
      "Venezuela": 7.6,
      "Egypt": 16.7,
      "Jordan": 31.31,
      "Kuwait": 46.24,
      "Oman": 29.21,
      "Qatar": 29.39,
      "Saudi Arabia": 22.01,
      "Turkey": 18,
      "UAE": 32.92,
      "Serbia": 25.51,
      "Croatia": 29.45,
      "Cyprus": 30,
      "Montenegro": 30,
      "Bosnia and Herzegovina": 30
    }
    return res
  }
}
export default Payment;
