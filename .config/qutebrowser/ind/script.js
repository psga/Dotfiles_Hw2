
function github(){

alert("xxxxx");


}

Mousetrap.bind({
  '/': github,
  't': tweet,
  '?': function modal() { $('#help').modal('show'); },
  'j': function next() { highLight('j') },
  'k': function prev() { highLight('k') }
}); 
