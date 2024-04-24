/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const FormDataDisplay = ({ formData }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
      <Typography variant="h6">Form Data:</Typography>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key}>
          <Typography variant="body1">{`${key}: ${value}`}</Typography>
        </div>
      ))}
    </Paper>
  );
};

export default FormDataDisplay;
