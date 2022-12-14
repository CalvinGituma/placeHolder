//appName.folderName.className
//classname,configOB,callback

Ext.define('Placeholder.view.Posts.PostGrid', {
    //extend
    extend: 'Ext.grid.Panel',

    //xtype name to make use when instantiating
    xtype: 'postsgrid',

    // define the controlling code
    controller: 'postgridcontroller',

    //mandatory

    //store
    store: {
        //?TOdo
        type: 'posts'
    },

    selModel: {
        type: 'checkboxmodel',//rowmodel,cellmodel,dataviewmodel
        mode: 'MULTI'//mode:'SINGLE'
    },
    features: [{
        ftype: 'grouping',
        startCollapsed: true,
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Post{[values.rows.length > 1 ? "s" : ""]})'
    }],
    //columns
    columns: [
        {
            xtype: 'rownumberer'
        },

        {
            text: 'User ID', //displayable label of the column
            dataIndex: 'userId'
        },

        {
            text: 'Post ID', //displayable label of the column
            dataIndex: '_id'
        },

        {
            text: 'Title', //displayable label of the column
            dataIndex: 'title',
            flex: 1,
            hideable: false,
            sortable: false
        },
        {
            text: 'Body', //displayable label of the column
            dataIndex: 'body',
            flex: 3,
            hidden: true
        }

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display posts {0} - {1} of {2}',
        emptyMsg: 'No post to display',
    },

    //topbar
    tbar: [
        {
            xtype: 'button',
            text: 'Add new post',
            listeners: {
                //eventname:functionName in the controller
                click: 'onAddNewPost',
                //mouseover: 'onAddNewPostMouseOver',
            }
        },
        {
            xtype: 'button',
            text: 'View details',
            //registering default event handlers => click
            handler: 'onViewDetails',
        },
        {
            xtype: 'button',
            text: 'Remove selected',
            handler:'onRemoveSelected',
        },
        {
            xtype: 'textfield',
            emptyText: 'search',
        },
        {
            xtype: 'tbfill',
        },
        {
            xtype: 'button',
            text: '3rd Printer',
        },
        {
            xtype: 'button',
            text: '2nd Printer',
        },
        {
            xtype: 'button',
            text: ' 1st Printer',
        },
    ]


});