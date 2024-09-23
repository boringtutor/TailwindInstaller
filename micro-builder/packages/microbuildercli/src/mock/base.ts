export const baseStyle = `:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}`;

export const MockAST = {
  type: "stylesheet",
  stylesheet: {
    rules: [
      {
        type: "rule",
        selectors: [":root"],
        declarations: [
          {
            type: "declaration",
            property: "--background",
            value: "#ffffff",
            position: {
              start: { line: 2, column: 3 },
              end: { line: 2, column: 24 },
            },
          },
          {
            type: "declaration",
            property: "--foreground",
            value: "#171717",
            position: {
              start: { line: 3, column: 3 },
              end: { line: 3, column: 24 },
            },
          },
        ],
        position: {
          start: { line: 1, column: 1 },
          end: { line: 4, column: 2 },
        },
      },
      {
        type: "media",
        media: "(prefers-color-scheme: dark)",
        rules: [
          {
            type: "rule",
            selectors: [":root"],
            declarations: [
              {
                type: "declaration",
                property: "--background",
                value: "#0a0a0a",
                position: {
                  start: { line: 8, column: 5 },
                  end: { line: 8, column: 26 },
                },
              },
              {
                type: "declaration",
                property: "--foreground",
                value: "#ededed",
                position: {
                  start: { line: 9, column: 5 },
                  end: { line: 9, column: 26 },
                },
              },
            ],
            position: {
              start: { line: 7, column: 3 },
              end: { line: 10, column: 4 },
            },
          },
        ],
        position: {
          start: { line: 6, column: 1 },
          end: { line: 11, column: 2 },
        },
      },
      {
        type: "rule",
        selectors: ["html", "body"],
        declarations: [
          {
            type: "declaration",
            property: "max-width",
            value: "100vw",
            position: {
              start: { line: 15, column: 3 },
              end: { line: 15, column: 19 },
            },
          },
          {
            type: "declaration",
            property: "overflow-x",
            value: "hidden",
            position: {
              start: { line: 16, column: 3 },
              end: { line: 16, column: 21 },
            },
          },
        ],
        position: {
          start: { line: 13, column: 1 },
          end: { line: 17, column: 2 },
        },
      },
      {
        type: "rule",
        selectors: ["body"],
        declarations: [
          {
            type: "declaration",
            property: "color",
            value: "var(--foreground)",
            position: {
              start: { line: 20, column: 3 },
              end: { line: 20, column: 27 },
            },
          },
          {
            type: "declaration",
            property: "background",
            value: "var(--background)",
            position: {
              start: { line: 21, column: 3 },
              end: { line: 21, column: 32 },
            },
          },
          {
            type: "declaration",
            property: "font-family",
            value: "Arial, Helvetica, sans-serif",
            position: {
              start: { line: 22, column: 3 },
              end: { line: 22, column: 44 },
            },
          },
          {
            type: "declaration",
            property: "-webkit-font-smoothing",
            value: "antialiased",
            position: {
              start: { line: 23, column: 3 },
              end: { line: 23, column: 38 },
            },
          },
          {
            type: "declaration",
            property: "-moz-osx-font-smoothing",
            value: "grayscale",
            position: {
              start: { line: 24, column: 3 },
              end: { line: 24, column: 37 },
            },
          },
        ],
        position: {
          start: { line: 19, column: 1 },
          end: { line: 25, column: 2 },
        },
      },
      {
        type: "rule",
        selectors: ["*"],
        declarations: [
          {
            type: "declaration",
            property: "box-sizing",
            value: "border-box",
            position: {
              start: { line: 28, column: 3 },
              end: { line: 28, column: 25 },
            },
          },
          {
            type: "declaration",
            property: "padding",
            value: "0",
            position: {
              start: { line: 29, column: 3 },
              end: { line: 29, column: 13 },
            },
          },
          {
            type: "declaration",
            property: "margin",
            value: "0",
            position: {
              start: { line: 30, column: 3 },
              end: { line: 30, column: 12 },
            },
          },
        ],
        position: {
          start: { line: 27, column: 1 },
          end: { line: 31, column: 2 },
        },
      },
      {
        type: "rule",
        selectors: ["a"],
        declarations: [
          {
            type: "declaration",
            property: "color",
            value: "inherit",
            position: {
              start: { line: 34, column: 3 },
              end: { line: 34, column: 17 },
            },
          },
          {
            type: "declaration",
            property: "text-decoration",
            value: "none",
            position: {
              start: { line: 35, column: 3 },
              end: { line: 35, column: 24 },
            },
          },
        ],
        position: {
          start: { line: 33, column: 1 },
          end: { line: 36, column: 2 },
        },
      },
      {
        type: "media",
        media: "(prefers-color-scheme: dark)",
        rules: [
          {
            type: "rule",
            selectors: ["html"],
            declarations: [
              {
                type: "declaration",
                property: "color-scheme",
                value: "dark",
                position: {
                  start: { line: 40, column: 5 },
                  end: { line: 40, column: 23 },
                },
              },
            ],
            position: {
              start: { line: 39, column: 3 },
              end: { line: 41, column: 4 },
            },
          },
        ],
        position: {
          start: { line: 38, column: 1 },
          end: { line: 42, column: 2 },
        },
      },
    ],
    parsingErrors: [],
  },
};

