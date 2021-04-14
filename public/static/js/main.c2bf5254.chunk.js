(this["webpackJsonpevent-management"]=this["webpackJsonpevent-management"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"URL":"https://event-management-harshar715.herokuapp.com/graphql"}')},,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),o=n(20),s=n.n(o),a=(n(26),n(7)),r=n(8),l=n(10),d=n(9),u=n(12),h=n(2),j=c.a.createContext({token:null,userId:null,login:function(e,t,n){},logout:function(){}}),b=(n(27),n(0)),f=n(16),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={isLogin:!0},i.switchModeHandler=function(){i.setState((function(e){return{isLogin:!e.isLogin}}))},i.submitHandler=function(e){e.preventDefault();var t=i.emailElement.current.value,n=i.passwordElement.current.value;if(0!==t.trim().length&&0!==n.trim().length){var c={query:'\n                query {\n                    login(email: "'.concat(t,'", password: "').concat(n,'") {\n                        userId\n                        token\n                        tokenExpiration\n                    }\n                }\n            ')};i.state.isLogin||(c={query:'\n                    mutation {\n                        createUser(userInput: {email: "'.concat(t,'", password: "').concat(n,'"}) {\n                            _id\n                            email\n                        }\n                    }\n                ')}),fetch(f.URL,{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed !!");return e.json()})).then((function(e){e.data.login.token&&i.context.login(e.data.login.token,e.data.login.userId,e.data.login.tokenExpiration)})).catch((function(e){console.log(e)}))}},i.emailElement=c.a.createRef(),i.passwordElement=c.a.createRef(),i}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"auth-form",onSubmit:this.submitHandler,children:[Object(b.jsx)("h2",{children:this.state.isLogin?"Login":"Register"}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email",ref:this.emailElement})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",ref:this.passwordElement})]}),Object(b.jsxs)("div",{className:"form-actions",children:[Object(b.jsx)("button",{type:"submit",children:"Submit"}),Object(b.jsxs)("button",{type:"button",onClick:this.switchModeHandler,children:["Switch to ",this.state.isLogin?"Signup":"Login"]})]})]})}}]),n}(i.Component);m.contextType=j;var v=m,O=(n(29),function(e){return Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("header",{className:"modal-header",children:Object(b.jsx)("h1",{children:e.title})}),Object(b.jsx)("section",{className:"modal-content",children:e.children}),Object(b.jsxs)("section",{className:"modal-actions",children:[e.canCancel&&Object(b.jsx)("button",{className:"btn",onClick:e.onCancel,children:"Cancel"}),e.canConfirm&&e.showButton&&Object(b.jsx)("button",{className:"btn",onClick:e.onConfirm,children:e.confirmText})]})]})}),x=(n(30),function(e){return Object(b.jsx)("div",{className:"backdrop"})}),g=(n(31),n(32),function(e){return Object(b.jsxs)("li",{className:"events-list-item",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsxs)("h2",{children:["\u20b9",e.price," -- ",new Date(e.date).toLocaleDateString()]})]}),Object(b.jsx)("div",{children:e.userId===e.creatorId?Object(b.jsx)("p",{children:"You are the owner of this event!"}):Object(b.jsx)("button",{className:"btn",onClick:e.onDetail.bind(undefined,e.eventId),children:"View Details"})})]},e.eventId)}),p=(n(33),function(e){var t=e.events.map((function(t){return Object(b.jsx)(g,{eventId:t._id,title:t.title,userId:e.authUserId,price:t.price,date:t.date,creatorId:t.createdBy._id,onDetail:e.onViewDetail},t._id)}));return Object(b.jsx)("ul",{className:"events-list",children:t})}),k=(n(34),function(){return Object(b.jsx)("p",{className:"spinner",children:"Loading..."})}),E=n(16),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={creating:!1,events:[],isLoading:!1,selectedEvent:null},i.isActive=!0,i.startCreateEventHandler=function(){i.setState({creating:!0})},i.modalConfirmHandler=function(){i.setState({creating:!1});var e=i.titleElementRef.current.value,t=+i.priceElementRef.current.value,n=i.dateElementRef.current.value,c=i.descriptionElementRef.current.value;if(!(0===e.trim().length||t<=0||0===n.trim().length||0===c.trim().length)){var o={title:e,price:t,date:n,description:c};console.log(o);var s={query:'\n                mutation {\n                    createEvent(eventInput: {title: "'.concat(e,'", price: ').concat(t,', date: "').concat(n,'", description: "').concat(c,'"}) {\n                        _id\n                        title\n                        description\n                        date\n                        price\n                    }\n                }\n            ')},a=i.context.token;fetch(E.URL,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed !!");return e.json()})).then((function(e){i.fetchEvents()})).catch((function(e){console.log(e)}))}},i.modalCancelHandler=function(){i.setState({creating:!1,selectedEvent:null})},i.showDetailHandler=function(e){i.setState((function(t){return{selectedEvent:t.events.find((function(t){return t._id===e}))}}))},i.bookEventHandler=function(){var e={query:'\n                mutation {\n                    bookEvent(eventId: "'.concat(i.state.selectedEvent._id,'") {\n                        _id\n                        createdAt\n                        updatedAt\n                    }\n                }\n            ')},t=i.context.token;fetch(E.URL,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed !!");return e.json()})).then((function(e){console.log(e),!0===i.isActive&&i.setState({selectedEvent:null})})).catch((function(e){console.log(e),!0===i.isActive&&i.setState({selectedEvent:null})}))},i.titleElementRef=c.a.createRef(),i.priceElementRef=c.a.createRef(),i.dateElementRef=c.a.createRef(),i.descriptionElementRef=c.a.createRef(),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this;this.setState({isLoading:!0});fetch(E.URL,{method:"POST",body:JSON.stringify({query:"\n                query {\n                    events {\n                        _id\n                        title\n                        description\n                        date\n                        price\n                        createdBy {\n                            _id\n                            email\n                        }\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed !!");return e.json()})).then((function(t){var n=t.data.events;!0===e.isActive&&e.setState({events:n,isLoading:!1})})).catch((function(t){!0===e.isActive&&e.setState({isLoading:!1}),console.log(t)}))}},{key:"componentWillUnmount",value:function(){this.isActive=!1}},{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[(this.state.creating||this.state.selectedEvent)&&Object(b.jsx)(x,{}),this.state.creating&&Object(b.jsx)(O,{title:"Add Events",canCancel:!0,canConfirm:!0,onCancel:this.modalCancelHandler,onConfirm:this.modalConfirmHandler,confirmText:"Confirm",showButton:!!this.context.token,children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{type:"text",id:"title",ref:this.titleElementRef})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"price",children:"Price"}),Object(b.jsx)("input",{type:"number",id:"price",ref:this.priceElementRef})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"date",children:"Date"}),Object(b.jsx)("input",{type:"datetime-local",id:"date",ref:this.dateElementRef})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("textarea",{rows:"4",id:"description",ref:this.descriptionElementRef})]})]})}),this.state.selectedEvent&&Object(b.jsxs)(O,{title:"Event Details",canCancel:!0,canConfirm:!0,onCancel:this.modalCancelHandler,onConfirm:this.bookEventHandler,confirmText:"Book Event",showButton:!!this.context.token,children:[Object(b.jsx)("h1",{children:this.state.selectedEvent.title}),Object(b.jsxs)("h2",{children:["\u20b9",this.state.selectedEvent.price," -- ",new Date(this.state.selectedEvent.date).toLocaleDateString()]}),Object(b.jsx)("p",{children:this.state.selectedEvent.description})]}),this.context.token&&Object(b.jsxs)("div",{className:"events-control",children:[Object(b.jsx)("p",{children:"Share your own Events !!"}),Object(b.jsx)("button",{className:"btn",onClick:this.startCreateEventHandler,children:"Create Event"})]}),this.state.isLoading?Object(b.jsx)(k,{}):Object(b.jsx)(p,{events:this.state.events,authUserId:this.context.userId,onViewDetail:this.showDetailHandler})]})}}]),n}(i.Component);y.contextType=j;var C=y,w=(n(35),function(e){return Object(b.jsx)("ul",{className:"booking-list",children:e.bookings.map((function(t){return Object(b.jsxs)("li",{className:"booking-item",children:[Object(b.jsxs)("div",{className:"booking-item-data",children:[t.event.title," -- ",new Date(t.createdAt).toLocaleDateString()]}),Object(b.jsx)("div",{className:"booking-item-actions",children:Object(b.jsx)("button",{className:"btn",onClick:e.onDelete.bind(undefined,t._id),children:"Cancel Booking"})})]},t._id)}))})}),S=(n(36),n(16)),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!1,bookings:[]},e.deleteBookingHandler=function(t){var n={query:'\n                mutation {\n                    cancelBooking(bookingId: "'.concat(t,'") {\n                        _id\n                    }\n                }\n            ')};fetch(S.URL,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed !!");return e.json()})).then((function(t){e.fetchBookings()})).catch((function(e){console.log(e)}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.fetchBookings()}},{key:"fetchBookings",value:function(){var e=this;this.setState({isLoading:!0});fetch(S.URL,{method:"POST",body:JSON.stringify({query:"\n                query {\n                    bookings {\n                        _id\n                        createdAt\n                        event {\n                            _id\n                            title\n                            date\n                        }\n                    }\n                }\n            "}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.context.token}}).then((function(e){if(200!==e.status&&201!==e.status)throw new Error("Failed !!");return e.json()})).then((function(t){var n=t.data.bookings;e.setState({bookings:n,isLoading:!1})})).catch((function(t){e.setState({isLoading:!1}),console.log(t)}))}},{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:this.state.isLoading?Object(b.jsx)(k,{}):Object(b.jsx)(w,{bookings:this.state.bookings,onDelete:this.deleteBookingHandler})})}}]),n}(i.Component);N.contextType=j;var L=N,R=(n(37),function(e){return Object(b.jsx)(j.Consumer,{children:function(e){return Object(b.jsxs)("header",{className:"main-navigation",children:[Object(b.jsx)("div",{className:"main-navigation-logo",children:Object(b.jsx)("h1",{children:"Event Management"})}),Object(b.jsx)("nav",{className:"main-navigation-item",children:Object(b.jsxs)("ul",{children:[!e.token&&Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/auth",children:"Authenticate"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/events",children:"Events"})}),e.token&&Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/bookings",children:"Bookings"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:e.logout,children:"Logout"})})]})]})})]})}})}),I=(n(43),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={token:null,userId:null},e.login=function(t,n,i){e.setState({token:t,userId:n})},e.logout=function(){e.setState({token:null,userId:null})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.a,{children:Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)(j.Provider,{value:{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout},children:[Object(b.jsx)(R,{}),Object(b.jsx)("main",{className:"main-content",children:Object(b.jsxs)(h.d,{children:[this.state.token&&Object(b.jsx)(h.a,{from:"/",to:"/events",exact:!0}),this.state.token&&Object(b.jsx)(h.a,{from:"/auth",to:"/events",exact:!0}),!this.state.token&&Object(b.jsx)(h.b,{path:"/auth",component:v}),Object(b.jsx)(h.b,{path:"/events",component:C}),this.state.token&&Object(b.jsx)(h.b,{path:"/bookings",component:L}),!this.state.token&&Object(b.jsx)(h.a,{to:"/auth",exact:!0})]})})]})})})}}]),n}(i.Component)),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),o(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),D()}],[[44,1,2]]]);
//# sourceMappingURL=main.c2bf5254.chunk.js.map