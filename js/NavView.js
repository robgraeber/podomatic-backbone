var NavView = Backbone.View.extend({
  className: "NavView",
  template: _.template($("#NavView").html()),
  initialize: function(){
   
  },
  render:function(){
    return this.$el.html(this.template());
  }
});