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
                      "AT",	"GRP per spot",	"412",	"141",	"14",	"6000",	"375",	"53.6",	"2000"																
                    ],
                    [
                      "TH",	"GRP per spot",	"465","175","16",	"2000",	'220',	"31.4",	"1500"																
                    ],
                    [
                      "TW",	"GRP per spot",	"425",	"61",	"14",	"4000",	"280",	"40.0",	"2000"																
                    ],
                    ["BD",	"GRP per spot",	"407",	"373",	"14",	"3000",	"250",	"35.7",	"1500"																
                    ],
                    [
                      "AR",	"GRP per spot",	"215",	'115',	'7',	'3000',	'300',	'42.9',	"2500",														
                    ],
                    [
                      "CL",	"GRP per spot",	"225",	"120",	"8",	'3000',	'300',	'42.9',	'2500'														                    ],
                    [
                      "PH",	"GRP per spot",	"540",	"1250",	'18',	'2000',	'180',	'25.7',	'1500'																
                    ],
                    [
                      "MY",	"GRP per spot",	'255',	'1060',	"9",	'3000',	"275",	"39.3",	"2000"																
                    ],
                    [
                      "PK",	"GRP per spot",	'111',	"121",	"4",	"7000",	"500",	"71.4",	"3000"																
                    ],
                    [
                      "CZ",	"GRP per spot",	"439",	"97",	'15',	"1200",	'100',	'14.3',	'750'																
                    ],
                    [
                      "SK",	"GRP per spot",	"250",	'333',	"8",	"2500",	'225',	"32.1",	"1500"																
                    ],
                    [
                      "SE",	"GRP per spot",	"994",	"994",	"33",	"2000",	"120",	"17.1",	"1000"																
                    ],
                    ["NO",	"GRP per spot",	"1050",	"1050",	"35",	"1500",	"125",	"17.9",	"1000"],
                    ["SA",	"Cost per spot",	"1400",	"4279",	"47",	"3600",	"300",	"42.9",	"1100"],
                    ["GCC",	"Cost per spot",	"106",	"972",	"4",	"9000",	"700",	"100",	"3000"																],
                    ["HU",	"GRP per spot",	"144",	"27",	'5',	'2665',	'205',	"29.3",	"1500"																],
                    ["FI",	"GRP per spot",	"262",	"82",	"9",	'1800',	'185',	"26.4",	'1000'																],
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
     console.log("res", obj);
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
