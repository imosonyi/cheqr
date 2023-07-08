interface Theme {
  background: {
    backgroundColor: string
  },
  ui: {
    color: {
      primary: string,
      secondary: string
    }
  },
  text: {
    color: {
      primary: string,
      secondary: string
    },
    size: Sizes
  },
  gaps: Sizes
}

interface Sizes {
  xl: number,
  l: number,
  m: number,
  s: number,
  xs: number
}

const sizes: Sizes = {
  xl: 56,
  l: 32,
  m: 14,
  s: 10,
  xs: 6
};

const gaps: Sizes = {
  xl: 48,
  l: 32,
  m: 20,
  s: 10,
  xs: 6
};

const lightTheme: Theme = {
  background: {
    backgroundColor: "#dfdfdf"
  },
  ui: {
    color: {
      primary: "#60d028",
      secondary: "#3b9b5f"
    }
  },
  text: {
    color: {
      primary: "#303030",
      secondary: "#003010"
    },
    size: sizes
  },
  gaps: gaps
};

const darkTheme: Theme = {
  background: {
    backgroundColor: "#303030"
  },
  ui: {
    color: {
      primary: "#60d028",
      secondary: "#3b9b5f"
    },
  },
  text: {
    color: {
      primary: "#dfdfdf",
      secondary: "#dfffcf"
    },
    size: sizes
  },
  gaps: gaps
};

export const theme: {light: Theme, dark: Theme} = {
  light: lightTheme,
  dark: darkTheme
};
