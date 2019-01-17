(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{273:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(6),r=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interfaces","aria-hidden":"true"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),s("blockquote",[s("p",[t._v("Interfaces allow for different ways of viewing and interacting with field data. These interfaces are primarily used on the edit form of the Item Detail page, but also render readonly data on the Item Browse page.")])]),t._v(" "),s("h2",{attrs:{id:"files-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Files & Structure")]),t._v(" "),s("p",[t._v("An interface is made up out of three required core files. You can create these from scratch or duplicate an existing Interface to get a head-start.")]),t._v(" "),s("h3",{attrs:{id:"input-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("input.vue")])]),t._v(" "),s("p",[t._v("A standard Vue.js single file component that renders the actual interface and emits the value on create/update. This is what is shown on the Item Detail page. For example the Color interface shows a palette of clickable color options.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@input")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$emit("),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("input"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaceMixin "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"@directus/vue-mixins"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"interface-example"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mixins"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("interfaceMixin"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("input")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("var")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--border-radius"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"display-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("display.vue")])]),t._v(" "),s("p",[t._v("A standard Vue.js single file component that renders a readonly version of the value. This is what is shown on the Item Browse page (depending on the selected layout). For example the Color interface shows a swatch of the saved value.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("class-name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{value}}\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" interfaceMixin "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"@directus/vue-mixins"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"readonly-example"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mixins"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("interfaceMixin"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v(".class-name")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("var")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--accent"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"meta-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta-json","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("meta.json")])]),t._v(" "),s("p",[t._v("The meta.json file contains metadata for the interface, such as its unique name, author, version, interface options, and translations.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Interface Example"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"version"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"1.0.0"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("name")]),t._v(" — REQUIRED. The unique name of this interface")]),t._v(" "),s("li",[s("code",[t._v("version")]),t._v(" — REQUIRED. Whenever updating an extension it is important to increment the version number in accordance with "),s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SemVer"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("types")]),t._v(" — An array of allowed Directus Field Types")]),t._v(" "),s("li",[s("code",[t._v("fieldset")]),t._v(" — TODO")]),t._v(" "),s("li",[s("code",[t._v("icon")]),t._v(" — The name of a Material Design icon to represent the interface within Settings")]),t._v(" "),s("li",[s("code",[t._v("options")]),t._v(" — Define the options available to this interface")]),t._v(" "),s("li",[s("code",[t._v("recommended")]),t._v(" — Recommended values used during creation of the field (eg: set a recommnded length or default)")]),t._v(" "),s("li",[s("code",[t._v("translation")]),t._v(" — JSON of translations used by the interface")]),t._v(" "),s("li",[s("code",[t._v("hideLabel")]),t._v(" — Can be set to "),s("code",[t._v("true")]),t._v(" to hide the field label on the Item Detail page")])]),t._v(" "),s("h2",{attrs:{id:"states"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#states","aria-hidden":"true"}},[t._v("#")]),t._v(" States")]),t._v(" "),s("p",[t._v("Every interface should support a "),s("code",[t._v("readonly")]),t._v(" and a "),s("code",[t._v("disabled")]),t._v(" state.")]),t._v(" "),s("h2",{attrs:{id:"mixin-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin-props","aria-hidden":"true"}},[t._v("#")]),t._v(" Mixin (props)")]),t._v(" "),s("p",[t._v("We've prepared a "),s("a",{attrs:{href:"https://github.com/directus/extensions/blob/master/mixins/interface.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("mixin"),s("OutboundLink")],1),t._v(" that adds all the props to the component that the application passes to the interface. These include value, collection, relationship, and a bunch of others. A minimal interface mostly uses "),s("code",[t._v("value")]),t._v(" and "),s("code",[t._v("options")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing","aria-hidden":"true"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("p",[t._v("There is an interface debugger under Directus App Settings which you can use to test all the different properties and options of any interface available within the connected API.")]),t._v(" "),s("h2",{attrs:{id:"styling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styling","aria-hidden":"true"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),s("p",[t._v("Directus uses CSS Custom Properties across the application to enable theming and style consistencies. Check the "),s("a",{attrs:{href:"https://github.com/directus/app/blob/master/src/assets/global.scss",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("global.scss")]),s("OutboundLink")],1),t._v(" file in the app for the full list of available variables.")]),t._v(" "),s("h3",{attrs:{id:"colors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colors","aria-hidden":"true"}},[t._v("#")]),t._v(" Colors")]),t._v(" "),s("p",[t._v("The full material design color palette is for use in custom properties, eg: "),s("code",[t._v("var(--red-50)")]),t._v(" or "),s("code",[t._v("var(--deep-purple-500)")]),t._v(". However, we recommend sticking to the following color names, seeing these are the ones that will be overridden for theming:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var(--lightest-gray);\nvar(--lighter-gray);\nvar(--light-gray);\nvar(--gray);\nvar(--dark-gray);\nvar(--darker-gray);\nvar(--darkest-gray);\n\nvar(--accent);  // user configurable accent color\nvar(--action);  // color of action buttons, defaults to light-blue\nvar(--success); // something went well, green\nvar(--warning); // user's attention is needed before proceeding, yellow\nvar(--danger);  // something failed or the action has irreversible side effects; red\n")])])])])},[],!1,null,null,null);r.options.__file="interfaces.md";a.default=r.exports}}]);