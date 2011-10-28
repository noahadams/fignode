$.ajaxSetup( {
  url: '/',
  type: 'POST',
  dataType: 'json',
  success: function( data ) {
      var result = data.figstring;
      $('#outputArea').empty().append( result );
  },
  contentType: 'application/json'
}
);

$('#figForm').submit(function(event) { 
  
  /* Take over the form handling */
  event.preventDefault(); 
  
  var $form = $( this ),
      toFig = $form.find( 'input[name="figInput"]' ).val(),
      figFont = 'standard';

  $.ajax({
    data: JSON.stringify({"string": toFig, "font": figFont }),
  } 
  );
});

