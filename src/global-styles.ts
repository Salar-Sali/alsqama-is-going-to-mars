import { Theme } from "@mui/material";
import { Interpolation } from "@mui/styled-engine";

const globalStyles: Interpolation<Theme> = {
  "*": {
    boxSizing: "border-box",
  },
  "html, body": {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "'Roboto', sans-serif",
  },
  "*::-webkit-scrollbar": {
    width: "5px",
    height: "5px",
    backgroundColor: "#00000014",
  },
  "*::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "#00000014",
    outline: "1px solid darkgrey",
    borderRadius: "10px",
  },
  "*::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    outline: "1px solid rgba(0, 0, 0, 0.8)",
    cursor: "pointer",
  },
  ".MuiDataGrid-withBorderColor": {
    border: "none !important",
  },

  ".MuiModal-backdrop": {
    backgroundColor: "#00000012",
  },
};

export default globalStyles;
