import{$ as J,$n as sb,A as $e$1,An as li$1,At as Ue$1,Bt as Ze$1,Cn as it,Cr as zt,Dn as kD,Dt as Td,En as jc,F as B4,Fn as mn,G as F,Gt as b,Hn as ot,It as Wr,Jn as pv,Kn as pb,Kt as bC,L as Bt,M as AS,Nn as mb,Nt as VH,O as $,On as ke,Pt as Vt$1,Q as HH,Qn as ro,Qt as ci$1,R as CD,Rt as Y$1,S as et,Sn as ir$1,Sr as zr,St as Se$1,V as Cb,Vn as or$1,W as Eh,Wt as ao,X as H3,Y as Gp,Yn as qp,Zn as ri$1,_ as Y$2,_n as hb,_r as xn$1,_t as RS,an as eo,ar as tx,at as L,b as bt$1,br as yn$1,cn as ff,ct as MS,dt as OD,fn as ga,fr as vt$1,ft as OS,gn as hC,gt as RN,hn as gn,hr as wo,ht as R,i as At$1,in as eC,ir as tt,it as Ku,j as $s,jn as m,jt as V,k as $H,kn as lb,l as Pe$2,ln as ft,m as U,mn as gf,mr as wd,mt as Pe$1,nn as dt,nr as tb,nt as K,or as ub,ot as Le$1,pn as gb,pr as wT,pt as Ob,q as G3,qt as be$1,rn as e4,rr as te,sn as fe,tn as dn,tr as tS,tt as Jr,un as g,ur as va,ut as Na,vn as hn,vt as Rc,wn as jC,wt as TS,x as de,xn as ib,xr as ys,yr as ye,yt as S,z as CS}from"./main.js";var Dn=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(n){return new(n||i)($e$1(Wr),$e$1(be$1))};static ɵdir=ot({type:i})}return i})();var Ni=(()=>{class i extends Dn{static ɵfac=(()=>{let e;return function(r){return(e||(e=Eh(i)))(r||i)}})();static ɵdir=ot({type:i,features:[Jr]})}return i})();var An=new b(``);var wi={provide:An,useExisting:ys(()=>Fn),multi:!0};function Ei(){let i=Vt$1()?Vt$1().getUserAgent():``;return/android (\d+)/.test(i.toLowerCase())}var Di=new b(``);var Fn=(()=>{class i extends Dn{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode??=!Ei()}writeValue(e){let n=e??``;this.setProperty(`value`,n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(n){return new(n||i)($e$1(Wr),$e$1(be$1),$e$1(Di,8))};static ɵdir=ot({type:i,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(n,r){n&1&&ub(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Ob([wi]),Jr]})}return i})();function yt(i){return i==null||xt(i)===0}function xt(i){return i==null?null:Array.isArray(i)||typeof i==`string`?i.length:i instanceof Set?i.size:null}var We=new b(``);var Ct=new b(``);var Ai=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var De=class{static min(t){return Fi(t)}static max(t){return Ii(t)}static required(t){return In(t)}static requiredTrue(t){return ki(t)}static email(t){return Vi(t)}static minLength(t){return Ri(t)}static maxLength(t){return Oi(t)}static pattern(t){return Ti(t)}static nullValidator(t){return Le()}static compose(t){return Pn(t)}static composeAsync(t){return Ln(t)}};function Fi(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function Ii(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function In(i){return yt(i.value)?{required:!0}:null}function ki(i){return i.value===!0?null:{required:!0}}function Vi(i){return yt(i.value)||Ai.test(i.value)?null:{email:!0}}function Ri(i){return t=>{let e=t.value?.length??xt(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Oi(i){return t=>{let e=t.value?.length??xt(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function Ti(i){if(!i)return Le;let t,e;return typeof i==`string`?(e=``,i.charAt(0)!==`^`&&(e+=`^`),e+=i,i.charAt(i.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(yt(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Le(i){return null}function kn(i){return i!=null}function Vn(i){return Na(i)?dt(i):i}function Rn(i){let t={};return i.forEach(e=>{t=e!=null?S(S({},t),e):t}),Object.keys(t).length===0?null:t}function On(i,t){return t.map(e=>e(i))}function Pi(i){return!i.validate}function Tn(i){return i.map(t=>Pi(t)?t:e=>t.validate(e))}function Pn(i){if(!i)return null;let t=i.filter(kn);return t.length==0?null:function(e){return Rn(On(e,t))}}function St(i){return i!=null?Pn(Tn(i)):null}function Ln(i){if(!i)return null;let t=i.filter(kn);return t.length==0?null:function(e){let n=On(e,t).map(Vn);return Rc(n).pipe(K(Rn))}}function Mt(i){return i!=null?Ln(Tn(i)):null}function yn(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Bn(i){return i._rawValidators}function zn(i){return i._rawAsyncValidators}function bt(i){return i?Array.isArray(i)?i:[i]:[]}function Be(i,t){return Array.isArray(i)?i.includes(t):i===t}function xn(i,t){let e=bt(t);return bt(i).forEach(r=>{Be(e,r)||e.push(r)}),e}function Cn(i,t){return bt(t).filter(e=>!Be(i,e))}var ze=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=St(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var ie=class extends ze{name;get formDirective(){return null}get path(){return null}};var Se=`VALID`;var Pe=`INVALID`;var he=`PENDING`;var Me=`DISABLED`;var Y=class{};var je=class extends Y{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var we=class extends Y{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var Ee=class extends Y{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var pe=class extends Y{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var He=class extends Y{source;constructor(t){super(),this.source=t}};var ge=class extends Y{source;constructor(t){super(),this.source=t}};function jn(i){return(Ke(i)?i.validators:i)||null}function Li(i){return Array.isArray(i)?St(i):i||null}function Hn(i,t){return(Ke(t)?t.asyncValidators:i)||null}function Bi(i){return Array.isArray(i)?Mt(i):i||null}function Ke(i){return i!=null&&!Array.isArray(i)&&typeof i==`object`}function zi(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new g(1e3,``);if(!Gn(n,e))throw new g(1001,``)}function ji(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new g(-1002,``)})}var Hi=Symbol();var Ge=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Ue$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this[Hi]=!0,this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return eo(this.statusReactive)}set status(t){eo(()=>this.statusReactive.set(t))}_status=bC(()=>this.statusReactive());statusReactive=Ue$1(void 0);get valid(){return this.status===Se}get invalid(){return this.status===Pe}get pending(){return this.status===he}get disabled(){return this.status===Me}get enabled(){return this.status!==Me}get errors(){return eo(this.errorsReactive)}set errors(t){eo(()=>this.errorsReactive.set(t))}_errors=bC(()=>this.errorsReactive());errorsReactive=Ue$1(null);get pristine(){return eo(this.pristineReactive)}set pristine(t){eo(()=>this.pristineReactive.set(t))}_pristine=bC(()=>this.pristineReactive());pristineReactive=Ue$1(!0);get dirty(){return!this.pristine}get touched(){return eo(this.touchedReactive)}set touched(t){eo(()=>this.touchedReactive.set(t))}_touched=bC(()=>this.touchedReactive());touchedReactive=Ue$1(!1);get untouched(){return!this.touched}_events=new $;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(xn(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(xn(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Cn(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Cn(t,this._rawAsyncValidators))}hasValidator(t){return Be(this._rawValidators,t)}hasAsyncValidator(t){return Be(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(J(S({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Ee(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new Ee(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(J(S({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new we(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new we(!0,n))}markAsPending(t={}){this.status=he;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new pe(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(J(S({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Me,this.errors=null,this._forEachChild(r=>{r.disable(J(S({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new je(this.value,n)),this._events.next(new pe(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(J(S({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Se,this._forEachChild(n=>{n.enable(J(S({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(J(S({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Se||this.status===he)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new je(this.value,e)),this._events.next(new pe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(J(S({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Me:Se}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=he,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=Vn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new pe(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new Pe$1,this.statusChanges=new Pe$1}_calculateStatus(){return this._allControlsDisabled()?Me:this.errors?Pe:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(he)?he:this._anyControlsHaveStatus(Pe)?Pe:Se}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new we(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ee(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Ke(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Li(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Bi(this._rawAsyncValidators)}_updateHasRequiredValidator(){eo(()=>this._hasRequired.set(this.hasValidator(De.required)))}};function Gn(i,t){return Object.hasOwn(i,t)}function Gi(i){return i.tagName===`INPUT`||i.tagName===`SELECT`||i.tagName===`TEXTAREA`}function Ui(i,t,e,n){switch(e){case`name`:i.setAttribute(t,e,n);break;case`disabled`:case`readonly`:case`required`:n?i.setAttribute(t,e,``):i.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:n!==void 0?i.setAttribute(t,e,n.toString()):i.removeAttribute(t,e)}}var _t=class{kind;context;control;message;constructor({kind:t,context:e,control:n}){this.kind=t,this.context=e,this.control=n}};var qi=new b(``);var Ye=new b(``,{factory:()=>Nt});var Nt=`always`;function $i(i,t){return[...t.path,i]}function Sn(i,t,e=Nt){Ze(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(i.disabled),Ki(i,t),Zi(i,t),Yi(i,t),Wi(i,t)}function Mn(i,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),qe(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Ue(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Wi(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Ze(i,t){let e=Bn(i);t.validator!==null?i.setValidators(yn(e,t.validator)):typeof e==`function`&&i.setValidators([e]);let n=zn(i);t.asyncValidator!==null?i.setAsyncValidators(yn(n,t.asyncValidator)):typeof n==`function`&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ue(t._rawValidators,r),Ue(t._rawAsyncValidators,r)}function qe(i,t){let e=!1;if(i!==null){if(t.validator!==null){let r=Bn(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(t.asyncValidator!==null){let r=zn(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let n=()=>{};return Ue(t._rawValidators,n),Ue(t._rawAsyncValidators,n),e}function Ki(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn===`change`&&Un(i,t)})}function Yi(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&Un(i,t),i.updateOn!==`submit`&&i.markAsTouched()})}function Un(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Zi(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function qn(i,t){Ze(i,t)}function Xi(i,t){return qe(i,t)}function Qi(i,t){if(!Object.hasOwn(i,`model`))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Ji(i){return Object.getPrototypeOf(i.constructor)===Ni}function $n(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn===`submit`&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function er(i,t){if(!t)return null;let e,n,r;return t.forEach(o=>{o.constructor===Fn?e=o:Ji(o)?n=o:r=o}),r||n||e||null}function tr(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var nr=(()=>{class i{_validator=Le;_onChange;get _enabled(){return this.enabledReactive()}enabledReactive=Ue$1(void 0);ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue),r=this.enabled(n);this.enabledReactive.set(r),this._validator=r?this.createValidator(n):Le,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,features:[va]})}return i})();var ir={provide:We,useExisting:ys(()=>Wn),multi:!0};var Wn=(()=>{class i extends nr{required;inputName=`required`;normalizeInput=Bt;createValidator=e=>In;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=Eh(i)))(r||i)}})();static ɵdir=ot({type:i,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(n,r){n&2&&or$1(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[Ob([ir]),Jr]})}return i})();var rr={provide:qi,useFactory:()=>{let i=m(Z,{self:!0});return{setParseErrors:t=>{i.setParseErrorSource(t)},set onReset(t){i.onReset=t}}}};var Z=class extends ze{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof ge&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=er(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(t,e,n){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(Le$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.control,e=this.injector?.get(jC);if(!t||!e)return;Ze(t,this);let n=e.markForCheck.bind(e);if(this.subscription=new Y$1,this.subscription.add(()=>this.discardPendingCustomValue(t)),typeof t.registerOnChange==`function`){let r=(o,s)=>{this.discardPendingCustomValue(t),s&&this.viewToModelUpdate(o),n()};t.registerOnChange(r),this.subscription.add(()=>t._unregisterOnChange(r))}this.subscription.add(t.valueChanges.subscribe(n)),this.subscription.add(t.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=t.events.subscribe(r=>{r instanceof ge&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&t.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{let o=this.control;o&&(o._pendingValue=r,o._pendingChange=!0,o._pendingDirty=!0,this.pendingCustomValue=r,this.hasPendingCustomValue=!0,o.updateOn===`change`&&this.updateControlFromCustom(o))}),t.listenToCustomControlOutput(`touch`,()=>{let r=this.control;r&&(r._pendingTouched=!0,r.updateOn===`blur`&&r._pendingChange&&this.updateControlFromCustom(r),r.updateOn!==`submit`&&r.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=Gi(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Wn))}updateControlFromCustom(t){let e=t._pendingValue;t._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=e),t._pendingDirty&&t.markAsDirty(),t.setValue(e,{emitModelToViewChange:!1}),this.viewToModelUpdate(t.value)}discardPendingCustomValue(t){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),t._pendingValue=t.value,t._pendingChange=!1,t._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(t){if(!this.isCustomControlBased)return;let e=this.control,n=this.customControlBindings;if(!e||!n)return;this.hasPendingCustomValue&&!e._pendingChange&&(n.value=this.pendingCustomValue,this.clearPendingCustomValue()),e._status(),e._errors(),Object.is(n.value,e.value)||(this.discardPendingCustomValue(e),n.value=e.value,t.setCustomControlModelInput(e.value)),this.bindControlProperty(t,n,`touched`,e.touched),this.bindControlProperty(t,n,`dirty`,e.dirty),this.bindControlProperty(t,n,`valid`,e.valid),this.bindControlProperty(t,n,`invalid`,e.invalid),this.bindControlProperty(t,n,`pending`,e.pending),this.bindControlProperty(t,n,`disabled`,e.disabled);let r=this.requiredValidatorViaDi;if(r){let s=this.isRequired;t.setInputOnDirectives(`required`,s,(d,h)=>h!==r&&d!==s)}else this.bindControlProperty(t,n,`required`,this.isRequired);let o=e.errors;if(n.errors!==o){n.errors=o;let s=this._convertErrors(o);t.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}bindControlProperty(t,e,n,r){if(e[n]===r)return;e[n]=r;let o=t.setInputOnDirectives(n,r);this.isNativeFormElement&&!o&&(n===`disabled`||n===`required`)&&this.renderer&&Ui(this.renderer,t.nativeElement,n,r)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([n,r])=>new _t({context:r,kind:n,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,n=bC(()=>{let r=t();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=()=>(e=eo(n),e),$s(()=>{let r=n();r!==e&&(e=r,this.control?.updateValueAndValidity({emitEvent:!1}),this.injector?.get(jC)?.markForCheck())},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var vt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Yr=(()=>{class i extends vt{constructor(e){super(e)}static ɵfac=function(n){return new(n||i)($e$1(Z,2))};static ɵdir=ot({type:i,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(n,r){n&2&&vt$1(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[Jr]})}return i})();var $e=class extends Ge{constructor(t,e,n){super(jn(e),Hn(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let n=this._find(t);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){eo(()=>{ji(this,!0,t),Object.keys(t).forEach(n=>{zi(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this._find(n);r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,J(S({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new ge(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return Gn(this.controls,t)?this.controls[t]:null}};var or={provide:ie,useExisting:ys(()=>wt)};var Ne=Promise.resolve();var wt=(()=>{class i extends ie{callSetDisabledState;get submitted(){return eo(this.submittedReactive)}_submitted=bC(()=>this.submittedReactive());submittedReactive=Ue$1(!1);_directives=/* @__PURE__ */ new Set;form;ngSubmit=new Pe$1;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new $e({},St(e),Mt(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ne.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ne.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ne.then(()=>{let n=this._findContainer(e.path),r=new $e({});qn(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ne.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Ne.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),$n(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new He(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(n){return new(n||i)($e$1(We,10),$e$1(Ct,10),$e$1(Ye,8))};static ɵdir=ot({type:i,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(n,r){n&1&&ub(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Ob([or]),Jr]})}return i})();function Nn(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function wn(i){return typeof i==`object`&&i!==null&&Object.keys(i).length===2&&`value`in i&&`disabled`in i}var Kn=class extends Ge{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(jn(e),Hn(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ke(e)&&(e.nonNullable||e.initialValueIsDefault)&&(wn(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){eo(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new ge(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Nn(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Nn(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){wn(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var ar=i=>i instanceof Kn;var sr=(()=>{class i extends ie{callSetDisabledState;get submitted(){return eo(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=bC(()=>this._submittedReactive());_submittedReactive=Ue$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new g(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(qe(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);if(!n)throw new g(-1055,!1);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Mn(e.control||null,e,!1),tr(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,$n(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new He(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Mn(n||null,e),ar(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);qn(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Xi(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Ze(this.form,this),this._oldForm&&qe(this._oldForm,this)}static ɵfac=function(n){return new(n||i)($e$1(We,10),$e$1(Ct,10),$e$1(Ye,8))};static ɵdir=ot({type:i,features:[Jr,va]})}return i})();var lr={provide:ie,useExisting:ys(()=>Et)};var Et=(()=>{class i extends sr{form=null;ngSubmit=new Pe$1;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=Eh(i)))(r||i)}})();static ɵdir=ot({type:i,selectors:[[``,`formGroup`,``]],hostBindings:function(n,r){n&1&&ub(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[Ob([lr]),Jr]})}return i})();var dr={provide:Z,useExisting:ys(()=>cr)};var En=Promise.resolve();var cr=(()=>{class i extends Z{_changeDetectorRef;callSetDisabledState;control=new Kn;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new Pe$1;constructor(e,n,r,o,s,d,h,k){super(h,k,o),this._changeDetectorRef=s,this.callSetDisabledState=d,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||`name`in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}`isDisabled`in e&&this._updateDisabled(e),Qi(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Sn(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Sn(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){En.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&Bt(n);En.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?$i(e,this._parent):[e]}static ɵfac=function(n){return new(n||i)($e$1(ie,9),$e$1(We,10),$e$1(Ct,10),$e$1(An,10),$e$1(jC,8),$e$1(Ye,8),$e$1(te,8),$e$1(Wr,8))};static ɵdir=ot({type:i,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[Ob([dr,rr]),Jr,va,tS(null)]})}return i})();var ur=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ye({type:i});static ɵinj=fe({})}return i})();var Xr=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:Ye,useValue:e.callSetDisabledState??Nt}]}}static ɵfac=function(n){return new(n||i)};static ɵmod=ye({type:i});static ɵinj=fe({imports:[ur]})}return i})();var Zn=Symbol(`FIELD_TREE`);function Ae(i){return typeof i==`function`&&i[Zn]===!0}var Qn=new b(``);var Dt=class{_box;_destroyed=new $;_resizeSubject=new $;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new R(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(K(e=>e.filter(n=>n.target===t)),ft(e=>e.length>0),kD({bufferSize:1,refCount:!0}),wo(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Jn=(()=>{class i{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=m(V);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Dt(r)),this._observers.get(r).observe(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var At=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[`mat-label`]]})}return i})();var fr=new b(`MatError`);var Ft=(()=>{class i{align=`start`;id=m(gf).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,r){n&2&&(lb(`id`,r.id),or$1(`align`,null),vt$1(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var ai=new b(`MatPrefix`);var hr=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[Ob([{provide:ai,useExisting:i}])]})}return i})();var pr=new b(`MatSuffix`);var si=new b(`FloatingLabelParent`);var ei=(()=>{class i{_elementRef=m(be$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(Jn);_ngZone=m(V);_parent=m(si);_resizeSubscription=new Y$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return gr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,r){n&2&&vt$1(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function gr(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var ti=`mdc-line-ripple--active`;var Xe=`mdc-line-ripple--deactivating`;var ni=(()=>{class i{_elementRef=m(be$1);_cleanupTransitionEnd;constructor(){let e=m(V),n=m(Wr);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Xe),e.add(ti)}deactivate(){this._elementRef.nativeElement.classList.add(Xe)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Xe);e.propertyName===`opacity`&&r&&n.remove(ti,Xe)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var ii=(()=>{class i{_elementRef=m(be$1);_ngZone=m(V);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(`.mdc-floating-label`);n?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width=``:n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`notch`];return ke({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(o,s){if(o&1&&mb(e,5),o&2){let d;MS(d=AS())&&(s._notch=d.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(o,s){o&2&&vt$1(`mdc-notched-outline--notched`,s.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(o,s){o&1&&(ir$1(),gn(0,`div`,1),mn(1,`div`,2,0),it(3),hn(),gn(4,`div`,3))},encapsulation:2})})()}return i})();var It=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i})}return i})();var kt=new b(`MatFormField`);var br=new b(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ri=`fill`;var _r=`auto`;var oi=`fixed`;var vr=`translateY(-50%)`;var li=(()=>{class i{_elementRef=m(be$1);_changeDetectorRef=m(jC);_platform=m(Se$1);_idGenerator=m(gf);_ngZone=m(V);_defaults=m(br,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return dn(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=VH(`iconPrefixContainer`);_textPrefixContainerSignal=VH(`textPrefixContainer`);_iconSuffixContainerSignal=VH(`iconSuffixContainer`);_textSuffixContainerSignal=VH(`textSuffixContainer`);_prefixSuffixContainers=bC(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=HH(At);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=e4(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||_r}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||ri;this._appearanceSignal.set(n)}_appearanceSignal=Ue$1(ri);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||oi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||oi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new $;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ao();constructor(){let e=this._defaults,n=m(RN);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),$s(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Ae(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Ae(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=bC(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let n=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges?.pipe(jc([void 0,void 0]),K(()=>[this._unwrapMaybeSignal(n.errorState),n.userAriaDescribedBy]),OD(),ft(([[o,s],[d,h]])=>o!==d||s!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&!Ae(n.ngField)&&(this._valueChanges=n.ngControl.valueChanges.pipe(wo(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),CD(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){$H({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=bC(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let n=this._control?.ngField||this._control?.ngControl;if(!n)return!1;if(Ae(n)){let r=n();return e===`valid`?r.valid():e===`dirty`?r.dirty():e===`touched`?r.touched():e===`pending`?r.pending():e===`untouched`?!r.touched():e===`pristine`?!r.dirty():e===`invalid`?!r.valid():!1}else{let r=n;return e===`valid`?r.valid:e===`dirty`?r.dirty:e===`touched`?r.touched:e===`pending`?r.pending:e===`untouched`?r.untouched:e===`pristine`?r.pristine:e===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(d=>d.align===`start`):null,s=this._hintChildren?this._hintChildren.find(d=>d.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,d=n?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,k=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${vr} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${s+d}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,s+d+h+k]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],n=[`textPrefixContainer`],r=[`iconSuffixContainer`],o=[`textSuffixContainer`],s=[`textField`],d=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],h=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function k(c,u){c&1&&sb(0,`span`,21)}function _e(c,u){if(c&1&&(ga(0,`label`,20),it(1,1),ci$1(2,k,1,0,`span`,21),wd()),c&2){let a=TS(2);ib(`floating`,a._shouldLabelFloat())(`monitorResize`,a._hasOutline())(`id`,a._labelId),or$1(`for`,a._control.disableAutomaticLabeling?null:a._control.id),ri$1(2),li$1(!a.hideRequiredMarker&&a._unwrapMaybeSignal(a._control.required)?2:-1)}}function Je(c,u){if(c&1&&ci$1(0,_e,3,5,`label`,20),c&2){let a=TS();li$1(a._hasFloatingLabel()?0:-1)}}function Tt(c,u){c&1&&sb(0,`div`,7)}function et(c,u){}function tt(c,u){if(c&1&&tb(0,et,0,0,`ng-template`,13),c&2){TS(2);let a=OS(1);ib(`ngTemplateOutlet`,a)}}function nt(c,u){if(c&1&&(ga(0,`div`,9),ci$1(1,tt,1,1,null,13),wd()),c&2){let a=TS();ib(`matFormFieldNotchedOutlineOpen`,a._shouldLabelFloat()),ri$1(),li$1(a._forceDisplayInfixLabel()?-1:1)}}function hi(c,u){c&1&&(ga(0,`div`,10,2),it(2,2),wd())}function pi(c,u){c&1&&(ga(0,`div`,11,3),it(2,3),wd())}function gi(c,u){}function bi(c,u){if(c&1&&tb(0,gi,0,0,`ng-template`,13),c&2){TS();let a=OS(1);ib(`ngTemplateOutlet`,a)}}function _i(c,u){c&1&&(ga(0,`div`,14,4),it(2,4),wd())}function vi(c,u){c&1&&(ga(0,`div`,15,5),it(2,5),wd())}function yi(c,u){c&1&&sb(0,`div`,16)}function xi(c,u){c&1&&(ga(0,`div`,18),it(1,6),wd())}function Ci(c,u){if(c&1&&(ga(0,`mat-hint`,22),eC(1),wd()),c&2){let a=TS(2);ib(`id`,a._hintLabelId),ri$1(),Cb(a.hintLabel)}}function Si(c,u){if(c&1&&(ga(0,`div`,19),ci$1(1,Ci,2,2,`mat-hint`,22),it(2,7),sb(3,`div`,23),it(4,8),wd()),c&2){let a=TS();ri$1(),li$1(a.hintLabel?1:-1)}}return ke({type:i,selectors:[[`mat-form-field`]],contentQueries:function(u,a,m){if(u&1&&(hb(m,a._labelChild,At,5),pb(m,It,5)(m,ai,5)(m,pr,5)(m,fr,5)(m,Ft,5)),u&2){RS();let E;MS(E=AS())&&(a._formFieldControl=E.first),MS(E=AS())&&(a._prefixChildren=E),MS(E=AS())&&(a._suffixChildren=E),MS(E=AS())&&(a._errorChildren=E),MS(E=AS())&&(a._hintChildren=E)}},viewQuery:function(u,a){if(u&1&&(gb(a._iconPrefixContainerSignal,e,5)(a._textPrefixContainerSignal,n,5)(a._iconSuffixContainerSignal,r,5)(a._textSuffixContainerSignal,o,5),mb(s,5)(e,5)(n,5)(r,5)(o,5)(ei,5)(ii,5)(ni,5)),u&2){RS(4);let m;MS(m=AS())&&(a._textField=m.first),MS(m=AS())&&(a._iconPrefixContainer=m.first),MS(m=AS())&&(a._textPrefixContainer=m.first),MS(m=AS())&&(a._iconSuffixContainer=m.first),MS(m=AS())&&(a._textSuffixContainer=m.first),MS(m=AS())&&(a._floatingLabel=m.first),MS(m=AS())&&(a._notchedOutline=m.first),MS(m=AS())&&(a._lineRipple=m.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(u,a){u&2&&vt$1(`mat-mdc-form-field-label-always-float`,a._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,a._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,a._hasIconSuffix)(`mat-form-field-invalid`,a._unwrapMaybeSignal(a._control.errorState))(`mat-form-field-disabled`,a._unwrapMaybeSignal(a._control.disabled))(`mat-form-field-autofilled`,a._unwrapMaybeSignal(a._control.autofilled))(`mat-form-field-appearance-fill`,a.appearance==`fill`)(`mat-form-field-appearance-outline`,a.appearance==`outline`)(`mat-form-field-hide-placeholder`,a._hasFloatingLabel()&&!a._shouldLabelFloat())(`mat-primary`,a.color!==`accent`&&a.color!==`warn`)(`mat-accent`,a.color===`accent`)(`mat-warn`,a.color===`warn`)(`ng-untouched`,a._shouldForward(`untouched`))(`ng-touched`,a._shouldForward(`touched`))(`ng-pristine`,a._shouldForward(`pristine`))(`ng-dirty`,a._shouldForward(`dirty`))(`ng-valid`,a._shouldForward(`valid`))(`ng-invalid`,a._shouldForward(`invalid`))(`ng-pending`,a._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[Ob([{provide:kt,useExisting:i},{provide:si,useExisting:i}])],ngContentSelectors:h,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(u,a){if(u&1&&(ir$1(d),tb(0,Je,1,1,`ng-template`,null,0,hC),ga(2,`div`,6,1),ub(`click`,function(E){return a._control.onContainerClick(E)}),ci$1(4,Tt,1,0,`div`,7),ga(5,`div`,8),ci$1(6,nt,2,2,`div`,9),ci$1(7,hi,3,0,`div`,10),ci$1(8,pi,3,0,`div`,11),ga(9,`div`,12),ci$1(10,bi,1,1,null,13),it(11),wd(),ci$1(12,_i,3,0,`div`,14),ci$1(13,vi,3,0,`div`,15),wd(),ci$1(14,yi,1,0,`div`,16),wd(),ga(15,`div`,17),ci$1(16,xi,2,0,`div`,18)(17,Si,5,1,`div`,19),wd()),u&2){let m,E=a._unwrapMaybeSignal(a._control.disabled);ri$1(2),vt$1(`mdc-text-field--filled`,!a._hasOutline())(`mdc-text-field--outlined`,a._hasOutline())(`mdc-text-field--no-label`,!a._hasFloatingLabel())(`mdc-text-field--disabled`,E)(`mdc-text-field--invalid`,a._unwrapMaybeSignal(a._control.errorState)),ri$1(2),li$1(!a._hasOutline()&&!E?4:-1),ri$1(2),li$1(a._hasOutline()?6:-1),ri$1(),li$1(a._hasIconPrefix?7:-1),ri$1(),li$1(a._hasTextPrefix?8:-1),ri$1(2),li$1(!a._hasOutline()||a._forceDisplayInfixLabel()?10:-1),ri$1(2),li$1(a._hasTextSuffix?12:-1),ri$1(),li$1(a._hasIconSuffix?13:-1),ri$1(),li$1(a._hasOutline()?-1:14),ri$1(),vt$1(`mat-mdc-form-field-subscript-dynamic-size`,a.subscriptSizing===`dynamic`);let Mi=a._getSubscriptMessageType();ri$1(),li$1((m=Mi)===`error`?16:m===`hint`?17:-1)}},dependencies:[ei,ii,wT,ni,Ft],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var Vt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ye({type:i});static ɵinj=fe({imports:[pv,li,ro]})}return i})();var yr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=ke({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})();var xr={passive:!0};var di=(()=>{class i{_platform=m(Se$1);_ngZone=m(V);_renderer=m(tt).createRenderer(null,null);_styleLoader=m(zt);_monitoredElements=/* @__PURE__ */ new Map;monitor(e){if(!this._platform.isBrowser)return xn$1;this._styleLoader.load(yr);let n=yn$1(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new $,s=`cdk-text-field-autofilled`,d=k=>{k.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(s)?(n.classList.add(s),this._ngZone.run(()=>o.next({target:k.target,isAutofilled:!0}))):k.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(s)&&(n.classList.remove(s),this._ngZone.run(()=>o.next({target:k.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,d,xr)));return this._monitoredElements.set(n,{subject:o,unlisten:h}),o}stopMonitoring(e){let n=yn$1(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var ci=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ye({type:i});static ɵinj=fe({})}return i})();var ui=new b(`MAT_INPUT_VALUE_ACCESSOR`);var mi=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),r=e().touched();return n&&r}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();var Qe=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(t,e,n,r,o){this._defaultMatcher=t,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o,e?dn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let t=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==t&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&t?.isSignalErrorState)return t.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return t?.isErrorState(n,e)??!1}};var Cr=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Sr=new b(`MAT_INPUT_CONFIG`);var ns=(()=>{class i{_elementRef=m(be$1);_platform=m(Se$1);ngControl=m(Z,{optional:!0,self:!0});_autofillMonitor=m(di);_ngZone=m(V);_formField=m(kt,{optional:!0});_renderer=m(Wr);_uid=m(gf).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(Sr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new $;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e4(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(De.required)??!1}set required(e){this._required=e4(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&H3().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=e4(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>H3().has(e));constructor(){let e=m(wt,{optional:!0}),n=m(Et,{optional:!0}),r=m(mi),o=m(ui,{optional:!0,self:!0}),s=m(Qn,{optional:!0,self:!0}),d=this._elementRef.nativeElement,h=d.nodeName.toLowerCase();o?dn(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=d,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(d,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Qe(r,s||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h===`select`,this._isTextarea=h===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=d.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&$s(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type===`number`?(n.type=`text`,n.setSelectionRange(0,0),n.type=`number`):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute(`placeholder`,e):n.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Cr.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(n,r){n&1&&ub(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),n&2&&(lb(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),or$1(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),vt$1(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Bt]},exportAs:[`matInput`],features:[Ob([{provide:It,useExisting:i}]),va]})}return i})();var is=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ye({type:i});static ɵinj=fe({imports:[Vt,Vt,ci,ro]})}return i})();var Mr=Math.pow(2,31)-1;var Fe=class{_overlayRef;instance;containerInstance;_afterDismissed=new $;_afterOpened=new $;_onAction=new $;_durationTimeoutId;_dismissedByAction=!1;constructor(t,e){this._overlayRef=e,this.containerInstance=t,t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,Mr))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var fi=new b(`MatSnackBarData`);var be=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Nr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return i})();var wr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return i})();var Er=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ot({type:i,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return i})();var Dr=(()=>{class i{snackBarRef=m(Fe);data=m(fi);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){function e(n,r){if(n&1){let o=CS();ga(0,`div`,1)(1,`button`,2),ub(`click`,function(){Gp(o);let d=TS();return qp(d.action())}),eC(2),wd()()}if(n&2){let o=TS();ri$1(2),Td(` `,o.data.action,` `)}}return ke({type:i,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(r,o){r&1&&(ga(0,`div`,0),eC(1),wd(),ci$1(2,e,3,1,`div`,1)),r&2&&(ri$1(),Td(` `,o.data.message,`
`),ri$1(),li$1(o.hasAction?2:-1))},dependencies:[B4,Nr,wr,Er],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return i})();var Rt=`_mat-snack-bar-enter`;var Ot=`_mat-snack-bar-exit`;var Ar=(()=>{class i extends et{_ngZone=m(V);_elementRef=m(be$1);_changeDetectorRef=m(jC);_platform=m(Se$1);_animationsDisabled=ao();snackBarConfig=m(be);_document=m(F);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=m(te);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new $;_onExit=new $;_onEnter=new $;_animationState=`void`;_live;_label;_role;_liveElementId=m(gf).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Ot?this._completeExit():e===Rt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Ku(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Rt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Rt)},200)))}exit(){return this._destroyed?Ze$1(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Ku(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ot)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ot),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(s=>e.classList.add(s)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,o=`mdc-snackbar__label`;r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<n.length;r++){let o=n[r],s=o.getAttribute(`aria-owns`);this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute(`aria-owns`,s+` `+e):o.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute(`aria-owns`);if(n){let r=n.replace(this._liveElementId,``).trim();r.length>0?e.setAttribute(`aria-owns`,r):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector(`[aria-hidden]`),r=e.querySelector(`[aria-live]`);if(n&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(o=document.activeElement),n.removeAttribute(`aria-hidden`),r.appendChild(n),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`label`];function n(r,o){}return ke({type:i,selectors:[[`mat-snack-bar-container`]],viewQuery:function(o,s){if(o&1&&mb(Pe$2,7)(e,7),o&2){let d;MS(d=AS())&&(s._portalOutlet=d.first),MS(d=AS())&&(s._label=d.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(o,s){o&1&&ub(`animationend`,function(h){return s.onAnimationEnd(h.animationName)})(`animationcancel`,function(h){return s.onAnimationEnd(h.animationName)}),o&2&&vt$1(`mat-snack-bar-container-enter`,s._animationState===`visible`)(`mat-snack-bar-container-exit`,s._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!s._animationsDisabled)},features:[Jr],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(o,s){o&1&&(ga(0,`div`,1)(1,`div`,2,0)(3,`div`,3),tb(4,n,0,0,`ng-template`,4),wd(),sb(5,`div`),wd()()),o&2&&(ri$1(5),or$1(`aria-live`,s._live)(`role`,s._role)(`id`,s._liveElementId))},dependencies:[Pe$2],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var Fr=new b(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new be});var Ns=(()=>{class i{_live=m(tx);_injector=m(te);_breakpointObserver=m(ff);_parentSnackBar=m(i,{optional:!0,skipSelf:!0});_defaultConfig=m(Fr);_animationsDisabled=ao();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Dr;snackBarContainerComponent=Ar;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n=``,r){let o=S(S({},this._defaultConfig),r);return o.data={message:e,action:n},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,o=te.create({parent:r||this._injector,providers:[{provide:be,useValue:n}]}),s=new bt$1(this.snackBarContainerComponent,n.viewContainerRef,o),d=e.attach(s);return d.instance.snackBarConfig=n,d.instance}_attach(e,n){let r=S(S(S({},new be),this._defaultConfig),n),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),d=new Fe(s,o);if(e instanceof zr){let h=new Y$2(e,null,{$implicit:r.data,snackBarRef:d});d.instance=s.attachTemplatePortal(h)}else{let h=this._createInjector(r,d),k=new bt$1(e,void 0,h);d.instance=s.attachComponentPortal(k).instance}return this._breakpointObserver.observe(G3.HandsetPortrait).pipe(wo(o.detachments())).subscribe(h=>{o.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(d,r),this._openedSnackBarRef=d,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new U;n.direction=e.direction;let r=de(this._injector),o=e.direction===`rtl`,s=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!o||e.horizontalPosition===`end`&&o,d=!s&&e.horizontalPosition!==`center`;return s?r.left(`0`):d?r.right(`0`):r.centerHorizontally(),e.verticalPosition===`top`?r.top(`0`):r.bottom(`0`),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,At$1(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return te.create({parent:r||this._injector,providers:[{provide:Fe,useValue:n},{provide:fi,useValue:e.data}]})}static ɵfac=function(n){return new(n||i)};static ɵprov=L({token:i,factory:i.ɵfac})}return i})();export{wt as C,ns as S,hr as _,Fn as a,li as b,Qe as c,We as d,Wn as f,cr as g,Z as h,Et as i,Qn as l,Yr as m,At as n,It as o,Xr as p,De as r,Ns as s,An as t,Vt as u,is as v,mi as x,kt as y};