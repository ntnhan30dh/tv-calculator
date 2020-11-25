import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";

import CountryList from "../constants/countryList";
import DropdownField from "./dropDownField";
import InputNumber from "./inputNumber";
import RadioField from "./radioField";
import Tracking from "./tracking";

const Calculator = () => {
  const countryList = new CountryList();
  let data = countryList.processedArr();

  let [marketOptions] = useState(countryList.markets());
  let [campainLengthTypeOptions] = useState(
    countryList.options(["Day", "Week", "Month", "Quarter"])
  );
  let [spotLengthOptions] = useState(
    countryList.options([5, 10, 15, 20, 25, 30])
  );
  let [variationOptions] = useState(countryList.options([1, 2, 3, 4, 5]));

  let [market, setMarket] = useState(undefined);
  let [budget, setBudget] = useState(undefined);
  let [campainLengthNumber, setCampainLengthNumber] = useState(undefined);
  let [campainLengthType, setCampainLengthType] = useState(undefined);
  let [spotLength, setSpotLength] = useState(undefined);
  let [variation, setVariation] = useState(undefined);
  let [campaign360, setCampaign360] = useState(undefined);
  let [offerDeal, setOfferDeal] = useState(undefined);

  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "EUR",
  //   maximumFractionDigits: 0,
  //   minimumFractionDigits: 0,
  // });

  let estimatedGRPs = budget && spotLength && budget / (spotLength * 10);
  let variations =
    market &&
    variation &&
    data[market]["Recommended max GRP per creative concept"] *
      countryList.variationFactor(variation);
  let campaign360Number = campaign360 === true ? variations * 0.8 : variations;
  let offerDealNumber =
    offerDeal === true ? data[market]["Deal/ Offer Cap"] : campaign360Number;

  //output
  let estimatedSpots =
    budget && spotLength && budget / countryList.costPerSpot(spotLength);
  let isFatigued = offerDealNumber&&estimatedGRPs&&(offerDealNumber > estimatedGRPs ? "NO" : "YES");
  let recomendedNrConcept =
    market &&
    estimatedGRPs / data[market]["Recommended max GRP per creative concept"];
  let advertsingPressure =
  estimatedGRPs&&campainLengthNumber&&campainLengthType&&( estimatedGRPs /
    (campainLengthNumber * countryList.campainLengthType(campainLengthType)));
  let isTooHigh =
    market &&advertsingPressure&&
    (advertsingPressure > data[market]["Recommended GRP per day"]
      ? "YES"
      : "NO");
  let optimalWeeklyGRP = market && data[market]["Recommended GRP per week"];
  let actualWeeklyGRP =
    (estimatedGRPs /
      (campainLengthNumber *
        countryList.campainLengthType(campainLengthType))) *
    7;
  let optimalGRPperConcept = offerDealNumber;

  const reset = () => {
    setMarket("");
    setBudget("");
    setCampainLengthNumber("");
    setCampainLengthType("");
    setSpotLength("");
    setVariation("");
    setCampaign360("");
    setOfferDeal("");
  };

  return (
    <Form>
      <div className="contentWrapper">
        <Tracking/>
        <div className="inputFlield">
          <h3> Market</h3>
          <h4>{market}</h4>
          <DropdownField
            placeholder="Select Market"
            options={marketOptions}
            handleChange={setMarket}
            value={market}
          />

          <h3> Budget €</h3>
          {/* <h4>{budget}</h4> */}
          <InputNumber value={budget} handleChange={setBudget} />

          <h3> Campaign length </h3>
          {/* <h4>{campainLengthNumber}</h4> */}
          <InputNumber
            value={campainLengthNumber}
            handleChange={setCampainLengthNumber}
          />

          {/* <h3> Campaign length type</h3> */}
          {/* <h4>{campainLengthType}</h4> */}
          <DropdownField
            placeholder=""
            options={campainLengthTypeOptions}
            handleChange={setCampainLengthType}
            value={campainLengthType}
          />

          <h3> Spot length</h3>
          {/* <h4>{spotLength}</h4> */}
          <DropdownField
            placeholder="Select Spot length"
            options={spotLengthOptions}
            handleChange={setSpotLength}
            value={spotLength}
          />

          <h3> Number of variations</h3>
          {/* <h4>{variation}</h4> */}
          <DropdownField
            placeholder="Select Spot length"
            options={variationOptions}
            handleChange={setVariation}
            value={variation}
          />
          <h3> 360 campaign</h3>
          {/* <h4>{campaign360 + ""}</h4> */}
          <RadioField
            name="360 campaign"
            value={campaign360}
            handleChange={setCampaign360}
          />

          <h3> Offer / deal?</h3>
          {/* <h4>{offerDeal + ""}</h4> */}
          <RadioField
            name="offerDeal"
            value={offerDeal}
            handleChange={setOfferDeal}
          />
          <button className="resetButton" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="result">
          {/* <h3>Use Avg C/GRP for total GRP: {estimatedGRPs}</h3>
          <h3>Variations: {variations}</h3>
          <h3>campaign360Number: {campaign360Number}</h3>
          <h3>offerDealNumber: {offerDealNumber}</h3> */}
          Output
          <h3>Estimated GRPs: {estimatedGRPs&&Math.round(estimatedGRPs)}</h3>
          <h3>Estimated spots: {estimatedSpots&&Math.round(estimatedSpots)}</h3>
          <h3>
            Would it be fatigued during the specified campaign period?{" "}
            {isFatigued}
          </h3>
          {isFatigued === "YES" && (
            <h3>
              Recommended number of concepts for period:{" "}
              {recomendedNrConcept < 2 ? 2 :Math.round(recomendedNrConcept) }
            </h3>
          )}
          <h3>Is the advertsing pressure too high? : {isTooHigh}</h3>
          {/* <h3>{advertsingPressure}</h3>
          <h3>{market&&data[market]["Recommended GRP per day"]}</h3> */}
          {isTooHigh === "YES" && (
            <h3>Optimal weekly GRP Delivery:{optimalWeeklyGRP&&Math.round(optimalWeeklyGRP)} </h3>
          )}
          {isTooHigh === "YES" && (
            <h3>Actual weekly GRP Delivery: {actualWeeklyGRP&&Math.round(actualWeeklyGRP)}</h3>
          )}
          <h3>Optimal GRP per creative concept: {optimalGRPperConcept&&Math.round(optimalGRPperConcept)}</h3>
        </div>
      </div>
    </Form>
  );
};

export default Calculator;
