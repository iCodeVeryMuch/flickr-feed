const size = {
    mobileS: '375px',
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = Object.keys(size).reduce((acc, key) => {
    acc[key] = style => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `
    return acc
}, {})