!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iU1Pc"),u={form:document.querySelector(".form"),firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),submitButton:document.querySelector(".form button")};u.form.addEventListener("submit",(function(t){var n=function(t){var n=t,o=u.delayStep.value,a=(n-1)*o;setTimeout((function(){var t,o,u;(t=n,o=r,u=Math.random()>.3,new Promise((function(e,n){setTimeout((function(){u?e({position:t,delay:o}):n({position:t,delay:o})}),o)}))).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(a+Number(o),"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(a+Number(o),"ms"))}))}),a)};t.preventDefault();for(var o=u.amount.value,r=u.firstDelay.value,a=1;a<=o;a+=1)n(a);t.target.reset()}))}();
//# sourceMappingURL=03-promises.80b46fa4.js.map