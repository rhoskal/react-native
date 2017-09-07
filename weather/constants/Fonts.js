const type = {
  base: 'Montserrat-Light',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-SemiBold',
};

const size = {
  h1: 65,
  h2: 45,
  h3: 38,
  h4: 34,
  h5: 20,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8,
};

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: type.bold,
    fontSize: size.h2,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
};
