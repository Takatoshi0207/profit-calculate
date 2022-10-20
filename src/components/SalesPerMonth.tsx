import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";

interface LabelTextProps {
  label: string;
  placeholder?: string;
  value: string | number | undefined;
  unit: string;
  size: "medium" | "large";
}

const LabelText: React.FC<LabelTextProps> = ({
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
      <Box sx={{ fontWeight: "bold" }} fontSize={{ xs: 12, sm: 15 }}>
        {label}
      </Box>
      <FormControl
        sx={{
          "& .Mui-disabled": {
            background: "#000000",
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
              fontSize: 15,
            },
          }}
        />
      </FormControl>
    </Box>
  );
};
export { LabelText };
