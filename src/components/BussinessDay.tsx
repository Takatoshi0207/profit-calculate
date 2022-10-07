import { TextField } from '@mui/material'
import { Box } from '@mui/system'

const BussinessDay = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="営業日" variant="outlined" />
      <TextField id="outlined-basic" label="月間来店人数" variant="outlined" />
      <TextField id="outlined-basic" label="お客様単価" variant="outlined" />
      <TextField id="outlined-basic" label="1日来店数" variant="outlined" />
    </Box>
  )
}

export default BussinessDay