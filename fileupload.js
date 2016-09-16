$(function($) {
	$('#image').on('change', function() {
		var val = $(this).val();
		console.info(val);

		var file = this.files[0];
		console.info(file);

		var $preview = $('#preview');
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			$preview.attr('src', data);
		}

		reader.readAsDataURL(file);
	});

});
