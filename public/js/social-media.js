(()=>{function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,i){!function(e,i){if(i.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,i),i.add(e)}var n=new WeakSet;function t(){this.self.forEach((function(e){var i=e.querySelector(".social-media-link"),n=e.querySelector(".social-media-link-input-field"),t=e.querySelector(".cancel-social-media-link-btn"),a=e.querySelector(".edit-social-media-link-btn"),r=e.querySelector(".save-social-media-link-btn");a.addEventListener("click",(function(){i.classList.add("hidden"),n.classList.remove("hidden"),t.classList.remove("hidden"),a.classList.add("hidden"),r.classList.remove("hidden")})),t.addEventListener("click",(function(){i.classList.remove("hidden"),n.classList.add("hidden"),t.classList.add("hidden"),a.classList.remove("hidden"),r.classList.add("hidden")}))}))}(new(function(){function a(){var e,t,r;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,a),i(this,n),e=this,t="self",r=Array.from(document.querySelectorAll(".social-media-card")),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}var r,s,c;return r=a,(s=[{key:"hydrate",value:function(){(function(e,i,n){if(!i.has(e))throw new TypeError("attempted to get private field on non-instance");return n})(this,n,t).call(this)}}])&&e(r.prototype,s),c&&e(r,c),a}())).hydrate()})();