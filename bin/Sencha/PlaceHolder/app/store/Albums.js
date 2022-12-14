//appName.folderName.className
// classname,configOBj,callback

Ext.define('PlaceHolder.store.Albums', {

    //extentions to Ext.data.Store
    extend: 'Ext.data.Store',

    //! alias -> store.storename

    alias: 'store.albums',

    //! fields => refence to the model fields 

    //!model 
    model: 'PlaceHolder.model.Album',

    //ajax request
    //! proxy

    proxy: {
        url: 'https://jsonplaceholder.typicode.com/albums/',
        type: 'rest',
        reader: {
            type: 'json',
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