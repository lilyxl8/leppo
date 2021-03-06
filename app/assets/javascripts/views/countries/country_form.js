Leppo.Views.CountryForm = Backbone.View.extend({
  tagName: 'form',
  template: JST["countries/form"],

  events: {
    'click button': 'submit'
  },

  render: function () {
    var renderedContent = this.template({
      countries: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
      that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});
