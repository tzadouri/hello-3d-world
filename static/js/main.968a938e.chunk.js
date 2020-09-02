(this["webpackJsonphello-3d-world"]=this["webpackJsonphello-3d-world"]||[]).push([[0],{18:function(e,n,o){e.exports=o(24)},19:function(e,n,o){},24:function(e,n,o){"use strict";o.r(n);o(19);var t=o(0),a=o.n(t),i=o(12),r=o.n(i),c=o(8),l=o(2),p=o(4),s=o(5),d=o(7),y=o(17),b=o(16),u=o(1);function x(){var e=Object(s.a)(["\n                height: 100vh;\n            "]);return x=function(){return e},e}function f(){var e=Object(s.a)(["\n                    border-width: 1px;\n                    border-color: #673ab7;\n                    margin: 10px;\n                    background-color: #17212b;\n                    padding: 10px;\n                    border-radius: 20px;\n                "]);return f=function(){return e},e}function z(){var e=Object(s.a)(["\n                background-color: #17212b;\n                padding: 5px;\n                font-size: 10px;\n                font-family: Montserrat, monaco, monospace;\n                color: #e91e63;\n                a {\n                    padding: 15px;\n                    text-decoration: underline;\n                }\n                a: hover {\n                    color: #673ab7;\n                }\n            "]);return z=function(){return e},e}var m=function(e){var n=e.left,o=e.right;return Object(u.b)("div",{className:"flex"},Object(u.b)("div",{className:"w-1/2"},n),Object(u.b)("div",{className:"w-1/2"},o))},g=function(e){Object(y.a)(o,e);var n=Object(b.a)(o);function o(){var e;Object(d.a)(this,o);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).render=function(){return Object(u.b)("div",{css:Object(u.a)(z()),className:"sm:flex"},e.props.children)},e}return o}(a.a.Component);g.Side=function(e){var n=e.children;return Object(u.b)("div",{className:"w-full md:w-1/2 lg:w-1/3"},Object(u.b)("div",{css:Object(u.a)(f())},n))},g.Main=function(e){var n=e.children;return Object(u.b)("div",{css:Object(u.a)(x()),className:"w-full md:w-1/2 lg:w-2/3"},n)};var v=o(14),h=o(15),O={paper:{color:"#17212B",opacity:1},xyPlane:{color:"#0652DD",opacity:.1},sceneEdges:{color:"#1e3799",opacity:1},crossLines:{color:"#079992",opacity:1},edgeAxes:{intersectionPointColor:"#FF00FF",intersectionPointSize:5,xColor:"#E91E63",yColor:"#03A9F4",zColor:"#CDDC39",lineSize:1,edgeOpacity:1},worldAxes:{intersectionPointColor:"#FFFF00",intersectionPointSize:5,xColor:"#E91E63",yColor:"#03A9F4",zColor:"#CDDC39",lineSize:3,edgeOpacity:1},cubeAxes:{intersectionPointColor:"#00FF00",intersectionPointSize:5,xColor:"#E91E63",yColor:"#03A9F4",zColor:"#CDDC39",lineSize:3,edgeOpacity:1}},E=o(3),C={id:"body-hexagon",type:E.DataSpecType.polygon,borderOpacity:1,borderColor:"#FC427B",borderSize:5,fillOpacity:.3,fillColor:"#ff6348",x:[100,100,-100,-100,-100,100,100],y:[0,100,100,0,-100,-100,0],z:[100,100,100,100,100,100,100]},w={id:"body-points",type:E.DataSpecType.points,opacity:1,color:"#FC427B",size:8,x:[100,100,-100,-100,-100,100,100],y:[0,100,100,0,-100,-100,0],z:[100,100,100,100,100,100,100]},j={id:"support-polygon",type:E.DataSpecType.polygon,borderOpacity:0,borderColor:"#3c6382",borderSize:0,fillOpacity:.2,fillColor:"#3c6382",x:[300,241.4213562373095,-241.42135623730948,-300,-241.42135623730954,241.42135623730948],y:[0,241.42135623730948,241.4213562373095,24492935982947064e-30,-241.42135623730948,-241.42135623730954],z:[0,0,0,0,0,0]},A=[{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.lines,id:"leg-0",x0:[100,200,300],y0:[0,0,0],z0:[100,100,100],x1:[200,300,300],y1:[0,0,0],z1:[100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.lines,id:"leg-1",x0:[100,170.71,241.42],y0:[100,170.71,241.42],z0:[100,100,100],x1:[170.71,241.42,241.42],y1:[170.71,241.42,241.42],z1:[100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.lines,id:"leg-2",x0:[-100,-170.71067811865476,-241.42135623730948],y0:[100,170.71067811865476,241.4213562373095],z0:[100,100,100],x1:[-170.71,-241.42,-241.42],y1:[170.71,241.42,241.42],z1:[100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.lines,id:"leg-3",x0:[-100,-200,-300],y0:[0,0,0],z0:[100,100,100],x1:[-200,-300,-300],y1:[0,0,0],z1:[100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.lines,id:"leg-4",x0:[-100,-170.71067811865476,-241.42135623730954],y0:[-100,-170.71067811865476,-241.42135623730948],z0:[100,100,100],x1:[-170.71,-241.42,-241.42],y1:[-170.71,-241.42,-241.42],z1:[100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.lines,id:"leg-5",x0:[100,170.71067811865476,241.42135623730948],y0:[-100,-170.71067811865476,-241.42135623730954],z0:[100,100,100],x1:[170,241.42,241.42],y1:[-170,-241.42,-241.24],z1:[100,100,0]}],S=[{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.points,id:"rightMiddleLegpoints0",x:[100,200,300,300],y:[0,0,0,0],z:[100,100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.points,id:"rightFrontLegpoints1",x:[100,170.71067811865476,241.4213562373095,241.4213562373095],y:[100,170.71067811865476,241.42135623730948,241.42135623730948],z:[100,100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.points,id:"leftFrontLegpoints2",x:[-100,-170.71067811865476,-241.42135623730948,-241.42135623730948],y:[100,170.71067811865476,241.4213562373095,241.4213562373095],z:[100,100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.points,id:"leftMiddleLegpoints3",x:[-100,-200,-300,-300],y:[0,12246467991473532e-30,24492935982947064e-30,24492935982947064e-30],z:[100,100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.points,id:"leftBackLegpoints4",x:[-100,-170.71067811865476,-241.42135623730954,-241.42135623730954],y:[-100,-170.71067811865476,-241.42135623730948,-241.42135623730948],z:[100,100,100,0]},{opacity:1,color:"#EE5A24",size:5,type:E.DataSpecType.points,id:"rightBackLegpoints5",x:[100,170.71067811865476,241.42135623730948,241.42135623730948],y:[-100,-170.71067811865476,-241.42135623730954,-241.42135623730954],z:[100,100,100,0]}],D=[{color:"#32ff7e",opacity:1,size:14,id:"centerOfGravity",type:E.DataSpecType.points,x:[0],y:[0],z:[100]},{color:"#FC427B",opacity:1,size:14,id:"head",type:E.DataSpecType.points,x:[0],y:[100],z:[100]}],k=[j].concat(S,A,[C,w],D),F=100,B=[{x:0,y:0,z:200},{x:-F,y:F,z:0},{x:F,y:F,z:0},{x:-F,y:-F,z:0},{x:F,y:-F,z:0}],T=[1,2,4,3,1,2,3,4],L=[2,4,3,1,0,0,0,0],R=[{id:"pyramid-ground-plane",type:E.DataSpecType.polygon,borderOpacity:0,borderColor:"#00ff00",borderSize:0,fillOpacity:.25,fillColor:"#ff0000",x:[1,2,4,3].map((function(e){return B[e].x})),y:[1,2,4,3].map((function(e){return B[e].y})),z:[1,2,4,3].map((function(e){return B[e].z}))},{opacity:1,color:"#00ff00",size:3,type:E.DataSpecType.lines,id:"pyramid-edges",x0:T.map((function(e){return B[e].x})),y0:T.map((function(e){return B[e].y})),z0:T.map((function(e){return B[e].z})),x1:L.map((function(e){return B[e].x})),y1:L.map((function(e){return B[e].y})),z1:L.map((function(e){return B[e].z}))},{id:"pyramid-vertices",type:E.DataSpecType.points,opacity:1,color:"#00ff00",size:5,x:[0,1,2,3,4].map((function(e){return B[e].x})),y:[0,1,2,3,4].map((function(e){return B[e].y})),z:[0,1,2,3,4].map((function(e){return B[e].z}))}],Z=([].concat([{x:[296.35681383199943,-207.66437175244175,-269.61168711366287,116.2704403094057],y:[259.592586529485,236.58970541415937,396.7555066017456,400.55422176003225],borderColor:"#607D8B",borderOpacity:1,borderSize:1,fillColor:"#607D8B",fillOpacity:0,type:"polygon",id:"plane-0"},{x:[-207.66437175244175,-197.71371554533502,-252.3199634947169,-269.61168711366287],y:[236.58970541415937,-189.62049644472256,42.09995815564638,396.7555066017456],borderColor:"#607D8B",borderOpacity:1,borderSize:1,fillColor:"#607D8B",fillOpacity:0,type:"polygon",id:"plane-1"},{x:[-197.71371554533502,213.82772345063952,76.90144288688406,-252.3199634947169],y:[-189.62049644472256,-131.6587644174212,71.0924005035601,42.09995815564638],borderColor:"#607D8B",borderOpacity:1,borderSize:1,fillColor:"#607D8B",fillOpacity:0,type:"polygon",id:"plane-2"},{x:[213.82772345063952,296.35681383199943,116.2704403094057,76.90144288688406],y:[-131.6587644174212,259.592586529485,400.55422176003225,71.0924005035601],borderColor:"#607D8B",borderOpacity:1,borderSize:1,fillColor:"#607D8B",fillOpacity:0,type:"polygon",id:"plane-3"},{x:[213.82772345063952,-197.71371554533502,-207.66437175244175,296.35681383199943],y:[-131.6587644174212,-189.62049644472256,236.58970541415937,259.592586529485],borderColor:"#607D8B",borderOpacity:1,borderSize:1,fillColor:"#607D8B",fillOpacity:0,type:"polygon",id:"plane-4"},{x:[116.2704403094057,-269.61168711366287,-252.3199634947169,76.90144288688406],y:[400.55422176003225,396.7555066017456,42.09995815564638,71.0924005035601],borderColor:"#607D8B",borderOpacity:1,borderSize:1,fillColor:"#607D8B",fillOpacity:0,type:"polygon",id:"plane-5"},{x:[213.82772345063952,-197.71371554533502,-252.3199634947169,76.90144288688406],y:[-131.6587644174212,-189.62049644472256,42.09995815564638,71.0924005035601],fillColor:"#0e2845",fillOpacity:.5,borderColor:"#0e2845",borderOpacity:1,borderSize:1,type:"polygon",id:"xy-plane"},{x0:[76.90144288688406],y0:[71.0924005035601],x1:[-252.3199634947169],y1:[42.09995815564638],color:"#F44336",opacity:1,size:2,type:"lines",id:"x-edge"},{x0:[76.90144288688406],y0:[71.0924005035601],x1:[213.82772345063952],y1:[-131.6587644174212],color:"#2196F3",opacity:1,size:2,type:"lines",id:"x-edge"},{x0:[76.90144288688406],y0:[71.0924005035601],x1:[116.2704403094057],y1:[400.55422176003225],color:"#8BC34A",opacity:1,size:2,type:"lines",id:"x-edge"},{x:[76.90144288688406],y:[71.0924005035601],color:"#FFEB3B",opacity:1,size:3,type:"points",id:"point-edge"},{x0:[17.959360790646787,137.34719358659112,137.34719358659112,-81.5110240942587,76.90144288688406,213.82772345063952,-197.71371554533502,-252.3199634947169],y0:[-159.24497682126088,-18.41157432457717,-18.41157432457717,57.14201870238984,71.0924005035601,-131.6587644174212,-189.62049644472256,42.09995815564638],x1:[-81.5110240942587,-228.49626847180593,193.7546953252549,-68.13374068006515,213.82772345063952,-197.71371554533502,-252.3199634947169,76.90144288688406],y1:[57.14201870238984,-58.99538621019858,339.9038400681353,398.73890327857237,-131.6587644174212,-189.62049644472256,42.09995815564638,71.0924005035601],color:"#079992",opacity:.5,size:1,type:"lines",id:"cross-section-lines"},{x0:[-37.84615384615385],y0:[-37.84615384615385],x1:[-83.98226510150009],y1:[-42.96413313102678],color:"#E91E63",opacity:1,size:1,type:"lines",id:"x-worldAxes"},{x0:[-37.84615384615385],y0:[-37.84615384615385],x1:[-25.2120744090166],y1:[-65.33021851296428],color:"#03A9F4",opacity:1,size:1,type:"lines",id:"x-worldAxes"},{x0:[-37.84615384615385],y0:[-37.84615384615385],x1:[-35.283440982007576],y1:[1.7697494324139984],color:"#CDDC39",opacity:1,size:1,type:"lines",id:"x-worldAxes"},{x:[-37.84615384615385],y:[-37.84615384615385],color:"#8BC34A",opacity:1,size:3,type:"points",id:"point-worldAxes"},{x0:[-26.894063604896623],y0:[131.45761551715015],x1:[-77.15963513562036],y1:[127.84149818259478],color:"#9C27B0",opacity:1,size:1,type:"lines",id:"x-axes"},{x0:[-26.894063604896623],y0:[131.45761551715015],x1:[-12.690708113422748],y1:[107.21173135076423],color:"#00BCD4",opacity:1,size:1,type:"lines",id:"x-axes"},{x0:[-26.894063604896623],y0:[131.45761551715015],x1:[-23.8365862095413],y1:[178.72187616273558],color:"#FFEB3B",opacity:1,size:1,type:"lines",id:"x-axes"},{x:[-26.894063604896623],y:[131.45761551715015],color:"#CDDC39",opacity:1,size:3,type:"points",id:"point-axes"}],[{borderColor:"#3c6382",borderOpacity:0,borderSize:0,fillColor:"#3c6382",fillOpacity:.2,id:"support-polygon",type:"polygon",x:[-131.11402715982658,-95.4084695499833,58.42971436173703,51.56270326714139,12.57720390982729,-128.1314823631709],y:[-48.1925621275457,-92.49440475798801,-73.73343236948833,-27.927834635039517,10.024545460731707,-4.19187690871271],z:[0,0,0,0,0,0]},{color:"#EE5A24",id:"rightMiddleLegpoints0",opacity:1,size:5,type:"points",x:[-67.22200572203558,-98.7444741785775,-130.7270086855552,-131.11402715982658],y:[-14.881766393214642,-18.188647431342478,-21.543791939083103,-48.1925621275457],z:[100,100,100,0]},{color:"#EE5A24",id:"rightFrontLegpoints1",opacity:1,size:5,type:"points",x:[-59.327706387582026,-76.53264021487685,-94.46183100492338,-95.4084695499833],y:[-32.923643855480016,-48.73570882646304,-65.21339670920344,-92.49440475798801],z:[100,100,100,0]},{color:"#EE5A24",id:"leftFrontLegpoints2",opacity:1,size:5,type:"points",x:[3.5522147373603405,32.28740358832771,61.589181876691725,58.42971436173703],y:[-26.054002514509424,-36.499406142797696,-47.15076823531696,-73.73343236948833],z:[100,100,100,0]},{color:"#EE5A24",id:"leftMiddleLegpoints3",opacity:1,size:5,type:"points",x:[-5.518121990288623,24.682176765459893,54.460195700057895,51.56270326714139],y:[-8.408688202251708,-5.240510068015064,-2.1166314192477116,-27.927834635039517],z:[100,100,100,0]},{color:"#EE5A24",id:"leftBackLegpoints4",opacity:1,size:5,type:"points",x:[-14.224336965366408,.5775498635988878,14.834638843614934,12.57720390982729],y:[8.528268419991793,22.131831129511216,35.2347014754267,10.024545460731707],z:[100,100,100,0]},{color:"#EE5A24",id:"rightBackLegpoints5",opacity:1,size:5,type:"points",x:[-74.79492848879,-101.5061404071994,-127.72389079566221,-128.1314823631709],y:[2.425627056218128,12.135303625096418,21.665604137598066,-4.19187690871271],z:[100,100,100,0]},{color:"#EE5A24",id:"leg-0",opacity:1,size:5,type:"lines",x0:[-67.22200572203558,-98.7444741785775,-130.7270086855552],x1:[-98.7444741785775,-130.7270086855552,-131.11402715982658],y0:[-14.881766393214642,-18.188647431342478,-21.543791939083103],y1:[-18.188647431342478,-21.543791939083103,-48.1925621275457],z0:[100,100,100],z1:[100,100,0]},{color:"#EE5A24",id:"leg-1",opacity:1,size:5,type:"lines",x0:[-59.327706387582026,-76.5324718175639,-94.46147988349564],x1:[-76.5324718175639,-94.46147988349564,-95.40812328986787],y0:[-32.923643855480016,-48.73555406217971,-65.21307401369737],y1:[-48.73555406217971,-65.21307401369737,-92.49407602712587],z0:[100,100,100],z1:[100,100,0]},{color:"#EE5A24",id:"leg-2",opacity:1,size:5,type:"lines",x0:[3.5522147373603405,32.28740358832771,61.589181876691725],x1:[32.287125326284965,61.58861432523986,58.4291555680313],y0:[-26.054002514509424,-36.499406142797696,-47.15076823531696],y1:[-36.499304992971744,-47.15056192715502,-73.7332240765305],z0:[100,100,100],z1:[100,100,0]},{color:"#EE5A24",id:"leg-3",opacity:1,size:5,type:"lines",x0:[-5.518121990288623,24.682176765459893,54.460195700057895],x1:[24.682176765459893,54.460195700057895,51.56270326714139],y0:[-8.408688202251708,-5.240510068015064,-2.1166314192477063],y1:[-5.240510068015064,-2.1166314192477063,-27.927834635039513],z0:[100,100,100],z1:[100,100,0]},{color:"#EE5A24",id:"leg-4",opacity:1,size:5,type:"lines",x0:[-14.224336965366408,.5775498635988878,14.834638843614934],x1:[.5774105740924796,14.834370423580923,12.576938210897962],y0:[8.528268419991793,22.131831129511216,35.2347014754267],y1:[22.131703116538468,35.23445478601425,10.024293212684023],z0:[100,100,100],z1:[100,100,0]},{color:"#EE5A24",id:"leg-5",opacity:1,size:5,type:"lines",x0:[-74.79492848879,-101.5061404071994,-127.72389079566221],x1:[-101.2401571676216,-127.72339258160441,-128.1199525541047],y0:[2.425627056218128,12.135303625096418,21.665604137598066],y1:[12.03861721352769,21.665423033970928,-4.2218469684337725],z0:[100,100,100],z1:[100,100,0]},{borderColor:"#FC427B",borderOpacity:1,borderSize:5,fillColor:"#ff6348",fillOpacity:.3,id:"body-hexagon",type:"polygon",x:[-67.22200572203558,-59.327706387582026,3.5522147373603405,-5.518121990288623,-14.224336965366408,-74.79492848879,-67.22200572203558],y:[-14.881766393214642,-32.923643855480016,-26.054002514509424,-8.408688202251708,8.528268419991793,2.425627056218128,-14.881766393214642],z:[100,100,100,100,100,100,100]},{color:"#FC427B",id:"body-points",opacity:1,size:8,type:"points",x:[-67.22200572203558,-59.327706387582026,3.5522147373603405,-5.518121990288623,-14.224336965366408,-74.79492848879,-67.22200572203558],y:[-14.881766393214642,-32.923643855480016,-26.054002514509424,-8.408688202251708,8.528268419991793,2.425627056218128,-14.881766393214642],z:[100,100,100,100,100,100,100]},{color:"#32ff7e",id:"centerOfGravity",opacity:1,size:14,type:"points",x:[-36.14974718894332],y:[-11.622114862543851],z:[100]},{color:"#FC427B",id:"head",opacity:1,size:14,type:"points",x:[-27.6585008429544],y:[-29.46377813438941],z:[100]}]),{showWorldAxes:!1,showEdgeAxes:!0,showCubeAxes:!1,showXYplane:!0,showCrosslines:!0,showCubeEdges:!0}),M={"b-show-xy-plane":"showXYplane","b-show-crosslines":"showCrosslines","b-show-cube-edges":"showCubeEdges","b-show-world-axes":"showWorldAxes","b-show-edge-axes":"showEdgeAxes","b-show-cube-axes":"showCubeAxes"},P=Object.keys(M);function V(){var e=Object(s.a)(["\n    padding: 10px;\n    font-size: 15px;\n    &:hover {\n        color: #673ab7;\n    }\n"]);return V=function(){return e},e}function N(){var e=Object(s.a)(['\n    .styled-checkbox {\n        position: absolute; // take it out of document flow\n        opacity: 0; // hide it\n\n        & + label {\n            position: relative;\n            cursor: pointer;\n            padding: 0;\n        }\n\n        // Box.\n        & + label:before {\n            content: "";\n            margin-right: 10px;\n            display: inline-block;\n            vertical-align: text-top;\n            width: 20px;\n            height: 20px;\n            background: #e91e63;\n        }\n\n        // Box hover\n        &:hover + label:before {\n            background: #673ab7;\n        }\n\n        // Box focus\n        &:focus + label:before {\n            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n        }\n\n        // Box checked\n        &:checked + label:before {\n            background: #673ab7;\n        }\n\n        // Checkmark. Could be replaced with an image\n        &:checked + label:after {\n            content: "";\n            position: absolute;\n            left: 5px;\n            top: 9px;\n            background: white;\n            width: 2px;\n            height: 2px;\n            box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,\n                4px -6px 0 white, 4px -8px 0 white;\n            transform: rotate(45deg);\n        }\n    }\n']);return N=function(){return e},e}var X=Object(u.a)(N()),Y=Object(u.a)(V()),W=function(e){var n=e.label,o=e.value,t=e.id,a=e.onChange;return Object(u.b)("div",{css:[X,Y]},Object(u.b)("input",{className:"styled-checkbox",id:t,type:"checkbox",value:!0===o?"1":"0",checked:o,onChange:function(e){return a(t,e.target.value)}}),Object(u.b)("label",{htmlFor:t},n))},G=function(e){var n=e.values,o=e.setValueFunction,t=function(e,n){o(M[e],"0"===n)};return a.a.createElement("div",null,P.map((function(e){return a.a.createElement(W,{onChange:t,key:e,id:e,value:n[M[e]],label:M[e]})})))},J=o(6),I={camTx:0,camTy:0,camTz:2,cubeRx:0,cubeRy:0,cubeRz:0,camZoom:3.1,canvasToViewRatio:300,defaultCamZoffset:5,defaultCamOrientation:"z-forward-x-left"},q={id:"n-v-default-cam-orientation",options:["z-forward-x-left","z-up-x-left","z-up-x-forward","z-forward-x-right"],label:"defaultCamOrientation"},H={min:-5,max:5,step:.01},K={min:-180,max:180,step:.1},Q={"n-v-cam-tx":Object(l.a)(Object(l.a)({},H),{},{label:"camTx",id:"n-v-cam-tx"}),"n-v-cam-ty":Object(l.a)(Object(l.a)({},H),{},{label:"camTy",id:"n-v-cam-ty"}),"n-v-cam-tz":Object(l.a)(Object(l.a)({},H),{},{label:"camTz",id:"n-v-cam-tz"}),"n-v-cube-rx":Object(l.a)(Object(l.a)({},K),{},{label:"cubeRx",id:"n-v-cube-rx"}),"n-v-cube-ry":Object(l.a)(Object(l.a)({},K),{},{label:"cubeRy",id:"n-v-cube-ry"}),"n-v-cube-rz":Object(l.a)(Object(l.a)({},K),{},{label:"cubeRz",id:"n-v-cube-rz"}),"n-v-cam-zoom":{min:0,max:30,step:.1,label:"camZoom",id:"n-v-cam-zoom"},"n-v-canvas-to-view-ratio":{min:100,max:1200,step:1,label:"canvasToViewRatio",id:"n-v-canvas-to-view-ratio"},"n-v-default-cam-z-offset":{min:-20,max:20,step:.1,label:"defaultCamZoffset",id:"n-v-default-cam-z-offset"}},U={"n-v-cam-tx":"camTx","n-v-cam-ty":"camTy","n-v-cam-tz":"camTz","n-v-cube-rx":"cubeRx","n-v-cube-ry":"cubeRy","n-v-cube-rz":"cubeRz","n-v-cam-zoom":"camZoom","n-v-default-cam-z-offset":"defaultCamZoffset","n-v-canvas-to-view-ratio":"canvasToViewRatio","n-v-default-cam-orientation":"defaultCamOrientation"},$=Object.keys(Q);[].concat(Object(J.a)($),[q.id]);function _(){var e=Object(s.a)(["\n    padding: 10px;\n    color: #009688;\n    &:hover {\n        color: #673ab7;\n    }\n"]);return _=function(){return e},e}function ee(){var e=Object(s.a)(["\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background-color: #e91e63;\n    width: 100%;\n    height: 0.1rem;\n    outline: none;\n    border-radius: 0.2rem;\n    &:hover,\n    &:active {\n        background: #673ab7;\n    }\n    &:hover&::-webkit-slider-thumb {\n        border: 1px solid #673ab7;\n    }\n    &:hover&::-moz-range-thumb {\n        border: 1px solid #673ab7;\n    }\n    &::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 12px;\n        height: 12px;\n        background-color: #17212b;\n        border: 3px solid #e91e63;\n        border-radius: 6px;\n        cursor: pointer;\n    }\n    &::-moz-range-thumb {\n        background: #17212b;\n        width: 1.5rem;\n        height: 1.5rem;\n        border-radius: 1rem;\n        cursor: pointer;\n        border: 0.25rem solid #e91e63;\n    }\n"]);return ee=function(){return e},e}var ne=Object(u.a)(ee()),oe=Object(u.a)(_()),te=function(e){var n=e.value,o=e.onChange,t=e.id,a=e.label,i=e.min,r=e.max,c=e.step;return Object(u.b)("div",{css:oe},Object(u.b)("label",{htmlFor:t},a),": ",Object(u.b)("span",null,n),Object(u.b)("input",{min:i,max:r,step:c,value:n,type:"range",css:ne,onChange:function(e){return o(t,Number(e.target.value))}}))};function ae(){var e=Object(s.a)(["\n    padding: 10px;\n    color: #009688;\n    &:hover {\n        color: #673ab7;\n    }\n"]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n    border-width: 1px;\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px;\n    font-size: 10px;\n    width: 98%;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    border-color: #e91e63;\n    background-color: #17212b;\n    color: #e91e63;\n    &:hover,\n    &:active {\n        background-color: #673ab7;\n        border-color: #673ab7;\n        color: #17212b;\n    }\n    &:focus {\n        outline: none;\n    }\n"]);return ie=function(){return e},e}var re=Object(u.a)(ie()),ce=Object(u.a)(ae()),le=function(e){var n=e.id,o=e.options,t=e.label,a=e.value,i=e.onChange;return Object(u.b)("div",{css:ce},t?Object(u.b)("label",null,t):null,Object(u.b)("select",{css:re,value:a,onChange:function(e){return i(n,e.target.value)}},o.map((function(e){return Object(u.b)("option",{key:n+e},e)}))))},pe=function(e){var n=e.values,o=e.setValueFunction,t=function(e,n){return o(U[e],n)};return a.a.createElement("div",null,$.map((function(e){return a.a.createElement(te,Object(l.a)({onChange:t,key:e,value:n[U[e]]},Q[e]))})),a.a.createElement(le,Object.assign({onChange:t,key:q.id,value:n[q.id]},q)))},se={cubeRange:600,cubeZoffset:1,dataZoffset:0,paperXrange:600,paperYrange:600},de={"n-s-cube-range":"cubeRange","n-s-cube-z-offset":"cubeZoffset","n-s-paper-x-range":"paperYrange","n-s-paper-y-range":"paperXrange","n-s-data-z-offset":"dataZoffset"},ye=Object.keys(de),be={"n-s-cube-range":{min:100,max:1200,step:1,label:"cubeRange",id:"n-s-cube-range"},"n-s-cube-z-offset":{min:-1,max:1,step:.01,label:"cubeZoffset",id:"n-s-cube-z-offset"},"n-s-data-z-offset":{min:-1,max:1,step:.01,label:"dataZoffset",id:"n-s-data-z-offset"},"n-s-paper-x-range":{min:100,max:1200,step:1,label:"paperXrange",id:"n-s-paper-x-range"},"n-s-paper-y-range":{min:100,max:1200,step:1,label:"paperYrange",id:"n-s-paper-y-range"}},ue=function(e){var n=e.values,o=e.setValueFunction,t=function(e,n){return o(de[e],n)};return a.a.createElement("div",null,ye.map((function(e){return a.a.createElement(te,Object(l.a)({onChange:t,key:e,value:n[de[e]]},be[e]))})))},xe=["view-settings","scene-options","scene-settings"],fe=["hexapod","pyramid","none"],ze={hexapod:k,pyramid:R,none:[]},me=function(){var e=Object(t.useState)(se),n=Object(p.a)(e,2),o=n[0],i=n[1],r=Object(t.useState)(I),s=Object(p.a)(r,2),d=s[0],y=s[1],b=Object(t.useState)(Z),u=Object(p.a)(b,2),x=u[0],f=u[1],z=Object(t.useState)(xe[0]),E=Object(p.a)(z,2),C=E[0],w=E[1],j=Object(t.useState)(fe[0]),A=Object(p.a)(j,2),S=A[0],D=A[1],k=function(e){var n=e.showWorldAxes,o=e.showEdgeAxes,t=e.showCubeAxes,a=e.showXYplane,i=e.showCrosslines,r=e.showCubeEdges;return{paper:O.paper,xyPlane:a?O.xyPlane:void 0,sceneEdges:r?O.sceneEdges:void 0,crossLines:i?O.crossLines:void 0,edgeAxes:o?O.edgeAxes:void 0,worldAxes:n?O.worldAxes:void 0,cubeAxes:t?O.cubeAxes:void 0}}(x),F=Object(h.a)(d,o,k,ze[S]);return a.a.createElement(g,null,a.a.createElement(g.Main,null,a.a.createElement("a",{href:"https://github.com/mithi/bare-minimum-3d"},"Mithi's Bare Minimum 3d Library"),a.a.createElement(v.a,F)),a.a.createElement(g.Side,null,a.a.createElement(m,{left:a.a.createElement(le,{id:"current-menu",options:xe,onChange:function(e,n){return w(n)},value:C}),right:a.a.createElement(le,{id:"current-data",options:fe,onChange:function(e,n){return D(n)},value:S})}),a.a.createElement("div",{hidden:"scene-settings"!==C},a.a.createElement(ue,{values:o,setValueFunction:function(e,n){return i(Object(l.a)(Object(l.a)({},o),{},Object(c.a)({},e,n)))}})),a.a.createElement("div",{hidden:"view-settings"!==C},a.a.createElement(pe,{values:d,setValueFunction:function(e,n){return y(Object(l.a)(Object(l.a)({},d),{},Object(c.a)({},e,n)))}})),a.a.createElement("div",{hidden:"scene-options"!==C},a.a.createElement(G,{values:x,setValueFunction:function(e,n){return f(Object(l.a)(Object(l.a)({},x),{},Object(c.a)({},e,n)))}}))))};r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(me,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.968a938e.chunk.js.map