//var lymbix = new $.lymbix('8c1a36ec73827cd2cfac9d943d981cbacf671d65');
//lymbix.tonalize('I think you should get off your pedestal.', function (object) { blah = object; console.log(object) });

function buildDisplay(responseObj)
{
	console.log('responseObj', responseObj);

	// handle the dominant emotion
	switch (responseObj.dominant_emotion)
	{
		case 'affection_friendliness':
			$('#dominantEmotion').addClass('affection');
			//$('#dominantEmotionText').html('Affection / Friendliness');
			break;
		case 'anger_loathing':
			$('#dominantEmotion').addClass('anger');
			//$('#dominantEmotionText').html('Anger / Loathing');
			break;
		case 'contentment_gratitude':
			$('#dominantEmotion').addClass('contentment');
			//$('#dominantEmotionText').html('Contentment / Gratitude');
			break;
		case 'enjoyment_elation':
			$('#dominantEmotion').addClass('enjoyment');
			//$('#dominantEmotionText').html('Enjoyment / Elation');
			break;
		case 'fear_uneasiness':
			$('#dominantEmotion').addClass('fear');
			//$('#dominantEmotionText').html('Fear Uneasiness');
			break;
		case 'humiliation_shame':
			$('#dominantEmotion').addClass('humiliation');
			//$('#dominantEmotionText').html('Humiliation / Shame');
			break;
		case 'sadness_grief':
			$('#dominantEmotion').addClass('sadness');
			//$('#dominantEmotionText').html('Sadness / Grief');
			break;
		case 'amusement_excitement':
			$('#dominantEmotion').addClass('amusement');
			//$('#dominantEmotionText').html('Amusement / Excitement');
			break;
	}

	// sentiment
	$('#sentiment').html(responseObj.article_sentiment.sentiment);

	// clarity
	$('#clarity').html(responseObj.clarity);

	// intense sentence
	$('#dominantEmotionText').html(responseObj.intense_sentence.sentence);

	// average_intensity
	$('#average_intensity').html(responseObj.average_intensity);

	// breakdown
	$('#affection_friendliness').html(responseObj.affection_friendliness);
	$('#amusement_excitement').html(responseObj.amusement_excitement);
	$('#anger_loathing').html(responseObj.anger_loathing);
	$('#contentment_gratitude').html(responseObj.contentment_gratitude);
	$('#enjoyment_elation').html(responseObj.enjoyment_elation);
	$('#fear_uneasiness').html(responseObj.fear_uneasiness);
	$('#humiliation_shame').html(responseObj.humiliation_shame);
	$('#sadness_grief').html(responseObj.sadness_grief);
}

$( document ).ready(function()
{
	var response = {"article":"I think you should get off your pedestal.","ignored_terms":[],"affection_friendliness":0.13,"enjoyment_elation":0.34,"amusement_excitement":0.25,"contentment_gratitude":0.57,"sadness_grief":-6.35,"anger_loathing":-10,"fear_uneasiness":-0.08,"humiliation_shame":-1.76,"dominant_emotion":"anger_loathing","average_intensity":1.21,"article_sentiment":{"sentiment":"Negative","score":-10},"coverage":95,"intense_sentence":{"sentence":"I think you should get off your pedestal.","dominant_emotion":"anger_loathing","intensity":10},"clarity":94.19};
	buildDisplay(response);
});