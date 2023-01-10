!function(i){function t(i,t,n,e,s){this._listener=t,this._isOnce=n,this.context=e,this._signal=i,this._priority=s||0}function n(i,t){if("function"!=typeof i)throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}",t))}function e(){this._bindings=[],this._prevParams=null;var i=this;this.dispatch=function(){e.prototype.dispatch.apply(i,arguments)}}t.prototype={active:!0,params:null,execute:function(i){var t;return this.active&&this._listener&&(i=this.params?this.params.concat(i):i,t=this._listener.apply(this.context,i),this._isOnce&&this.detach()),t},detach:function(){return this.isBound()?this._signal.remove(this._listener,this.context):null},isBound:function(){return!!this._signal&&!!this._listener},isOnce:function(){return this._isOnce},getListener:function(){return this._listener},getSignal:function(){return this._signal},_destroy:function(){delete this._signal,delete this._listener,delete this.context},toString:function(){return"[SignalBinding isOnce:"+this._isOnce+", isBound:"+this.isBound()+", active:"+this.active+"]"}},e.prototype={VERSION:"1.0.0",memorize:!1,_shouldPropagate:!0,active:!0,_registerListener:function(i,n,e,s){var r=this._indexOfListener(i,e);if(-1!==r){if((i=this._bindings[r]).isOnce()!==n)throw Error("You cannot add"+(n?"":"Once")+"() then add"+(n?"Once":"")+"() the same listener without removing the relationship first.")}else i=new t(this,i,n,e,s),this._addBinding(i);return this.memorize&&this._prevParams&&i.execute(this._prevParams),i},_addBinding:function(i){var t=this._bindings.length;do{--t}while(this._bindings[t]&&i._priority<=this._bindings[t]._priority);this._bindings.splice(t+1,0,i)},_indexOfListener:function(i,t){for(var n,e=this._bindings.length;e--;)if((n=this._bindings[e])._listener===i&&n.context===t)return e;return-1},has:function(i,t){return-1!==this._indexOfListener(i,t)},add:function(i,t,e){return n(i,"add"),this._registerListener(i,!1,t,e)},addOnce:function(i,t,e){return n(i,"addOnce"),this._registerListener(i,!0,t,e)},remove:function(i,t){n(i,"remove");var e=this._indexOfListener(i,t);return-1!==e&&(this._bindings[e]._destroy(),this._bindings.splice(e,1)),i},removeAll:function(){for(var i=this._bindings.length;i--;)this._bindings[i]._destroy();this._bindings.length=0},getNumListeners:function(){return this._bindings.length},halt:function(){this._shouldPropagate=!1},dispatch:function(i){if(this.active){var t,n=Array.prototype.slice.call(arguments),e=this._bindings.length;if(this.memorize&&(this._prevParams=n),e){t=this._bindings.slice(),this._shouldPropagate=!0;do{e--}while(t[e]&&this._shouldPropagate&&!1!==t[e].execute(n))}}},forget:function(){this._prevParams=null},dispose:function(){this.removeAll(),delete this._bindings,delete this._prevParams},toString:function(){return"[Signal active:"+this.active+" numListeners:"+this.getNumListeners()+"]"}};var s=e;s.Signal=e,"function"==typeof define&&define.amd?define((function(){return s})):"undefined"!=typeof module&&module.exports?module.exports=s:i.signals=s}(this);