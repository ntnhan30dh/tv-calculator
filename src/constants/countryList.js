class CountryList {
  constructor() {
    this.markets = this.markets.bind(this);
  }

  orgArr = () => {
    let res = [
      [
        "Market",
        "Buying method",
        'Avg 30" C/GRP',
        'Avg 30" C/spot',
        "Cost per Second",
        "Recommended max GRP per creative concept",
        "Recommended GRP per week",
        "Recommended GRP per day",
        "Deal/ Offer Cap",
      ],
      [
        "SA",
        "C/spot",
        "500",
        "120",
        "16.66666667",
        "3000",
        "300",
        "42.85714286",
        "500",
        "",
        "",
        "= Input from offline team",
      ],
      [
        "HU",
        "GRP per spot",
        "300",
        "100",
        "10",
        "2000",
        "200",
        "28.57142857",
        "500",
      ],
    ];

    return res;
  };

  processedArr = () => {
    let res = [];
    let orgArray = this.orgArr().slice(1);
    orgArray.map((item) => {
      res.push({
        Market: item[0],
        "Buying method": item[1],
        'Avg 30" C/GRP': item[2],
        'Avg 30" C/spot': item[3],
        "Cost per Second": item[4],
        "Recommended max GRP per creative concept": item[5],
        "Recommended GRP per week": item[6],
        "Recommended GRP per day": item[7],
        "Deal/ Offer Cap": item[8],
      });
      return true;
    });
    const obj = res.reduce(
      (acc, cur) => ({
        ...acc,
        [cur["Market"]]: {
          "Buying method": cur["Buying method"],
          'Avg 30" C/GRP': cur['Avg 30" C/GRP'],
          'Avg 30" C/spot': cur['Avg 30" C/spot'],
          "Cost per Second": cur["Cost per Second"],
          "Recommended max GRP per creative concept":
            cur["Recommended max GRP per creative concept"],
          "Recommended GRP per week": cur["Recommended GRP per week"],
          "Recommended GRP per day": cur["Recommended GRP per day"],
          "Deal/ Offer Cap": cur["Deal/ Offer Cap"],
        },
      }),
      {}
    );
    // console.log("res", obj);
    return obj;
  };
  markets = () => {
    let names = [];
    let orgArray = this.orgArr().slice(1);

    orgArray.map((item) => {
      names.push(item[0]);
      return true;
    });

    let res = [];
    names.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  campainLengthType = (campainLengthType) => {
    switch (campainLengthType) {
      case "Day":
        return 1;
      case "Week":
        return 7;
      case "Month":
        return 28;
      case "Quarter":
        return 84;
      default:
    }
    
  };

  spotLength = () => {
    let names = [5, 10, 15, 20, 25, 30];
    let res = [];
    names.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  costPerSpot = (spotLength)=>{
    switch (spotLength) {
      case 5:
        return 16.7;
      case 10:
        return 33.33;
      case 15:
        return 50;
      case 20:
        return 66.67;
      case 25:
        return 83.33;
        case 30:
          return 100;
      default:
    }

  }

  variation = () => {
    let names = [1, 2, 3, 4, 5];
    let res = [];
    names.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  options = (arr) => {
    let res = [];
    arr.map((name) =>
      res.push({
        key: name,
        value: name,
        text: name,
      })
    );
    return res;
  };

  variationFactor = (variation) => {
    switch (variation) {
      case 1:
        return 1;
      case 2:
        return 1.2;
      case 3:
        return 1.3;
      case 4:
        return 1.35;
      case 5:
        return 1.4;
      default:
    }
  };
}

export default CountryList;
