import { Box, TextField } from '@mui/material'

export default function SalesPerMonth({ label, sx = {}, ...props }) {
  return (
    <Box sx={sx}>
      <Box sx={{ fontWeight: 'bold' }}>{label}</Box>
      <TextField
        variant="outlined"
        fullWidth
        {...props}
        sx={{
          '& .Mui-disabled': {
            background: '#000000',
          },
        }}
      />
    </Box>
  )
}
