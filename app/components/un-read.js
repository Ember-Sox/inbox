import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkboxClicked(model) {
      this.get('thisObject').toggleProperty('isChecked')
			alert('this is running', model)

    },
    toggleChecked() {
      this.toggleProperty('isChecked')
			alert('this is running', model)

    },
    toggleMessage() {
      this.set('read', true)
      this.toggleProperty('messageOpen')
			this.destroy()
    }
  }
});
