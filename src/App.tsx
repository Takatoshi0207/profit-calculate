import { useState, useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import Sales from './components/Sales'
import SalesPerMonth from './components/SalesPerMonth'
import logo from './assets/logo.svg'
import { Typography } from '@mui/material'

export default function App() {
  const [eigyoubi, setEigyoubi] = useState([])
  const [visitors, setVisitors] = useState([])
  const [tanka, setTanka] = useState([])
  const [okoegake, setOkoegake] = useState([])

  const raitenninzuu = useMemo(() => {
    return eigyoubi * visitors
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
          gap: 3,
          p: 3,
          border: '1px solid #ddd',
          borderBottom: '2px solid #ddd ',
          bgcolor: 'common.white',
        }}
      >
        <Box sx={{
          width: 180,
          p: 1,
          mx: "auto",
        }}>
          <a href="/">
            <img src={logo} alt="エアバリ" />
          </a>
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

        <Box sx={{ display: 'flex', bgcolor: 'background.paper', borderRadius: 1 }} >
          <SalesPerMonth label="月間売上高"
            placeholder="自動計算されます"
            value={salesPerMonth}
            thousandSeparator={true}
            sx={{
              width: '100%'
            }}
          />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              flex: 1,
              ml: -3,
            }}
          >
            円
          </Typography>
        </Box>
      </Box >

      {/* 想定画面 */}
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
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Sales
            label="お声掛け 想定"
            sx={{ flex: 1 }}
            onChange={(event) => setOkoegake(event.target.value)}
            value={okoegake}
          // placeholder="◯ %"
          />
          <Typography
            variant='h6'
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              ml: -5,
            }}
          >
            %
          </Typography>
          <Sales
            label="平均単価"
          />
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              ml: -5,
            }}
          >
            円
          </Typography>
          <Sales
            label="エアバリ導入後 想定売上"
            sx={{ flex: 1 }}
            value={visitors}
            placeholder="想定売上"
            onChange={(event) => setVisitors(event.target.value)}
          />
        </Box>
      </Box >
    </Box >
  )
}
