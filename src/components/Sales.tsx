import { Box, TextField } from '@mui/material'


const Sales = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        width: '100%'
      }}
      noValidate
      autoComplete="off"

    >
      <Box sx={{ textAlign: 'right' }}><h3>月次売上高:</h3></Box>
      <TextField
        id="outlined-basic"
        label="ここに入力してください"
        variant="outlined"
        fullWidth
      />
    </Box>
  )
}

export default Sales