(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{"/y9o":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){},i=e("pMnS"),u=e("oBZk"),s=e("Ip0R"),a=e("ZZ/e"),c=e("mrSG"),d=e("2Rin"),r=e("pbSD"),m=e("nbUH"),p=e("LyM9"),g=function(){function n(n,l,e,t,o,i){this.navContrl=n,this.dataService=l,this.events=e,this.alertController=t,this.modalController=o,this.util=i,this.estimates=[],this.time=0,this.cssClass="",this.estimates=[{invoiceNo:"2154",amount:"12543",company:"Dream's Tech",status:"accepted"},{invoiceNo:"1465",amount:"12543",company:"Dream's Tech",status:"accepted"},{invoiceNo:"34324",amount:"121253",company:"Dream's Tech",status:"accepted"},{invoiceNo:"53436",amount:"5453",company:"Dream's Tech",status:"pending"},{invoiceNo:"43234",amount:"1243",company:"Dream's Tech",status:"rejected"},{invoiceNo:"35521",amount:"143543",company:"Dream's Tech",status:"pending"},{invoiceNo:"35864",amount:"12543",company:"Dream's Tech",status:"accepted"},{invoiceNo:"35824",amount:"1125",company:"Dream's Tech",status:"rejected"},{invoiceNo:"35984",amount:"12543",company:"Dream's Tech",status:"pending"}]}return n.prototype.ngOnInit=function(){var n=this;this.estimates.forEach((function(l){n.time=n.time+.2,l.time=n.time})),console.log(this.estimates),this.applyClassBySelection("bounceInRight")},n.prototype.applyClassBySelection=function(n){this.cssClass="animated "+n},n.prototype.openView=function(){this.navContrl.navigateForward("/view-estimates")},n.prototype.delete=function(n){var l=this;this.util.deleteAlert("Confirm Delete","Do you want to delete this estimate").then((function(e){l.onDeleteConfirm(n)}))},n.prototype.edit=function(){return c.b(this,void 0,void 0,(function(){var n,l=this;return c.e(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:m.a,componentProps:{invoice:this.dataService.invoiceList[0],type:"Estimate"},cssClass:"custom-modal"})];case 1:return n=e.sent(),this.util.isModal="blurPage",[4,n.present()];case 2:return e.sent(),[4,n.onWillDismiss().then((function(n){console.log(n),l.util.isModal=""}))];case 3:return e.sent(),[2]}}))}))},n.prototype.add=function(){return c.b(this,void 0,void 0,(function(){var n,l=this;return c.e(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:p.a,cssClass:"custom-modal",componentProps:{invoice:this.dataService.invoiceList[0],type:"Estimate"}})];case 1:return n=e.sent(),this.util.isModal="blurPage",[4,n.present()];case 2:return e.sent(),[4,n.onWillDismiss().then((function(n){console.log(n),l.util.isModal=""}))];case 3:return e.sent(),[2]}}))}))},n.prototype.onDeleteConfirm=function(n){var l=this,e=document.getElementById(n);e.classList.add("animated","rollOut","slow"),e.addEventListener("animationend",(function(e){l.estimates.splice(n,1),l.util.showAlert("Smart HR","Estimate Removed successfully")}))},n}(),f=[['.estimates-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-60px;position:relative;width:100%}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.estimates-empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.estimates[_ngcontent-%COMP%]   .custom-icon-estimate-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}.estimates-list[_ngcontent-%COMP%]{background:0 0;border-radius:50px;padding:0;margin:10px 10px 10px 45px;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14)}.estimates-list[_ngcontent-%COMP%]   .estimates-content[_ngcontent-%COMP%]{padding:10px 0 10px 15px}.estimates-content[_ngcontent-%COMP%]{top:0;width:100%}.estimates-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#949494}.estimates-timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto;top:30px;padding-right:10px}.estimates-timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:0;bottom:0;left:31px}.estimates-container[_ngcontent-%COMP%]{position:relative;background-color:inherit}.estimates-container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:35px;border-radius:50%;z-index:1;margin-left:9px}.estimates-container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.estimates-container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.estimates-content[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{font-family:Poppins-Medium;font-size:14px}.estimates-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Poppins-Light;color:#8c8b8b;font-size:14px}.estimates-content[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:11px;margin:auto 0;border-radius:50px;padding:0 5px;color:#fff;margin-top:unset!important}.estimates-content[_ngcontent-%COMP%]   .est-accepted[_ngcontent-%COMP%]{background:#22d165}.estimates-content[_ngcontent-%COMP%]   .est-pending[_ngcontent-%COMP%]{background:#fe9c45}.estimates-content[_ngcontent-%COMP%]   .est-rejected[_ngcontent-%COMP%]{background:#f10a0a}.estimates-content[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-size:14px;margin-top:14px;text-align:end;color:#8c8b8b;white-space:nowrap}.estimates-content[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#ff9f55}.fab-add-btn[_ngcontent-%COMP%]{--border-radius:15px!important;--background:#FE9C45}.slide-item[_ngcontent-%COMP%]{--detail-icon-color:rgb(254, 156, 69);--detail-icon-opacity:1;--inner-padding-end:8px}@media only screen and (max-width:324px){.estimates-content[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:9px}}']],C=t["\u0275crt"]({encapsulation:0,styles:f,data:{}});function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","status est-accepted"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Accepted"]))],null,null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","status est-rejected"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Pending"]))],null,null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","status est-pending"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Rejected"]))],null,null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,41,"div",[["class","estimates-container left"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,40,"ion-list",[["class","estimates-list"]],[[8,"id",0]],null,null,u.pb,u.y)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](3,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[t.ElementRef,t.KeyValueDiffers,t.Renderer2]),t["\u0275did"](5,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](6,{"animation-delay":0}),t["\u0275did"](7,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,33,"ion-item-sliding",[],null,null,null,u.lb,u.w)),t["\u0275did"](9,49152,null,0,a.IonItemSliding,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](10,0,null,0,23,"ion-item",[["class","slide-item"],["detail",""]],null,null,null,u.mb,u.t)),t["\u0275did"](11,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{detail:[0,"detail"]},null),(n()(),t["\u0275eld"](12,0,null,0,21,"div",[["class","estimates-content"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.openView()&&t);return t}),null,null)),(n()(),t["\u0275eld"](13,0,null,null,20,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](14,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,14,"ion-col",[["size","9"]],null,null,null,u.X,u.h)),t["\u0275did"](16,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](17,0,null,0,10,"ion-row",[["style","white-space: nowrap;"]],null,null,null,u.vb,u.F)),t["\u0275did"](18,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,1,"div",[["class","id"]],null,null,null,null,null)),(n()(),t["\u0275ted"](20,null,["#",""])),(n()(),t["\u0275ted"](-1,0,["\xa0\xa0 "])),(n()(),t["\u0275and"](16777216,null,0,1,null,h)),t["\u0275did"](23,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](25,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](27,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](28,0,null,0,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](29,null,["",""])),(n()(),t["\u0275eld"](30,0,null,0,3,"ion-col",[["size","3"]],null,null,null,u.X,u.h)),t["\u0275did"](31,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](32,0,null,0,1,"div",[["class","amount"]],null,null,null,null,null)),(n()(),t["\u0275ted"](33,null,["$"," "])),(n()(),t["\u0275eld"](34,0,null,0,7,"ion-item-options",[["side","end"]],null,null,null,u.kb,u.v)),t["\u0275did"](35,49152,null,0,a.IonItemOptions,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(n()(),t["\u0275eld"](36,0,null,0,2,"ion-item-option",[["color","success"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.edit()&&t);return t}),u.jb,u.u)),t["\u0275did"](37,49152,null,0,a.IonItemOption,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Edit"])),(n()(),t["\u0275eld"](39,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.delete(n.context.index)&&t);return t}),u.jb,u.u)),t["\u0275did"](40,49152,null,0,a.IonItemOption,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["Delete"]))],(function(n,l){n(l,3,0,"estimates-list",l.component.cssClass);var e=n(l,6,0,l.context.$implicit.time+"s");n(l,5,0,e);n(l,11,0,"");n(l,16,0,"9"),n(l,23,0,"accepted"==l.context.$implicit.status),n(l,25,0,"pending"==l.context.$implicit.status),n(l,27,0,"rejected"==l.context.$implicit.status);n(l,31,0,"3");n(l,35,0,"end");n(l,37,0,"success");n(l,40,0,"danger")}),(function(n,l){n(l,1,0,t["\u0275inlineInterpolate"](1,"",l.context.index,"")),n(l,20,0,l.context.$implicit.invoiceNo),n(l,29,0,l.context.$implicit.company),n(l,33,0,l.context.$implicit.amount)}))}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,18,"ion-header",[],null,null,null,u.eb,u.o)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](3,49152,null,0,a.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,u.Fb,u.P)),t["\u0275did"](5,49152,null,0,a.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,12,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](7,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"]],null,null,null,u.X,u.h)),t["\u0275did"](9,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](10,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(n()(),t["\u0275eld"](11,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"]],null,null,null,u.X,u.h)),t["\u0275did"](14,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](15,0,null,0,3,"ion-title",[],null,null,null,u.Db,u.N)),t["\u0275did"](16,49152,null,0,a.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](17,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Estimates"])),(n()(),t["\u0275eld"](19,0,null,null,19,"ion-content",[],null,null,null,u.Y,u.i)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](21,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](22,49152,null,0,a.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,5,"div",[["class","estimates-empty-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](24,0,null,null,4,"ion-item",[["class","estimates"],["lines","none"]],null,null,null,u.mb,u.t)),t["\u0275did"](25,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](26,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["List of Estimates"])),(n()(),t["\u0275eld"](28,0,null,0,0,"span",[["class","custom-icon-estimate-icon"],["slot","end"]],null,null,null,null,null)),(n()(),t["\u0275eld"](29,0,null,0,3,"div",[["class","estimates-content-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](30,0,null,null,2,"div",[["class","estimates-timeline"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](32,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](33,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.bb,u.k)),t["\u0275did"](34,49152,null,0,a.IonFab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t["\u0275eld"](35,0,null,0,3,"ion-fab-button",[["class","fab-add-btn"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.add()&&t);return t}),u.ab,u.l)),t["\u0275did"](36,49152,null,0,a.IonFabButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](37,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,u.fb,u.p)),t["\u0275did"](38,49152,null,0,a.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.util.isModal);n(l,9,0,"2");n(l,14,0,"10"),n(l,21,0,e.util.isModal);n(l,25,0,"none"),n(l,32,0,e.estimates);n(l,34,0,"end","bottom");n(l,38,0,"add")}),null)}var _=t["\u0275ccf"]("app-estimates",g,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-estimates",[],null,null,null,I,C)),t["\u0275did"](1,114688,null,0,g,[a.NavController,r.a,a.Events,a.AlertController,a.ModalController,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),M=e("gIcY"),N=e("ZYCi"),x=function(){};e.d(l,"EstimatesPageModuleNgFactory",(function(){return y}));var y=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,M["\u0275angular_packages_forms_forms_o"],M["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,M["\u0275angular_packages_forms_forms_d"],M["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,M.FormsModule,M.FormsModule,[]),t["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),t["\u0275mpd"](1073742336,N.o,N.o,[[2,N.t],[2,N.m]]),t["\u0275mpd"](1073742336,x,x,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,N.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);