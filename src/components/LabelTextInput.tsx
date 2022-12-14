import { Box, FormControl, InputAdornment, TextField } from "@mui/material";
import { isNumber } from "../lib/number";
interface LabelTextInputProps {
  label: string;
  placeholder?: string;
  value?: string | number | undefined;
  value_no?: number;
  onChangeValue?(val: string): void;
  disabled?: boolean;
  unit?: string;
  size?: "medium" | "large";
  max?: number;
  min?: number;
}

const LabelTextInput: React.FC<LabelTextInputProps> = ({
  label,
  onChangeValue,
  value,
  placeholder,
  disabled,
  unit,
  size = "medium",
  max,
  min,
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
            color: "#ff0000",
            background: "#F3F3F3",
          },
        }}
        variant="outlined"
      >
        <TextField
          disabled={disabled}
          value={value}
          type="number"
          onChange={(e) => {
            const _val = e.target.value;
            if (_val === "" && onChangeValue) {
              onChangeValue(_val);
              return;
            }
            if (isNumber(_val) && _val.length >= 2) {
              if (_val.slice(0, 1) === "0" && _val.slice(1, 2) !== ".") {
                return;
              }
            }
            if (max) {
              if (Number(_val) >= max && onChangeValue) {
                onChangeValue(`${max}`);
                return;
              }
            }
            if (min) {
              if (Number(_val) <= min && onChangeValue) {
                onChangeValue(`${min}`);
                return;
              }
            }

            if (onChangeValue) {
              onChangeValue(_val);
            }
          }}
          placeholder={placeholder}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">{unit}</InputAdornment>
            ),
            style: {
              fontSize: 16,
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export { LabelTextInput };
