Ext.define('App.model.Automobile', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'automobileLineId', type: 'int' },
        { name: 'name', type: 'string' }
    ]
});