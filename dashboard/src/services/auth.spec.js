const mockAxios = require('axios');
const AuthService = require('./auth');

jest.mock('axios');

describe('AuthService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a token when user is logged', async () => {
    const token = '123.123.123';

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    });

    const response = await AuthService(mockAxios).login({ email: 'amanda@amanda.me', password: '123' });

    expect(response.data).toHaveProperty('token');
    expect(response).toMatchSnapshot();
  });

  it('should return an user when the user is registered', async () => {
    const user = {
      name: 'Amanda',
      email: 'amanda@amanda.me',
      password: '123'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    });

    const response = await AuthService(mockAxios).register(user);
    
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
    expect(response.data).toHaveProperty('password');
    expect(response).toMatchSnapshot();
  });

  it('should throw an error if it is not found', async () => {
    const errors = { status: 404, statusText: 'Not found' }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors });
    });

    const response = await AuthService(mockAxios).login({ email: 'amanda@amanda.me', password: '123' });

    expect(response.errors).toHaveProperty('status');
    expect(response.errors).toHaveProperty('statusText');
  });
});