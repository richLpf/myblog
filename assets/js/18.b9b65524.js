(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{485:function(s,n,a){"use strict";a.r(n);var t=a(30),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("我们接着前面的项目改造，我们对整个项目分层，然后引入了mysql,ini,mod包管理，swagger文档。\n实际工作中，我们需要进行项目的自动化构建，防止人为出错，如果能够进行单元测试，可以减少代码出现问题的情况出现。")]),s._v(" "),a("h2",{attrs:{id:"一、单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、单元测试"}},[s._v("#")]),s._v(" 一、单元测试")]),s._v(" "),a("p",[s._v("我们在common中增加"),a("code",[s._v("utils.go")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("|-common               工具函数\n|   |- request.go      get请求，post请求\n|   |- utils.go        工具函数\n|   |- utils_test.go   单元测试\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("cat utils.go")]),s._v(" ,我们定义了一个函数，判断数组中是否含有某个值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package common\n\nimport "reflect"\n\n//ArrayHasContainValue 检查数组中是否含有某个值\nfunc ArrayHasContainValue(value interface{}, array interface{}) bool {\n\tswitch reflect.TypeOf(array).Kind() {\n\tcase reflect.Slice:\n\t\ts := reflect.ValueOf(array)\n\t\tfor i := 0; i < s.Len(); i++ {\n\t\t\tif reflect.DeepEqual(value, s.Index(i).Interface()) {\n\t\t\t\treturn true\n\t\t\t}\n\t\t}\n\t}\n\treturn false\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("对这个函数我们要进行单元测试，那么我们要使用gin自带的testing框架，新建"),a("code",[s._v("utils_test.go")]),s._v("文件，然后写测试函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package common\n\nimport (\n\t"testing"\n)\n\n//TestArrayHasContainValue test\nfunc TestArrayHasContainValue(t *testing.T) {\n\ta := 1\n\tb := []int{1, 2}\n\tresult := ArrayHasContainValue(a, b)\n\tif result != true {\n\t\tt.Errorf("result shold be %t", result)\n\t}\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("函数命令必须要以Test + 要测试的函数名命名，然后写测试逻辑，预估结果如果结果不对，打印错误。执行 go test 会显示测试结果和执行时间")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("D:\\project\\web\\myapp\\common> go test\nPASS\nok      myapp/common    0.557s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("以上基本就可以作为一个简单的golang脚手架了，其他需要的业务可以随工作需要增加内容。")])])}),[],!1,null,null,null);n.default=e.exports}}]);