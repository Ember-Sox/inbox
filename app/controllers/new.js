import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addNew: function() {
      var subject = this.get('subject')
      var body = this.get('body')
      var read = false
      var starred = false
      var labels = [1, 2, 3]

      var newMessage = this.store.createRecord('messages', {
        subject: subject,
        body: body,
        read: read,
        starred: starred,
        labels: labels,
      })
      newMessage.save()
      this.transitionToRoute('application')
    }
  }
});
