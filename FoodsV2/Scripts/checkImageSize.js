(function($) {
    $.fn.checkImageSize = function(options) {

        if (!this.length) { return this; }

        var opts = $.extend(true, {}, $.fn.checkImageSize.defaults, options);
        var _URL = window.URL || window.webkitURL;

        this.each(function() {
            var $this = $(this);
            $this.change(function (e) {
		        var file, img, minWidth, minHeight, maxWidth, maxHeight;
		        
		        if ($this.data('min-width')) {
		            minWidth = parseInt($this.data('min-width'));
		        } else {
		            minWidth = opts.minWidth;
		        }
		        if ($this.data('min-height')) {
		            minHeight = parseInt($this.data('min-height'));
		        } else {
		            minHeight = opts.minHeight;
		        }
		        if ($this.data('max-width')) {
		            maxWidth = parseInt($this.data('max-width'));
		        } else {
		            maxWidth = opts.maxWidth;
		        }
		        if ($this.data('max-height')) {
		            maxHeight = parseInt($this.data('max-height'));
		        } else {
		            maxHeight = opts.maxHeight;
		        }

		        if ((file = this.files[0])) {
		            img = new Image();
		            img.onload = function () {
		                var validImage = true;
		                var imgWidth = this.width;
		                var imgHeight = this.height;

		                if (imgWidth < minWidth || imgHeight < minHeight) {
		                    validImage = false;
		                    if (opts.showError) {
		                    	  //	alert('Por favor seleccione una imagen de al menos ' + minWidth + 'px de ancho y ' + minHeight + 'px de alto!');
								  alert('Por favor seleccione una imagen de al menos 800px de ancho y 300px de alto!');
		                    	borrarPreview();
		                    }
		                }else  if (imgWidth > maxWidth || imgHeight > maxHeight) {
		                    validImage = false;
		                    if (opts.showError) {
		                    	//alert('Por favor seleccione una imagen de máximo ' + maxWidth + 'px de ancho y ' + maxHeight + 'px de alto!');
		                    	alert('Por favor seleccione una imagen de máximo 1920px de ancho y 1080px de alto!');
		                    	borrarPreview();
		                    }
		                }

		                if(!validImage && !opts.ignoreError) {
		                    $this.val("");
		                }

		                if(validImage) {
		                    loadFile(img.src);
		                }

		            };

		            img.src = _URL.createObjectURL(file);
		        }
		    });
        });

        return this;
    };

    // default options
    $.fn.checkImageSize.defaults = {
        minWidth: 800,		// Numeric; Pixel value
        minHeight: 600,		// Numeric; Pixel value
        maxWidth: 1920,		// Numeric; Pixel value
        maxHeight: 1080,	// Numeric; Pixel value
        showError: true,	// Boolean; Whether to show error messages
        ignoreError: false	// Boolean; Whether to ignore error and let the image pass through
    };

    $.fn.checkUserImageSize = function(options) {

        if (!this.length) { return this; }

        var opts = $.extend(true, {}, $.fn.checkImageSize.defaults, options);
        var _URL = window.URL || window.webkitURL;

        this.each(function() {
            var $this = $(this);
            $this.change(function (e) {
		        var file, img, minWidth, minHeight, maxWidth, maxHeight;
		        
		        if ($this.data('min-width')) {
		            minWidth = parseInt($this.data('min-width'));
		        } else {
		            minWidth = opts.minWidth;
		        }
		        if ($this.data('min-height')) {
		            minHeight = parseInt($this.data('min-height'));
		        } else {
		            minHeight = opts.minHeight;
		        }
		        if ($this.data('max-width')) {
		            maxWidth = parseInt($this.data('max-width'));
		        } else {
		            maxWidth = opts.maxWidth;
		        }
		        if ($this.data('max-height')) {
		            maxHeight = parseInt($this.data('max-height'));
		        } else {
		            maxHeight = opts.maxHeight;
		        }

		        if ((file = this.files[0])) {
		            img = new Image();
		            img.onload = function () {
		                var validImage = true;
		                var imgWidth = this.width;
		                var imgHeight = this.height;

		                if (imgWidth < minWidth || imgHeight < minHeight) {
		                    validImage = false;
		                    if (opts.showError) {
		                    //	alert('Por favor seleccione una imagen de al menos ' + minWidth + 'px de ancho y ' + minHeight + 'px de alto!');
		                    	alert('Por favor seleccione una imagen de al menos 800px de ancho y 300px de alto!');
		                    	imgUserDefault();
		                    }
		                }else  if (imgWidth > maxWidth || imgHeight > maxHeight) {
		                    validImage = false;
		                    if (opts.showError) {
		                    	//alert('Por favor seleccione una imagen de máximo ' + maxWidth + 'px de ancho y ' + maxHeight + 'px de alto!');
		                    	alert('Por favor seleccione una imagen de máximo 1920px de ancho y 1080px de alto!');
		                    	imgUserDefault();
		                    }
		                }

		                if(!validImage && !opts.ignoreError) {
		                    $this.val("");
		                }

		                if(validImage) {

		                    loadFileUser(img.src);
		                }

		            };

		            img.src = _URL.createObjectURL(file);
		        }
		    });
        });

        return this;
    };

    // default options
    $.fn.checkUserImageSize.defaults = {
        minWidth: 800,		// Numeric; Pixel value
        minHeight: 600,		// Numeric; Pixel value
        maxWidth: 1920,		// Numeric; Pixel value
        maxHeight: 1080,	// Numeric; Pixel value
        showError: true,	// Boolean; Whether to show error messages
        ignoreError: false	// Boolean; Whether to ignore error and let the image pass through
    };

})(jQuery);
