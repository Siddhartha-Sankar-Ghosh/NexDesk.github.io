import{$ as J,$n as sb,$t as ct,An as li,At as Ue$1,B as CT,Bn as oC,Bt as Ze,C as he,Cn as it,Cr as zt,Ct as TD,Dt as Td,E as ne,En as jc,Et as Tb,F as B4,Fn as mn$1,Ft as Wb,G as F,Gn as pC,Gt as b,H as Cd,Hn as ot,Ht as aD,I as BN,In as mx,It as Wr,J as Gb,Jt as bv,K as Fv,Kn as pb,Kt as bC,L as Bt,Ln as nS,Lt as Xr,M as AS,Mn as mC,Mt as V4,N as Aa,Nn as mb,O as $,On as ke,Ot as Tn,P as Ac,Pn as mf,Qn as ro$1,Qt as ci,R as CD,Rn as nw,S as et,Sn as ir,Sr as zr,St as Se$1,T as kt$1,Tn as jN,Tt as TT,U as DS,Un as ow,V as Cb,Vn as or,Vt as _v,W as Eh,Wn as p4,Wt as ao$1,Xn as rC,Xt as cD,Y as Gp,Yn as qp,Yt as cC,Z as H8,Zn as ri,Zt as cb,_ as Y,a as Ce,ar as tx,at as L,b as bt$1,bn as hp,bt as SD,c as H,cr as ui,ct as MS,d as Si$1,dn as gD,dr as vb,en as dC,er as sm,et as JN,f as St$1,fn as ga,fr as vt$1,ft as OS,g as Vt,gr as xb,gt as RN,h as Ve,hn as gn,hr as wo,i as At,in as eC,it as Ku,jn as m,jt as V,kn as lb,kt as U8,l as Pe$1,ln as ft,lr as vS,lt as Mb,m as U,mn as gf,mr as wd,mt as Pe,n as _t$1,nr as tb,nt as K,o as Et$1,on as ev,or as ub,p as T,pt as Ob,qn as pt,qt as be$1,r as $t$1,rr as te,rt as Ka$1,s as Gt,sn as fe,sr as uf,st as Lv,t as Vt$1,tn as dn$1,tt as Jr,u as Pt,ur as va$1,v as _e$1,vn as hn$1,vr as yS,w as ke$1,wn as jC,wt as TS,x as de,xn as ib,xt as Sd,y as at,yn as ho,yr as ye,yt as S,z as CS,zn as nx,zt as Zb}from"./main.js";import{C as wt,S as ns,_ as hr,a as Fn,b as li$1,c as Qe$1,f as Wn,g as cr,h as Z,i as Et$2,l as Qn,m as Yr,n as At$1,o as It,p as Xr$1,r as De,s as Ns,u as Vt$2,v as is,x as mi,y as kt$2}from"./chunk-CUgikDNy.js";var gt=class{applyChanges(a,e,t,i,o){a.forEachOperation((r,l,c)=>{let m,u;if(r.previousIndex==null){let g=t(r,l,c);m=e.createEmbeddedView(g.templateRef,g.context,g.index),u=H.INSERTED}else c==null?(e.remove(l),u=H.REMOVED):(m=e.get(l),e.move(m,c),u=H.MOVED);o&&o({context:m?.context,operation:u,record:r})})}detach(){}};var ee=new b(`CDK_TABLE`);var bt=(()=>{class n{template=m(zr);static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var vt=(()=>{class n{template=m(zr);static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var Oi=(()=>{class n{template=m(zr);static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var Le=(()=>{class n{_table=m(ee,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,o){if(t&1&&pb(o,bt,5)(o,vt,5)(o,Oi,5),t&2){let r;MS(r=AS())&&(i.cell=r.first),MS(r=AS())&&(i.headerCell=r.first),MS(r=AS())&&(i.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,Bt],stickyEnd:[2,`stickyEnd`,`stickyEnd`,Bt]}})}return n})();var _t=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}};var Ti=(()=>{class n extends _t{constructor(){super(m(Le),m(be$1))}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Jr]})}return n})();var Ei=(()=>{class n extends _t{constructor(){let e=m(Le),t=m(be$1);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Jr]})}return n})();var Yt=(()=>{class n{template=m(zr);_differs=m(Gb);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Qe?e.headerCell.template:this instanceof Xt?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,features:[va$1]})}return n})();var Qe=(()=>{class n extends Yt{_table=m(ee,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,Bt]},features:[Jr,va$1]})}return n})();var Xt=(()=>{class n extends Yt{_table=m(ee,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,Bt]},features:[Jr,va$1]})}return n})();var Ct=(()=>{class n extends Yt{_table=m(ee,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Jr]})}return n})();var Se=(()=>{class n{_viewContainer=m(Xr);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var Zt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=ke({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&cb(0,0)},dependencies:[Se],encapsulation:2,changeDetection:1})}return n})();var Jt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=ke({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&cb(0,0)},dependencies:[Se],encapsulation:2,changeDetection:1})}return n})();var Ni=(()=>{class n{templateRef=m(zr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var Si=[`top`,`bottom`,`left`,`right`];var $t=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=/* @__PURE__ */ new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,t=!0,i=!0,o,r,l){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));Ku({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,t,i=!0,o=!0){if(!a.length||!this._isBrowser||!(e.some(G=>G)||t.some(G=>G))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],l=r.children.length,c=this.direction===`rtl`,m=c?`right`:`left`,u=c?`left`:`right`,g=e.lastIndexOf(!0),b=t.indexOf(!0),d,w,L;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),Ku({earlyRead:()=>{d=this._getCellWidths(r,i),w=this._getStickyStartColumnPositions(d,e),L=this._getStickyEndColumnPositions(d,t)},write:()=>{for(let G of a)for(let U=0;U<l;U++){let gn=G.children[U];e[U]&&this._addStickyStyle(gn,m,w[U],U===g),t[U]&&this._addStickyStyle(gn,u,L[U],U===b)}this._positionListener&&d.some(G=>!!G)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:d.slice(0,g+1).map((G,U)=>e[U]?G:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:b===-1?[]:d.slice(b).map((G,U)=>t[U+b]?G:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,t){if(!this._isBrowser)return;let i=t===`bottom`?a.slice().reverse():a,o=t===`bottom`?e.slice().reverse():e,r=[],l=[],c=[];Ku({earlyRead:()=>{for(let m=0,u=0;m<i.length;m++){if(!o[m])continue;r[m]=u;let g=i[m];c[m]=this._isNativeHtmlTable?Array.from(g.children):[g];let b=this._retrieveElementSize(g).height;u+=b,l[m]=b}},write:()=>{let m=o.lastIndexOf(!0);for(let u=0;u<i.length;u++){if(!o[u])continue;let g=r[u],b=u===m;for(let d of c[u])this._addStickyStyle(d,t,g,b)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&Ku({write:()=>{let t=a.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]=``,a.classList.remove(this._borderCellCss[i]);Si.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex=``,this._needsPositionStickyOnElement&&(a.style.position=``),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Si)a.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=i,i+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=i,i+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:`border-box`})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(a){let e=!1;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&pa(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function pa(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(a=>n.classList.contains(a))}function Ri(n){return Error(`Could not find column with id "${n}".`)}var Ue=new b(`STICKY_POSITIONING_LISTENER`);var en=(()=>{class n{viewContainer=m(Xr);elementRef=m(be$1);constructor(){let e=m(ee);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var tn=(()=>{class n{viewContainer=m(Xr);elementRef=m(be$1);constructor(){let e=m(ee);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var nn=(()=>{class n{viewContainer=m(Xr);elementRef=m(be$1);constructor(){let e=m(ee);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var an=(()=>{class n{viewContainer=m(Xr);elementRef=m(be$1);constructor(){let e=m(ee);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var on=(()=>{class n{_differs=m(Gb);_changeDetectorRef=m(jC);_elementRef=m(be$1);_dir=m(RN,{optional:!0});_platform=m(Se$1);_viewRepeater;_viewportRuler=m(T);_injector=m(te);_virtualScrollViewport=m(Si$1,{optional:!0,host:!0});_positionListener=m(Ue,{optional:!0})||m(Ue,{optional:!0,skipSelf:!0});_document=m(F);_data;_renderedRange;_onDestroy=new $;_renderRows;_renderChangeSubscription=null;_columnDefsByName=/* @__PURE__ */ new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=/* @__PURE__ */ new Set;_customRowDefs=/* @__PURE__ */ new Set;_customHeaderRowDefs=/* @__PURE__ */ new Set;_customFooterRowDefs=/* @__PURE__ */ new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=/* @__PURE__ */ new Map;_rowDefsByView=/* @__PURE__ */ new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new $;_footerRowStickyUpdates=new $;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new $;_dataStream=new $;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Pe;viewChange=new Tn({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){m(new Aa(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(wo(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new $t$1:new gt,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Ve(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{if(i.operation===H.INSERTED&&i.context){this._renderCellTemplateForItem(i.record.item.rowDef,i.context);let o=t.get(i.record.currentIndex);this._rowDefsByView.set(o,i.record.item.rowDef)}}),e.forEachIdentityChange(i=>{let o=i.currentIndex,r=t.get(o);if(this._rowDefsByView.get(r)!==i.item.rowDef){t.remove(o);let l=this._renderRow(this._rowOutlet,i.item.rowDef,o,{$implicit:i.item.data});this._rowDefsByView.set(l,i.item.rowDef)}else r.context.$implicit=i.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=Mi(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=Mi(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===o&&r.push(t[l]);this._addStickyColumnStyles(r,o)}),i.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=/* @__PURE__ */ new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],l=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,/* @__PURE__ */ new WeakMap);for(let c=0;c<l.length;c++){let m=l[c],u=this._cachedRenderRowsMap.get(m.data);u.has(m.rowDef)?u.get(m.rowDef).push(m):u.set(m.rowDef,[m]),e.push(m)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let l=i&&i.has(r)?i.get(r):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),yt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=yt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=yt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=yt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let c=!!l.getColumnsDiff();return r||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],Ve(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Ve(this.dataSource)?e=this.dataSource.connect(this):gD(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Ze(this.dataSource)),this._renderChangeSubscription=Ac([e,this.viewChange]).pipe(wo(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);if(!c)throw Ri(l);return c}),o=i.map(l=>l.sticky),r=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&i.push(o)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return{templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))Se.mostRecentCellOutlet&&Se.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);if(!i)throw Ri(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new $t(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Ze()).pipe(wo(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?cD:aD;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(TD(0,t),wo(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),Ac([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(wo(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let l=o.elements[r];if(l){let c=o.offsets[r],m=i!==0?Math.max(i-c,c):-c;for(let u of l)u.style.top=`${-m}px`}}}),Ac([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(wo(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let l=o.elements[r];if(l)for(let c of l)c.style.bottom=`${i+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let r=e.start-i.start,l=e.end-e.start,c,m;for(let b=0;b<l;b++){let d=o.get(b+r);if(d&&d.rootNodes.length){c=m=d.rootNodes[0];break}}for(let b=l-1;b>-1;b--){let d=o.get(b+r);if(d&&d.rootNodes.length){m=d.rootNodes[d.rootNodes.length-1];break}}let u=c?.getBoundingClientRect?.(),g=m?.getBoundingClientRect?.();return u&&g?g.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function i(l,c){l&1&&it(0,2)}function o(l,c){l&1&&(ga(0,`thead`,0),cb(1,1),wd(),ga(2,`tbody`,0),cb(3,2)(4,3),wd(),ga(5,`tfoot`,0),cb(6,4),wd())}function r(l,c){l&1&&cb(0,1)(1,2)(2,3)(3,4)}return ke({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(c,m,u){if(c&1&&pb(u,Ni,5)(u,Le,5)(u,Ct,5)(u,Qe,5)(u,Xt,5),c&2){let g;MS(g=AS())&&(m._noDataRow=g.first),MS(g=AS())&&(m._contentColumnDefs=g),MS(g=AS())&&(m._contentRowDefs=g),MS(g=AS())&&(m._contentHeaderRowDefs=g),MS(g=AS())&&(m._contentFooterRowDefs=g)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(c,m){c&2&&vt$1(`cdk-table-fixed-layout`,m.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,Bt],fixedLayout:[2,`fixedLayout`,`fixedLayout`,Bt],recycleRows:[2,`recycleRows`,`recycleRows`,Bt]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[Ob([{provide:ee,useExisting:n},{provide:Ue,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(c,m){c&1&&(ir(e),it(0),it(1,1),ci(2,i,1,0),ci(3,o,7,0)(4,r,4,0)),c&2&&(ri(2),li(m._isServer?2:-1),ri(),li(m._isNativeHtmlTable?3:4))},dependencies:[tn,en,an,nn],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return n})();function yt(n,a){return n.concat(Array.from(a))}function Mi(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var Ii=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({imports:[St$1]})}return n})();var Ke=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new $;bulk={select:a=>this._select(a),deselect:a=>this._deselect(a),setSelection:a=>this._setSelection(a)};constructor(a=!1,e,t=!0,i){this._multiple=a,this._emitChanges=t,this.compareWith=i,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){return this._select(a)}deselect(...a){return this._deselect(a)}setSelection(...a){return this._setSelection(a)}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_select(a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var Fi=(()=>{class n extends on{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function i(l,c){l&1&&it(0,2)}function o(l,c){l&1&&(ga(0,`thead`,0),cb(1,1),wd(),ga(2,`tbody`,2),cb(3,3)(4,4),wd(),ga(5,`tfoot`,0),cb(6,5),wd())}function r(l,c){l&1&&cb(0,1)(1,3)(2,4)(3,5)}return ke({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(c,m){c&2&&vt$1(`mat-table-fixed-layout`,m.fixedLayout)},exportAs:[`matTable`],features:[Ob([{provide:on,useExisting:n},{provide:ee,useExisting:n},{provide:Ue,useValue:null}]),Jr],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(c,m){c&1&&(ir(e),it(0),it(1,1),ci(2,i,1,0),ci(3,o,7,0)(4,r,4,0)),c&2&&(ri(2),li(m._isServer?2:-1),ri(),li(m._isNativeHtmlTable?3:4))},dependencies:[tn,en,an,nn],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Ai=(()=>{class n extends bt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`matCellDef`,``]],features:[Ob([{provide:bt,useExisting:n}]),Jr]})}return n})();var Pi=(()=>{class n extends vt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[Ob([{provide:vt,useExisting:n}]),Jr]})}return n})();var Li=(()=>{class n extends Le{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[Ob([{provide:Le,useExisting:n}]),Jr]})}return n})();var Bi=(()=>{class n extends Ti{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Jr]})}return n})();var Vi=(()=>{class n extends Ei{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Jr]})}return n})();var zi=(()=>{class n extends Qe{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,Bt]},features:[Ob([{provide:Qe,useExisting:n}]),Jr]})}return n})();var Hi=(()=>{class n extends Ct{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[Ob([{provide:Ct,useExisting:n}]),Jr]})}return n})();var ji=(()=>{class n extends Zt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵcmp=ke({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[Ob([{provide:Zt,useExisting:n}]),Jr],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&cb(0,0)},dependencies:[Se],encapsulation:2,changeDetection:1})}return n})();var Wi=(()=>{class n extends Jt{static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵcmp=ke({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[Ob([{provide:Jt,useExisting:n}]),Jr],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&cb(0,0)},dependencies:[Se],encapsulation:2,changeDetection:1})}return n})();var qi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({imports:[Ii,ro$1]})}return n})();var Gi=(()=>{class n{_animationsDisabled=ao$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=ke({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&vt$1(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var sn=new b(`MAT_OPTION_PARENT_COMPONENT`);var ln=new b(`MatOptgroup`);var rn=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}};var _e=(()=>{class n{_element=m(be$1);_changeDetectorRef=m(jC);_parent=m(sn,{optional:!0});group=m(ln,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(gf).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ue$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Pe;_text;_stateChanges=new $;constructor(){let e=m(zt);e.load(Fv),e.load(Ka$1),this._signalDisableRipple=!!this._parent&&dn$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!_v(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new rn(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`text`],t=[[[`mat-icon`]],`*`],i=[`mat-icon`,`*`];function o(c,m){if(c&1&&sb(0,`mat-pseudo-checkbox`,1),c&2){let u=TS();ib(`disabled`,u.disabled)(`state`,u.selected?`checked`:`unchecked`)}}function r(c,m){if(c&1&&sb(0,`mat-pseudo-checkbox`,3),c&2){let u=TS();ib(`disabled`,u.disabled)}}function l(c,m){if(c&1&&(ga(0,`span`,4),eC(1),wd()),c&2){let u=TS();ri(),Td(`(`,u.group.label,`)`)}}return ke({type:n,selectors:[[`mat-option`]],viewQuery:function(m,u){if(m&1&&mb(e,7),m&2){let g;MS(g=AS())&&(u._text=g.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(m,u){m&1&&ub(`click`,function(){return u._selectViaInteraction()})(`keydown`,function(b){return u._handleKeydown(b)}),m&2&&(lb(`id`,u.id),or(`aria-selected`,u.selected)(`aria-disabled`,u.disabled.toString()),vt$1(`mdc-list-item--selected`,u.selected)(`mat-mdc-option-multiple`,u.multiple)(`mat-mdc-option-active`,u.active)(`mdc-list-item--disabled`,u.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,Bt]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:i,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(m,u){m&1&&(ir(t),ci(0,o,1,2,`mat-pseudo-checkbox`,1),it(1),ga(2,`span`,2,0),it(4,1),wd(),ci(5,r,1,1,`mat-pseudo-checkbox`,3),ci(6,l,2,1,`span`,4),sb(7,`div`,5)),m&2&&(li(u.multiple?0:-1),ri(5),li(!u.multiple&&u.selected&&!u.hideSingleSelectionIndicator?5:-1),ri(),li(u.group&&u.group._inert?6:-1),ri(),ib(`matRippleTrigger`,u._getHostElement())(`matRippleDisabled`,u.disabled||u.disableRipple))},dependencies:[Gi,p4],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return n})();function Ui(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),o=0;for(let r=0;r<n+1;r++)t[r].group&&t[r].group===i[o]&&o++;return o}return 0}function Qi(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var Ki=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({imports:[ro$1]})}return n})();var cn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({imports:[Lv,Ki,_e,ro$1]})}return n})();var _a=new b(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(te);return()=>Pt(n)}});var ba=new b(`MAT_SELECT_CONFIG`);var va=new b(`MatSelectTrigger`);var dn=class{source;value;constructor(a,e){this.source=a,this.value=e}};var kt=(()=>{class n{_viewportRuler=m(T);_changeDetectorRef=m(jC);_elementRef=m(be$1);_dir=m(RN,{optional:!0});_idGenerator=m(gf);_renderer=m(Wr);_parentFormField=m(kt$2,{optional:!0});ngControl=m(Z,{self:!0,optional:!0});_liveAnnouncer=m(tx);_defaultOptions=m(ba,{optional:!0});_animationsDisabled=ao$1();_popoverLocation;_initialized=new $;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=Ui(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=Qi(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new dn(this,e)}_scrollStrategyFactory=m(_a);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new $;_errorStateTracker;stateChanges=new $;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ue$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(De.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=SD(()=>{let e=this.options;return e?e.changes.pipe(jc(e),hp(()=>CD(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(hp(()=>this.optionSelectionChanges))});openedChange=new Pe;_openedStream=this.openedChange.pipe(ft(e=>e),K(()=>{}));_closedStream=this.openedChange.pipe(ft(e=>!e),K(()=>{}));selectionChange=new Pe;valueChange=new Pe;constructor(){let e=m(mi),t=m(wt,{optional:!0}),i=m(Et$2,{optional:!0}),o=m(new Aa(`tabindex`),{optional:!0}),r=m(Vt,{optional:!0}),l=m(Qn,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Qe$1(e,l||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Ke(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(wo(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(wo(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(jc(null),wo(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(pt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!_v(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!_v(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!_v(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Et$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new mf(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=CD(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(wo(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),CD(...this.options.map(t=>t._stateChanges)).pipe(wo(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=ct(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`trigger`],t=[`panel`],i=[[[`mat-select-trigger`]],`*`],o=[`mat-select-trigger`,`*`];function r(g,b){if(g&1&&(ga(0,`span`,4),eC(1),wd()),g&2){let d=TS();ri(),Cb(d.placeholder)}}function l(g,b){g&1&&it(0)}function c(g,b){if(g&1&&(ga(0,`span`,11),eC(1),wd()),g&2){let d=TS(2);ri(),Cb(d.triggerValue)}}function m(g,b){if(g&1&&(ga(0,`span`,5),ci(1,l,1,0)(2,c,2,1,`span`,11),wd()),g&2){let d=TS();ri(),li(d.customTrigger?1:2)}}function u(g,b){if(g&1){let d=CS();ga(0,`div`,12,1),ub(`keydown`,function(L){Gp(d);let G=TS();return qp(G._handleKeydown(L))}),it(2,1),wd()}if(g&2){let d=TS();ui(d.panelClass),vt$1(`mat-select-panel-animations-enabled`,!d._animationsDisabled)(`mat-primary`,d._parentFormField?.color===`primary`)(`mat-accent`,d._parentFormField?.color===`accent`)(`mat-warn`,d._parentFormField?.color===`warn`)(`mat-undefined`,!d._parentFormField?.color),or(`id`,d.id+`-panel`)(`aria-multiselectable`,d.multiple)(`aria-label`,d.ariaLabel||null)(`aria-labelledby`,d._getPanelAriaLabelledby())}}return ke({type:n,selectors:[[`mat-select`]],contentQueries:function(b,d,w){if(b&1&&pb(w,va,5)(w,_e,5)(w,ln,5),b&2){let L;MS(L=AS())&&(d.customTrigger=L.first),MS(L=AS())&&(d.options=L),MS(L=AS())&&(d.optionGroups=L)}},viewQuery:function(b,d){if(b&1&&mb(e,5)(t,5)(Ce,5),b&2){let w;MS(w=AS())&&(d.trigger=w.first),MS(w=AS())&&(d.panel=w.first),MS(w=AS())&&(d._overlayDir=w.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(b,d){b&1&&ub(`keydown`,function(L){return d._handleKeydown(L)})(`focus`,function(){return d._onFocus()})(`blur`,function(){return d._onBlur()}),b&2&&(or(`id`,d.id)(`tabindex`,d.disabled?-1:d.tabIndex)(`aria-controls`,d.panelOpen?d.id+`-panel`:null)(`aria-expanded`,d.panelOpen)(`aria-label`,d.ariaLabel||null)(`aria-required`,d.required.toString())(`aria-disabled`,d.disabled.toString())(`aria-invalid`,d.errorState)(`aria-activedescendant`,d._getAriaActiveDescendant()),vt$1(`mat-mdc-select-disabled`,d.disabled)(`mat-mdc-select-invalid`,d.errorState)(`mat-mdc-select-required`,d.required)(`mat-mdc-select-empty`,d.empty)(`mat-mdc-select-multiple`,d.multiple)(`mat-select-open`,d.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,Bt],disableRipple:[2,`disableRipple`,`disableRipple`,Bt],tabIndex:[2,`tabIndex`,`tabIndex`,g=>g==null?0:Zb(g)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,Bt],placeholder:`placeholder`,required:[2,`required`,`required`,Bt],multiple:[2,`multiple`,`multiple`,Bt],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,Bt],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Zb],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,Bt]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[Ob([{provide:It,useExisting:n},{provide:sn,useExisting:n}]),va$1],ngContentSelectors:o,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(b,d){if(b&1&&(ir(i),ga(0,`div`,2,0),ub(`click`,function(){return d.open()}),ga(3,`div`,3),ci(4,r,2,1,`span`,4)(5,m,3,1,`span`,5),wd(),ga(6,`div`,6)(7,`div`,7),sm(),ga(8,`svg`,8),sb(9,`path`,9),wd()()()(),tb(10,u,3,16,`ng-template`,10),ub(`detach`,function(){return d.close()})(`backdropClick`,function(){return d.close()})(`overlayKeydown`,function(L){return d._handleOverlayKeydown(L)})),b&2){let w=OS(1);ri(3),or(`id`,d._valueId),ri(),li(d.empty?4:5),ri(6),ib(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,d._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,d._scrollStrategy)(`cdkConnectedOverlayOrigin`,d._preferredOverlayOrigin||w)(`cdkConnectedOverlayPositions`,d._positions)(`cdkConnectedOverlayWidth`,d._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,d._popoverLocation)}},dependencies:[Et$1,Ce],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return n})();var St=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({imports:[ke$1,cn,ro$1,kt$1,Vt$2,cn]})}return n})();var be=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var un=(()=>{class n extends et{_elementRef=m(be$1);_focusTrapFactory=m(JN);_config;_interactivityChecker=m(bv);_ngZone=m(V);_focusMonitor=m(uf);_renderer=m(Wr);_changeDetectorRef=m(jC);_injector=m(te);_platform=m(Se$1);_document=m(F);_portalOutlet;_focusTrapped=new $;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=m(be,{optional:!0})||new be,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),r(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,i),r=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||Ku(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=jN(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=jN();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=jN()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){function e(t,i){}return ke({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(i,o){if(i&1&&mb(Pe$1,7),i&2){let r;MS(r=AS())&&(o._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(i,o){i&2&&or(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[Jr],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&tb(0,e,0,0,`ng-template`,0)},dependencies:[Pe$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Re=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new $;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!_v(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a=``,e=``){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}};var Ca=new b(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=m(te);return()=>ne(n)}});var wa=new b(`DialogData`);var xa=new b(`DefaultDialogConfig`);function Da(n){let a=Ue$1(n),e=new Pe;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var pn=(()=>{class n{_injector=m(te);_defaultOptions=m(xa,{optional:!0});_parentDialog=m(n,{optional:!0,skipSelf:!0});_overlayContainer=m(he);_idGenerator=m(gf);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new $;_afterOpenedAtThisLevel=new $;_ariaHiddenElements=/* @__PURE__ */ new Map;_scrollStrategy=m(Ca);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=SD(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(jc(void 0)));open(e,t){let i=this._defaultOptions||new be;t=S(S({},i),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),r=At(this._injector,o),l=new Re(r,t),c=this._attachContainer(r,l,t);if(l.containerInstance=c,!this.openDialogs.length){let m=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(pt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(m)}):this._hideNonDialogContentFromAssistiveTechnology(m)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){mn(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){mn(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),mn(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new U({positionStrategy:e.positionStrategy||de().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let o=i.injector||i.viewContainerRef?.injector,r=[{provide:be,useValue:i},{provide:Re,useValue:t},{provide:at,useValue:e}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,r.push(...i.container.providers(i))):l=un;let c=new bt$1(l,i.viewContainerRef,te.create({parent:o||this._injector,providers:r}));return e.attach(c).instance}_attachDialogContent(e,t,i,o){if(e instanceof zr){let r=this._createInjector(o,t,i,void 0),l={$implicit:o.data,dialogRef:t};o.templateContext&&(l=S(S({},l),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),i.attachTemplatePortal(new Y(e,null,l,r))}else{let r=this._createInjector(o,t,i,this._injector),l=i.attachComponentPortal(new bt$1(e,o.viewContainerRef,r,null,o.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,o){let r=e.injector||e.viewContainerRef?.injector,l=[{provide:wa,useValue:e.data},{provide:Re,useValue:t}];return e.providers&&(typeof e.providers==`function`?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!r||!r.get(RN,null,{optional:!0}))&&l.push({provide:RN,useValue:Da(e.direction)}),te.create({parent:r||o,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute(`aria-hidden`,o):r.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let o=t[i];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=L({token:n,factory:n.ɵfac})}return n})();function mn(n,a){let e=n.length;for(;e--;)a(n[e])}var Zi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({providers:[pn],imports:[ke$1,Gt,nx,Gt]})}return n})();var Mt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var hn=`mdc-dialog--open`;var Ji=`mdc-dialog--opening`;var ea=`mdc-dialog--closing`;var ka=150;var Sa=75;var Ra=(()=>{class n extends un{_animationStateChanged=new Pe;_animationsEnabled=!ao$1();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?na(this._config.enterAnimationDuration)??ka:0;_exitAnimationDuration=this._animationsEnabled?na(this._config.exitAnimationDuration)??Sa:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ta,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Ji,hn)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(hn),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(hn),this._animationsEnabled?(this._hostElement.style.setProperty(ta,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ea)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Ji,ea)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵcmp=(function(){function e(t,i){}return ke({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(i,o){i&2&&(lb(`id`,o._config.id),or(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),vt$1(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[Jr],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(i,o){i&1&&(ga(0,`div`,0)(1,`div`,1),tb(2,e,0,0,`ng-template`,2),wd()())},dependencies:[Pe$1],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var ta=`--mat-dialog-transition-duration`;function na(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?BN(n.substring(0,n.length-2)):n.endsWith(`s`)?BN(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var Rt=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(Rt||{});var Me=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ho(1);_beforeClosed=new ho(1);_result;_closeFallbackTimeout;_state=Rt.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(ft(i=>i.state===`opened`),pt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ft(i=>i.state===`closed`),pt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),CD(this.backdropClick(),this.keydownEvents().pipe(ft(i=>i.keyCode===27&&!this.disableClose&&!_v(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),ia(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(ft(t=>t.state===`closing`),pt(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Rt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a=``,e=``){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Rt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ia(n,a,e){return n._closeInteractionType=a,n.close(e)}var fn=new b(`MatMdcDialogData`);var Ma=new b(`mat-mdc-dialog-default-options`);var Oa=new b(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=m(te);return()=>ne(n)}});var $e=(()=>{class n{_defaultOptions=m(Ma,{optional:!0});_scrollStrategy=m(Oa);_parentDialog=m(n,{optional:!0,skipSelf:!0});_idGenerator=m(gf);_injector=m(te);_dialog=m(pn);_animationsDisabled=ao$1();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new $;_afterOpenedAtThisLevel=new $;dialogConfigClass=Mt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=SD(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(jc(void 0)));constructor(){this._dialogRefConstructor=Me,this._dialogContainerType=Ra,this._dialogDataToken=fn}open(e,t){let i;t=S(S({},this._defaultOptions||new Mt),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,J(S({},t),{positionStrategy:de(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:be,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(r,l,c)=>(i=new this._dialogRefConstructor(r,t,c),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:Re,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=L({token:n,factory:n.ɵfac})}return n})();var aa=(()=>{class n{dialogRef=m(Me,{optional:!0});_elementRef=m(be$1);_dialog=m($e);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ca(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&ia(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,i){t&1&&ub(`click`,function(r){return i._onButtonClick(r)}),t&2&&or(`aria-label`,i.ariaLabel||null)(`type`,i.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[va$1]})}return n})();var oa=(()=>{class n{_dialogRef=m(Me,{optional:!0});_elementRef=m(be$1);_dialog=m($e);ngOnInit(){this._dialogRef||(this._dialogRef=ca(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n})}return n})();var ra=(()=>{class n extends oa{id=m(gf).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,i){t&2&&lb(`id`,i.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[Jr]})}return n})();var sa=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=ot({type:n,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[nS([_e$1])]})}return n})();var la=(()=>{class n extends oa{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(i){return(e||(e=Eh(n)))(i||n)}})();static ɵdir=ot({type:n,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,i){t&2&&vt$1(`mat-mdc-dialog-actions-align-start`,i.align===`start`)(`mat-mdc-dialog-actions-align-center`,i.align===`center`)(`mat-mdc-dialog-actions-align-end`,i.align===`end`)},inputs:{align:`align`},features:[Jr]})}return n})();function ca(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var da=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ye({type:n});static ɵinj=fe({providers:[$e],imports:[Zi,ke$1,Gt,ro$1]})}return n})();var Ea=()=>[1,2,3,4];function Na(n,a){if(n&1&&gn(0,`b`),n&2){let e=a.$implicit,t=TS();vb(`height`,4+e*3,`px`),vt$1(`on`,e<=t.level())}}var Ia={Open:`silver`,"In progress":`gold`,Resolved:`ok`,Closed:`mute`,Active:`ok`,"On leave":`warn`,Remote:`silver`,Planning:`silver`,"On hold":`warn`,Completed:`ok`,"To do":`mute`,Review:`silver`,Done:`ok`,"In use":`ok`,"In stock":`silver`,"In repair":`warn`,Retired:`mute`};var Ot=class n{value=Wb.required();tone=bC(()=>Ia[this.value()]??`mute`);static ɵfac=function(e){return new(e||n)};static ɵcmp=ke({type:n,selectors:[[`nx-badge`]],inputs:{value:[1,`value`]},decls:3,vars:3,consts:[[1,`badge`]],template:function(e,t){e&1&&(mn$1(0,`span`,0),gn(1,`i`),eC(2),hn$1()),e&2&&(ui(`badge `+t.tone()),ri(2),Cb(t.value()))},encapsulation:2})};var Fa={Low:1,Medium:2,High:3,Critical:4};var Tt=class n{value=Wb.required();level=bC(()=>Fa[this.value()]??1);static ɵfac=function(e){return new(e||n)};static ɵcmp=ke({type:n,selectors:[[`nx-priority`]],inputs:{value:[1,`value`]},decls:6,vars:5,consts:[[1,`prio`],[1,`bars`],[3,`on`,`height`],[1,`prio-label`]],template:function(e,t){e&1&&(mn$1(0,`span`,0)(1,`span`,1),vS(2,Na,1,4,`b`,2,yS),hn$1(),mn$1(4,`span`,3),eC(5),hn$1()()),e&2&&(or(`aria-label`,`Priority `+t.value()),ri(2),DS(cC(4,Ea)),ri(2),vt$1(`hot`,t.level()===4),ri(),Cb(t.value()))},encapsulation:2})};var Ba=(n,a)=>a.key;function Va(n,a){if(n&1&&(ga(0,`mat-option`,9),eC(1),wd()),n&2){let e=a.$implicit;ib(`value`,e),ri(),Cb(e)}}function za(n,a){if(n&1){let e=CS();ga(0,`mat-select`,8),nw(),Mb(`ngModelChange`,function(i){Gp(e);let o=TS().$implicit,r=TS();return rC(r.model[o.key],i)||(r.model[o.key]=i),qp(i)}),vS(1,Va,2,2,`mat-option`,9,yS),wd()}if(n&2){let e=TS().$implicit,t=TS();xb(`ngModel`,t.model[e.key]),ib(`required`,!!e.required),ow(),ri(),DS(e.options)}}function Ha(n,a){if(n&1){let e=CS();ga(0,`input`,10),nw(),Mb(`ngModelChange`,function(i){Gp(e);let o=TS().$implicit,r=TS();return rC(r.model[o.key],i)||(r.model[o.key]=i),qp(i)}),wd()}if(n&2){let e=TS().$implicit,t=TS();ib(`type`,e.type),xb(`ngModel`,t.model[e.key]),ib(`required`,!!e.required),ow()}}function ja(n,a){if(n&1&&(ga(0,`mat-form-field`,2)(1,`mat-label`),eC(2),wd(),ci(3,za,3,2,`mat-select`,6)(4,Ha,1,3,`input`,7),wd()),n&2){let e=a.$implicit;ri(2),Cb(e.label),ri(),li(e.type===`select`?3:4)}}var Et=class n{data=m(fn);ref=m(Me);model=S({},this.data.model);valid(){return this.data.fields.filter(a=>a.required).every(a=>String(this.model[a.key]??``).trim()!==``)}static ɵfac=function(e){return new(e||n)};static ɵcmp=ke({type:n,selectors:[[`nx-form-dialog`]],decls:11,vars:2,consts:[[`mat-dialog-title`,``],[1,`form-grid`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`],[`align`,`end`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``],[`mat-flat-button`,``,`type`,`button`,3,`click`,`disabled`],[3,`ngModel`,`required`],[`matInput`,``,3,`type`,`ngModel`,`required`],[3,`ngModelChange`,`ngModel`,`required`],[3,`value`],[`matInput`,``,3,`ngModelChange`,`type`,`ngModel`,`required`]],template:function(e,t){e&1&&(ga(0,`h2`,0),eC(1),wd(),ga(2,`mat-dialog-content`)(3,`div`,1),vS(4,ja,5,2,`mat-form-field`,2,Ba),wd()(),ga(6,`mat-dialog-actions`,3)(7,`button`,4),eC(8,`Cancel`),wd(),ga(9,`button`,5),ub(`click`,function(){return t.ref.close(t.model)}),eC(10,`Save changes`),wd()()),e&2&&(ri(),Cb(t.data.title),ri(3),DS(t.data.fields),ri(5),ib(`disabled`,!t.valid()))},dependencies:[Xr$1,Fn,Yr,Wn,cr,da,aa,ra,la,sa,Vt$2,li$1,At$1,is,ns,St,kt,_e,V4,B4],encapsulation:2})};var Wa=(n,a)=>a.key;function qa(n,a){if(n&1){let e=CS();ga(0,`header`,0)(1,`div`,17)(2,`mat-icon`),eC(3),wd()(),ga(4,`div`,18)(5,`h1`),eC(6),wd(),ga(7,`p`),eC(8),wd()(),ga(9,`button`,19),ub(`click`,function(){Gp(e);let i=TS();return qp(i.create())}),ga(10,`mat-icon`),eC(11,`add`),wd(),eC(12),wd()()}if(n&2){let e=TS();ri(3),Cb(e.cfg().icon),ri(3),Cb(e.cfg().title),ri(2),Cb(e.cfg().subtitle),ri(4),Td(`New `,e.cfg().singular)}}function Ga(n,a){if(n&1&&(ga(0,`mat-option`,22),eC(1),wd()),n&2){let e=a.$implicit;ib(`value`,e),ri(),Cb(e)}}function Ua(n,a){if(n&1){let e=CS();ga(0,`mat-form-field`,6)(1,`mat-label`),eC(2),wd(),ga(3,`mat-select`,20),ub(`selectionChange`,function(i){Gp(e);let o=TS();return qp(o.filter.set(i.value))}),ga(4,`mat-option`,21),eC(5,`All`),wd(),vS(6,Ga,2,2,`mat-option`,22,yS),wd()()}if(n&2){let e=TS();ri(2),Cb(e.cfg().filterLabel),ri(),ib(`value`,e.filter()),ri(3),DS(e.cfg().filterOptions)}}function Qa(n,a){if(n&1&&(ga(0,`th`,25),eC(1),wd()),n&2){let e=TS().$implicit;ri(),Cb(e.label)}}function Ka(n,a){if(n&1&&sb(0,`nx-badge`,22),n&2){let e=TS().$implicit,t=TS().$implicit;ib(`value`,e[t.key])}}function $a(n,a){if(n&1&&sb(0,`nx-priority`,22),n&2){let e=TS().$implicit,t=TS().$implicit;ib(`value`,e[t.key])}}function Ya(n,a){if(n&1&&(eC(0),dC(1,`date`)),n&2){let e=TS().$implicit,t=TS().$implicit;Td(` `,pC(1,1,e[t.key],`mediumDate`),` `)}}function Xa(n,a){if(n&1&&(eC(0),dC(1,`date`)),n&2){let e=TS().$implicit,t=TS().$implicit;Td(` `,pC(1,1,e[t.key],`MMM d, HH:mm`),` `)}}function Za(n,a){if(n&1&&(eC(0),dC(1,`currency`)),n&2){let e=TS().$implicit,t=TS().$implicit;Td(` `,mC(1,1,e[t.key],`USD`,`symbol`,`1.0-0`),` `)}}function Ja(n,a){if(n&1&&(ga(0,`span`,28),sb(1,`span`),wd(),ga(2,`small`),eC(3),wd()),n&2){let e=TS().$implicit,t=TS().$implicit;ri(),vb(`width`,e[t.key],`%`),ri(2),Td(``,e[t.key],`%`)}}function eo(n,a){if(n&1&&(ga(0,`b`,27),eC(1),wd()),n&2){let e=TS().$implicit,t=TS().$implicit;ri(),Cb(e[t.key])}}function to(n,a){if(n&1&&eC(0),n&2){let e=TS().$implicit,t=TS().$implicit;Td(` `,e[t.key],` `)}}function no(n,a){if(n&1&&(ga(0,`td`,26),ci(1,Ka,1,1,`nx-badge`,22)(2,$a,1,1,`nx-priority`,22)(3,Ya,2,4)(4,Xa,2,4)(5,Za,2,6)(6,Ja,4,3)(7,eo,2,1,`b`,27)(8,to,1,1),wd()),n&2){let e,t=TS().$implicit;ri(),li((e=t.kind)===`badge`?1:e===`priority`?2:e===`date`?3:e===`time`?4:e===`money`?5:e===`progress`?6:e===`strong`?7:8)}}function io(n,a){if(n&1&&(Sd(0,10),tb(1,Qa,2,1,`th`,23)(2,no,9,1,`td`,24),Cd()),n&2){let e=a.$implicit;ib(`matColumnDef`,e.key)}}function ao(n,a){n&1&&sb(0,`th`,29)}function oo(n,a){if(n&1){let e=CS();ga(0,`td`,30)(1,`button`,31),ub(`click`,function(){let i=Gp(e).$implicit,o=TS();return qp(o.edit(i))}),ga(2,`mat-icon`),eC(3,`edit`),wd()(),ga(4,`button`,32),ub(`click`,function(){let i=Gp(e).$implicit,o=TS();return qp(o.remove(i))}),ga(5,`mat-icon`),eC(6,`delete_outline`),wd()()()}}function ro(n,a){n&1&&sb(0,`tr`,33)}function so(n,a){n&1&&sb(0,`tr`,34)}function lo(n,a){if(n&1&&(ga(0,`div`,16),sb(1,`img`,35),ga(2,`b`),eC(3,`Nothing matches yet`),wd(),ga(4,`span`),eC(5),wd()()),n&2){let e=TS();ri(5),Td(`Clear the search or filter, or add a new `,e.cfg().singular.toLowerCase(),`.`)}}var ua=class n{cfg=Wb.required();embedded=Wb(!1);limit=Wb(0);store=m(ev);dialog=m($e);snack=m(Ns);q=Ue$1(``);filter=Ue$1(``);displayed=bC(()=>[...this.cfg().cols.map(a=>a.key),`actions`]);total=bC(()=>this.store.list(this.cfg().coll).length);all=bC(()=>{let a=this.q().trim().toLowerCase(),e=this.cfg().filterKey,t=this.filter();return this.store.list(this.cfg().coll).filter(i=>(!e||!t||i[e]===t)&&(!a||Object.values(i).some(o=>typeof o!=`object`&&String(o).toLowerCase().includes(a))))});rows=bC(()=>this.limit()?this.all().slice(0,this.limit()):this.all());open(a,e){return this.dialog.open(Et,{data:{title:a,fields:this.cfg().fields,model:e},width:`560px`,maxWidth:`94vw`}).afterClosed()}create(){this.open(`New `+this.cfg().singular.toLowerCase(),S({},this.cfg().defaults)).subscribe(a=>{a&&(this.store.add(this.cfg().coll,this.stamp(a)),this.snack.open(this.cfg().singular+` created`,`Dismiss`,{duration:2500}))})}edit(a){this.open(`Edit `+this.cfg().singular.toLowerCase(),a).subscribe(e=>{e&&(this.store.update(this.cfg().coll,a.id,e),this.snack.open(this.cfg().singular+` updated`,`Dismiss`,{duration:2500}))})}remove(a){this.store.remove(this.cfg().coll,a.id),this.snack.open(this.cfg().singular+` deleted`,`Undo`,{duration:5e3}).onAction().subscribe(()=>this.store.add(this.cfg().coll,a))}stamp(a){return this.cfg().coll===`tickets`?J(S({},a),{code:`NX-`+(1+Math.max(1048,...this.store.list(`tickets`).map(e=>+String(e.code).replace(/\D/g,``)||0))),created:(/* @__PURE__ */ new Date()).toISOString()}):a}static ɵfac=function(e){return new(e||n)};static ɵcmp=ke({type:n,selectors:[[`nx-data-page`]],inputs:{cfg:[1,`cfg`],embedded:[1,`embedded`],limit:[1,`limit`]},decls:20,vars:11,consts:[[1,`page-head`],[1,`card`,`table-card`],[1,`toolbar`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`search`],[`matPrefix`,``],[`matInput`,``,`aria-label`,`Search`,3,`input`,`placeholder`,`value`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`filter`],[1,`count`],[1,`table-scroll`],[`mat-table`,``,3,`dataSource`],[3,`matColumnDef`],[`matColumnDef`,`actions`],[`mat-header-cell`,``,`class`,`actions`,4,`matHeaderCellDef`],[`mat-cell`,``,`class`,`actions`,4,`matCellDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[1,`empty`],[1,`head-icon`],[1,`head-text`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[3,`selectionChange`,`value`],[`value`,``],[3,`value`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`mat-header-cell`,``],[`mat-cell`,``],[1,`strong`],[1,`progress`],[`mat-header-cell`,``,1,`actions`],[`mat-cell`,``,1,`actions`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,`Edit`,`aria-label`,`Edit`,3,`click`],[`mat-icon-button`,``,`type`,`button`,`matTooltip`,`Delete`,`aria-label`,`Delete`,3,`click`],[`mat-header-row`,``],[`mat-row`,``],[`src`,`illustration.svg`,`alt`,``,`width`,`160`,`height`,`100`]],template:function(e,t){e&1&&(ci(0,qa,13,4,`header`,0),ga(1,`section`,1)(2,`div`,2)(3,`mat-form-field`,3)(4,`mat-icon`,4),eC(5,`search`),wd(),ga(6,`input`,5),ub(`input`,function(o){return t.q.set(o.target.value)}),wd()(),ci(7,Ua,8,2,`mat-form-field`,6),ga(8,`span`,7),eC(9),wd()(),ga(10,`div`,8)(11,`table`,9),vS(12,io,3,1,`ng-container`,10,Wa),Sd(14,11),tb(15,ao,1,0,`th`,12)(16,oo,7,0,`td`,13),Cd(),tb(17,ro,1,0,`tr`,14)(18,so,1,0,`tr`,15),wd(),ci(19,lo,6,1,`div`,16),wd()()),e&2&&(li(t.embedded()?-1:0),ri(6),ib(`placeholder`,oC(`Search `,t.cfg().title.toLowerCase()))(`value`,t.q()),ri(),li(t.cfg().filterKey?7:-1),ri(2),Tb(``,t.all().length,` of `,t.total()),ri(2),ib(`dataSource`,t.rows()),ri(),DS(t.cfg().cols),ri(5),ib(`matHeaderRowDef`,t.displayed()),ri(),ib(`matRowDefColumns`,t.displayed()),ri(),li(t.rows().length===0?19:-1))},dependencies:[qi,Fi,Pi,zi,Li,Ai,Hi,Bi,Vi,ji,Wi,U8,H8,V4,B4,mx,Vt$2,li$1,At$1,hr,is,ns,St,kt,_e,Vt$1,_t$1,Ot,Tt,CT,TT],encapsulation:2})};export{ua as t};