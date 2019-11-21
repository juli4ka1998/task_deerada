// Choose option
function checkItem(el) {
	$(el).siblings().addClass('brief-color');
	$("input.hidden-item:not(:checked)").siblings().removeClass('brief-color');
}

function ifItemClicked(input, radio) {
	$(input).click(function () {
		if($(this).is(':focus')) {
			$(radio).prop('checked', true);
			checkItem(radio);
		}
	});
	$(radio).click(function () {
		if($(this).is(':checked'))
			$(input).focus();
	});
}

$( function() {
	$("input.hidden-item").click(function () {
		if ($(this).is(':checked'))
			checkItem(this);
		else
			$(this).siblings().removeClass('brief-color');
	});

	ifItemClicked('#input-deadline', '#radio-deadline');
	ifItemClicked('#input-budget', '#radio-budget');
	ifItemClicked('#input-other', '#radio-other');
	ifItemClicked('#amount, #amount1', '#radio-nearly-budget');


// File upload
$('#file-upload').change(function() {
	var file = $('#file-upload')[0].files[0];
	if(file) {
		$('#file-upload ~ span').text(file.name);
		$('.file-upload-btn ').addClass('hidden');
		$('.file-delete-btn').removeClass('hidden');
	}
});

// Remove chosen file
$('.file-delete-btn').click(function() {
	$('#file-upload').val('');
	$('#file-upload ~ span').text("Ви ще не вибрали файл");
	$('.file-upload-btn, .file-delete-btn').toggleClass('hidden');
});

//Slider-range
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		step:10,
		max: 3000,
		values: [ 100, 1050 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.values[ 0 ]);
			$( "#amount1" ).val(ui.values[ 1 ] );
			$('#radio-nearly-budget').prop('checked', true);
			checkItem('#radio-nearly-budget');
		}
	});
	$( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) );
	$( "#amount1" ).val( $( "#slider-range" ).slider( "values", 1 ) );
	$( "#slider-range div" ).addClass('brief-color');
});


$('#amount, #amount1').on('input',function(e){
	$( "#slider-range" ).slider({
		values: [$( "#amount" ).val(), $( "#amount1" ).val()]
	});
});
