(this["webpackJsonp01-todolist"]=this["webpackJsonp01-todolist"]||[]).push([[0],{19:function(t,e,n){t.exports={statusFilter:"StatusFilter_statusFilter__3SB93",pressed:"StatusFilter_pressed__1w_GI",filterButtons:"StatusFilter_filterButtons__2KFkv"}},21:function(t,e,n){t.exports={app:"App_app__3Uwog",app_title:"App_app_title___CSMS",active:"App_active__2jTm6",app_addItemForm:"App_app_addItemForm__3kjE9",app_header:"App_app_header__2ML7u",app_header_navigation:"App_app_header_navigation__2sBXL",app_lists:"App_app_lists__XJiJ5"}},22:function(t,e,n){t.exports={listOrder:"ListOrder_listOrder__3DpKe",pressed:"ListOrder_pressed__2Ajuu",orderBox:"ListOrder_orderBox__1W92q",orderNumber:"ListOrder_orderNumber__SESdU",active:"ListOrder_active__1HKTR"}},24:function(t,e,n){t.exports={todoList_task:"ListTask_todoList_task__3IMxd",taskIsDone:"ListTask_taskIsDone__2i1Al",delete_button:"ListTask_delete_button__2ymOr",isDoneCheck:"ListTask_isDoneCheck__2OTrx"}},28:function(t,e,n){t.exports={list_header:"ListHeader_list_header__zEOiY",list_header_add_form:"ListHeader_list_header_add_form__24FzJ",delete_button:"ListHeader_delete_button__1N4Pl"}},29:function(t,e,n){t.exports={tasksPagesLinks:"PagesLinks_tasksPagesLinks__2PUSo",pageLink:"PagesLinks_pageLink__10VUZ",active:"PagesLinks_active__T9EFy"}},33:function(t,e,n){t.exports={list_title__input:"ListTitle_list_title__input__3Aoo0",error:"ListTitle_error__3wcGy",list_title:"ListTitle_list_title__s4OXq"}},34:function(t,e,n){t.exports={taskPriority:"TaskPriority_taskPriority__2ACAr",Middle:"TaskPriority_Middle__1hwuy",Low:"TaskPriority_Low__3JO7V",High:"TaskPriority_High__3FfI-",Urgent:"TaskPriority_Urgent__2y1eq",Later:"TaskPriority_Later__NpmW_"}},35:function(t,e,n){t.exports={taskTitle:"TaskTitle_taskTitle__2cTEe",error:"TaskTitle_error__3WKI3"}},38:function(t,e,n){t.exports={todoList_wrapper:"TodoList_todoList_wrapper__17l1B",todoList:"TodoList_todoList__XmGvD"}},39:function(t,e,n){t.exports={newItemForm:"AddItemForm_newItemForm__3gOv1",error:"AddItemForm_error__3PDJ1",delete_button:"AddItemForm_delete_button__2221V"}},40:function(t,e,n){t.exports={tooltip:"Tooltip_tooltip__2Bqiy",isHidden:"Tooltip_isHidden__3Glcp"}},56:function(t,e,n){t.exports={listTasks:"ListTasks_listTasks__q-a1G"}},57:function(t,e,n){t.exports={taskOrder:"TaskOrder_taskOrder__13iIz"}},58:function(t,e,n){t.exports={list_footer:"ListFooter_list_footer__qaFYD"}},59:function(t,e,n){t.exports=n.p+"static/media/book.6d8795b6.png"},60:function(t,e,n){t.exports={error404:"Error404_error404__1VnlC"}},63:function(t,e,n){t.exports=n(90)},90:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(23),i=n.n(s),o=n(3),l=n(17),c=n(5),u=n(6),d=n(8),p=n(7),f=n(9),m=n(21),k=n.n(m),h=n(20),_=n(38),g=n.n(_),O=n(28),b=n.n(O),v=n(39),E=n.n(v),T=n(13),I=n(40),C=n.n(I),j=function(t){var e=Object(a.useState)(!0),n=Object(T.a)(e,2),s=n[0],i=n[1],o=s?C.a.tooltip:C.a.isHidden;return r.a.createElement("div",{className:o,onClick:function(){return i(!1)}},t.hint)},y=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={inputError:!1,itemTitle:""},n.setItemTitle=function(t){n.state.inputError&&n.setState({inputError:!1}),n.setState({itemTitle:t.currentTarget.value},(function(){var t=n.state.itemTitle;(n.props.validationFunc?n.props.validationFunc(t):null)&&n.setState({inputError:!0})}))},n.addItem=function(){""===n.state.itemTitle?n.setState({inputError:!0}):n.state.inputError||(n.props.addItem(n.state.itemTitle),n.setState({itemTitle:""}))},n.actionOnBlur=function(){var t=n.props.validationFunc?n.props.validationFunc(n.state.itemTitle):null;n.state.inputError&&!t&&n.setState({inputError:!1})},n.actionOnKey=function(t){"Enter"===t.key&&n.addItem(),27===t.keyCode&&n.setState({itemTitle:"",inputError:!1})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.newItemForm},r.a.createElement("input",{className:this.state.inputError?E.a.error:"",onChange:this.setItemTitle,onKeyDown:this.actionOnKey,onBlur:this.actionOnBlur,autoFocus:!0,type:"text",placeholder:this.props.placeholder,value:this.state.itemTitle}),r.a.createElement("button",{onClick:this.addItem},"Add"),this.state.inputError&&r.a.createElement(j,{hint:this.props.hint}))}}]),e}(r.a.Component),L=n(33),x=n.n(L),A=n(27),S=n(25),w=n(1),P=n(54),N=n.n(P).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"5deaa5a9-bfea-4e80-bac8-d313181506e0"}}),D=function(){return N.get("")},F=function(t,e){return N.put("/".concat(t),{title:e})},V=function(t){return N.post("",{title:t})},M=function(t,e){return N.put("/".concat(t,"/reorder"),{putAfterItemId:e})},K=function(t){return N.delete("/".concat(t))},B=function(t){return N.get("/".concat(t,"/tasks?count=100"))},U=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.get("/".concat(t,"/tasks?count=10&page=").concat(e))},R=function(t,e){return N.post("/".concat(t,"/tasks"),{title:e})},H=function(t,e,n){return N.put("/".concat(t,"/tasks/").concat(e),Object(w.a)({},n))},q=function(t,e){return N.delete("/".concat(t,"/tasks/").concat(e))},G=function(t,e,n){return N.put("/".concat(t,"/tasks/").concat(e,"/reorder"),{putAfterItemId:n})},J={lists:[],listsOrder:[],listsProgress:{listsLoading:!1},maxTasksCount:33,maxListsCount:10},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0,n=10,a=(e.page-1)*n+1;switch(e.type){case Q:return Object(w.a)({},t,{lists:e.lists.map((function(t,e){return t.tasks?Object(w.a)({},t,{order:e,page:1,countOnPage:n,filterValue:ut,footerProcessing:!1}):Object(w.a)({},t,{order:e,page:1,countOnPage:n,filterValue:ut,tasks:[],footerProcessing:!1})})),listsOrder:e.lists.map((function(t){return t.id}))});case $:var r=Object(w.a)({},e.list,{page:1,countOnPage:n,filterValue:ut,tasks:[]});return Object(w.a)({},t,{lists:[r].concat(Object(S.a)(t.lists)).map((function(t,e){return Object(w.a)({},t,{order:e})}))});case tt:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{title:e.title}):t}))});case nt:return Object(w.a)({},t,{lists:e.reorderedLists.map((function(t,e){return Object(w.a)({},t,{order:e})})),listsOrder:e.reorderedLists.map((function(t){return t.id}))});case et:return Object(w.a)({},t,{lists:t.lists.filter((function(t){return t.id!==e.listId})).map((function(t,e){return Object(w.a)({},t,{order:e})}))});case X:return Object(w.a)({},t,{listsProgress:Object(w.a)({},t.listsProgress,{listsLoading:e.value})});case Y:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,Object(A.a)({},e.process,e.value)):t}))});case mt:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{filterValue:e.value}):t}))});case at:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{totalCount:e.totalCount,tasksOrder:e.tasks?e.tasks.map((function(t){return t.id})):[],tasks:e.tasks?e.tasks.filter((function(t,e){return e<n})).map((function(t,e){return Object(w.a)({},t,{renderIndex:e+1})})):[]}):t}))});case rt:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{totalCount:e.totalCount?e.totalCount:t.totalCount,page:e.page,tasks:e.tasks.map((function(t,e){return Object(w.a)({},t,{renderIndex:a+e})}))}):t}))});case It:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{tasksOrder:e.tasksOrder}):t}))});case it:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{totalCount:t.totalCount-1,tasksOrder:t.tasksOrder.filter((function(t){return t!==e.taskId})),tasks:t.tasks.filter((function(t){return t.id!==e.taskId})).map((function(t,e){return Object(w.a)({},t,{renderIndex:a+e})}))}):t}))});case ot:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.task.todoListId?Object(w.a)({},t,{tasks:t.tasks.map((function(t){return t.id===e.task.id?Object(w.a)({},t,{},e.task):t}))}):t}))});case lt:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{tasks:t.tasks.map((function(t){return t.id===e.taskId?Object(w.a)({},t,Object(A.a)({},e.process,e.value)):t}))}):t}))});case gt:var s=e.tasks.filter((function(t){return t.status===e.status})).length,i=e.tasks.filter((function(t){return t.status===e.status})).map((function(t){return t.id}));return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{page:e.page,totalCount:s,generalCount:e.tasks.length,tasksOrder:i,tasks:e.tasks.filter((function(t){return t.status===e.status})).map((function(t,e){return Object(w.a)({},t,{renderIndex:e+1})})).filter((function(t,a){return a>=(e.page-1)*n&&a<e.page*n}))}):t}))});case bt:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{totalCount:t.totalCount-1,generalCount:t.generalCount-1,tasksOrder:t.tasksOrder.filter((function(t){return t!==e.taskId})),tasks:t.tasks.filter((function(t){return t.id!==e.taskId})).map((function(t,e){return Object(w.a)({},t,{renderIndex:a+e})}))}):t}))});case ht:return Object(w.a)({},t,{lists:t.lists.map((function(t){return t.id===e.listId?Object(w.a)({},t,{prevActiveId:e.prevActiveId}):t}))});default:return t}},X="LIST_IS_LOADING",z=function(t){return{type:X,value:t}},Y="LIST_IN_PROCESS",Z=function(t,e,n){return{type:Y,listId:t,process:e,value:n}},Q="RESTORE-LISTS",$="ADD_LIST",tt="UPDATE_LIST_TITLE",et="DELETE_LIST",nt="REORDER_LIST",at="RESTORE_TASKS",rt="SET_TASKS_PAGE",st=function(t,e,n,a){return{type:rt,listId:t,page:e,tasks:n,totalCount:a}},it="DELETE_TASK",ot="UPDATE_TASK",lt="TASK_IN_PROCESS",ct=function(t,e,n,a){return{type:lt,listId:t,taskId:e,process:n,value:a}},ut="ALL_S",dt="COMPLETED",pt=1,ft=0,mt="SET_FILTER_VALUE",kt=function(t,e){return{type:mt,listId:t,value:e}},ht="SET_PREV_ACT_ID",_t=function(t,e){return{type:ht,listId:t,prevActiveId:e}},gt="SET_FLTR_TASKS_PAGE",Ot=function(t,e,n,a){return{type:gt,listId:t,page:e,tasks:n,status:a}},bt="DELETE_FLTR_TASK",vt=function(t,e,n){return function(a){return B(t).then((function(r){var s=r.data.items;a(Ot(t,e,s,n))}))}},Et=function(t,e){return function(n,a){switch(a().lists.find((function(e){return e.id===t})).filterValue){case dt:case"ACTIVE":return B(t).then((function(a){var r=a.data.items.map((function(t){return t.id}));n(Ct(t,r)),U(t,e).then((function(a){var r=a.data,s=r.items,i=r.totalCount;n(st(t,e,s,i))}))}));default:return U(t,e).then((function(a){var r=a.data,s=r.items,i=r.totalCount;n(st(t,e,s,i))}))}}},Tt=function(t,e,n){return function(a){a(Z(t,"footerProcessing",!0));var r=ft;switch(e){case"ACTIVE":a(vt(t,n,r)).then((function(){return a(Z(t,"footerProcessing",!1))}));break;case dt:a(vt(t,n,r=pt)).then((function(){return a(Z(t,"footerProcessing",!1))}));break;default:a(Et(t,n)).then((function(){return a(Z(t,"footerProcessing",!1))}))}}},It="SET_TASKS_ORDER",Ct=function(t,e){return{type:It,listId:t,tasksOrder:e}},jt=n(32),yt=function(t){var e=t.height,n=t.width,a=t.fill,s=Object(jt.a)(t,["height","width","fill"]),i=Object(w.a)({},s,{width:n||(!n&&e?3.65*+e.slice(0,e.indexOf("p"))+"px":n||e?void 0:"252px"),height:e||(!e&&n?.27*+n.slice(0,n.indexOf("p"))+"px":e||n?void 0:"69px")});return r.a.createElement("svg",{svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",version:"1.0",viewBox:"0 0 128 35",space:"preserve",style:i},r.a.createElement("g",null,r.a.createElement("circle",{fill:a,cx:"17.5",cy:"17.5",r:"17.5"}),r.a.createElement("animate",{attributeName:"opacity",dur:"900ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;0.167;0.5;0.668;1",values:"0.3;1;1;0.3;0.3"})),r.a.createElement("g",null,r.a.createElement("circle",{fill:a,cx:"110.5",cy:"17.5",r:"17.5"}),r.a.createElement("animate",{attributeName:"opacity",dur:"900ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;0.334;0.5;0.835;1",values:"0.3;0.3;1;1;0.3"})),r.a.createElement("g",null,r.a.createElement("circle",{fill:a,cx:"64",cy:"17.5",r:"17.5"}),r.a.createElement("animate",{attributeName:"opacity",dur:"900ms",begin:"0s",repeatCount:"indefinite",keyTimes:"0;0.167;0.334;0.668;0.835;1",values:"0.3;0.3;1;1;0.3;0.3"})))},Lt=n(4),xt=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).state={editMode:!1,title:"",inputError:!1},n.updateListTitle=function(t){t.match(/%/)||(n.props.updateListTitle(n.props.listId,t),"/"!==n.props.history.location.pathname&&n.props.history.push("/".concat(t.replace(/\s|\?|#/g,"-"))))},n.setEditMode=function(){return n.setState({editMode:!0,title:n.props.title})},n.setDisplayMode=function(){n.state.inputError&&n.setState({inputError:!1}),n.setState({editMode:!1})},n.editListTitle=function(t){var e=t.currentTarget.value,a=n.props.listTitles.find((function(t){return t.title.toLowerCase()===e.toLowerCase()&&t.id!==n.props.listId}));n.state.inputError&&n.setState({inputError:!1}),""===e.trim()||e.length>100||e.match(/%/)||a?n.setState({title:e,inputError:!0}):n.setState({title:e})},n.setTitleOnKey=function(t){var e=t.currentTarget.value;"Enter"!==t.key||n.state.inputError||(n.setDisplayMode(),n.updateListTitle(e)),27===t.keyCode&&(n.setDisplayMode(),n.state.inputError&&n.setState({inputError:!1}))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return this.state.editMode?r.a.createElement("div",{className:x.a.list_title__input},r.a.createElement("input",{type:"text",value:this.state.title,className:this.state.inputError?x.a.error:"",onChange:this.editListTitle,autoFocus:!0,onBlur:this.setDisplayMode,onKeyDown:this.setTitleOnKey}),this.state.inputError&&r.a.createElement(j,{hint:'Please, check the % sign is missing and enter a unique title between 1 and 100 chars long, or press "Esc" to exit'})):r.a.createElement("div",{className:x.a.list_title},r.a.createElement("span",{onClick:this.setEditMode},this.props.title),(this.props.listDeliting||this.props.titleUpdating)&&r.a.createElement(yt,{fill:"rgb(85, 47, 11)",height:"10px",position:"absolute",bottom:"-12px",right:"43%"}))}}]),e}(r.a.Component),At=Object(Lt.compose)(Object(o.b)(null,{updateListTitle:function(t,e){return function(n){n(Z(t,"titleUpdating",!0)),F(t,e).then((function(a){0===a.data.resultCode&&(n(function(t,e){return{type:tt,listId:t,title:e}}(t,e)),n(Z(t,"titleUpdating",!1)))}))}}}),h.f)(xt),St=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).deleteList=function(){n.props.deleteList(n.props.listId).then((function(){"/"!==n.props.history.location.pathname&&n.props.history.push("/")}))},n.addTask=function(t){var e=n.props,a=e.listId,r=e.filterValue,s=e.taskIsAdding;r!==dt&&r!==ut||s||n.props.addTask(a,t),"ACTIVE"!==r||s||n.props.addTaskActive(a,t)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.listId,n=t.title,a=t.page,s=t.totalCount,i=t.filterValue,o=t.listTitles,l=t.maxTasksCount,c=t.generalCount,u=t.listDeliting,d=t.titleUpdating,p=t.taskIsAdding,f=i===ut?s:c;return r.a.createElement("div",{className:b.a.list_header},r.a.createElement(At,{listId:e,title:n,page:a,listTitles:o,listDeliting:u,titleUpdating:d}),f<l&&r.a.createElement("div",{className:b.a.list_header_add_form},r.a.createElement(y,{placeholder:"Add new task",hint:'Please, enter a title with length between 1 to 100 chars or press "Esc" to reset',validationFunc:function(t){if(""===t||t.length>100||""===t.trim())return!0},addItem:this.addTask}),p&&r.a.createElement(yt,{fill:"rgb(85, 47, 11)",height:"8px",position:"absolute",right:"50%",bottom:"-14px"})),!u&&r.a.createElement("i",{className:"fa fa-close "+b.a.delete_button,onClick:this.deleteList}),u&&r.a.createElement("i",{className:"fa fa-close "+b.a.delete_button}))}}]),e}(r.a.Component),wt={addTask:function(t,e){return function(n,a){var r=a().lists.find((function(e){return e.id===t})).tasksOrder;return n(Z(t,"taskIsAdding",!0)),R(t,e).then((function(e){if(0===e.data.resultCode){var a=[e.data.data.item.id].concat(Object(S.a)(r));n(Ct(t,a)),n(Et(t,1)).then((function(){n(kt(t,ut)),n(Z(t,"taskIsAdding",!1))}))}}))}},addTaskActive:function(t,e){return function(n,a){var r=a().lists.find((function(e){return e.id===t})).tasksOrder;return n(Z(t,"taskIsAdding",!0)),R(t,e).then((function(e){if(0===e.data.resultCode){var a=[e.data.data.item.id].concat(Object(S.a)(r));n(Ct(t,a)),B(t).then((function(e){var a=ft,r=e.data.items;n(Ot(t,1,r,a)),n(Z(t,"taskIsAdding",!1))}))}}))}},deleteList:function(t){return function(e){return e(Z(t,"listDeliting",!0)),K(t).then((function(n){0===n.data.resultCode&&e(function(t){return{type:et,listId:t}}(t))})).then((function(){return e(Z(t,"listDeliting",!1))}))}}},Pt=Object(Lt.compose)(Object(o.b)(null,wt),h.f)(St),Nt=n(56),Dt=n.n(Nt),Ft=n(24),Vt=n.n(Ft),Mt=n(34),Kt=n.n(Mt),Bt=function(t){var e=Object(a.useState)(!1),n=Object(T.a)(e,2),s=n[0],i=n[1],o=["Low","Middle","High","Urgent","Later"],l=o.map((function(t){return r.a.createElement("option",{className:Kt.a[t],key:t},t)})),c=function(){return o[t.priority]},u=function(){return Kt.a[o[t.priority]]+" "+Kt.a.taskPriority},d=function(){return i(!1)};return s?r.a.createElement("select",{defaultValue:c(),className:u(),onChange:function(e){var n=o.findIndex((function(t){return t===e.currentTarget.value}));t.updateTask({priority:n}),d()},onBlur:d,onKeyDown:function(t){27===t.keyCode&&d()},autoFocus:!0}," ",l," "):r.a.createElement("span",{onClick:function(){return i(!0)},className:u()},c()," \xa0")},Ut=n(35),Rt=n.n(Ut),Ht=function(t){var e=Object(a.useState)(!1),n=Object(T.a)(e,2),s=n[0],i=n[1],o=Object(a.useState)(""),l=Object(T.a)(o,2),c=l[0],u=l[1],d=Object(a.useState)(!1),p=Object(T.a)(d,2),f=p[0],m=p[1],k=function(){f&&m(!1),i(!1)};return s?r.a.createElement("span",{className:Rt.a.taskTitle},r.a.createElement("input",{type:"text",value:c,className:f?Rt.a.error:"",onChange:function(t){var e=t.currentTarget.value;f&&m(!1),""===e.trim()||e.length>100?(u(e),m(!0)):u(e)},autoFocus:!0,onBlur:k,onKeyDown:function(e){var n=e.currentTarget.value;"Enter"!==e.key||f||(t.updateTask({title:n}),k()),27===e.keyCode&&(k(),f&&m(!1))}}),f&&r.a.createElement(j,{hint:'Please, enter a title with length between 1 to 100 chars or press "Esc" to reset'})):r.a.createElement("span",{onClick:function(){i(!0),u(t.title)},className:Rt.a.taskTitle},t.title,", ")},qt=n(57),Gt=n.n(qt),Jt=Object(o.b)(null,{reorderTask:function(t,e,n,a){return function(r,s){var i=void 0!==a?+a-1:null,o=s().lists.find((function(e){return e.id===t}));if(null!==i&&i!==+n){var l=function(){var t=o.filterValue,e=o.prevActiveId;return null===i&&0===n?null:null===i?o.tasksOrder[n-1]:t===dt&&0===i?e:0===i?null:i<=+n?o.tasksOrder[i-1]:i>+n?o.tasksOrder[i]:void 0}(),c=o.countOnPage,u=o.filterValue,d=o.tasks.find((function(t){return t.id===e})).status,p=function(){var t=Object(S.a)(o.tasksOrder);if(i<n){for(var e=t[n],a=n-1;a>=i;a--)t[a+1]=t[a];return t[i]=e,t}if(i>n){for(var r=t[n],s=n;s<i;s++)t[s]=t[s+1];return t[i]=r,t}return t}(),f=a?Math.ceil(a/c):1;r(Z(t,"taskIsAdding",!0)),G(t,e,l).then((function(e){0===e.data.resultCode&&(u===ut&&r(Et(t,f)).then((function(){r(Ct(t,p)),r(Z(t,"taskIsAdding",!1))})),"ACTIVE"!==u&&u!==dt||r(vt(t,f,d)).then((function(){r(Z(t,"taskIsAdding",!1))})))}))}}}})((function(t){var e=t.listId,n=t.taskId,s=t.tasksCount,i=t.renderIndex,o=t.reorderTask,l=Object(a.useState)(!1),c=Object(T.a)(l,2),u=c[0],d=c[1],p=function(){return d(!1)},f=function(){for(var t=[],e=1;e<=s;e++){var n=r.a.createElement("option",{value:e,key:e},e);t.push(n)}return t}();return u?r.a.createElement("select",{autoFocus:!0,onBlur:p,onKeyDown:function(t){27===t.keyCode&&p()},onChange:function(t){var a=t.currentTarget.value;o(e,n,i-1,a),p()},defaultValue:i},f):r.a.createElement("span",{className:Gt.a.taskOrder,onClick:function(){return d(!0)}}," ",i," - ")})),Wt=Object(o.b)(null,{updateTask:function(t,e,n){return function(a,r){var s=r().lists.find((function(e){return e.id===t})),i=s.page,o=s.filterValue,l=s.tasks.length,c=s.tasks.find((function(t){return t.id===e})),u=Object(w.a)({},c,{},n);a(ct(t,e,"taskInProcess",!0)),H(t,e,u).then((function(e){var r;0===e.data.resultCode&&(o===ut?a((r=e.data.data.item,{type:ot,task:r})):B(t).then((function(e){if(!e.data.error){var r=e.data.items,s=o===dt?pt:ft;1===l&&1!==i&&void 0!==n.status?a(Ot(t,i-1,r,s)):1===l&&1===i&&void 0!==n.status?(a(Et(t,1)),a(kt(t,ut))):a(Ot(t,i,r,s))}})))})).then((function(){return a(ct(t,e,"taskInProcess",!1))}))}},delTaskFromPage:function(t,e){return function(n,a){var r=a().lists.find((function(e){return e.id===t})),s=r.page,i=r.filterValue,o=r.totalCount,l=r.countOnPage,c=r.tasks.length,u=o?Math.ceil(o/l):1;n(ct(t,e,"taskInProcess",!0)),q(t,e).then((function(a){if(0===a.data.resultCode){if(10===c&&s<u)if(i===ut)n(Et(t,s));else n(vt(t,s,i===dt?pt:ft));if(1===c&&1!==s)if(i===ut)n(Et(t,s-1));else n(vt(t,s-1,i===dt?pt:ft));1===c&&1===s&&i!==ut&&n(Et(t,1)).then((function(){return n(kt(t,ut))})),n(i===ut?function(t,e,n){return{type:it,listId:t,taskId:e,page:n}}(t,e,s):function(t,e,n){return{type:bt,listId:t,taskId:e,page:n}}(t,e,s))}})).then((function(){return n(ct(t,e,"taskInProcess",!1))}))}}})((function(t){var e=t.task,n=e.id,a=e.status,s=e.renderIndex,i=e.priority,o=e.title,l=e.taskInProcess,c=t.listId,u=t.tasksCount,d=function(e){return t.updateTask(c,n,e)};return r.a.createElement("div",{className:Vt.a.todoList_task},r.a.createElement("div",{className:a?Vt.a.taskIsDone:""},r.a.createElement("input",{className:Vt.a.isDoneCheck,onChange:function(t){var e=t.currentTarget.checked?pt:ft;d({status:e})},type:"checkbox",checked:a}),r.a.createElement(Jt,{listId:c,taskId:n,renderIndex:s,tasksCount:u}),r.a.createElement(Ht,{title:o,updateTask:d}),r.a.createElement(Bt,{priority:i,updateTask:d}),!l&&r.a.createElement("i",{className:"fa fa-close "+Vt.a.delete_button,onClick:function(){return t.delTaskFromPage(c,n)}}),l&&r.a.createElement("i",{className:"fa fa-close "+Vt.a.delete_button})&&r.a.createElement(yt,{fill:"rgb(85, 47, 11)",height:"8px"})))})),Xt=function(t){var e=t.tasks,n=Object(jt.a)(t,["tasks"]),a=e.map((function(t){return r.a.createElement(Wt,Object.assign({key:t.id,task:t},n))}));return r.a.createElement("div",{className:Dt.a.listTasks},a)},zt=n(58),Yt=n.n(zt),Zt=n(22),Qt=n.n(Zt),$t=n(31),te=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).handleClickOutside=function(){return n.setState({showOrder:!1})},n.state={showOrder:!1},n.toggleMode=function(){return n.setState({showOrder:!n.state.showOrder})},n.reorderOnClick=function(t){var e=n.props,a=e.listId,r=e.order;(0,e.reorderList)(a,r,t),n.toggleMode()},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.listsCount,a=e.order,s=function(){for(var e=[],s=function(n){var s=n-1!==a?Qt.a.orderNumber:Qt.a.orderNumber+" "+Qt.a.active,i=r.a.createElement("button",{className:s,onClick:function(){return t.reorderOnClick(n)},key:n},n);e.push(i)},i=1;i<=n;i++)s(i);return e}(),i=this.state.showOrder?Qt.a.pressed:"";return r.a.createElement("div",{className:Qt.a.listOrder},r.a.createElement("button",{className:i,onClick:this.toggleMode},a+1+"/"+n),this.state.showOrder&&r.a.createElement("div",{className:Qt.a.orderBox},s))}}]),e}(r.a.Component),ee=Object(Lt.compose)(Object(o.b)(null,{reorderList:function(t,e,n){return function(a,r){var s=void 0!==n?+n-1:null;if(null!==s&&s!==+e){var i=null===s&&0===e?null:null===s?r().listsOrder[e-1]:0===s?null:s<=+e?r().listsOrder[s-1]:s>+e?r().listsOrder[s]:void 0,o=function(){var t=Object(S.a)(r().lists);if(s<e){for(var n=t[e],a=e-1;a>=s;a--)t[a+1]=t[a];return t[s]=n,t}if(s>e){for(var i=t[e],o=e;o<s;o++)t[o]=t[o+1];return t[s]=i,t}return t}();a(z(!0)),M(t,i).then((function(t){0===t.data.resultCode&&(a(function(t){return{type:nt,reorderedLists:t}}(o)),a(z(!1)))}))}}}}),$t.a)(te),ne=n(19),ae=n.n(ne),re=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).handleClickOutside=function(){return n.setState({isHidden:!0})},n.state={isHidden:!0},n.toggleOnClick=function(){return n.setState({isHidden:!n.state.isHidden})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.listId,n=t.filterValue,a=t.footerProcessing,s=t.setFilterValue,i=n===ut?ae.a.pressed:"",o="ACTIVE"===n?ae.a.pressed:"",l=n===dt?ae.a.pressed:"",c=this.state.isHidden?ae.a.frontButton:ae.a.frontButton+" "+ae.a.pressed;return r.a.createElement("div",{className:ae.a.statusFilter},r.a.createElement("button",{className:c,onClick:this.toggleOnClick},{ALL_S:"All",COMPLETED:"Completed",ACTIVE:"Active"}[n]),!this.state.isHidden&&r.a.createElement("div",{className:ae.a.filterButtons},r.a.createElement("button",{onClick:function(){n!==ut&&s(e,ut)},className:i,disabled:a},"All"),r.a.createElement("button",{onClick:function(){n!==dt&&s(e,dt)},className:l,disabled:a},"Completed"),r.a.createElement("button",{onClick:function(){"ACTIVE"!==n&&s(e,"ACTIVE")},className:o,disabled:a},"Active")))}}]),e}(r.a.Component),se=Object(Lt.compose)(Object(o.b)(null,{setFilterValue:function(t,e){return function(n,a){var r=a().lists.find((function(e){return e.id===t}));if(r.filterValue!==dt){var s=0===r.tasks.findIndex((function(t){return t.status===pt}))||0===r.tasks.length?null:r.tasks[0].id;n(_t(t,s))}n(Tt(t,e,1)),n(kt(t,e))}}}),$t.a)(re),ie=n(29),oe=n.n(ie),le=Object(o.b)(null,{setTasksPage:Tt})((function(t){var e=t.listId,n=t.filterValue,s=t.page,i=t.pagesCount,o=t.setTasksPage,l=Object(a.useState)(!1),c=Object(T.a)(l,2),u=c[0],d=c[1];Object(a.useEffect)((function(){return d(!1)}),[s]);return r.a.createElement("div",{className:oe.a.tasksPagesLinks},function(){for(var t=[],a=function(a){var i=!(a!==s&&!u),l=a===s?"".concat(oe.a.pageLink," ").concat(oe.a.active):oe.a.pageLink,c=r.a.createElement("button",{key:a,disabled:i,className:l,onClick:function(){o(e,n,a),d(!0)}},a);t.push(c)},l=1;l<=i;l++)a(l);return t}())})),ce=Object(h.f)((function(t){var e=t.listId,n=t.filterValue,a=t.listsCount,s=t.order,i=t.totalCount,o=t.countOnPage,l=t.page,c=t.footerProcessing,u=i?Math.ceil(i/o):1,d="/"===t.history.location.pathname;return r.a.createElement("div",{className:Yt.a.list_footer},u>1&&r.a.createElement(le,{page:l,pagesCount:u,listId:e,filterValue:n}),r.a.createElement(se,{listId:e,filterValue:n,footerProcessing:c}),d&&1!==a&&r.a.createElement(ee,{order:s,listsCount:a,listId:e}),c&&r.a.createElement(yt,{fill:"rgb(85, 47, 11)",height:"10px",position:"absolute",bottom:"5px",right:"45%"}))})),ue=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(s)))).render=function(){var t=n.props,e=t.listsCount,a=t.listTitles,s=t.maxTasksCount,i=n.props.list,o=i.title,l=i.id,c=i.page,u=i.totalCount,d=i.countOnPage,p=i.tasks,f=i.generalCount,m=i.order,k=i.filterValue,h=i.listDeliting,_=i.titleUpdating,O=i.taskIsAdding,b=i.footerProcessing,v=i.tasksOrder,E=v?v.length:null;return r.a.createElement("div",{className:g.a.todoList},r.a.createElement("section",{className:g.a.todoList_wrapper},r.a.createElement(Pt,{title:o,listId:l,filterValue:k,page:c,maxTasksCount:s,generalCount:f,totalCount:u,listTitles:a,listDeliting:h,titleUpdating:_,taskIsAdding:O}),r.a.createElement(Xt,{tasks:p,listId:l,tasksCount:E})),r.a.createElement(ce,{listId:l,page:c,order:m,listsCount:e,filterValue:k,countOnPage:d,totalCount:u,footerProcessing:b}))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.restoreTasks(this.props.list.id)}}]),e}(r.a.Component),de=n(59),pe=n.n(de),fe=n(60),me=n.n(fe),ke=Object(h.f)((function(t){return r.a.createElement("div",{className:me.a.error404},r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,'"',t.location.pathname,'"'),". Please, check URL."))})),he=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).restoreTasks=function(t){return n.props.restoreTasks(t)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.props.restoreLists()}},{key:"render",value:function(){var t=this,e=this.props.lists.map((function(t){return{title:t.title,id:t.id}})),n=this.props.lists.map((function(n){var a=t.props.maxTasksCount,s=n.title.replace(/\s|\?|#/g,"-");return r.a.createElement(h.a,{path:"/".concat(s),exact:!0,key:n.id,render:function(){return r.a.createElement(ue,{list:n,key:n.id,maxTasksCount:a,restoreTasks:t.restoreTasks,listTitles:e})}})})),a=this.props.lists.map((function(n){var a=t.props,s=a.listsCount,i=a.maxTasksCount;return r.a.createElement(ue,{list:n,key:n.id,listTitles:e,listsCount:s,restoreTasks:t.restoreTasks,maxTasksCount:i})})),s=this.props.lists.map((function(t){var e=t.title.replace(/\s|\?|#/g,"-");return r.a.createElement("li",{key:t.id},r.a.createElement(l.b,{to:"/".concat(e)},t.title))}));return r.a.createElement("div",{className:k.a.app},r.a.createElement("div",{className:k.a.app_header},this.props.listsLoading&&r.a.createElement(yt,{position:"absolute",height:"12px",top:"1.75em",right:"34%",fill:"white"}),r.a.createElement(l.b,{to:"/",exact:!0,className:k.a.app_title},r.a.createElement("h2",null,r.a.createElement("img",{src:pe.a,alt:"book",className:k.a.app_header_icon}),"Tasks Manager")),this.props.lists.length<this.props.maxListsCount&&r.a.createElement("div",{className:k.a.app_addItemForm},r.a.createElement(y,{addItem:function(e){t.props.addList(e),"/"!==t.props.history.location.pathname&&t.props.history.push("/")},hint:'Please, check the % sign is missing and enter a unique title between 1 and 100 chars long, or press "Esc" to reset',validationFunc:function(n){var a=e.find((function(e){return e.title.toLowerCase()===n.toLowerCase()&&e.id!==t.props.listId}));if(""===n.trim()||n.length>100||n.match(/%/)||a)return!0},placeholder:"Add list"}))),r.a.createElement("nav",{className:k.a.app_header_navigation},r.a.createElement("ul",null,s)),r.a.createElement("div",{className:k.a.app_lists},r.a.createElement(h.c,null,n,r.a.createElement(h.a,{path:"/",exact:!0},a),r.a.createElement(h.a,{component:ke}))))}}]),e}(r.a.Component),_e=Object(Lt.compose)(Object(o.b)((function(t){return{lists:t.lists,listsCount:t.lists.length,listsLoading:t.listsProgress.listsLoading,maxListsCount:t.maxListsCount,maxTasksCount:t.maxTasksCount}}),{restoreLists:function(){return function(t){t(z(!0)),D().then((function(e){var n;t((n=e.data,{type:Q,lists:n})),t(z(!1))}))}},restoreTasks:function(t){return function(e){B(t).then((function(n){e(function(t,e,n){return{type:at,listId:t,tasks:e,totalCount:n}}(t,n.data.items,n.data.totalCount))}))}},addList:function(t){return function(e){e(z(!0)),V(t).then((function(t){var n;e((n=t.data.data.item,{type:$,list:n})),e(z(!1))}))}}}),h.f)(he),ge=n(61),Oe=n(62),be=Object(Lt.createStore)(W,Object(ge.composeWithDevTools)(Object(Lt.applyMiddleware)(Oe.a)));i.a.render(r.a.createElement(l.a,null,r.a.createElement(o.a,{store:be},r.a.createElement(_e,null))),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.09b70a04.chunk.js.map