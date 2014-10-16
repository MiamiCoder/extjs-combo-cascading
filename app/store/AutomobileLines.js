Ext.define('App.store.AutomobileLines', {
    extend: 'Ext.data.Store',
    model: 'App.model.AutomobileLine',
    data: [
        { 'id': 1, 'name': 'Classic Cars' },
	    { 'id': 2, 'name': 'Motorcycles' },
	    { 'id': 3, 'name': 'Trucks and Buses' }
    ]
});