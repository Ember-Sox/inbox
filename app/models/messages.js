import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string'),
  read: DS.attr('boolean', {
    defaultValue: false
  }),
  starred: DS.attr('boolean', {
    defaultValue: false
  }),
  labels: DS.attr(),
});
