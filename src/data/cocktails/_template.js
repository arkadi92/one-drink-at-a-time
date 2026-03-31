// To add a new cocktail:
// 1. Copy this file and rename it (e.g. "dark-and-stormy.js")
// 2. Fill in all fields below
// 3. In src/data/cocktails.js, add one import line and add the variable to the array
// 4. Run `npm run dev` — the card appears automatically

export default {
  id: 99,               // unique number (increment from the highest existing id)
  name: "",             // display name, e.g. "Dark & Stormy"
  tagline: "",          // short flavour description shown in italic on the card, e.g. "Dark, spicy & tropical"
  spirit: "",           // must exactly match one of: "Gin" | "Tequila" | "Vodka" | "Rum" | "Whiskey" | "Wine" | "Others"
  ingredients: [        // ordered list; start each entry with quantity, e.g. "60ml Dark Rum"
    "",
  ],
  garnish: "",          // garnish description, e.g. "Lime wedge"
  glass: "",            // glass type, e.g. "Highball glass"
  method: "",           // full step-by-step preparation instructions
  color: "",            // hex accent colour used for ingredient tag backgrounds, e.g. "#1A237E"
  gradient: ["", ""],   // [start hex, end hex] for the SVG fallback image background
  emoji: "",            // single emoji displayed on the SVG fallback, e.g. "🍹"
  image: null,          // set to "/images/filename.jpg" once you add a photo to public/images/
                        // leave as null to use the auto-generated SVG fallback
};
