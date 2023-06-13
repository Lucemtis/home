$(document).ready(function() {
    $('.images-lines').sortable({
      axis: 'x',
      cursor: 'move',
      containment: 'parent',
      tolerance: 'pointer',
      scroll: true
    });
  
    $('.carousel').on('mousedown', function(event) {
      $(this).addClass('dragging');
      var scrollLeft = this.scrollLeft;
      var startX = event.pageX || event.originalEvent.touches[0].pageX;
      $(this).data('scrollLeft', scrollLeft);
      $(this).data('startX', startX);
    });
  
    $('.carousel').on('mouseup touchend', function() {
      $(this).removeClass('dragging');
    });
  
    $('.carousel').on('mousemove touchmove', function(event) {
      if ($(this).hasClass('dragging')) {
        var scrollLeft = $(this).data('scrollLeft');
        var startX = $(this).data('startX');
        var currentX = event.pageX || event.originalEvent.touches[0].pageX;
        $(this).scrollLeft(scrollLeft + startX - currentX);
      }
    });
  });
  