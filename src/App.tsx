import { useState, useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import BussinessDay from './components/BussinessDay'
import Sales from './components/Sales'
import SalesPerMonth from './components/SalesPerMonth'
import logo from './assets/logo.png'

export default function App() {
  const [eigyoubi, setEigyoubi] = useState([])
  const [visitors, setVisitors] = useState([])
  const [tanka, setTanka] = useState([])

  const raitenninzuu = useMemo(() => {
    return eigyoubi * visitors;
  })

  const salesPerMonth = useMemo(() => {
    return raitenninzuu * tanka;
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
        <Box sx={{
          textAlign: 'center',
          p: 5,
        }}>
          <img src={logo} alt="エアバリ" />
        </Box>

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
            placeholder="単価を入力して下さい"
            onChange={(event) => setTanka(event.target.value)} />
        </Box>
        <Sales label="月間来店人数" sx={{ flex: 1, }} value={raitenninzuu + ' 名様'} disabled />
        <SalesPerMonth label="月間売上高"
          placeholder="自動計算されます"
          value={salesPerMonth}
          thousandSeparator={true}
        />
      </Box>
    </Box>
  )
}
