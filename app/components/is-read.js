import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkboxClicked(model) {
      this.get('thisObject').toggleProperty('isChecked');
      // Ember.observersFor('This is the model?', model);
      // alert('this is running', model)
      // do all the other things
    },
    toggleChecked(model) {
      this.toggleProperty('isChecked')
			// alert('this is running', model)

    },
		toggleMessage() {
      // this.set('messageOpen', true)
      this.toggleProperty('messageOpen')
		}
  }
});
