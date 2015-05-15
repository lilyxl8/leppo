Leppo.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  template: _.template("<h1><%= categories.isNew() ? 'New Category' : 'Edit Category' %></h1><label for='title'>Title</label><br><input type='text' name='title' id='title' value='<%= categories.escape('title') %>'><br><label for='body'>Body</label><br><textarea name='body' id='body'><%= categories.escape('body') %></textarea><br><button>Submit</button><a href='#/'>Back</a>"),

  events: {
    'click button': 'submit'
  },

  render: function () {
    var renderedContent = this.template({
      categories: this.model
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