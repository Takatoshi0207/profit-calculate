import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
interface LabelTextInputProps {
  label: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange?(e: any): void;
  disabled?: boolean;
  unit?: string;
  size?: "medium" | "large";
}

const LabelTextInput: React.FC<LabelTextInputProps> = ({
  label,
  onChange,
  value,
  placeholder,
  disabled,
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
      <Box
        sx={{ fontWeight: "bold" }}
        fontSize={{ xs: 12, sm: 15 }}
      >{label}</Box>

      <FormControl
        sx={{
          "& .Mui-disabled": {
            color: "#ff0000",
            background: "#F3F3F3",
          },
        }}
        variant="outlined"
      >
        <OutlinedInput
          disabled={disabled}
          value={value}
          onChange={onChange}
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
export { LabelTextInput };
