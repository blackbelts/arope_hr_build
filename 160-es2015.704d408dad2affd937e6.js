(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{"yVU+":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),a=e("oBZk"),i=e("ZZ/e"),c=e("fNgX"),r=e("Nv++"),d=e("cUpR"),s=e("SVse"),g=e("wojB"),p=e("2Rin"),f=e("zuHl");class m{constructor(l,n,e,t,o,u,a,i){this.navCntrl=l,this.modalController=n,this.alertController=e,this.util=t,this.odooApi=o,this.shared=u,this.sanitizer=a,this.router=i,this.balanceList=[]}ngOnInit(){this.util.loading(),this.odooApi.getLeavesBalance(this.shared.user_id).then(l=>{this.balanceList=JSON.parse(JSON.stringify(l)).data,console.log("balance",l),this.util.dismissLoading()}).catch(l=>{console.log("Error",l),this.util.dismissLoading(),this.util.showAlert("Error","Something Error please try again"),this.navCntrl.pop()})}}var C=e("iInd"),h=[['.leave-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%}.leave-empty-div[_ngcontent-%COMP%]{background:#073e89;height:250px}.user-icon[_ngcontent-%COMP%]{font-size:85px;height:100%;width:100%}.profile-pic[_ngcontent-%COMP%]{margin:0 auto;display:block;height:100%;border-radius:50%;width:100%}.employee-div[_ngcontent-%COMP%]{text-align:center;border:1px solid #dcdcdc;border-radius:50%;background:#fff;height:100px;width:100px;margin:0 auto}.employee-name[_ngcontent-%COMP%]{font-size:14px;font-weight:700;text-align:center;color:#fff;margin-top:8px}.employee-design[_ngcontent-%COMP%]{font-size:16px;text-align:center;color:#fff}.custom-icon-edit-icon[_ngcontent-%COMP%]{font-size:35px;color:#fff;font-weight:500}.edit-icon[_ngcontent-%COMP%]{background:#fe9c45;border-radius:20px;position:absolute;height:40px;width:40px;margin-left:100px}.leave-segment[_ngcontent-%COMP%]{border-radius:50px;margin:auto auto 0;width:calc(100% - 10%);top:-20px;position:relative;background:#fff;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14);--background-checked:none;--indicator-color-checked:none}.leave-segment[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{border:2px solid}.leave-segment[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{width:45px;height:45px;margin:5px auto;border-radius:50px}.leave-segment[_ngcontent-%COMP%]   .pending-icon[_ngcontent-%COMP%]{color:#fe9c45!important;border-color:#fe9c45}.leave-segment[_ngcontent-%COMP%]   .accepted-icon[_ngcontent-%COMP%]{color:#22d165!important;border-color:#22d165}.leave-segment[_ngcontent-%COMP%]   .rejected-icon[_ngcontent-%COMP%]{color:#f10a0a!important;border-color:#f10a0a}.leave-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{min-width:auto!important;--padding-end:0px;--padding-start:0;--border-color:#fff0}.leave-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{font-size:1.7rem;color:#000}.seg-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.border[_ngcontent-%COMP%]{border-top:2px solid #fe9c45;width:60px;margin-bottom:25px}.seg-content[_ngcontent-%COMP%]{padding-right:20px}.leave-timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto}.leave-list[_ngcontent-%COMP%]{margin-left:50px}.leave-list[_ngcontent-%COMP%]   .leave-type[_ngcontent-%COMP%]{border-radius:50px;border:1px solid #fe9c45;color:#fe9c45;padding:2px 10px;font-size:14px!important;white-space:nowrap}.leave-list[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%]{color:#fe9c45}.leave-list[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:end;color:#fe9c45;white-space:nowrap;margin:auto}.leave-list[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{white-space:break-spaces;color:#000}.leave-list[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{font-size:12px}.leave-timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:0;bottom:0;left:31px}.leave-container[_ngcontent-%COMP%]{position:relative;background-color:inherit}.leave-container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:15px;border-radius:50%;z-index:1;margin-left:9px}.leave-container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.leave-container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.fab-add-btn[_ngcontent-%COMP%]{--border-radius:15px!important;--background:#FE9C45}ion-fab[_ngcontent-%COMP%]{position:fixed!important;z-index:999}.refused[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]{border-top:2px solid #f10a0a}.refused[_ngcontent-%COMP%]   .leave-type[_ngcontent-%COMP%]{border:1px solid #f10a0a;color:#f10a0a}.refused[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%], .refused[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{color:#f10a0a}.approved[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]{border-top:2px solid #22d165}.approved[_ngcontent-%COMP%]   .leave-type[_ngcontent-%COMP%]{border:1px solid #22d165;color:#22d165}.approved[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%], .approved[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{color:#22d165}.empty[_ngcontent-%COMP%]{text-align:center}.empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:3rem;color:#073e89}.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}']],_=t["\u0275crt"]({encapsulation:0,styles:h,data:{}});function v(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,38,"div",[["class","leave-container left "]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,37,"ion-list",[["class","leave-list"]],null,null,null,a.pb,a.y)),t["\u0275did"](2,49152,null,0,i.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,5,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](4,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,3,"ion-col",[["size","12"]],null,null,null,a.X,a.h)),t["\u0275did"](6,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](7,0,null,0,1,"span",[["class","leave-type"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,0,9,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](10,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](11,0,null,0,3,"ion-col",[["size","10"]],null,null,null,a.X,a.h)),t["\u0275did"](12,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](13,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total Allocation this year: "])),(l()(),t["\u0275eld"](15,0,null,0,3,"ion-col",[["class","end"],["size","2"]],null,null,null,a.X,a.h)),t["\u0275did"](16,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](17,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](18,null,["",""])),(l()(),t["\u0275eld"](19,0,null,0,9,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](20,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](21,0,null,0,3,"ion-col",[["size","10"]],null,null,null,a.X,a.h)),t["\u0275did"](22,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](23,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Total Approved Requests: "])),(l()(),t["\u0275eld"](25,0,null,0,3,"ion-col",[["class","end"],["size","2"]],null,null,null,a.X,a.h)),t["\u0275did"](26,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](27,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](28,null,["",""])),(l()(),t["\u0275eld"](29,0,null,0,9,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](30,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](31,0,null,0,3,"ion-col",[["size","10"]],null,null,null,a.X,a.h)),t["\u0275did"](32,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](33,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Balance"])),(l()(),t["\u0275eld"](35,0,null,0,3,"ion-col",[["class","end"],["size","2"]],null,null,null,a.X,a.h)),t["\u0275did"](36,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](37,0,null,0,1,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](38,null,["",""]))],(function(l,n){l(n,6,0,"12");l(n,12,0,"10");l(n,16,0,"2");l(n,22,0,"10");l(n,26,0,"2");l(n,32,0,"10");l(n,36,0,"2")}),(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,18,0,n.context.$implicit.allocation),l(n,28,0,n.context.$implicit.leaves),l(n,38,0,n.context.$implicit.remain)}))}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","empty"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,c.d,c.c)),t["\u0275did"](2,573440,null,0,r.c,[d.b,r.a,r.d,[2,r.i]],{icon:[0,"icon"]},null),t["\u0275pad"](3,2),(l()(),t["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["No Balance Available "]))],(function(l,n){var e=l(n,3,0,"far","frown");l(n,2,0,e)}),(function(l,n){l(n,1,0,t["\u0275nov"](n,2).title,t["\u0275nov"](n,2).renderedIconHTML)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"ion-header",[],null,null,null,a.eb,a.o)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](2,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](3,49152,null,0,i.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](4,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,a.Fb,a.P)),t["\u0275did"](5,49152,null,0,i.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,12,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](7,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"],["size-md","1"]],null,null,null,a.X,a.h)),t["\u0275did"](9,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](10,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"],["size-md","11"]],null,null,null,a.X,a.h)),t["\u0275did"](14,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](15,0,null,0,3,"ion-title",[],null,null,null,a.Db,a.N)),t["\u0275did"](16,49152,null,0,i.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](17,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Balance"])),(l()(),t["\u0275eld"](19,0,null,null,14,"ion-content",[],null,null,null,a.Y,a.i)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](21,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](22,49152,null,0,i.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](23,0,null,0,10,"div",[["class","leave-content-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,9,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,8,"div",[["class","seg-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,7,"div",[["class","leave-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,1,"h4",[["class","seg-title leave-list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Balance List"])),(l()(),t["\u0275eld"](29,0,null,null,0,"div",[["class","border leave-list"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](31,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](33,16384,null,0,s.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,e.util.isModal);l(n,9,0,"2");l(n,14,0,"10"),l(n,21,0,e.util.isModal),l(n,31,0,e.balanceList),l(n,33,0,0==e.balanceList.length)}),null)}var O=t["\u0275ccf"]("app-balance",m,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-balance",[],null,null,null,b,_)),t["\u0275did"](1,114688,null,0,m,[i.NavController,i.ModalController,i.AlertController,p.a,g.a,f.a,d.b,C.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),P=e("s7LF");class x{}e.d(n,"BalancePageModuleNgFactory",(function(){return R}));var R=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,O,c.b,c.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,P["\u0275angular_packages_forms_forms_o"],P["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,i.AngularDelegate,i.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.ModalController,i.ModalController,[i.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.PopoverController,i.PopoverController,[i.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,P["\u0275angular_packages_forms_forms_d"],P["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,P.FormsModule,P.FormsModule,[]),t["\u0275mpd"](1073742336,i.IonicModule,i.IonicModule,[]),t["\u0275mpd"](1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),t["\u0275mpd"](1073742336,x,x,[]),t["\u0275mpd"](1073742336,r.j,r.j,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);