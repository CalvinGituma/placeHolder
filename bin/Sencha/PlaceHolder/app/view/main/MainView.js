//appName.folderName.className
//classname,configOB,callback

Ext.define('PlaceHolder.view.main.MainView',{
    //class to extend from
    extend: 'Ext.tab.Panel',
    //xtype unique name for a view
    xtype: 'mainview',

    //content of the objects within the tabpanel
    items:[{
        //object type to instantiate
        xtype: 'panel',
        title: 'todos',
        scrollable: true, // make scrolling bars available
        items: [
            {
                xtype:'todogrid'
            }
        ]
    },
    {
        //object type to instantiate
        xtype: 'panel',
        title: 'Albums',
        scrollable: true, // make scrolling bars available
        items: [
            {
                xtype:'albumgrid'
            }
        ]

    },
    {
        //object type to instantiate
        xtype: 'panel',
        title: 'Posts',
        scrollable: true, // make scrolling bars available
        items: [
            {
                xtype:'postsgrid'
            }
        ]
    }

        
    ]

},
function(){
    console.log("Main view loaded")
}

);