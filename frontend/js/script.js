//$(document).ready(function(){
    $.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
}
var b;
function gather(a){
    event.preventDefault()
    json = $('form').serializeObject()
    console.log(json)
    $('#json').text(JSON.stringify(json))
    toml = tomlify(json,null,2)
    b=toml
    $('#toml').html(toml)
}