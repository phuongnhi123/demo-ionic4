(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{JHxr:function(e,t,a){"use strict";a.r(t),a.d(t,"IonSearchbar",function(){return r});var o=a("cBjU"),n=a("GGff"),i=a("+/n5"),r=function(){function e(){this.isCancelVisible=!1,this.shouldBlur=!0,this.shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}return e.prototype.debounceChanged=function(){this.ionChange=Object(n.f)(this.ionChange,this.debounce)},e.prototype.valueChanged=function(){var e=this.nativeInput,t=this.value;e&&e.value!==t&&(e.value=t),this.ionChange.emit({value:t})},e.prototype.componentDidLoad=function(){this.positionElements(),this.debounceChanged()},e.prototype.clearInput=function(){var e=this;this.ionClear.emit(),setTimeout(function(){var t=e.value;void 0!==t&&""!==t&&(e.value="",e.ionInput.emit())},64),this.shouldBlur=!1},e.prototype.cancelSearchbar=function(){this.ionCancel.emit(),this.clearInput(),this.shouldBlur=!0,this.activated=!1},e.prototype.onInput=function(e){var t=e.target;t&&(this.value=t.value),this.ionInput.emit(e)},e.prototype.inputUpdated=function(){this.positionElements()},e.prototype.onBlur=function(){var e=(this.el.shadowRoot||this.el).querySelector(".searchbar-input");if(!1===this.shouldBlur)return e.focus(),this.shouldBlur=!0,this.ionBlur.emit(),void this.inputUpdated();this.focused=!1,this.positionElements()},e.prototype.onFocus=function(){this.activated=!0,this.focused=!0,this.ionFocus.emit(),this.inputUpdated(),this.positionElements()},e.prototype.positionElements=function(){var e=this.shouldAlignLeft,t=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=t,"ios"===this.mode&&(e!==t&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},e.prototype.positionPlaceholder=function(){var e="rtl"===this.doc.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-input"),a=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)t.removeAttribute("style"),a.removeAttribute("style");else{var o=this.doc,n=o.createElement("span");n.innerHTML=this.placeholder,o.body.appendChild(n);var i=n.offsetWidth;n.remove();var r="calc(50% - "+i/2+"px)",c="calc(50% - "+(i/2+30)+"px)";e?(t.style.paddingRight=r,a.style.marginRight=c):(t.style.paddingLeft=r,a.style.marginLeft=c)}},e.prototype.positionCancelButton=function(){var e="rtl"===this.doc.dir,t=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),a=this.focused;if(t&&a!==this.isCancelVisible){var o=t.style;if(this.isCancelVisible=a,a)e?o.marginLeft="0":o.marginRight="0";else{var n=t.offsetWidth;n>0&&(e?o.marginLeft=-n+"px":o.marginRight=-n+"px")}}},e.prototype.hostData=function(){return{class:Object.assign({},Object(i.b)(this.color),{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}},e.prototype.render=function(){var e=this,t=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),a=this.searchIcon||"search",n=this.showCancelButton?Object(o.b)("button",{type:"button",tabIndex:"ios"!==this.mode||this.activated?void 0:-1,onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?Object(o.b)("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon}):this.cancelButtonText):null;return[Object(o.b)("div",{class:"searchbar-input-container"},"md"===this.mode&&n,Object(o.b)("ion-icon",{mode:this.mode,icon:a,class:"searchbar-search-icon"}),Object(o.b)("input",{ref:function(t){return e.nativeInput=t},class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),Object(o.b)("button",{type:"button",class:"searchbar-clear-button",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this)},Object(o.b)("ion-icon",{mode:this.mode,icon:t,class:"searchbar-clear-icon"}))),"ios"===this.mode&&n]},Object.defineProperty(e,"is",{get:function(){return"ion-searchbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-ion-searchbar-md-host]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.searchbar-icon[data-ion-searchbar-md]{pointer-events:none}.searchbar-input-container[data-ion-searchbar-md]{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input[data-ion-searchbar-md]{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input[data-ion-searchbar-md]::-webkit-search-cancel-button{display:none}.searchbar-clear-button[data-ion-searchbar-md]{margin:0;display:none;min-height:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus[data-ion-searchbar-md-host]   .searchbar-clear-button[data-ion-searchbar-md]{display:block}[data-ion-searchbar-md-host]{padding:8px;background:inherit;font-family:var(--ion-font-family,inherit)}.searchbar-search-icon[data-ion-searchbar-md]{left:16px;top:11px;width:21px;height:21px;color:var(--ion-text-color-step-400,#666)}.searchbar-cancel-button[data-ion-searchbar-md]{left:10px;top:0;margin:0;display:none;height:100%;border:0;background-color:transparent;color:var(--ion-text-color-step-100,#1a1a1a);font-size:1.8em}.searchbar-cancel-button[data-ion-searchbar-md], .searchbar-search-icon[data-ion-searchbar-md]{position:absolute}.searchbar-cancel-button.activated[data-ion-searchbar-md], .searchbar-search-icon.activated[data-ion-searchbar-md]{background-color:transparent}.searchbar-input[data-ion-searchbar-md]{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color-step-150,#262626);font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-input[data-ion-searchbar-md]::-moz-placeholder{color:var(--ion-placeholder-text-color,#999)}.searchbar-input[data-ion-searchbar-md]:-ms-input-placeholder{color:var(--ion-placeholder-text-color,#999)}.searchbar-input[data-ion-searchbar-md]::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-color,#999)}.searchbar-clear-button[data-ion-searchbar-md]{right:13px;top:0;padding:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.activated[data-ion-searchbar-md]{background-color:transparent}.searchbar-clear-icon[data-ion-searchbar-md]{width:22px;height:100%;color:var(--ion-text-color-step-400,#666)}.searchbar-has-focus.searchbar-show-cancel[data-ion-searchbar-md-host]   .searchbar-search-icon[data-ion-searchbar-md]{display:none}.searchbar-has-focus.searchbar-show-cancel[data-ion-searchbar-md-host]   .searchbar-cancel-button[data-ion-searchbar-md]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}ion-toolbar[data-ion-searchbar-md-host], ion-toolbar   [data-ion-searchbar-md-host]{padding:3px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}()}}]);