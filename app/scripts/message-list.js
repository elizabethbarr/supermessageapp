var MessageView = Backbone.View.extend({
	className: 'new-message',

	createTemplate: _.template($('#message-list-template').text()),


	initialize: function(){
		$('.js-full-list').prepend( this.el );
		
		this.render();

	},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes )

		this.$el.html( renderedTemplate );

	}

});