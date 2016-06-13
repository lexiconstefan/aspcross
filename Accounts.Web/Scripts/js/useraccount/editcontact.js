$(document).on('click', '.panel-heading span.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }
}); $(document).ready(function () {
    function setClasses(span) {
        span.parents('.panel').find('.panel-body').slideUp();
        span.addClass('panel-collapsed');
        span.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down')
    }
    var width = $(window).width();
   
    if (width <= 480) {
        setClasses( $('span.clickable'));
       
    }
});

