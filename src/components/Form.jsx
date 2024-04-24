/* eslint-disable react/prop-types */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Form = ({ formConfig }) => {
  console.log(formConfig);
  return (
    <from>
      <Grid container>
        {formConfig.map((element, idx) => (
          <Grid item xs={12} key={idx}>
            <Typography variant="subtitle1">{element.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </from>
  );
};

export default Form;
