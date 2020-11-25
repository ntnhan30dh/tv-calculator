import React, { useState, useEffect } from "react";
import { Form, Dropdown, Input, Radio, Label } from "semantic-ui-react";

import CountryList from "../constants/countryList";
import Reach from "../constants/aReach";
import Payment from "../constants/paymentModel";

const Calculator = () => {
  const countryList = new CountryList();
  const aReach = new Reach();
  const payment = new Payment();

  let [region, setRegion] = useState(
    localStorage.getItem("region") ? localStorage.getItem("region") : undefined
  );
  let [options] = useState(countryList.regions());
  let [country, setCountry] = useState(
    localStorage.getItem("country")
      ? localStorage.getItem("country")
      : undefined
  );
  let [reach, setReach] = useState(undefined);
  let [paymentModel, setPaymentModel] = useState(undefined);
  let [adFormat, setAdFormat] = useState(undefined);
  let [spot, setSpot] = useState(undefined);
  let [spotKeyDown, setSpotKeyDown] = useState(undefined);
  let [isChecking, setIsChecking] = useState(undefined);

  let paymentAtr =
    paymentModel === "cpa"
      ? payment.getPayment(paymentModel)[country]
      : payment.getPayment(paymentModel)[country] * reach * 0.001;
  let cost = spot? spot * (paymentAtr * adFormat):0;

  // useEffect(() => {
  //   if (spot) {
  //     setIsChecking(true);
      
  //   }
  //   setSpotKeyDown(undefined)
  // }, [spot]);

  // useEffect(() => {
  //   setCountry(undefined);
  // }, [region]);


  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0, 
    minimumFractionDigits: 0, 
  });

  const handleSetRegion = (value) => {
    setRegion(value);
    localStorage.setItem("region", value);
    setCountry("");
  };

  const handleSetCountry = (value) => {
    setCountry(value);
    localStorage.setItem("country", value);
  };

  const handleSpotKeyDown =(evt)=>{
    evt.key === 'e' && evt.preventDefault()
    setSpotKeyDown(evt.key)
  }

  const reset = () => {
    // setRegion("");
    // setCountry("");
    // setReach("");
    // setPaymentModel(undefined);
    // setAdFormat(undefined);
    // setSpot("");
    // setIsChecking(undefined);
    // setSpotKeyDown(undefined)
    // localStorage.removeItem("region");
    // localStorage.removeItem("country");
  };
  return (
    <Form >
      <div className="contentWrapper">
        <div className="inputFlield">
          <h3> Region</h3>
          <Dropdown
            placeholder="Select Region"
            fluid
            search
            selection
            options={options}
            onChange={(e, { value }) => handleSetRegion(value)}
            defaultValue={region}
            value={region}
          />
          {isChecking && !region && (
            <Label style={{ color: "red" }} basic color="red" pointing="above">
              please choose region
            </Label>
          )}
          {region && <h3>Country</h3>}
          {/* <h4>{country}</h4> */}
          {region && (
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryList.countries(region)}
              onChange={(e, { value }) => handleSetCountry(value)}
              defaultValue={country}
              value={country}
            />
          )}
          {region && isChecking && !country && (
            <Label style={{ color: "red" }} basic color="red" pointing="above">
              please choose country
            </Label>
          )}
          <h3>Payment model</h3>
          <div className="radios">
            <Form.Field>
              <Radio
                className={paymentModel === "cpm" ? "active" : ""}
                label="CPM"
                name="radioGroup"
                value="cpm"
                checked={paymentModel === "cpm"}
                onChange={(e, { value }) => setPaymentModel(value)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                className={paymentModel === "cpa" ? "active" : ""}
                label="CPA"
                name="radioGroup"
                value="cpa"
                checked={paymentModel === "cpa"}
                onChange={(e, { value }) => setPaymentModel(value)}
              />
            </Form.Field>
          </div>
          {isChecking && !paymentModel && (
            <Label style={{ color: "red" }} basic color="red" pointing="above">
              please choose Payment model
            </Label>
          )}
          <h3>Ad format</h3>
          <div className="radios">
            <Form.Field>
              <Radio
                className={adFormat === 1 ? "active" : ""}
                label="Host-read"
                name="radioGroup1"
                value="Host-read"
                checked={adFormat === 1}
                onChange={(e, { value }) => setAdFormat(1)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                className={adFormat === 0.8 ? "active" : ""}
                label="Pre-Recorded"
                name="radioGroup1"
                value="pre-recorded"
                checked={adFormat === 0.8}
                onChange={(e, { value }) => setAdFormat(0.8)}
              />
            </Form.Field>
          </div>
          {isChecking && !adFormat && (
            <Label style={{ color: "red" }} basic color="red" pointing="above">
              please choose Ad format
            </Label>
          )}

          {paymentModel === "cpm" && <h3>Reach Number</h3>}
          {/* <h4>{reach}</h4> */}
          {paymentModel === "cpm" && (
            <Input
              fluid
              type="number"
              onChange={(e, { value }) =>  value >= 0 ?setReach(value):setReach("")}
              value={reach}
              placeholder="1000"
            />
          )}
          {!/^[0-9.]*$/.test(reach) && reach && (
            <Label basic color="red" pointing="above">
              Please enter a number
            </Label>
          )}
          {isChecking && !reach && paymentModel === "cpm" && (
            <Label style={{ color: "red" }} basic color="red" pointing="above">
              please enter Reach
            </Label>
          )}

          <h3>Number of spots</h3>
          {/* <h3>{spot}</h3>
          <h3>{spotKeyDown}</h3> */}
          {/* <Input type='number' onChange={(e, { value }) => handelSetSpot(value)} /> */}
          <Input
            //inputmode="numeric" pattern="[0-9]*"
            fluid
            type="number"
            pattern="[0-9]*"
            onKeyDown={ (evt) => handleSpotKeyDown(evt)  }
            onChange={(e, { value }) =>  value >= 0 ?setSpot(value):setSpot("") }
            value={spot}
            placeholder="1000"
          />
          {!/^\d+$/.test(spot)&&!/^\d+$/.test(spotKeyDown) && spotKeyDown &&(spotKeyDown!=='Backspace')&& (
            <Label basic color="red" pointing="above">
              Please enter a valid number
            </Label>
          )}
          <div className="buttonWrap">
            <button  type="reset" onClick={reset}>reset</button>
          </div>
        </div>
        <div className="result">
          {paymentModel === "cpm" && <h1> AVERAGE LISTENERS</h1>}
          {paymentModel === "cpm" && (
            <div className="aveListeners">
              <div className="part">
                <h3>Monthly</h3>
                <h4>
                  {" "}
                  {country &&
                    aReach.aReachArr()[country] &&
                    aReach.aReachArr()[country].monthly}
                </h4>
              </div>
              <div className="part">
                <h3>Weekly</h3>
                <h4>
                  {country &&
                    aReach.aReachArr()[country] &&
                    aReach.aReachArr()[country].weekly}
                </h4>
              </div>
            </div>
          )}

          <h1>
            ESTIMATED COST
              {/* {country &&
                paymentModel &&
                spot &&
                adFormat && */}
            <h2>
                {formatter.format(cost)}
            <span>.{(Math.round(cost%1*100)<10)&&0}{Math.round(cost%1*100)}</span>
            </h2>
                {/* } */}
                
          </h1>
        </div>
      </div>
    </Form>
  );
};

export default Calculator;
