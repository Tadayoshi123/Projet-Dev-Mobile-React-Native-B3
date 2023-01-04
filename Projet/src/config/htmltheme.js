import Theme from './theme';

const HtmlTheme = {
  h1: {
    color: Theme.colors.senary,
    fontSize: Theme.fontSizes.h1,
    fontFamily: Theme.fonts.bold,
  },
  h2: {
    color: Theme.colors.senary,
    fontSize: Theme.fontSizes.h2,
    fontFamily: Theme.fonts.bold,
  },
  h3: {
    color: Theme.colors.senary,
    fontSize: Theme.fontSizes.h3,
    fontFamily: Theme.fonts.bold,
  },
  h4: {
    color: Theme.colors.senary,
    fontSize: Theme.fontSizes.h4,
    fontFamily: Theme.fonts.bold,
  },
  h5: {
    color: Theme.colors.senary,
    fontSize: Theme.fontSizes.h5,
    fontFamily: Theme.fonts.bold,
  },
  h6: {
    color: Theme.colors.senary,
    fontSize: Theme.fontSizes.h6,
    fontFamily: Theme.fonts.bold,
  },
  p: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.regular,
  },
  a: {
    color: Theme.colors.anchor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.regular,
  },
  li: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.regular,
    listStyleType: 'none',
  },
  ul: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.regular,
    listStyleType: 'none',
  },
  strong: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.bold,
  },
  body: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.regular,
  },
  input: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.body,
    fontFamily: Theme.fonts.regular,
    backgroundColor: Theme.colors.tertiary,
  },
};

export default HtmlTheme;
