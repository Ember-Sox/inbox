import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addNew: function() {
      let subject = this.get('subject')
      let body = this.get('body')
      let read = this.get('read')
      let starred = this.get('starred')
      let labels = this.get('labels')

      var newMessage = this.store.createRecord('message', {
        subject: subject,
        body: body,
        read: read,
        starred: starred,
        labels: labels,
      })

      newMessage.save()

      self.transitionToRoute('/')

    }
  }
});
