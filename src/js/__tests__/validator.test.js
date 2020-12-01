import Validator from '../validator';

test('should throw error "Передаваемый параметр должен иметь тип "string""', () => {
  expect(() => { Validator.validateUsername([]); }).toThrow('Передаваемый параметр должен иметь тип "string"');
});

test('should return false for "99ivan"', () => {
  expect(Validator.validateUsername('99ivan')).toBe(false);
});

test('should return false for "-ivan"', () => {
  expect(Validator.validateUsername('-ivan')).toBe(false);
});

test('should return false for "_ivan"', () => {
  expect(Validator.validateUsername('_ivan')).toBe(false);
});

test('should return false for "!ivan"', () => {
  expect(Validator.validateUsername('!ivan')).toBe(false);
});

test('should return false for "ivan99"', () => {
  expect(Validator.validateUsername('ivan99')).toBe(false);
});

test('should return false for "ivan-"', () => {
  expect(Validator.validateUsername('ivan-')).toBe(false);
});

test('should return false for "ivan_"', () => {
  expect(Validator.validateUsername('ivan_')).toBe(false);
});

test('should return false for "ivan!"', () => {
  expect(Validator.validateUsername('ivan!')).toBe(false);
});

test('should return false for "i9999van"', () => {
  expect(Validator.validateUsername('i9999van')).toBe(false);
});

test('should return false for "iv@n"', () => {
  expect(Validator.validateUsername('iv@n')).toBe(false);
});

test('should return true for "i999v99an"', () => {
  expect(Validator.validateUsername('i999v99an')).toBe(true);
});

test('should return true for "I999v99an"', () => {
  expect(Validator.validateUsername('I999v99an')).toBe(true);
});

test('should return true for "IVAN"', () => {
  expect(Validator.validateUsername('IVAN')).toBe(true);
});

test('should return true for "iv-an"', () => {
  expect(Validator.validateUsername('iv-an')).toBe(true);
});

test('should return true for "iv_a_n"', () => {
  expect(Validator.validateUsername('iv_a_n')).toBe(true);
});
