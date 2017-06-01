const colors = {
  White: '#fff',
  Black: '#000',
  LightBlue: '#f1f8ff',
  Gray: '#777',
  LightGray: '#ccc',
  ExtraLightGray: '#f7f7f7',
  DarkGray: '#586069',
  Primary: '#10649B',
  PrimaryLight: '#1CB5E0',
  PrimaryDark: '#000046',
  Error: '#F44336'
}

const dimensions = {
  docWidth: 1654,
  docHeight: 2339
}

const spacing = {
  xSmall: 4 * 4,
  Small: 8 * 4,
  Medium: 16 * 4,
  Large: 32 * 4,
  xLarge: 64 * 4
}

const typography = {
  Title: {
    color: '#fff',
    fontSize: 64,
    fontFamily: 'Raleway',
    marginTop: spacing.Medium,
    lineHeight: 64
  },
  Subtitle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Raleway',
    marginTop: spacing.xSmall
  },
  Heading: {
    paddingBottom: spacing.Small,
    color: colors.Gray,
    fontSize: 36,
    fontFamily: 'Raleway SemiBold',
    textTransform: 'uppercase'
  },
  Lead: {
    fontSize: 20,
    letterSpacing: 0.5,
    fontFamily: 'Raleway SemiBold'
  },
  Body: {
    fontSize: 20,
    fontFamily: 'Raleway'
  },
  Small: {
    color: colors.Gray,
    fontSize: 14,
    fontFamily: 'Raleway'
  },
  Code: {
    fontSize: 20,
    fontFamily: 'Monaco'
  }
}

export default {
  dimensions,
  typography,
  spacing,
  colors
}
