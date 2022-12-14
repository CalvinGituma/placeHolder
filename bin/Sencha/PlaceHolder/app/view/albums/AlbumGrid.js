//appName.folderName.className
//classname,configOB,callback

Ext.define('Placeholder.view.albums.AlbumGrid',{
    //extend
extend: 'Ext.grid.Panel',

//xtype name to make use when instantiating
xtype:'albumgrid',

//mandatory

//store
store:{
//?TOdo
    type:'albums'
},
selModel: {
    type: 'checkboxmodel',//rowmodel,cellmodel,dataviewmodel
    mode: 'MULTI'//mode:'SINGLE'
},
features:[{
    ftype: 'grouping',
    startCollapsed: true,
    groupHeaderTpl: '{columnName}: {name} ({rows.length} Post{[values.rows.length > 1 ? "s" : ""]})'
}],
//columns
columns:[
    {
        xtype: 'rownumberer'
    },
    
    {
    text:'User ID', //displayable label of the column
    dataIndex: 'userId'
},

{
    text:'Todo ID', //displayable label of the column
    dataIndex: 'id'
},

{
    text:'Title', //displayable label of the column
    dataIndex: 'title'
},

],
bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
    displayMsg: 'Display posts {0} - {1} of {2}',
    emptyMsg: 'No post to display',
},

});