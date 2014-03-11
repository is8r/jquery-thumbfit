/*
Thumbnail Fit Plugin - v1.0

@author Yu Ishihara
@github https://github.com/is8r/jquery-thumbfit
@version 1.0

@howto
;(function(jQuery) {
  $(function(){
    $('li', '.js-thumbs').thumbfit({
      width: 200,
      height: 100
    });
  });
})(jQuery);
*/

;(function(jQuery) {
    
  var pluginName = 'thumbfit';
  
  $[pluginName] = function(element, options) {

      //----------------------------------------------------------------------
      //data
      
      //data for plugin
      var defaults = {
          pluginName: pluginName,
          width: 100,
          height: 100
      }
      var plugin = this;
      plugin.settings = {}
      var $element = $(element);
      var element = element;
      
      //----------------------------------------------------------------------
      //method
      
      plugin.init = function() {
          plugin.settings = $.extend({}, defaults, options);
          plugin.items = options.items;
          
          //
          plugin.initPlugin();
      }
      
      //----------------------------------------------------------------------
      
      plugin.initPlugin = function(e) {
        $element.each(function(i, el) {
          $(el).addClass('background-fix');
          $(el).css({
            'background-image': 'url('+$('img', el).attr('src')+')',
            'width': plugin.settings.width,
            'height': plugin.settings.height,
            'background-position': 'center center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
          });
          $('img', el).css({
            'opacity': 0
          });
        });
      }
      
      //----------------------------------------------------------------------
      
      plugin.init();
  }
  
  //----------------------------------------------------------------------
  
  $.fn[pluginName] = function(options) {
      if(!options) options = {};
      options.items = [];
      return this.each(function(i) {
          options.id = i;
          options.items.push($(this));
          if (undefined == $(this).data(pluginName)) {
              var plugin = new $[pluginName](this, options);
              $(this).data(pluginName, plugin);
          }
      });
  }
    
})(jQuery);


