(function($){
   $.fn.copy = function(n,a,b){
      if(!n){
         n = 1;
      }else if(typeof n === 'boolean'){
         b = a; a = n; n = 1;
      };
      var e = this.clone(a,b), n = n-1;
      this.each(function(){
         for(var i=0,$this=$(this);i<n;i++){
            e = e.add($this.clone(a,b));
         };
      });alert(e.length);
      return e;
   };
})(jQuery);
