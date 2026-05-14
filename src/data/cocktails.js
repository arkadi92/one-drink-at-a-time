// To add a new cocktail: copy src/data/cocktails/_template.js, fill it in,
// then add one import line below and include it in the array.

import negroni from "./cocktails/negroni";
import margarita from "./cocktails/margarita";
import moscowMule from "./cocktails/moscow-mule";
import ginBasilSmash from "./cocktails/gin-basil-smash";
import mojito from "./cocktails/mojito";
import theLastWord from "./cocktails/the-last-word";
import aperolSpritz from "./cocktails/aperol-spritz";
import amarettoSour from "./cocktails/amaretto-sour";
import chartreuseSwizzle from "./cocktails/chartreuse-swizzle";
import oldFashioned from "./cocktails/old-fashioned";
import bellini from "./cocktails/bellini";
import jasmine from "./cocktails/jasmine";

export const cocktails = [
  negroni,
  margarita,
  moscowMule,
  ginBasilSmash,
  mojito,
  theLastWord,
  aperolSpritz,
  amarettoSour,
  chartreuseSwizzle,
  oldFashioned,
  bellini,
  jasmine,
];

export const spiritIcons = {
  All: "\u{1F378}",
  Gin: "\u{1FAD2}",
  Tequila: "\u{1F335}",
  Vodka: "\u{1F9CA}",
  Rum: "\u{1F3DD}",
  Whiskey: "\u{1F943}",
  Wine: "\u{1F377}",
  Others: "\u2728",
};
