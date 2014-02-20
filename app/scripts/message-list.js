var MessageView = Backbone.View.extend({
	className: 'new-message',

	createTemplate: _.template($('#message-list-template').text()),


	initialize: function(){
		$('.js-full-list').prepend( this.el );
		
		this.render();

	},


	///setMainItem: function(){
		//new MainView({model: this.model})

		//console.log(this.model.attributes)

	//},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes )

		this.$el.html( renderedTemplate );

	}

});