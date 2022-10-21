import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { LabelTextInput } from "./components/LabelTextInput";
import logo from "./assets/logo.svg";
import { LabelText } from "./components/SalesPerMonth";
import { TextField, Typography } from "@mui/material";
import { isNumber } from "./lib/number";

export default function App() {
  const [eigyoubi, setEigyoubi] = useState<string>();
  const [visitors, setVisitors] = useState<string>();
  const [tanka, setTanka] = useState<string>();
  const [okoegake, setOkoegake] = useState<string>();

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
            max={30}
            min={1}
            placeholder="営業日数を入力してください"
            onChangeValue={(str: string) => setEigyoubi(str)}
            unit={"日"}
          />
          <LabelTextInput
            label="1日来店数"
            value={visitors}
            placeholder="1日の来店人数"
            onChangeValue={(str: string) => setVisitors(str)}
            unit={"人"}
          />
          <LabelTextInput
            label="お客様単価"
            value={tanka}
            placeholder="単価を入力して下さい"
            onChangeValue={(str: string) => setTanka(str)}
            unit={"円"}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            borderRadius: 1,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <LabelText
            label="月間来店人数"
            value={visitors ? raitenninzuu.toLocaleString() : undefined}
            unit={"人"}
          />
          <LabelText
            label="月間売上高"
            value={tanka ? salesPerMonth.toLocaleString() : undefined}
            unit={"円"}
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
          />

          <LabelTextInput
            label="お声掛け 想定"
            onChangeValue={(str: string) => setOkoegake(str)}
            value={okoegake}
            placeholder="０"
            unit={"％"}
            // size={"large"}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <LabelText
            label="平均単価"
            value={tanka && okoegake ? heikinTanka.toLocaleString() : undefined}
            unit={"円"}
          />
          <LabelText
            label="エアバリ導入後 想定売上"
            value={okoegake ? airbariUriage.toLocaleString() : undefined}
            unit={"円"}
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
              {airbariUriage ? profitAirbari.toLocaleString() : "●●●"}円
            </Typography>
            の売り上げ増加が期待できます。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
