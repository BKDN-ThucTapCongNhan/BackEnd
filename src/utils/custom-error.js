export default function customizeErrorMessage() {
  return (errors) => {
    errors.map((err) => {
      switch (err.type) {
        case 'string.min':
          err.message = `${err.context.key} should have at least ${err.context.limit} characters!`;
          break;
        case 'string.max':
          err.message = `${err.context.key} should have at most ${err.context.limit} characters!`;
          break;
        case 'number.min':
          err.message = `${err.context.key} should have at least ${err.context.limit} characters!`;
          break;
        case 'number.max':
          err.message = `${err.context.key} should have at most ${err.context.limit} characters!`;
          break;
        case 'any.empty':
          err.message = `${err.context.key} can not be empty!`;
          break;
        case 'any.required':
          err.message = `${err.context.key} is required`;
          break;
        case 'string.regex.base':
          err.message = `Invalid ${err.context.key}`;
          break;
        case 'array.includesRequiredUnknowns':
          err.message = `${err.context.unknownMisses}*MIN_LENGTH_ARRAY_VALIDATE`;
          break;
        case 'array.min':
          err.message = `Value should have at least ${err.context.limit} characters!`;
          break;
        case 'array.unique':
          err.message = `${err.context.lable} has been using`;
          break;
        case 'array.includesOne':
          err.message = 'ITEM_NOT_IN_ARRAY';
          break;
        case 'date.min':
          err.message = 'DATE_MIN';
          break;
        case 'date.max':
          err.message = 'DATE_MAX';
          break;
        case 'object.missing':
          err.message = 'VALIDATION_REQUIRED_ERROR';
          break;
        default:
          break;
      }
      return err;
    });
    return errors
  }
}
