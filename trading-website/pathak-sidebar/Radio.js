import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from '@mui/material/Typography';
import { lightBlue } from '@mui/material/colors';
import "./Radio.module.css";


const cstyle = {
  color: "white",
  "font-family": "Montserrat",
  "font-style": "normal",
  "font-weight": "600",
  "font-size": "1.6rem",
}

const optionStyle = {
  color: "white",
  "font-family": "Montserrat",
  "font-style": "normal",
  "font-weight": "600",
  "font-size": "1.6rem",
  'text-transform': 'uppercase',
  'color': '#81CAFE'
}
export default function SimpleRadio() {


  return (
    <div className="radio-cont">
      <FormControl>
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={cstyle}
        >
          Gender
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="Individual" control={<Radio
            sx={{
              color: lightBlue[800],
              '&.Mui-checked': {
                color: lightBlue[600],
              },
            }} />} label={<Typography color="textSecondary" style={optionStyle}>Individual</Typography>} style={optionStyle} />
          <FormControlLabel value="Pool" control={<Radio
            sx={{
              color: lightBlue[800],
              '&.Mui-checked': {
                color: lightBlue[600],
              },
            }} />} label={<Typography color="textSecondary" style={optionStyle}>Pool</Typography>} style={optionStyle} />



        </RadioGroup>
      </FormControl>
    </div>
  );
}
