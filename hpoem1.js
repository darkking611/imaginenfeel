function readFile(){
	jQuery.get('hindi_poem_txt/hpoem1.txt',function(txt) {
		$('output').text(txt);
	});
}