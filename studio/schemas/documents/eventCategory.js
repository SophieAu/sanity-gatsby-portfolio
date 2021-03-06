import { required } from '../_util';

export default {
  name: 'eventCategory',
  type: 'document',
  title: 'Event Category',
  fields: [{ name: 'category', title: 'Category', type: 'string', validation: required }],
};
