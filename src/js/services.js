(function(window, document, $) {
    $(document).ready(function() {
        var $services = $('.js-our-services__service');

        $services.mouseenter(function(e) {
            var $currentTarget = $(e.currentTarget);
            // Translate across backdrop
            var translateX, serviceItem = $currentTarget.data('service-item');
            switch(serviceItem) {
            case 3:
                translateX = 800;
                break;
            case 2:
                translateX = 400;                
                break;
            default:
                translateX = 0;
            }

            $('.js-our-services-backdrop').css('transform', 'translateX('+translateX+'px)');

            // Make service content visible
            $('.our-services__service--active').removeClass('our-services__service--active');
            $currentTarget.addClass('our-services__service--active');
        });

        $services.mouseleave(function() {
            console.log('left');
        });
    });
})(window, window.document, window.jQuery);