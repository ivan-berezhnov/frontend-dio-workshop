define([
    'underscore',
    'marionette',
    'text!Templates/Bookmark/List.html'

], function (_, Marionette, template) {

    var view = Marionette.ItemView.extend({

        template: _.template(template),

        events: {
           

        },

        initialize: function (options) {
            this.collection = options.collection;

            this.listenTo(this.collection, {
                'sync': this._renderList
            }, this);

            this.sortBy = "priority";
            this.sortABC = true;

        },

        onRender: function () {
            console.log('render event run');
        },

        serializeData: function () {
            return {
                collection: this.collection.toJSON()
            }
        },

        _renderList: function () {
            this.render();
        }


    });

    return view;
});