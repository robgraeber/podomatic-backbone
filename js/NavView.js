var NavView = Backbone.View.extend({
  className: "NavView",
  template: _.template($("#NavView").html()),
  events:{
    "click #nav-bar li a": "highlightBtn",
  },
  highlightBtn: function(e){
    this.$("#nav-bar li a").removeClass("active");
    $(e.currentTarget).addClass("active");
  },
  initialize: function(){
   
  },
  render:function(){
    return this.$el.html(this.template());
  }
});