export const MockTailwindAST = {
  type: "root",
  children: [
    {
      type: "rule",
      selector: "html",
      nodes: [
        {
          type: "decl",
          prop: "max-width",
          value: "100vw",
        },
        {
          type: "decl",
          prop: "overflow-x",
          value: "hidden",
        },
      ],
    },
    {
      type: "rule",
      selector: "body",
      nodes: [
        {
          type: "decl",
          prop: "max-width",
          value: "100vw",
        },
        {
          type: "decl",
          prop: "overflow-x",
          value: "hidden",
        },
      ],
    },
    {
      type: "rule",
      selector: "body",
      nodes: [
        {
          type: "decl",
          prop: "color",
          value: "var(--foreground)",
        },
        {
          type: "decl",
          prop: "background",
          value: "var(--background)",
        },
        {
          type: "decl",
          prop: "font-family",
          value: "Arial, Helvetica, sans-serif",
        },
        {
          type: "decl",
          prop: "-webkit-font-smoothing",
          value: "antialiased",
        },
        {
          type: "decl",
          prop: "-moz-osx-font-smoothing",
          value: "grayscale",
        },
      ],
    },
    {
      type: "rule",
      selector: "*",
      nodes: [
        {
          type: "decl",
          prop: "box-sizing",
          value: "border-box",
        },
        {
          type: "decl",
          prop: "padding",
          value: "0",
        },
        {
          type: "decl",
          prop: "margin",
          value: "0",
        },
      ],
    },
    {
      type: "rule",
      selector: "a",
      nodes: [
        {
          type: "decl",
          prop: "color",
          value: "inherit",
        },
        {
          type: "decl",
          prop: "text-decoration",
          value: "none",
        },
      ],
    },
    {
      type: "rule",
      selector: ":root",
      nodes: [
        {
          type: "decl",
          prop: "--tw-background",
          value: "#ffffff",
        },
        {
          type: "decl",
          prop: "--tw-foreground",
          value: "#171717",
        },
      ],
    },
    {
      type: "atrule",
      name: "media",
      params: "(prefers-color-scheme: dark)",
      nodes: [
        {
          type: "rule",
          selector: ":root",
          nodes: [
            {
              type: "decl",
              prop: "--tw-background",
              value: "#0a0a0a",
            },
            {
              type: "decl",
              prop: "--tw-foreground",
              value: "#ededed",
            },
          ],
        },
      ],
    },
  ],
};

export const MockTailwindAST2 = [
  {
    kind: "rule",
    selector: ":root",
    nodes: [
      {
        kind: "declaration",
        property: "--background",
        value: "#ffffff",
        important: false,
      },
      {
        kind: "declaration",
        property: "--foreground",
        value: "#171717",
        important: false,
      },
    ],
  },
  {
    kind: "rule",
    selector: "@media (prefers-color-scheme: dark)",
    nodes: [
      {
        kind: "rule",
        selector: ":root",
        nodes: [
          {
            kind: "declaration",
            property: "--background",
            value: "#0a0a0a",
            important: false,
          },
          {
            kind: "declaration",
            property: "--foreground",
            value: "#ededed",
            important: false,
          },
        ],
      },
    ],
  },
  {
    kind: "rule",
    selector: "html, body",
    nodes: [
      {
        kind: "declaration",
        property: "max-width",
        value: "100vw",
        important: false,
      },
      {
        kind: "declaration",
        property: "overflow-x",
        value: "hidden",
        important: false,
      },
    ],
  },
  {
    kind: "rule",
    selector: "body",
    nodes: [
      {
        kind: "declaration",
        property: "color",
        value: "var(--foreground)",
        important: false,
      },
      {
        kind: "declaration",
        property: "background",
        value: "var(--background)",
        important: false,
      },
      {
        kind: "declaration",
        property: "font-family",
        value: "Arial, Helvetica, sans-serif",
        important: false,
      },
      {
        kind: "declaration",
        property: "-webkit-font-smoothing",
        value: "antialiased",
        important: false,
      },
      {
        kind: "declaration",
        property: "-moz-osx-font-smoothing",
        value: "grayscale",
        important: false,
      },
    ],
  },
  {
    kind: "rule",
    selector: "*",
    nodes: [
      {
        kind: "declaration",
        property: "box-sizing",
        value: "border-box",
        important: false,
      },
      {
        kind: "declaration",
        property: "padding",
        value: "0",
        important: false,
      },
      {
        kind: "declaration",
        property: "margin",
        value: "0",
        important: false,
      },
    ],
  },
  {
    kind: "rule",
    selector: "a",
    nodes: [
      {
        kind: "declaration",
        property: "color",
        value: "inherit",
        important: false,
      },
      {
        kind: "declaration",
        property: "text-decoration",
        value: "none",
        important: false,
      },
    ],
  },
  {
    kind: "rule",
    selector: "@media (prefers-color-scheme: dark)",
    nodes: [
      {
        kind: "rule",
        selector: "html",
        nodes: [
          {
            kind: "declaration",
            property: "color-scheme",
            value: "dark",
            important: false,
          },
        ],
      },
    ],
  },
];
