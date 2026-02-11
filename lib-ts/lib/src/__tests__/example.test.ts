// Example test file demonstrating __tests__ directory structure
// Tests placed in __tests__ directories are automatically discovered by Jest

describe('Example test suite', () => {
  it('should pass a basic assertion', () => {
    expect(true).toBe(true);
  });

  it('should perform arithmetic correctly', () => {
    expect(2 + 2).toBe(4);
  });
});
