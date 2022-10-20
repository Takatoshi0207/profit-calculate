import { Box, Typography } from "@mui/material";

interface LabelTextProps {
  label: string;
  value: string | number | undefined;
  unit: string;
}

const LabelText: React.FC<LabelTextProps> = ({ label, value, unit }) => {
  return (
    <Box
      display={"flex"}
      sx={{ flex: 1 }}
      minWidth={300}
      flexDirection={"column"}
    >
      <Box sx={{ fontWeight: "bold" }} fontSize={{ xs: 12, sm: 15 }}>
        {label}
      </Box>
      <Box px={1.5} py={1.5}>
        <Typography
          style={
            value
              ? { fontSize: 24.0, color: "#202020", fontWeight: "bold" }
              : { fontSize: 20.0, color: "#909090" }
          }
        >
          {value ? `${value.toLocaleString() + unit}` : "●●●" + unit}
        </Typography>
      </Box>
    </Box>
  );
};
export { LabelText };
