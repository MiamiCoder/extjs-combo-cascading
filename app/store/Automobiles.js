Ext.define('App.store.Automobiles', {
    extend: 'Ext.data.Store',
    model: 'App.model.Automobile',
    data: [
        { 'id': 1, 'automobileLineId': 3, 'name': '1940 Ford Pickup Truck' },
	    { 'id': 2, 'automobileLineId': 3, 'name': '1957 Chevy Pickup' },
	    { 'id': 3, 'automobileLineId': 1, 'name': '1972 Alfa Romeo GTA' },
	    { 'id': 4, 'automobileLineId': 2, 'name': '2003 Harley-Davidson Eagle Drag Bike' },
        { 'id': 5, 'automobileLineId': 2, 'name': '1996 Moto Guzzi 1100i' },
        { 'id': 6, 'automobileLineId': 1, 'name': '1952 Alpine Renault 1300' }
    ]
});