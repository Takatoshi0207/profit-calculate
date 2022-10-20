import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { LabelTextInput } from "./components/LabelTextInput";
import logo from "./assets/logo.svg";
import { LabelText } from "./components/SalesPerMonth";
import { Typography } from "@mui/material";

export default function App() {
  const [eigyoubi, setEigyoubi] = useState<number>();
  const [visitors, setVisitors] = useState<number>();
  const [tanka, setTanka] = useState<number>();
  const [okoegake, setOkoegake] = useState<number>();

  const raitenninzuu = Number(eigyoubi) * Number(visitors);

  const salesPerMonth = raitenninzuu * Number(tanka);

  const upSellCustomer = raitenninzuu * (Number(okoegake) / 100);
  const avCustomer = raitenninzuu - upSellCustomer;
  const airbariTanka = 7700;
  const upSellTanka = Number(tanka) + airbariTanka;
  const upSelluriage = upSellTanka * upSellCustomer;
  const avTanka = Number(tanka) * avCustomer;
  const airbariUriage = upSelluriage + avTanka;

  const heikinTanka = airbariUriage / raitenninzuu;

  const profitAirbari = airbariUriage - salesPerMonth;

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
          value={visitors ? raitenninzuu.toLocaleString() : undefined}
          disabled
          unit={"人"}
        />

        <Box
          sx={{ display: "flex", bgcolor: "background.paper", borderRadius: 1 }}
        >
          <LabelText
            label="月間売上高"
            placeholder="自動計算されます"
            value={tanka ? salesPerMonth.toLocaleString() : undefined}
            unit={"円"}
            size={"medium"}
          />
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
          <LabelText
            label="エアバリメニュー単価"
            value={airbariTanka}
            unit={"円"}
            size={"large"}
          />

          <LabelTextInput
            label="お声掛け 想定"
            onChange={(e: any) => setOkoegake(e.target.value)}
            value={okoegake}
            placeholder="０"
            unit={"％"}
            // size={"large"}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <LabelText
            label="平均単価"
            placeholder="平均単価"
            value={tanka && okoegake ? heikinTanka.toLocaleString() : undefined}
            unit={"円"}
            size={"large"}
          />
          <LabelText
            label="エアバリ導入後 想定売上"
            value={okoegake ? airbariUriage.toLocaleString() : undefined}
            placeholder="想定売上"
            unit={"円"}
            size={"large"}
          />
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            fontSize={{ xs: 14, sm: 18 }}
          >
            エアバリの導入で
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold" }}
              fontSize={{ xs: 15, sm: 20 }}
              color="primary"
            >
              {airbariUriage ? profitAirbari.toLocaleString() : undefined}円
            </Typography>
            の売り上げ増加が期待できます。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
