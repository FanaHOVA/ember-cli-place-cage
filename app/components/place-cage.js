import Ember from 'ember';
export default Ember.Component.extend({
    height: 100,
    width: 100,
    style: "",

    src: Ember.computed('height', 'width', 'style', function() {
        var style = this.get('style');
        var base = 'http://www.placecage.com/';
        if (style == "") {
          return base + this.get('width') + '/' + this.get('height');
        } else {
          return base + '/' + style + '/' + this.get('width') + '/' + this.get('height');

        }
    })
});
