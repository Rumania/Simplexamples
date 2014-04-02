 $(function(){
  var layout = 'list',
  $container = $('#Container'), 
  $changeLayout = $('#ChangeLayout'); 

  
  $container.mixItUp({
    animation: {
      animateChangeLayout: true,
      animateResizeTargets: true, 
      effects: 'fade rotateX(-40deg) translateZ(-100px)'
    },
    layout: {
      containerClass: 'list'
    }
  });
  
  $changeLayout.on('click', function(){
    
    if(layout == 'list'){
      layout = 'grid';
      
      $changeLayout.text('Lista'); 
      
      $container.mixItUp('changeLayout', {
        containerClass: layout
      });
      
    } else {
      layout = 'list';

      $changeLayout.text('Rejilla');
      
      $container.mixItUp('changeLayout', {
        containerClass: layout
      });
    }
  });
  
});