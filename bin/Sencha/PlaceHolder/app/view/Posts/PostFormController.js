Ext.define('Placeholder.view.Posts.PostFormController', {
    // Ext.App.ViewController

    extend: 'Ext.app.ViewController',

    alias: 'controller.postformcontroller',
    onFormReset: function () {
        let references = this.getReferences();//array of references
        let form = references['postdetailsform'].getForm(); //get the form
        form.reset(); // reset the form


    },
    onFormSave: function () {
        let references = this.getReferences();//array of references
        let form = references['postdetailsform'].getForm(); //get the form
        form.submit({
            method:'POST',
            url: 'http://3.126.66.68:3000/posts',// actual endpoint
            success: function (form, action){
                alert("saved sucessfully")
            },
            failure: function (form,action){
                alert("saved sucessfully" + action.result)

            },
        });
    },
});