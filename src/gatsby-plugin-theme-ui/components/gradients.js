import { lighten, darken } from "polished"
export const gradients = {
  primary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.primary},${t.colors.pink})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(80deg, ${t.colors.secondary}, #245F9C )`,
  },
  cardGradient: {
    backgroundImage: t =>
      `linear-gradient(120deg,${t.colors.gradientColor1}, ${t.colors.gradientColor2}   )`,
  },
}
