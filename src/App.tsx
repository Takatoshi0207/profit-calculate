import { useState, useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import BussinessDay from './components/BussinessDay'
import Sales from './components/Sales'
import { Typography } from '@mui/material'

export default function App() {
  const [eigyoubi, setEigyoubi] = useState([])
  const [visitors, setVisitors] = useState([])
  const [tanka, setTanka] = useState(0)

  const raitenninzuu = useMemo(() => {
    return eigyoubi * visitors;
  })


  return (
    <Box sx={{ p: 3 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          border: '1px solid #ddd',
          bgcolor: 'common.white',
        }}
      >
        <Sales label="月間売上高" placeholder="ここに入力してください" />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Sales
            label="営業日"
            sx={{ flex: 1 }}
            value={eigyoubi}
            placeholder="営業日数を入力してください"
            onChange={(event) => setEigyoubi(event.target.value)}
          />
          <Sales
            label="1日来店数"
            sx={{ flex: 1 }}
            value={visitors}
            placeholder="1日の来店人数"
            onChange={(event) => setVisitors(event.target.value)}
          />
          <Sales label="お客様単価"
            sx={{ flex: 1 }}
            value={tanka}
            onChange={(event) => setTanka(event.target.value)} />
        </Box>
        <Sales label="月間来店人数" sx={{ flex: 1, }} value={raitenninzuu + ' 名様'} disabled />
        {/* <Sales label="営業日" disabled />
        <Sales label="営業日" /> */}
      </Box>
    </Box>
  )
}
