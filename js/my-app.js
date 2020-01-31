// Initialize your app
var fsoe = new Framework7({
    root: '#app',
    name: 'fsoe',
    id: 'com.johan.fsoe'
});

var $$ = Dom7;

var mainView = fsoe.views.create('.view-main');

$$('.convert-form-to-data').on('click', function(){
    var formData = fsoe.form.convertToData('#my-form');
    alert('Esto es un formulario...');
});