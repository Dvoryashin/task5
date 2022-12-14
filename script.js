function replace(){
    var text = document.querySelector('#text').value;
    document.querySelector('#duplicateField').innerHTML = text;
}
function resetInput(){
    var text = document.querySelector('#text').value;
    console.log(text);
    document.querySelector('#text').value = "";
    document.querySelector('#duplicateField').innerHTML = "";
}
