
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'lightGrey',
    values:[
      {
        name: 'lightGrey',
        value: '#f0f0f0',
      }
    ]
  }
}