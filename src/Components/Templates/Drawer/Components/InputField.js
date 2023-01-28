import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const MonthPicker = ({ value, setValue, label, required = true }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="standard"
        required={required}
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value="January">January</MenuItem>
        <MenuItem value="February">February</MenuItem>
        <MenuItem value="March">March</MenuItem>
        <MenuItem value="April">April</MenuItem>
        <MenuItem value="May">May</MenuItem>
        <MenuItem value="June">June</MenuItem>
        <MenuItem value="July">July</MenuItem>
        <MenuItem value="August">August</MenuItem>
        <MenuItem value="September">September</MenuItem>
        <MenuItem value="October">October</MenuItem>
        <MenuItem value="November">November</MenuItem>
        <MenuItem value="December">December</MenuItem>
      </Select>
    </FormControl>
  );
};

export const YearPicker = ({ value, setValue, label, required = true }) => {
  const year = new Date().getFullYear() - 50;
  const years = Array.from(new Array(80), (val, index) => index + year);
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        variant="standard"
        required={required}
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
      >
        {years.map((year, index) => {
          return (
            <MenuItem value={year} key={index}>
              {year}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
