export default class Validator {
  static validateUsername(username) {
    if (typeof username !== 'string') {
      throw new Error('Передаваемый параметр должен иметь тип "string"');
    }
    return /^[a-z][\w-]+[a-z]$/gi.test(username) && !/[0-9]{4,}/.test(username);
  }
}
