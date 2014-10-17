
function buildDisplay(responseObj)
{
	console.log('responseObj', responseObj);

	$('#moodeeLoading').hide();
	$('#emotionColor').show();

	// handle the dominant emotion
	switch (responseObj.dominant_emotion)
	{
		case 'affection_friendliness':
			$('#dominantEmotion').addClass('affection');
			$('#dominantEmotionExtraText').html('Affection / Friendliness');
			break;
		case 'anger_loathing':
			$('#dominantEmotion').addClass('anger');
			$('#dominantEmotionText').html('Anger / Loathing');
			break;
		case 'contentment_gratitude':
			$('#dominantEmotion').addClass('contentment');
			$('#dominantEmotionExtraText').html('Contentment / Gratitude');
			break;
		case 'enjoyment_elation':
			$('#dominantEmotion').addClass('enjoyment');
			$('#dominantEmotionExtraText').html('Enjoyment / Elation');
			break;
		case 'fear_uneasiness':
			$('#dominantEmotion').addClass('fear');
			$('#dominantEmotionExtraText').html('Fear / Uneasiness');
			break;
		case 'humiliation_shame':
			$('#dominantEmotion').addClass('humiliation');
			$('#dominantEmotionExtraText').html('Humiliation / Shame');
			break;
		case 'sadness_grief':
			$('#dominantEmotion').addClass('sadness');
			$('#dominantEmotionExtraText').html('Sadness / Grief');
			break;
		case 'amusement_excitement':
			$('#dominantEmotion').addClass('amusement');
			$('#dominantEmotionExtraText').html('Amusement / Excitement');
			break;
		case 'Neutral':
			$('#dominantEmotion').addClass('neutral');
			$('#dominantEmotionExtraText').html('Amusement / Excitement');
			break;
	}

	// handle the sentiment
	switch (responseObj.article_sentiment.sentiment)
	{
		case "Negative":
			$('#emotionColor').css('background-color', 'red');
			break;
		case "Positive":
			$('#emotionColor').css('background-color', 'green');
			break;
		case "Neutral":
			$('#emotionColor').css('background-color', 'blue');
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


function showAdditionalInfo()
{
	$('#emotionColor').hide();
	$('#extraInformation').show();
}


function hideAdditionalInfo()
{
	$('#emotionColor').show();
	$('#extraInformation').hide();
}


// init
$( document ).ready(function()
{
	$('#emotionColor').click(showAdditionalInfo);
	$('#extraInformation').click(hideAdditionalInfo);
});
