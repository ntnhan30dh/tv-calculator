import React, { useState } from "react";
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
  let [campainLengthType, setCampainLengthType] = useState("Day");
  let [spotLength, setSpotLength] = useState(undefined);
  let [variation, setVariation] = useState(undefined);
  let [campaign360, setCampaign360] = useState(false);
  let [offerDeal, setOfferDeal] = useState(false);
  let [isChecking, setIsChecking] = useState(undefined);

  let isConfirmed =
    market &&
    budget &&
    campainLengthNumber &&
    spotLength &&
    variation &&
    isChecking
      ? true
      : false;

  let estimatedGRPs = budget && spotLength && budget / (spotLength * 10);
  let variations =
    market &&
    variation &&
    data[market]["Recommended max GRP per creative concept"] *
      countryList.variationFactor(variation);
  let campaign360Number = campaign360 === true ? variations * 0.8 : variations;
  let offerDealNumber =
    // only caculate when market is available
    market && offerDeal === true
      ? data[market]["Deal/ Offer Cap"]
      : campaign360Number;

  //output
  let estimatedSpots =
    budget && spotLength && budget / countryList.costPerSpot(spotLength);
  let isFatigued =
    offerDealNumber &&
    estimatedGRPs &&
    (offerDealNumber > estimatedGRPs ? "NO" : "YES");
  let recomendedNrConcept =
    market &&
    estimatedGRPs / data[market]["Recommended max GRP per creative concept"];
  let advertsingPressure =
    estimatedGRPs &&
    campainLengthNumber &&
    campainLengthType &&
    estimatedGRPs /
      (campainLengthNumber * countryList.campainLengthType(campainLengthType));
  let isTooHigh =
    market &&
    advertsingPressure &&
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

  // caculate the traffic light

  let maxGRP =
    market && data[market]["Recommended max GRP per creative concept"];

  const reset = () => {
    setMarket("");
    setBudget("");
    setCampainLengthNumber("");
    setCampainLengthType("Day");
    setSpotLength("");
    setVariation("");
    setCampaign360(false);
    setOfferDeal(false);
    setIsChecking(undefined);
  };

  return (
    <Form>
      <div className="contentWrapper">
        <div className="inputFlield">
          <h3> Market</h3>
          {/* <h4>{market}</h4> */}
          <DropdownField
            placeholder="Select Market"
            options={marketOptions}
            handleChange={setMarket}
            value={market}
            label="market"
            isChecking={isChecking}
          />

          <h3> Budget €</h3>
          {/* <h4>{budget}</h4> */}
          <InputNumber
            value={budget}
            handleChange={setBudget}
            label="budget"
            isChecking={isChecking}
            fluid={true}
          />
          <h3> Campaign Length </h3>
          <div className="campainLength">
            {/* <h4>{campainLengthNumber}</h4> */}
            <InputNumber
              value={campainLengthNumber}
              handleChange={setCampainLengthNumber}
              label="campaign length"
              isChecking={isChecking}
            />

            {/* <h3> Campaign length type</h3> */}
            {/* <h4>{campainLengthType}</h4> */}
            <DropdownField
              placeholder=""
              options={campainLengthTypeOptions}
              handleChange={setCampainLengthType}
              value={campainLengthType}
              defaultValue="Day"
            />
          </div>

          <h3> Spot Length</h3>
          {/* <h4>{spotLength}</h4> */}
          <DropdownField
            placeholder="Select Spot length"
            options={spotLengthOptions}
            handleChange={setSpotLength}
            value={spotLength}
            label="spot length"
            isChecking={isChecking}
          />

          <h3>N° of variations</h3>
          {/* <h4>{variation}</h4> */}
          <DropdownField
            placeholder="Enter number of variations"
            options={variationOptions}
            handleChange={setVariation}
            value={variation}
            label="number of variations"
            isChecking={isChecking}
          />
          <h3> 360 Campaign</h3>
          {/* <h4>{campaign360 + ""}</h4> */}
          <RadioField
            name="360 campaign"
            value={campaign360}
            handleChange={setCampaign360}
          />

          <h3> Offer / Deal?</h3>
          {/* <h4>{offerDeal + ""}</h4> */}
          <RadioField
            name="offerDeal"
            value={offerDeal}
            handleChange={setOfferDeal}
          />
          <div className="buttonWrap radios">
            {/* <button className="resetButton" onClick={() => setIsChecking(true)}>
              Caculate
            </button> */}
            <Tracking
              confirm={() => setIsChecking(true)}
              market={market}
              budget={budget}
              campainLengthNumber={campainLengthNumber}
              campainLengthType={campainLengthType}
              spotLength={spotLength}
              variation={variation}
              campaign360={campaign360?"yes":"no"}
              offerDeal={offerDeal?"yes":"no"}
              outcome={ estimatedGRPs < maxGRP * 0.9
                  ? "green"
                  : estimatedGRPs > maxGRP * 1.1
                  ? "red"
                  : "amber"}
            />
            <button className="resetButton" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        {isConfirmed && (
          <div className="result">
            {/* <h3>Use Avg C/GRP for total GRP: {estimatedGRPs}</h3>
          <h3>Variations: {variations}</h3>
          <h3>campaign360Number: {campaign360Number}</h3>
          <h3>offerDealNumber: {offerDealNumber}</h3> */}

            <div className="resulRow">
              <h1>Estimated GRPs </h1>
              <span>{estimatedGRPs && Math.round(estimatedGRPs)}</span>
            </div>
            <div className="resulRow">
              <h1>Estimated spots </h1>
              <span> {estimatedSpots && Math.round(estimatedSpots)} </span>
            </div>
            <div className="resulRow">
              <h3>
                Would it be fatigued during the specified campaign period?{" "}
              </h3>
              <p>{isFatigued} </p>
            </div>
            {isFatigued === "YES" && (
              <div className="resulRow">
                <h3>Recommended number of concepts for period: </h3>
                <p>
                  {recomendedNrConcept < 2
                    ? 2
                    : Math.round(recomendedNrConcept)}
                </p>
              </div>
            )}
            <div className="resulRow">
              <h3>Is the advertsing pressure too high? : </h3>
              <p>{isTooHigh}</p>
            </div>
            {/* <h3>{advertsingPressure}</h3>
          <h3>{market&&data[market]["Recommended GRP per day"]}</h3> */}
            {isTooHigh === "YES" && (
              <div className="resulRow">
                <h3>Optimal weekly GRP Delivery:</h3>
                <p>{optimalWeeklyGRP && Math.round(optimalWeeklyGRP)} </p>
              </div>
            )}
            {isTooHigh === "YES" && (
              <div className="resulRow">
                <h3>Actual weekly GRP Delivery: </h3>
                <p>{actualWeeklyGRP && Math.round(actualWeeklyGRP)}</p>
              </div>
            )}
            <div className="resulRow">
              <h3>Optimal GRP per creative concept: </h3>
              <p>{optimalGRPperConcept && Math.round(optimalGRPperConcept)}</p>
            </div>
            <h4>This is estimation not final recommendation</h4>

            {/* {estimatedGRPs}
            <br />
            {maxGRP * 0.9}
            <br />
            {maxGRP * 1.1}
            <br /> */}
            <div
              className={`trafficLight ${
                estimatedGRPs < maxGRP * 0.9
                  ? "green"
                  : estimatedGRPs > maxGRP * 1.1
                  ? "red"
                  : "amber"
              }`}
            >
              {/* <div className={`trafficLight ${()=>{return "red"}}`}> */}
              <p>
                {estimatedGRPs < maxGRP * 0.9
                  ? "Good news - the creative concept would not 'burnout' during the campaign period with the media pressure specified. If you need any further help in planning your campaign, you can reach out to the offline team by emailing TV@deliveryhero.com"
                  : estimatedGRPs > maxGRP * 1.1
                  ? " The current media spend for the time frame specified would cause the creatives to 'burnout'. We recommend you contact the offline team by emailing TV@Deliveryhero.com so that we can assist you in figuring out the right number of concepts to achieve the best cost efficiency and outcome"
                  : "The current planned spend for the time frame you specified would result in the spots being close to burning out by the end of the campaign. We recommend you contact the offline team by emailing TV@Deliveryhero.com so that we can assist you in figuring out the right number of concepts to achieve the best cost efficiency and outcome"}
              </p>
            </div>
          </div>
        )}
      </div>
    </Form>
  );
};

export default Calculator;
