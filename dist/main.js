(()=>{"use strict";var e={455:function(e,t){var r,o,i=this&&this.__classPrivateFieldSet||function(e,t,r,o,i){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?i.call(e,r):i?i.value=r:t.set(e,r),r},s=this&&this.__classPrivateFieldGet||function(e,t,r,o){if("a"===r&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?o:"a"===r?o.call(e):o?o.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Book=void 0,t.Book=class{constructor(e,t){r.set(this,void 0),o.set(this,void 0),i(this,r,e,"f"),i(this,o,t,"f")}set rating(e){s(this,o,"f")>0&&s(this,o,"f")<11?i(this,o,e,"f"):console.log("a számnak 1 és 10 között kell lennie")}toString(){return"könyv neve: "+s(this,r,"f")+"\nkönyv értékelése: "+s(this,o,"f")}},r=new WeakMap,o=new WeakMap}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}(()=>{const e=r(455);let t=new e.Book("asd",10),o=new e.Book("asd",-1);t.toString(),o.toString()})()})();