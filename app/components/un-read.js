import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleChecked(model) {
      this.toggleProperty('isChecked')
			alert('this is running')
    },

		updateMessage: function(id){
			this.setProperties({messageOpen:true})
			console.log(this.messageOpen);
			const message = this.get('message');
				message.setProperties({
					read: true,
				})
			message.save()
		}
  }
});
