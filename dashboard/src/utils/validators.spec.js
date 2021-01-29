const {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} = require('./validators');

describe('validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('Este campo é obrigatório')
  });
});