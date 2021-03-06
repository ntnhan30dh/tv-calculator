class CountryList {
  constructor() {
    this.markets = this.markets.bind(this);
  }

  orgArr = () => {
    let res =  [
                    [
                        "Market",
                        "Buying method",
                        "Avg 30\" C/GRP",
                        "Avg 30\" C/spot",
                        "Cost per Second",
                        "Recommended max GRP per creative concept",
                        "Recommended GRP per week",
                        "Recommended GRP per day",
                        "Deal/ Offer GRP Cap"
                    ],
                    [
                        "AT",
                        "GRP per spot",
                        "200",
                        "60",
                        "7",
                        "4000",
                        "400",
                        "57.1",
                        "2000",
                        "",
                        "",
                        "= Input from offline team"
                    ],
                    [
                        "TH",
                        "GRP per spot",
                        "480",
                        "180",
                        "16",
                        "2000",
                        "250",
                        "35.7",
                        "800"
                    ],
                    [
                        "TW",
                        "GRP per spot",
                        "302",
                        "60",
                        "10",
                        "2500",
                        "400",
                        "57.1",
                        "1500"
                    ],
                    [
                        "BD",
                        "GRP per spot",
                        "240",
                        "12",
                        "8",
                        "1500",
                        "200",
                        "28.6",
                        "800"
                    ],
                    [
                        "AR",
                        "GRP per spot",
                        "215",
                        "115",
                        "7",
                        "3000",
                        "300",
                        "42.9",
                        "2500"
                    ],
                    [
                        "CL",
                        "GRP per spot",
                        "225",
                        "120",
                        "8",
                        "3000",
                        "300",
                        "42.9",
                        "2500"
                    ],
                    [
                        "PH",
                        "GRP per spot",
                        "400",
                        "600",
                        "13",
                        "1500",
                        "250",
                        "35.7",
                        "1000",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "Time input",
                        "Total GRPs",
                        "Maximum GRPs"
                    ],
                    [
                        "RO",
                        "GRP per spot",
                        "230",
                        "35",
                        "8",
                        "2250",
                        "225",
                        "32.1",
                        "900",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "4",
                        "500"
                    ],
                    [
                        "SA",
                        "Cost per spot",
                        "193",
                        "972",
                        "6",
                        "4000",
                        "330",
                        "47.1",
                        "1100"
                    ],
                    [
                        "GCC",
                        "Cost per spot",
                        "106.0",
                        "972",
                        "4",
                        "9000",
                        "700",
                        "100.0",
                        "3000"
                    ],
                    [
                        "HU",
                        "GRP per spot",
                        "153",
                        "21",
                        "5",
                        "2000",
                        "200",
                        "28.6",
                        "1000"
                    ],
                    [
                        "FI",
                        "GRP per spot",
                        "225",
                        "60",
                        "8",
                        "2000",
                        "250",
                        "35.7",
                        "1000"
                    ]
                              ]

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

  costPerSpot = (spotLength) => {
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
  };

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
        return 1.4;
      case 4:
        return 1.5;
      case 5:
        return 1.6;
      default:
    }
  };
}

export default CountryList;
