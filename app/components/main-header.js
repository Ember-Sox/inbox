import Component from '@ember/component';

export default Component.extend({
  actions: {
    checkAll() {
      alert(model.isChecked)
    }
  }
});
