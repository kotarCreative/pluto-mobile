jest.mock('react-native-router-flux', () => ({
  Actions: {
    login: jest.fn(),
    signup: jest.fn()
  },
}))
