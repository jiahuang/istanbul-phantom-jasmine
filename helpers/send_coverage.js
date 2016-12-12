afterAll(function(){
  // send coverage data
  $.post('/coverage', JSON.stringify(window.__coverage__), function(res){
    console.log('sent coverage data');
  }, 'json');
});
