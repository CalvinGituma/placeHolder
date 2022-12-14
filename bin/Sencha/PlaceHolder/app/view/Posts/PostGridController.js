Ext.define('Placeholder.view.Posts.PostGridController', {
    // Ext.App.ViewController

    extend: 'Ext.app.ViewController',

    // controller controllername

    alias: 'controller.postgridcontroller',

    onAddNewPost: function () {
        //Ext.create('PlaceHolder.view.posts.Postform').show();
        this.showForm(null);
        

    },
    onAddPostMouseOver: function () {
        console.log('Mouse Over');
    },

    onViewDetails: function () {
        //get selected record from the grid
        let selectedGridid=12;
        
       this.showForm(12);
    },
    onRemoveselected: function () {
        console.log('Remove selected clicked');
    },

    showForm: function (postId) {
        Ext.create(
            {
                xtype: 'postform'//symbolic name
            });

    }
    

});