import { warn } from "../helpers/logger";
import { baseStyle, MockAST } from "../mock/base";
import * as CSS from "./css-parser";

import { toCss } from "./ast";

export function transformCss() {
  const ast = CSS.parse(baseStyle);
  warn(JSON.stringify(ast, null, 2));
  // takw all the root style and the body style and apply it to the page.ts or what ever should be the root file
  //step 1. take the css and convert it to the tailwind css classes
  // create the ast and convert the classes into the section

  //   warn(JSON.stringify(tailwindast, null, 2));
}

/**
 *   TODO: 
 * what ever is in the root selector should go into the design system
 * --background and --foreground should be the theme
 * 
 * 2. anything that is html, body or body selector should go into first div in the pages or where ever the app launches
 * 
 * 3. any value that is a var(--value) should be converted to a class
 * 
 * 4. any value that is a var(--value) should be in the theme and global css styles under light and dark theme
 * 
 * 5. font-family should be in the global and tailwind config
 * 
 * 6. anything that is * selector will go under 
 * @layer base {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  anything that is @media (prefers-color-scheme: dark) should be in the dark theme in the design system
*/
