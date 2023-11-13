import { Theme, darkDefaultTheme } from "@blocknote/react";

export const darkTheme = {
  colors: {
    editor: {
      text: "#ffffff",
      background: "#11101d",
    },
    menu: {
      text: "#ffffff",
      background: "#11101d",
    },
    tooltip: {
      text: "#ffffff",
      background: "#33304f",
    },
    hovered: {
      text: "#ffffff",
      background: "#33304f",
    },
    selected: {
      text: "#ffffff",
      background: "#33304f",
    },
    disabled: {
      text: "#9b0000",
      background: "#33304f",
    },
    shadow: "#33304f",
    border: "#11101d",
    sideMenu: "#bababa",
    highlightColors: darkDefaultTheme.colors.highlightColors,
  },
  borderRadius: 4,
  fontFamily: "latin, Inter",
} satisfies Theme;


