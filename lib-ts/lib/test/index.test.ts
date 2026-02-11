import { sayHello } from '../src/index';

describe('sayHello', () => {
  it('should log hello message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    sayHello();

    expect(consoleSpy).toHaveBeenCalledWith('Hello from lib');

    consoleSpy.mockRestore();
  });
});
