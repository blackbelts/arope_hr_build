(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{pkyO:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var u=e("pMnS"),a=e("oBZk"),i=e("ZZ/e"),d=e("SVse"),r=e("mrSG"),c=e("2Rin"),s=e("cMM6");class g{constructor(n,l,e){this.util=n,this.calendar=l,this.alertCtrl=e}ngOnInit(){}ionViewWillEnter(){this.primaryColor=localStorage.getItem("primary_color"),this.date=new Date,this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],this.getDaysOfMonth(),this.loadEventThisMonth()}getHeaderStyle(){return{background:this.primaryColor}}getDaysOfMonth(){this.daysInThisMonth=new Array,this.daysInLastMonth=new Array,this.daysInNextMonth=new Array,this.currentMonth=this.monthNames[this.date.getMonth()],this.currentYear=this.date.getFullYear(),this.date.getMonth()===(new Date).getMonth()?this.currentDate=(new Date).getDate():this.currentDate=999;for(var n=new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay(),l=new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate(),e=l-(n-1);e<=l;e++)this.daysInLastMonth.push(e);for(var t=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate(),o=0;o<t;o++)this.daysInThisMonth.push(o+1);for(var u=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay(),a=0;a<6-u;a++)this.daysInNextMonth.push(a+1);if(this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length<36)for(var i=7-u;i<7-u+7;i++)this.daysInNextMonth.push(i)}goToLastMonth(){this.date=new Date(this.date.getFullYear(),this.date.getMonth(),0),this.getDaysOfMonth()}goToNextMonth(){this.date=new Date(this.date.getFullYear(),this.date.getMonth()+2,0),this.getDaysOfMonth()}loadEventThisMonth(){this.eventList=[{calendar_id:"3",id:"50",event_id:"50",title:"New Year's Day",dtstart:1580463873e3,dtend:1580463893e3,eventLocation:"",allDay:1},{calendar_id:"3",id:"51",event_id:"51",title:"Guru Govind Singh Jayanti",dtstart:15474042e5,dtend:1547577e6,eventLocation:"",allDay:1},{calendar_id:"3",id:"95",event_id:"96",title:"Lohri",dtstart:15476634e5,dtend:15478362e5,eventLocation:"",allDay:1},{calendar_id:"3",id:"96",event_id:"97",title:"New event",dtstart:1546281e6,dtend:15468858e5,eventLocation:"",allDay:1},{calendar_id:"3",id:"52",event_id:"52",title:"Pongal",dtstart:15477498e5,dtend:15483546e5,eventLocation:"",allDay:1},{calendar_id:"1",id:"136",event_id:"157",title:"Test",dtstart:15486138e5,dtend:1548873e6,eventLocation:"Tret",allDay:0}]}checkEvent(n){var l=!1,e=this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+n,t=this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+n,o=new Date(e).getTime(),u=new Date(t).getTime();return this.eventList.forEach(n=>{(n.dtstart>=o&&n.dtstart<=u||n.dtend>=o&&n.dtend<=u)&&(l=!0)}),l}selectDate(n){this.daySelected=n,this.isSelected=!1,this.selectedEvent=new Array;var l=this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+n,e=this.date.getFullYear()+"/"+(this.date.getMonth()+1)+"/"+n,t=new Date(l).getTime(),o=new Date(e).getTime();this.eventList.forEach(n=>{(n.dtstart>=t&&n.dtstart<=o||n.dtend>=t&&n.dtend<=o)&&(this.isSelected=!0,this.selectedEvent.push(n))})}deleteEvent(n){return r.b(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"Confirm Delete",message:"Are you sure want to delete this event?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{}},{text:"Ok",handler:()=>{this.calendar.deleteEvent(n.title,n.location,n.notes,new Date(n.startDate.replace(/\s/,"T")),new Date(n.endDate.replace(/\s/,"T"))).then(l=>{this.loadEventThisMonth(),this.selectDate(new Date(n.startDate.replace(/\s/,"T")).getDate())},n=>{})}}]})).present()}))}}var f=[[".calendar-date[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{-webkit-box-flex:0!important;flex:0 0 14.2857142857%!important;width:14.2857142857%!important;max-width:14.2857142857%!important}.content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%;min-height:calc(100vh - 120px);padding:45px 20px 0}.empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.empty-div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:10px}.content-div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center;padding:3px;height:40px!important;border-bottom:1px solid #efefef}.content-div[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:3px}.last-month[_ngcontent-%COMP%], .next-month[_ngcontent-%COMP%]{color:#999;font-size:90%}.selectedDate[_ngcontent-%COMP%]{font-weight:700;background-color:#fe9c45;color:#fff;border-radius:50px;padding:5px;display:table;width:30px!important;margin:0 auto;margin-top:-3px!important}.currentDate[_ngcontent-%COMP%], .otherDate[_ngcontent-%COMP%]{padding:5px}.currentDate[_ngcontent-%COMP%]{font-weight:700;background-color:#0163fc;color:#fff;border-radius:50px;width:30px;padding:5px;height:30px;display:block;margin:-3px auto 0}.calendar-header[_ngcontent-%COMP%]{background-color:#fe9c45;color:#fff;border-top-left-radius:30px;border-top-right-radius:30px}.calendar-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:30px}.event-bullet[_ngcontent-%COMP%]{margin:2px auto;height:5px;width:5px;background-color:green;border-radius:30px}.selected-date[_ngcontent-%COMP%]{width:20px;height:2px;background-color:#00f}.unselected-date[_ngcontent-%COMP%]{border:none}.calendar-body[_ngcontent-%COMP%]{border:1px solid #fe9c45;border-top:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.calendar-body[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0}.calendar-body[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child{border-right:none}.calendar-body[_ngcontent-%COMP%]   .calendar-date[_ngcontent-%COMP%], .calendar-body[_ngcontent-%COMP%]   .calendar-weekday[_ngcontent-%COMP%]{text-align:center;margin:0}.calendar-body[_ngcontent-%COMP%]   .calendar-weekday[_ngcontent-%COMP%]{font-weight:700;border-bottom:1px solid #fff;background-color:#fff}.calendar-body[_ngcontent-%COMP%]   .calendar-date[_ngcontent-%COMP%]{border-top:1px solid #fff;border-bottom:1px solid #fff}.selected-event[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{padding:0;margin:0;font-size:14px;color:#073e89}.selected-event[_ngcontent-%COMP%]   .seg-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.selected-event[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]{border-top:2px solid #fe9c45;width:80px}.no-event[_ngcontent-%COMP%]{font-size:18px;text-align:center}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.custom-icon-calendar-icon[_ngcontent-%COMP%]{font-size:35px;color:#fff}"]],h=t["\u0275crt"]({encapsulation:0,styles:f,data:{}});function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-col",[["class","last-month"],["size","1"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.goToLastMonth()&&t);return t}),a.X,a.h)),t["\u0275did"](1,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275ted"](2,0,[" "," "]))],(function(n,l){n(l,1,0,"1")}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","currentDate"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit)}))}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","selectedDate"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit)}))}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit)}))}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","event-bullet"]],null,null,null,null,null))],null,null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](1,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,v)),t["\u0275did"](3,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](5,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],(function(n,l){var e=l.component;n(l,1,0,e.daySelected===l.parent.context.$implicit),n(l,3,0,e.daySelected!==l.parent.context.$implicit),n(l,5,0,e.checkEvent(l.parent.context.$implicit))}),null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ion-col",[["size","1"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.selectDate(n.context.$implicit)&&t);return t}),a.X,a.h)),t["\u0275did"](1,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,m)),t["\u0275did"](3,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t["\u0275and"](0,[["otherDate",2]],0,0,null,D))],(function(n,l){var e=l.component;n(l,1,0,"1"),n(l,3,0,e.currentDate===l.context.$implicit,t["\u0275nov"](l,4))}),null)}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-col",[["class","next-month"],["size","1"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.goToNextMonth()&&t);return t}),a.X,a.h)),t["\u0275did"](1,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275ted"](2,0,[" "," "]))],(function(n,l){n(l,1,0,"1")}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"h4",[["class","seg-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,[""," "])),(n()(),t["\u0275eld"](3,0,null,null,0,"div",[["class","border"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,3,"div",[["class","data"]],null,null,null,null,null)),(n()(),t["\u0275ted"](5,null,["Start Date: ","\xa0 \xa0 \xa0 \xa0 End Date: ",""])),t["\u0275ppd"](6,1),t["\u0275ppd"](7,1)],null,(function(n,l){n(l,2,0,l.context.$implicit.title);var e=t["\u0275unv"](l,5,0,n(l,6,0,t["\u0275nov"](l.parent.parent,0),l.context.$implicit.dtstart)),o=t["\u0275unv"](l,5,1,n(l,7,0,t["\u0275nov"](l.parent.parent,0),l.context.$implicit.dtend));n(l,5,0,e,o)}))}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","selected-event"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"ion-list",[],null,null,null,a.pb,a.y)),t["\u0275did"](2,49152,null,0,i.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](4,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,4,0,l.component.selectedEvent)}),null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","selected-event"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"ion-list",[],null,null,null,a.pb,a.y)),t["\u0275did"](2,49152,null,0,i.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,1,"h3",[["class","no-event"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["No Events Found"]))],null,null)}function w(n){return t["\u0275vid"](0,[t["\u0275pid"](0,d.DatePipe,[t.LOCALE_ID]),(n()(),t["\u0275eld"](1,0,null,null,16,"ion-header",[],null,null,null,a.eb,a.o)),t["\u0275did"](2,49152,null,0,i.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,a.Fb,a.P)),t["\u0275did"](4,49152,null,0,i.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,0,12,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](6,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"]],null,null,null,a.X,a.h)),t["\u0275did"](8,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](9,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(n()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"]],null,null,null,a.X,a.h)),t["\u0275did"](13,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](14,0,null,0,3,"ion-title",[],null,null,null,a.Db,a.N)),t["\u0275did"](15,49152,null,0,i.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](16,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Events"])),(n()(),t["\u0275eld"](18,0,null,null,60,"ion-content",[],null,null,null,a.Y,a.i)),t["\u0275did"](19,49152,null,0,i.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](20,0,null,0,5,"div",[["class","empty-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,null,4,"ion-item",[["class","project-view"],["lines","none"]],null,null,null,a.mb,a.t)),t["\u0275did"](22,49152,null,0,i.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(n()(),t["\u0275eld"](23,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Events"])),(n()(),t["\u0275eld"](25,0,null,0,0,"span",[["class","custom-icon-calendar-icon"],["slot","end"]],null,null,null,null,null)),(n()(),t["\u0275eld"](26,0,null,0,52,"div",[["class","content-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](27,0,null,null,13,"div",[["class","calendar-header"]],null,null,null,null,null)),(n()(),t["\u0275eld"](28,0,null,null,12,"ion-row",[["class","calendar-month"]],null,null,null,a.vb,a.F)),t["\u0275did"](29,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](30,0,null,0,3,"ion-col",[["size","2"],["style","padding: 6px;"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.goToLastMonth()&&t);return t}),a.X,a.h)),t["\u0275did"](31,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](32,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,a.fb,a.p)),t["\u0275did"](33,49152,null,0,i.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](34,0,null,0,2,"ion-col",[["size","8"],["style","padding: 6px;"]],null,null,null,a.X,a.h)),t["\u0275did"](35,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275ted"](36,0,[""," ",""])),(n()(),t["\u0275eld"](37,0,null,0,3,"ion-col",[["size","2"],["style","padding: 6px;"]],null,[[null,"click"]],(function(n,l,e){var t=!0,o=n.component;"click"===l&&(t=!1!==o.goToNextMonth()&&t);return t}),a.X,a.h)),t["\u0275did"](38,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](39,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,a.fb,a.p)),t["\u0275did"](40,49152,null,0,i.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(n()(),t["\u0275eld"](41,0,null,null,33,"div",[["class","calendar-body"]],null,null,null,null,null)),(n()(),t["\u0275eld"](42,0,null,null,32,"ion-grid",[],null,null,null,a.db,a.n)),t["\u0275did"](43,49152,null,0,i.IonGrid,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](44,0,null,0,22,"ion-row",[["class","calendar-weekday"]],null,null,null,a.vb,a.F)),t["\u0275did"](45,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](46,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](47,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Su"])),(n()(),t["\u0275eld"](49,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](50,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Mo"])),(n()(),t["\u0275eld"](52,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](53,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Tu"])),(n()(),t["\u0275eld"](55,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](56,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["We"])),(n()(),t["\u0275eld"](58,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](59,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Th"])),(n()(),t["\u0275eld"](61,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](62,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Fr"])),(n()(),t["\u0275eld"](64,0,null,0,2,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](65,49152,null,0,i.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Sa"])),(n()(),t["\u0275eld"](67,0,null,0,7,"ion-row",[["class","calendar-date"]],null,null,null,a.vb,a.F)),t["\u0275did"](68,49152,null,0,i.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,p)),t["\u0275did"](70,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](72,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](74,278528,null,0,d.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](76,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](78,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,8,0,"2");n(l,13,0,"10");n(l,22,0,"none");n(l,31,0,"2");n(l,33,0,"arrow-back");n(l,35,0,"8");n(l,38,0,"2");n(l,40,0,"arrow-forward"),n(l,70,0,e.daysInLastMonth),n(l,72,0,e.daysInThisMonth),n(l,74,0,e.daysInNextMonth),n(l,76,0,e.isSelected),n(l,78,0,!e.isSelected)}),(function(n,l){var e=l.component;n(l,36,0,e.currentMonth,e.currentYear)}))}var y=t["\u0275ccf"]("app-events",g,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-events",[],null,null,null,w,h)),t["\u0275did"](1,114688,null,0,g,[c.a,s.a,i.AlertController],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),O=e("s7LF"),N=e("iInd");class E{}e.d(l,"EventsPageModuleNgFactory",(function(){return P}));var P=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,O["\u0275angular_packages_forms_forms_o"],O["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,i.AngularDelegate,i.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,i.ModalController,i.ModalController,[i.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,i.PopoverController,i.PopoverController,[i.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,O["\u0275angular_packages_forms_forms_d"],O["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,O.FormsModule,O.FormsModule,[]),t["\u0275mpd"](1073742336,i.IonicModule,i.IonicModule,[]),t["\u0275mpd"](1073742336,N.o,N.o,[[2,N.t],[2,N.m]]),t["\u0275mpd"](1073742336,E,E,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,N.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);