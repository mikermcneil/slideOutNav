(function(e){var t=function(t,n){var r=e(t),i=this,s={dataAttrs:!1,prefix:"side-nav",burger:"burger",nav:"nav",app:"app",content:"content",clickOpen:!0,clickClose:!0,dragOpen:!1,dragClose:!0},o=e.extend(s,n||{}),u={open:!1},a={tap:"tap",drag:"drag dragend"},f="data-"+o.prefix,l=o.burger,c=o.nav,h=o.app,p=o.content,d=a.tap+" "+a.drag;if(o.dataAttrs===!1)var v=e("#"+l),m=e("#"+c),g=e("#"+h),y=e("#"+p),b=m.width();else var v=e("["+f+'="'+l+'"]'),m=e("["+f+'="'+c+'"]'),g=e("["+f+'="'+h+'"]'),y=e("["+f+'="'+p+'"]'),b=m.width();this.open=function(){console.log("open");N();y.unbind(d);o.dragClose==1&&x();o.clickClose==1&&S()};this.close=function(){console.log("close");T();y.unbind(a.tap)};this.listen=function(){e("body").removeClass("nav-open").addClass("nav-closed");o.clickOpen==1&&E();o.dragOpen==1&&x();console.log("listening")};var w=function(){if(u.open==0){console.log("opening");i.open()}else{console.log("closing");i.close()}},E=function(){console.log("burger listen");v.hammer().on(a.tap,function(e){console.log("tap!");w()})},S=function(){console.log("content click listen");y.hammer().on(a.tap,function(e){console.log("tap!");w()})},x=function(){console.log("drag listen");y.hammer().on(a.drag,function(e){if(e.type==="drag"){e.gesture.preventDefault();var t=e.gesture.center.pageX,n=e.gesture.startEvent.center.pageX,r=r;if(u.open===!0){var r=t-(n-b);t<=n&&C(r)}else{var r=t-n;t>=n&&C(r)}}if(e.type==="dragend"){console.log("released");if(Math.abs(e.gesture.deltaX)>b/2){console.log("more than 50%");u.open===!0?T():N();w()}else u.open===!0?N():T()}})},T=function(){if(Modernizr.csstransforms3d)g.css("transform","translate3d(0,0,0)");else if(Modernizr.csstransforms){g.css("transform","translate(0,0)");g.css("-webkit-transition","0.2s ease-out")}else g.css("left","0px");g.css("-webkit-transition","0.2s ease-out");g.bind("transitionend webkitTransitionEnd",function(){console.log("transition end");u.open=!1;e("body").removeClass("nav-open").addClass("nav-closed")});console.log("close anim")},N=function(){console.log("navW = "+b);Modernizr.csstransforms3d?g.css("transform","translate3d("+b+"px,0,0)"):Modernizr.csstransforms?g.css("transform","translate("+b+"px,0)"):g.css("left",b+"px");g.css("-webkit-transition","0.2s ease-out");g.bind("transitionend webkitTransitionEnd",function(){console.log("transition end");u.open=!0;e("body").removeClass("nav-closed").addClass("nav-open")});console.log("open anim")},C=function(e){Modernizr.csstransforms3d?g.css("transform","translate3d("+e+"px,0,0)"):Modernizr.csstransforms?g.css("transform","translate("+e+"px,0)"):g.css("left",e+"px");g.css("-webkit-transition","0s ease-in")};this.listen()};e.fn.slideOutNav=function(n){return this.each(function(){var r=e(this);if(r.data("slideOutNav"))return;var i=new t(this,n);r.data("slideOutNav",i)})}})(jQuery);