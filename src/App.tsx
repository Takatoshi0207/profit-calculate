import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import { LabelTextInput } from "./components/LabelTextInput";
import SalesPerMonth from "./components/SalesPerMonth";
import logo from "./assets/logo.svg";
import { styled, TextField, Typography } from "@mui/material";

export default function App() {
  const [eigyoubi, setEigyoubi] = useState<number>();
  const [visitors, setVisitors] = useState<number>();
  const [tanka, setTanka] = useState<number>();
  const [okoegake, setOkoegake] = useState<number>();
  const [upSellTanka, setUpSellTanka] = useState<number>();

  const raitenninzuu = useMemo(() => {
    return eigyoubi * visitors;
  });

  const salesPerMonth = useMemo(() => {
    return raitenninzuu * tanka;
  });

  const heikinTanka = useMemo(() => {
    const upSellCustomer = raitenninzuu * (okoegake / 100);
    const avCustomer = raitenninzuu - upSellCustomer;
    const airbariTanka = 7700;
    const upSellTanka = tanka + airbariTanka;
    const upSelluriage = upSellTanka * upSellCustomer;
    const avTanka = tanka * avCustomer;
    const airbariUriage = upSelluriage + avTanka;
    const newTanka = airbariUriage / raitenninzuu;
    return newTanka;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 3,
          border: "1px solid #ddd",
          borderBottom: "2px solid #ddd ",
          bgcolor: "common.white",
        }}
      >
        <Box
          sx={{
            width: 180,
            p: 1,
            mx: "auto",
          }}
        >
          <a href="/">
            <img src={logo} alt="エアバリ" />
          </a>
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <LabelTextInput
            label="営業日"
            value={eigyoubi}
            placeholder="営業日数を入力してください"
            onChange={(event: any) => setEigyoubi(event.target.value)}
            unit={"日"}
          />
          <LabelTextInput
            label="1日来店数"
            value={visitors}
            placeholder="1日の来店人数"
            onChange={(event) => setVisitors(event.target.value)}
            unit={"人"}
          />
          <LabelTextInput
            label="お客様単価"
            value={tanka}
            placeholder="単価を入力して下さい"
            onChange={(event) => setTanka(Number(event.target.value))}
            unit={"円"}
          />
        </Box>

        <LabelTextInput
          label="月間来店人数"
          value={raitenninzuu}
          disabled
          unit={"人"}
        />

        <Box
          sx={{ display: "flex", bgcolor: "background.paper", borderRadius: 1 }}
        >
          <SalesPerMonth
            label="月間売上高"
            placeholder="自動計算されます"
            value={salesPerMonth}
            thousandSeparator={true}
            sx={{
              width: "100%",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              alignItems: "flex-end",
              flex: 1,
              ml: -3,
            }}
          >
            円
          </Typography>
        </Box>
      </Box>

      {/* 想定画面 */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          border: "1px solid #ddd",
          bgcolor: "common.white",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <LabelTextInput
            label="エアバリメニュー単価"
            value="7,700"
            disabled
            unit={"円"}
            size={"large"}
          />

          <LabelTextInput
            label="お声掛け 想定"
            onChange={(e: any) => setOkoegake(e.target.value)}
            value={okoegake}
            placeholder="０"
            unit={"％"}
            size={"large"}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <LabelTextInput
            label="平均単価"
            placeholder="平均単価"
            value={tanka && okoegake ? heikinTanka : undefined}
            unit={"円"}
            size={"large"}
          />
          <LabelTextInput
            label="エアバリ導入後 想定売上"
            value={upSellTanka}
            placeholder="想定売上"
            unit={"円"}
            size={"large"}
          />
        </Box>
      </Box>
    </Box>
  );
}
