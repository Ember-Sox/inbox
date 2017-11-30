import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkboxClicked() {
      this.get('thisObject').toggleProperty('isChecked');
    },

    toggleChecked() {
      this.toggleProperty('isChecked')
    },

		toggleMessage() {
      this.toggleProperty('messageOpen')

		}
  }
});
