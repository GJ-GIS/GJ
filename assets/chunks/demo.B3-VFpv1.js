var I=Object.defineProperty;var A=(p,o,u)=>o in p?I(p,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):p[o]=u;var d=(p,o,u)=>A(p,typeof o!="symbol"?o+"":o,u);import{_ as z,d as D}from"./cesium-view.vue_vue_type_script_setup_true_lang.CWMFR45H.js";import*as t from"/GJ/cesiumStatic/index.js";import{d as T,p as L,D as S,v as k,at as B,ab as F,o as h,b as G,w as O,j as v,k as b,c as M,F as P,C as V,t as N}from"./framework.BSn6qPJ2.js";import"./theme.D5TsysKk.js";const U={class:"mt-4 flex gap-4"},E=["onClick"],q=T({__name:"demo",setup(p){const o=t.buildModuleUrl("Assets/Textures/moonSmall.jpg"),u=t.buildModuleUrl("Assets/Images/cesium_credit.png");class y{constructor(a){d(this,"primitive");d(this,"cubeOptions",{lonLat:[116.39,39.9],boxLength:1e5});this.viewer=a;const e=this.getModelMatrix(),{positions:r,indices:i,normals:n,sts:s,boxVertex:f}=this.getGeometry();console.log(r);const g=new t.Primitive({geometryInstances:new t.GeometryInstance({geometry:new t.Geometry({attributes:{position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),normal:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:n}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:s}),bitangent:void 0,color:void 0,tangent:void 0},indices:i,primitiveType:t.PrimitiveType.TRIANGLES,boundingSphere:t.BoundingSphere.fromVertices(f)})}),appearance:new t.MaterialAppearance({material:t.Material.fromType("Image",{image:o}),closed:!0}),modelMatrix:e,asynchronous:!1});this.primitive=this.viewer.scene.primitives.add(g)}setMaterial(a){this.primitive.appearance.material=a}flyTo(){const{boxLength:a,lonLat:e}=this.cubeOptions,r=t.Cartesian3.fromDegrees(...e,.5*a);this.viewer.camera.flyToBoundingSphere(new t.BoundingSphere(r,a))}getModelMatrix(){const{boxLength:a,lonLat:e}=this.cubeOptions,r=t.Cartesian3.fromDegrees(...e,.5*a);return t.Transforms.eastNorthUpToFixedFrame(r)}getGeometry(){const{boxLength:a}=this.cubeOptions,e=[[.5,-.5,.5],[-.5,-.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[-.5,.5,.5],[-.5,.5,-.5]],i=[...e[2],...e[3],...e[4],...e[7],...e[2],...e[3],...e[0],...e[1],...e[4],...e[7],...e[6],...e[5],...e[7],...e[2],...e[1],...e[6],...e[3],...e[4],...e[5],...e[0],...e[1],...e[0],...e[5],...e[6]].map(_=>_*a),n=this.getPositions(i),s=this.getNormals(),f=this.getSts(),g=this.getIndices();return{positions:n,normals:s,sts:f,indices:g,boxVertex:i}}getPositions(a){return new Float32Array(a)}getNormals(){const a=[1,0,0],e=[-1,0,0],r=[0,1,0],i=[0,-1,0],n=[0,0,1],s=[0,0,-1];return new Float32Array([...s,...s,...s,...s,...i,...i,...i,...i,...r,...r,...r,...r,...e,...e,...e,...e,...a,...a,...a,...a,...n,...n,...n,...n])}getSts(){return new Float32Array([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1])}getIndices(){return new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23])}}const l=L(new Map),c=S();k(()=>{const m=B(D);console.log("d_viewer",m),m&&(c.value=new y(m),c.value.flyTo(),l.value.set("default",c.value.primitive.appearance.material))});const w=m=>{if(!c.value)return;const a=l.value.get(m);a&&c.value.setMaterial(a)},x=()=>{c.value&&c.value.flyTo()},C=()=>{const m=new t.Material({fabric:{type:"Color",uniforms:{color:new t.Color(1,1,0,1)},components:{diffuse:"color.rgb",alpha:"color.a"}},translucent:!1}),a=new t.Material({fabric:{type:"Image",uniforms:{image:o,repeat:new t.Cartesian2(-1,-1),color:new t.Color(1,1,1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).rgb * color.rgb",alpha:"texture(image, fract(repeat * materialInput.st)).a * color.a"}},translucent:!1}),e=new t.Material({fabric:{type:"OurMappedPlastic",materials:{diffuseMaterial:{type:"DiffuseMap",uniforms:{image:o}},alphaMap:{type:"AlphaMap",uniforms:{image:u,channel:"r",repeat:new t.Cartesian2(1,118/30)}}},components:{diffuse:"diffuseMaterial.diffuse",alpha:"alphaMap.alpha"}},translucent:function(s){return s.uniforms.color.alpha<1}}),r=new t.Material({fabric:{type:"MyCustomShader1",uniforms:{image:o,color:new t.Color(1,1,0,1),cellAlpha:.3},source:`
          uniform vec4 color;
          uniform float cellAlpha;

          czm_material czm_getMaterial(czm_materialInput materialInput)
          {
              czm_material material = czm_getDefaultMaterial(materialInput);

              vec2 st = materialInput.st;
              float aa = st.s * st.t;
              vec3 halfColor = color.rgb * aa + texture(image, materialInput.st).rgb * (1.0 - aa);
              halfColor *= 0.5;
              material.diffuse = halfColor;
              material.emission = halfColor;
              material.alpha = color.a * aa;
              // material.alpha = 1.0;

              return material;
          }
        `},translucent:!1}),i=new t.Material({fabric:{type:"MyCustomShader2",uniforms:{image1:o,image2:u},source:`
          uniform sampler2D image1;
          uniform sampler2D image2;

          czm_material czm_getMaterial(czm_materialInput materialInput){
            czm_material material = czm_getDefaultMaterial(materialInput);
            vec2 st = materialInput.st;
            vec3 diffuse = texture(image1, st).rgb;
            material.diffuse = diffuse;
            float textureHeight = 30. / 118.;
            float alpha = texture(image2, vec2(st.s, (st.t - 0.5) / textureHeight)).r;
            material.alpha = alpha * 2.;
            return material;
          }
        `},translucent:!1}),n=new t.Material({fabric:{type:"MyCustomShader3",uniforms:{image:o,repeat:new t.Cartesian2(-1,-1),color:new t.Color(1,1,1,1)},source:`
        uniform vec4 color;
        uniform vec2 repeat;
        uniform sampler2D image;
        czm_material czm_getMaterial(czm_materialInput materialInput)
        {
          czm_material material = czm_getDefaultMaterial(materialInput);
          material.diffuse = texture(image, fract(repeat * materialInput.st)).rgb * color.rgb; 
          material.alpha = texture(image, fract(repeat * materialInput.st)).a * color.a; 
          return material;
        }
        `},translucent:!1});l.value.set("1.纯色",m),l.value.set("2.moon图片",a),l.value.set("3.组合式",e),l.value.set("4.custom",r),l.value.set("4.custom2",i),l.value.set("4.custom3 无伽马矫正",n)};return F(()=>{C()}),(m,a)=>(h(),G(z,null,{default:O(()=>[v("div",{class:"da-btn da-btn-primary da-btn-sm mt-4",onClick:x},"定位飞行"),v("div",{class:"da-btn da-btn-primary da-btn-sm ml-4 mt-4",onClick:a[0]||(a[0]=()=>{var e;console.log("%c customCube: ","background-color: #3756d4; padding: 4px 8px; border-radius: 2px; font-size: 14px; color: #fff; font-weight: 700;",(e=b(c))==null?void 0:e.primitive.appearance)})}," 打印Appearance "),v("div",U,[(h(!0),M(P,null,V(b(l).keys(),(e,r)=>(h(),M("div",{key:r,class:"da-btn da-btn-accent da-btn-sm",onClick:i=>w(e)},N(e),9,E))),128))])]),_:1}))}});export{q as default};
