		$('.randomPlaceholder').each(function() {
	    	var num = Math.floor(Math.random() * 11 + 1),
	        img = $(this);
		    img.attr('src', '//picsum.photos/id/'+num+'/700/600/?blur=2');
		    img.attr('alt', 'Src: '+img.attr('src'));
		});