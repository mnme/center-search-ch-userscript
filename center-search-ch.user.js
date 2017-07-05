// ==UserScript==
// @name Center search.ch website
// @description
// @author Nicolas Jeker
// @version 1.0.1
// @date 2017-07-05
// @grant GM_addStyle
// @include /^https?://.*\.search\.ch/.*$/
// @run-at document-end
// @license MIT License
// ==/UserScript==

GM_addStyle([".sl-cards-container,.sl-nav-container,.sl-footer {",
            "   margin: 0px auto; !important",
            "}",
            "#sl-tribune-big {",
            "   display: none; !important",
            "}"].join(""));
