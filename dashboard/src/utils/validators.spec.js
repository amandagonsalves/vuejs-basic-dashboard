const {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} = require('./validators');

describe('validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('Este campo é obrigatório')
  });

  it('should give an error with less than 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('Este campo precisa ter no mínimo 3 caracteres');
  });

  it('should returns true if input pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true);
  });

  it('should give an error if it is an empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('Este campo é obrigatório')
  });

  it('should give an error if it is an invalid email', () => {
    expect(validateEmptyAndEmail('amanda@')).toBe('Este campo precisa ser um email')
  });

  it('should returns true if input is a valid email', () => {
    expect(validateEmptyAndEmail('amanda@amanda.com')).toBe(true);
  });
});