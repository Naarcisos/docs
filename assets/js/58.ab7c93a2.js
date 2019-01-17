(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{228:function(e,t,o){"use strict";o.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=o(6),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[o("h1",{attrs:{id:"authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authentication","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),o("blockquote",[o("p",[e._v("When demoing "),o("code",[e._v("SDK.whatever()")]),e._v(" method, that's either fired through "),o("code",[e._v("this.$api")]),e._v(" or on the "),o("code",[e._v("api")]),e._v(" object directly after it being imported.")])]),e._v(" "),o("h2",{attrs:{id:"token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#token","aria-hidden":"true"}},[e._v("#")]),e._v(" Token")]),e._v(" "),o("p",[e._v("The Directus API returns a "),o("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT token"),o("OutboundLink")],1),e._v(" on successful login. This token will always expire in 5 minutes.")]),e._v(" "),o("h2",{attrs:{id:"sdk-login-logout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sdk-login-logout","aria-hidden":"true"}},[e._v("#")]),e._v(" SDK Login / Logout")]),e._v(" "),o("p",[e._v("The application forwards the credentials to the SDK, which will make the request for the token and start an internal interval.")]),e._v(" "),o("p",[o("strong",[e._v("The SDK keeps the user logged in forever")]),e._v(". To logout of the application, the "),o("code",[e._v("logout")]),e._v(" method has to be fired on the SDK. This will delete the token locally and cancel the refresh interval. Checkout the "),o("a",{attrs:{href:"https://github.com/directus/sdk-js/blob/master/remote.d.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK implementation"),o("OutboundLink")],1),e._v(" for the actual inner working of this.")]),e._v(" "),o("h2",{attrs:{id:"application-auth-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-auth-flow","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Auth Flow")]),e._v(" "),o("p",[e._v("The SDK uses "),o("a",{attrs:{href:"https://github.com/sindresorhus/emittery",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emittery"),o("OutboundLink")],1),e._v(' under the hood. The SDK is "connected" to the store via these events. For example: '),o("code",[e._v("login:success")]),e._v(" will "),o("code",[e._v("commit")]),e._v(" a login mutation to the store, setting the "),o("code",[e._v("loggedIn")]),e._v(" flag in the store to true. Likewise, "),o("code",[e._v("login:failed")]),e._v(" / "),o("code",[e._v("logout")]),e._v(" will set this flag to false. The store is only used to reflect the current loggedin state of the SDK. The application has no further involvement in keeping the user logged in.")]),e._v(" "),o("h3",{attrs:{id:"logging-in"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-in","aria-hidden":"true"}},[e._v("#")]),e._v(" Logging In")]),e._v(" "),o("ul",[o("li",[e._v("User enters credentials")]),e._v(" "),o("li",[e._v("Application fires "),o("code",[e._v("SDK.login()")]),e._v(" with the credentials")]),e._v(" "),o("li",[e._v("SDK reports logged in => store.state.auth.loggedIn = true.")]),e._v(" "),o("li",[e._v("SDK reports logged in failed => store.state.auth.loggedIn = false && store.state.auth.error = error.")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("SDK.login()")]),e._v(" method returns a promise. The promise will resolve on a successful login. Therefore, the application can navigate away from the login page on a resolve of this promise.")]),e._v(" "),o("h3",{attrs:{id:"logging-out"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging-out","aria-hidden":"true"}},[e._v("#")]),e._v(" Logging Out")]),e._v(" "),o("ul",[o("li",[e._v("Application fires "),o("code",[e._v("SDK.logout()")])]),e._v(" "),o("li",[e._v("SDK logs out the user")]),e._v(" "),o("li",[e._v("SDK reports logged out => store.state.auth.loggedIn = false.")])]),e._v(" "),o("h2",{attrs:{id:"persisted-sessions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#persisted-sessions","aria-hidden":"true"}},[e._v("#")]),e._v(" Persisted Sessions")]),e._v(" "),o("p",[e._v("Keeps the access token in the SDK and the application store in sync. The token in the store gets saved and retrieved to/from localstorage so the user isn't logged out on refresh.")]),e._v(" "),o("p",[e._v("If the user re-opens the page when there is an invalid token in the store, the SDKs loggedIn flag will be false and the application will logout immediately.")])])},[],!1,null,null,null);s.options.__file="auth.md";t.default=s.exports}}]);