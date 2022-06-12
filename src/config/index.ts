import layouts from './layouts';

export default () => ({
  app: {
    name: 'Test',
  },
  api: {
    default: {
      host: process.env.REACT_APP_API_SERVER,
    },
  },
  auth: {
    tokenKey: '_token',
    userKey: '_user',
    role: {},
  },
  layouts: layouts,
});
