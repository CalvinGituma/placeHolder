//appName.folderName.className
// classname,configOBj,callback

Ext.define('PlaceHolder.store.Posts', {

    //extentions to Ext.data.Store
    extend: 'Ext.data.Store',

    //! alias -> store.storename

    alias: 'store.posts',

    //! fields => refence to the model fields 

    //!model 
    model: 'PlaceHolder.model.Post',

    //ajax request
    //! proxy

    proxy: {
        url: 'http://3.126.66.68:3000/posts',
        type: 'rest',
        reader: {
            type: 'json',
            totalProperty:'totalCount',
            rootProperty: 'rows',
            // rootProperty
        }
    },
    //* initiate the request to get data automaticall on application load
    autoLoad: true,
    sorters:[
        { property:'useId',
          direction:'ASC'

        },
        { property:'id',
        direction:'DESC'

      }
    ],
    groupField: 'userId',
    pagesize: 50





});