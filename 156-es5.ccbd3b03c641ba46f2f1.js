(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{s9xv:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){},i=e("pMnS"),a=e("oBZk"),s=e("ZZ/e"),u=e("Ip0R"),r=e("mrSG"),c=e("2Rin"),d=e("QeR5"),p=e("1pCb"),g=e("wojB"),m=e("zuHl"),f=function(){function n(n,l,e,t,o){var i=this;this.navContrl=n,this.util=l,this.modalController=e,this.odooApi=t,this.shared=o,this.salaryList=[],this.payslips=[],this.util.loading(),this.odooApi.searchPayslips(this.shared.user_id).then((function(n){i.util.dismissLoading(),console.log("payslips",n),i.payslips=JSON.parse(JSON.stringify(n)).data})).catch((function(n){i.util.dismissLoading})),this.salaryList=[{designation:"Web Backend Developer",eid:"2",salary:"800000"},{designation:"Web UI Developer",eid:"2",salary:"100000"},{designation:"Mobile Backend Developer",eid:"2",salary:"860000"},{designation:"Mobile UI Developer",eid:"2",salary:"750000"},{designation:"Backend Developer",eid:"2",salary:"680000"}]}return n.prototype.ngOnInit=function(){},n.prototype.generatePayslip=function(n){this.navContrl.navigateForward("/pay-slip",{state:{payslip:n}})},n.prototype.addSalary=function(){this.navContrl.navigateForward("/add-salary")},n.prototype.add=function(){return r.b(this,void 0,void 0,(function(){var n,l=this;return r.e(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:d.a,cssClass:"custom-modal"})];case 1:return n=e.sent(),this.util.isModal="blurPage",[4,n.present()];case 2:return e.sent(),[4,n.onWillDismiss().then((function(n){console.log(n),l.util.isModal=""}))];case 3:return e.sent(),[2]}}))}))},n.prototype.edit=function(){return r.b(this,void 0,void 0,(function(){var n,l=this;return r.e(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:p.a,componentProps:{invoice:"invoice"},cssClass:"custom-modal"})];case 1:return n=e.sent(),this.util.isModal="blurPage",[4,n.present()];case 2:return e.sent(),[4,n.onWillDismiss().then((function(n){console.log(n),l.util.isModal=""}))];case 3:return e.sent(),[2]}}))}))},n}(),C=[['.estimates-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.estimates-empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.estimates[_ngcontent-%COMP%]   .custom-icon-estimate-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}.estimates-list[_ngcontent-%COMP%]{background:0 0;border-radius:50px;padding:0;margin:10px 10px 10px 45px;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14)}.estimates-list[_ngcontent-%COMP%]   .estimates-content[_ngcontent-%COMP%]{padding:10px 0 10px 15px}.estimates-content[_ngcontent-%COMP%]{top:0;width:100%}.estimates-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#949494}.estimates-timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto;top:30px;padding-right:10px}.estimates-timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:0;bottom:0;left:31px}.estimates-container[_ngcontent-%COMP%]{position:relative;background-color:inherit}.estimates-container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:25px;border-radius:50%;z-index:1;margin-left:9px}.estimates-container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.estimates-container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.estimates-content[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%]{font-family:Poppins-Medium;font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:calc(100% - 60px)}.estimates-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Poppins-Light;color:#8c8b8b;font-size:12px}.estimates-content[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:11px;margin:auto 0;border-radius:50px;padding:0 5px;color:#fff;margin-top:unset!important}.estimates-content[_ngcontent-%COMP%]   .est-accepted[_ngcontent-%COMP%]{background:#22d165}.estimates-content[_ngcontent-%COMP%]   .est-pending[_ngcontent-%COMP%]{background:#fe9c45}.estimates-content[_ngcontent-%COMP%]   .est-rejected[_ngcontent-%COMP%]{background:#f10a0a}.estimates-content[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-size:15px;margin-top:12px;text-align:end;color:#8c8b8b;white-space:nowrap;padding-right:5px}.estimates-content[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#ff9f55}.fab-add-btn[_ngcontent-%COMP%]{--border-radius:15px!important;--background:#FE9C45}.slide-item[_ngcontent-%COMP%]{--detail-icon-color:rgb(254, 156, 69);--detail-icon-opacity:1;--inner-padding-end:8px}']],h=t["\u0275crt"]({encapsulation:0,styles:C,data:{}});function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,23,"div",[["class","estimates-container  left"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,22,"ion-list",[["class","estimates-list"]],null,null,null,a.pb,a.y)),t["\u0275did"](2,49152,null,0,s.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,20,"ion-item",[["class","slide-item"],["detail","false"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.generatePayslip(n.context.$implicit)&&t);return t}),a.mb,a.t)),t["\u0275did"](4,49152,null,0,s.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{detail:[0,"detail"]},null),(n()(),t["\u0275eld"](5,0,null,0,18,"div",[["class","estimates-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,17,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](7,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](8,0,null,0,10,"ion-col",[["size","8"]],null,null,null,a.X,a.h)),t["\u0275did"](9,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](10,0,null,0,6,"ion-row",[["style","white-space: nowrap;"]],null,null,null,a.vb,a.F)),t["\u0275did"](11,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](12,0,null,0,1,"div",[["class","id"]],null,null,null,null,null)),(n()(),t["\u0275ted"](13,null,["",""])),(n()(),t["\u0275ted"](-1,0,["\xa0\xa0 "])),(n()(),t["\u0275eld"](15,0,null,0,1,"div",[["class","status est-accepted"]],null,null,null,null,null)),(n()(),t["\u0275ted"](16,null,["",""])),(n()(),t["\u0275eld"](17,0,null,0,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](18,null,["",""])),(n()(),t["\u0275eld"](19,0,null,0,4,"ion-col",[["size","4"]],null,null,null,a.X,a.h)),t["\u0275did"](20,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](21,0,null,0,2,"div",[["class","amount"]],null,null,null,null,null)),(n()(),t["\u0275ted"](22,null,[""," "])),t["\u0275ppd"](23,2)],(function(n,l){n(l,4,0,"false");n(l,9,0,"8");n(l,20,0,"4")}),(function(n,l){n(l,13,0,l.context.$implicit.payslip.name),n(l,16,0,l.context.$implicit.payslip.state),n(l,18,0,l.context.$implicit.payslip.contract_id[1]);var e=t["\u0275unv"](l,22,0,n(l,23,0,t["\u0275nov"](l.parent,0),l.context.$implicit.payslip.net_wage,l.context.$implicit.payslip.currency_id[1]));n(l,22,0,e)}))}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-data"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["no payslips"]))],null,null)}function y(n){return t["\u0275vid"](0,[t["\u0275pid"](0,u.CurrencyPipe,[t.LOCALE_ID]),(n()(),t["\u0275eld"](1,0,null,null,18,"ion-header",[],null,null,null,a.eb,a.o)),t["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](3,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](4,49152,null,0,s.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,a.Fb,a.P)),t["\u0275did"](6,49152,null,0,s.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,12,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](8,49152,null,0,s.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"],["size-md","1"]],null,null,null,a.X,a.h)),t["\u0275did"](10,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](11,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(n()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(n()(),t["\u0275eld"](14,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"],["size-md","11"]],null,null,null,a.X,a.h)),t["\u0275did"](15,49152,null,0,s.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](16,0,null,0,3,"ion-title",[],null,null,null,a.Db,a.N)),t["\u0275did"](17,49152,null,0,s.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](18,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Employee Salary"])),(n()(),t["\u0275eld"](20,0,null,null,14,"ion-content",[],null,null,null,a.Y,a.i)),t["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](22,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](23,49152,null,0,s.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](24,0,null,0,4,"div",[["class","estimates-empty-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](25,0,null,null,3,"ion-item",[["class","estimates"],["lines","none"]],null,null,null,a.mb,a.t)),t["\u0275did"](26,49152,null,0,s.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](27,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["List of Pay Slips"])),(n()(),t["\u0275eld"](29,0,null,0,3,"div",[["class","estimates-content-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](30,0,null,null,2,"div",[["class","estimates-timeline"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](32,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](34,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.util.isModal);n(l,10,0,"2");n(l,15,0,"10"),n(l,22,0,e.util.isModal);n(l,26,0,"none"),n(l,32,0,e.payslips),n(l,34,0,0==e.payslips.length)}),null)}var M=t["\u0275ccf"]("app-employee-salary",f,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-employee-salary",[],null,null,null,y,h)),t["\u0275did"](1,114688,null,0,f,[s.NavController,c.a,s.ModalController,g.a,m.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),b=e("gIcY"),x=e("ZYCi"),P=function(){};e.d(l,"EmployeeSalaryPageModuleNgFactory",(function(){return R}));var R=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[t.LOCALE_ID,[2,u["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,b["\u0275angular_packages_forms_forms_o"],b["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,s.AngularDelegate,s.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,s.ModalController,s.ModalController,[s.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,s.PopoverController,s.PopoverController,[s.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,u.CommonModule,u.CommonModule,[]),t["\u0275mpd"](1073742336,b["\u0275angular_packages_forms_forms_d"],b["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,b.FormsModule,b.FormsModule,[]),t["\u0275mpd"](1073742336,s.IonicModule,s.IonicModule,[]),t["\u0275mpd"](1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,x.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);