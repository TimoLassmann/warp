(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{386:function(t,e,s){"use strict";s.r(e);var a=s(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"testing-pipelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-pipelines"}},[t._v("#")]),t._v(" Testing Pipelines")]),t._v(" "),s("p",[t._v("WARP pipelines have accompanying automated tests that run on each Pull Request (PR). These tests compare validated outputs to the new PR outputs. For any changes in code shared between pipelines, the tests also confirm which pipelines could be affected and ensure that the PR makes no unexpected changes to the affected pipelines.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTICE 9/29/2020")]),t._v(" "),s("p",[t._v("We have formatted all testing input files for Cromwell 52 or higher. If you are using WARP test input files either directily or as a model of how to configure inputs, these changes may impact you.")])]),t._v(" "),s("h2",{attrs:{id:"warp-branches-and-how-they-relate-to-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#warp-branches-and-how-they-relate-to-testing"}},[t._v("#")]),t._v(" WARP branches and how they relate to testing")]),t._v(" "),s("p",[t._v("WARP has three main branches that are used for different stages of pipeline testing: "),s("strong",[t._v("develop")]),t._v(", "),s("strong",[t._v("staging")]),t._v(", and "),s("strong",[t._v("master")]),t._v(":")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Branch")]),t._v(" "),s("th",[t._v("Purpose")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("develop")]),t._v(" "),s("td",[t._v("Code that has passed plumbing tests; pre-releases for testing")])]),t._v(" "),s("tr",[s("td",[t._v("staging")]),t._v(" "),s("td",[t._v("Release candidate code that is frozen for longer scientific testing")])]),t._v(" "),s("tr",[s("td",[t._v("master")]),t._v(" "),s("td",[t._v("Code that has passed scientific testings; published release artifacts")])])])]),t._v(" "),s("h2",{attrs:{id:"initiating-pipeline-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initiating-pipeline-tests"}},[t._v("#")]),t._v(" Initiating pipeline tests")]),t._v(" "),s("p",[t._v("A PR will initiate a pipeline test if it contains changes to the main workflow WDL, the WDL dependencies (such as tasks), the options JSON file, the pipeline tests, or the test inputs. Smart plumbing and scientific tests compare PR changes to a specified base branch. They then use the WARP directory structure to dynamically determine which pipelines are affected and run tests for all affected pipelines.")]),t._v(" "),s("h2",{attrs:{id:"contact-us-with-questions-about-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contact-us-with-questions-about-testing"}},[t._v("#")]),t._v(" Contact us with questions about testing")]),t._v(" "),s("p",[t._v("If you have questions about the WARP testing process, please reach out to "),s("a",{attrs:{href:"mailto:kdegatano@broadinstitute.org"}},[t._v("Kylee Degatano")]),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);