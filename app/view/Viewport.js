Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.form.FormPanel','Ext.form.field.ComboBox'],
    style: 'padding:25px',
    layout: 'vbox',
    items: [
       {
           xtype: 'form',
           title: 'Car Reviews',
           width: 500,
           bodyPadding: 10,
           items: [
               {
                   xtype: 'combo',
                   id: 'lines-combo',
                   store: 'AutomobileLines',
                   displayField: 'name',
                   valueField: 'id',
                   typeAhead: false,
                   editable: false,
                   queryMode: 'local',
                   forceSelection: true,
                   multiSelect: false,
                   triggerAction: 'all',
                   fieldLabel: 'Line',
                   emptyText: 'Select a product line...',
                   selectOnFocus: false,
                   anchor: '95%'
               },
               {
                   xtype: 'combo',
                   id: 'autos-combo',
                   store: 'Automobiles',
                   displayField: 'name',
                   valueField: 'id',
                   typeAhead: false,
                   editable: false,
                   queryMode: 'local',
                   forceSelection: true,
                   multiSelect: false,
                   triggerAction: 'all',
                   fieldLabel: 'Model',
                   emptyText: 'Select a model...',
                   selectOnFocus: false,
                   disabled: true,
                   anchor: '95%'
               }
           ]
       }
    ]
});