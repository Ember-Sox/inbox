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
    toggleMessage() {

			// alert(this.read)
    },
		updateMessage: function(id){
			this.set('read', true)
			var self = this;
			var subject = self.subject;
			var body = self.body;
			var starred = self.starred;
			var read = self.read;
			var labels = self.labels
			var model = self.model
			alert(model)
			// create new messages
			this.get.store.findRecord('messages', id)
			.then(function(messages){
				alert('test')
				messages.set('subject', subject);
				messages.set('body', body);
				messages.set('starred', starred);
				messages.set('read', read);
				messages.set('labels', labels)

				messages.save();

			}).catch(function(error){
				alert(error)
			});
		}
  }
});
