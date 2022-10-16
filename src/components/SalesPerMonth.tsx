import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'

interface SalesPerMonthProps {
  label: string;
  placeholder: string;
  value: number | undefined;
  unit: string;
  size: "medium" | "large";
}


const SalesPerMonth: React.FC<SalesPerMonthProps> = ({
  label,
  value,
  placeholder,
  unit,
  size = "medium",
}) => {
  return (
    <Box
      display={"flex"}
      sx={{ flex: 1 }}
      minWidth={size === "medium" ? 150 : 300}
      flexDirection={"column"}
    >
      <Box sx={{ fontWeight: "bold" }}>{label}</Box>
      <FormControl
        sx={{
          '& .Mui-disabled': {
            background: '#000000',
          },
        }}
        variant="outlined"
      >
        <OutlinedInput
          value={value}
          placeholder={placeholder}
          fullWidth
          endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
          inputProps={{
            style: {
              fontSize: 12,
            },
          }}
        />
      </FormControl>
    </Box>
  );
};
export { SalesPerMonth };