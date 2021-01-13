import React from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(
  /\\n/g,
  "\n"
);

const Tracking = (props) => {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      // const result = await sheet.addRow(row);
      await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const newRow = {
    Market: props.market,
    Budget: props.budget,
    Campaign_Length: props.campainLengthNumber,
    Campaign_Length_Type: props.campainLengthType,
    Spot_Length: props.spotLength,
    Campaign360: props.campaign360,
    OfferDeal: props.offerDeal,
    Outcome: props.outcome,
    TimeStamp: new Date()
  };
  const handleClick = () => {
    props.confirm();
    appendSpreadsheet(newRow);
  };
  return (
    <div>
      {/* <button className="resetButton" onClick={()=>appendSpreadsheet(newRow)}>Feed</button> */}
      <button className="resetButton" onClick={handleClick}>
      Caculate
      </button>
    </div>
  );
};

export default Tracking;
