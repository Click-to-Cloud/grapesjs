import { template } from 'underscore';
import Backbone from 'backbone';

module.exports = Backbone.View.extend({
  template: template(
    `
  <div class="<%= data.pfx %>editor" id="<%= data.pfx %><%= data.codeName %>">
  	<div id="<%= data.pfx %>title"><%= data.label %></div>
  	<div id="<%= data.pfx %>code"></div>
  </div>`,
    { variable: 'data' }
  ),

  initialize(o) {
    this.config = o.config || {};
    this.pfx = this.config.stylePrefix;
  },

  render() {
    var obj = this.model.toJSON();
    obj.pfx = this.pfx;
    this.$el.html(this.template(obj));
    this.$el.attr('class', this.pfx + 'editor-c');
    this.$el.find('#' + this.pfx + 'code').append(this.model.get('input'));
    return this;
  }
});
