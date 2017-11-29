import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkboxClicked(model) {
      this.get('thisObject').toggleProperty('isChecked')
			// alert('this is running', model)

    },
    toggleChecked(model) {
      this.toggleProperty('isChecked')
			alert('this is running', model)

    },
    toggleMessage(model) {
      this.set('read', true)
			// $(this).addClass('blork')
			this.destroy()
			// this.save()


      // this.toggleProperty('messageOpen')
			// this.rerender()
    },
  }
});
