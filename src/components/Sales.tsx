import { Box, TextField } from '@mui/material'

<<<<<<< HEAD

export default function Sales() {
=======
export default function Sales({ label, sx = {}, ...props }) {
>>>>>>> fad1c5d630c5f773e3dd9e29912bb4758d5fb786
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
