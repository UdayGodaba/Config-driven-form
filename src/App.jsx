import "./App.css";
import Form from "./components/Form";
import { forms } from "./utils/formConfig";

import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function App() {
  const [formType, setFormType] = useState("Contact Form");

  const handleChange = (e) => {
    setFormType(e.target.value);
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: 5,
        maxWidth: 750,
      }}
    >
      <Grid item xs={12}>
        <Select value={formType} onChange={handleChange}>
          {Object.keys(forms).map((formKey, idx) => (
            <MenuItem value={formKey} key={idx}>
              {formKey}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight={900}>
          {formType.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Form formConfig={forms[formType]} />
      </Grid>
    </Grid>
  );
}

export default App;
