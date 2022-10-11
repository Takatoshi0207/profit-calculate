import { Box, TextField } from '@mui/material'
export default function Sales({ label, sx = {}, ...props }) {
  return (
    <Box sx={sx}>
      <Box sx={{ fontWeight: 'bold' }}>{label}</Box>
      <TextField
        variant="outlined"
        fullWidth
        {...props}
        sx={{
          '& .Mui-disabled': {
            background: '#F3F3F3',
          },
        }}
      />
    </Box>
  )
}
