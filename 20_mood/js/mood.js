function generate_phrase()
{
	var json_content = $.parseJSON($("#quotes_json").text());
	var phrases_count = json_content.length;	
	var random_index =  Math.floor(Math.random() * phrases_count);
	var signature = json_content[random_index].signature;
	$("body").wrapInner("<div class=mood-block/>");
	$("div.mood-block").append('<div class="phrase"><p>' + json_content[random_index].phrase + '</p></div>');
	if (signature)
		$("div.mood-block").append('<div class="signature"><p>' + signature + '</p></div>');	
}
