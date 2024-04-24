/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Checkbox from "@mui/material/Checkbox";

const Form = ({ formConfig }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, type, key, subVal = null) => {
    let value;
    if (type === "switch") {
      value = e.target.checked;
    } else if (type === "datePicker") {
      value = e.toString().slice(0, 15);
    } else if (type === "checkBox" || type === "buttonGroup") {
      if (formData[key]) {
        if (formData[key].includes(subVal)) {
          formData[key].splice(formData[key].indexOf(subVal), 1);
          value = formData[key];
        } else {
          formData[key].push(subVal);
          value = formData[key];
        }
      } else {
        value = [subVal];
      }
    } else {
      value = e.target.value;
    }

    setFormData({ ...formData, [key]: value });
  };

  const renderFormElement = (element) => {
    const { type, label, options, values } = element;

    switch (type) {
      case "textField":
        return (
          <TextField
            label={options?.placeHolder}
            variant="outlined"
            autoComplete="off"
            value={formData[label] || ""}
            onChange={(e) => handleChange(e, type, label)}
            multiline
            minRows={options?.minRows}
            fullWidth
          />
        );
      case "select":
        return (
          <Select
            value={formData[label] || label}
            onChange={(e) => handleChange(e, type, label)}
          >
            <MenuItem value={label} disabled>
              {label}
            </MenuItem>
            {values.map((value, idx) => (
              <MenuItem key={idx} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        );
      case "switch":
        return <Switch onChange={(e) => handleChange(e, type, label)} />;
      case "radioButton":
        return (
          <RadioGroup
            value={formData[label] || ""}
            onChange={(e) => handleChange(e, type, label)}
          >
            {values.map((value, idx) => (
              <FormControlLabel
                key={idx}
                value={value}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        );
      case "starRating":
        return (
          <Rating
            name="half-rating"
            precision={options?.precision}
            max={options?.maxRating}
            onChange={(e) => handleChange(e, type, label)}
          />
        );
      case "datePicker":
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={label}
              onChange={(e) => handleChange(e.$d, type, label)}
            />
          </LocalizationProvider>
        );
      case "checkBox":
        return (
          <>
            {values.map((value, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={value}
                onChange={(e) =>
                  handleChange(e.target.checked, type, label, value)
                }
              />
            ))}
          </>
        );
      case "buttonGroup":
        return (
          <>
            {values.map((value, index) => (
              <Button
                key={index}
                variant={
                  formData?.[label]?.includes(value) ? "contained" : "outlined"
                }
                sx={{ margin: 1 }}
                onClick={(e) => {
                  handleChange(e.target, type, label, value);
                }}
              >
                {value}
              </Button>
            ))}
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    setFormData({});
  }, [formConfig]);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {formConfig.map((element, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">{element.label}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              {renderFormElement(element)}
            </Grid>
          </React.Fragment>
        ))}
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 5 }}
          type="submit"
        >
          <Typography variant="button" fontWeight={900}>
            Submit
          </Typography>
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
