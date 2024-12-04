var C=Object.defineProperty;var I=(p,o,c)=>o in p?C(p,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):p[o]=c;var d=(p,o,c)=>I(p,typeof o!="symbol"?o+"":o,c);import{_ as A,d as D}from"./cesium-view.vue_vue_type_script_setup_true_lang.Cey8CeQO.js";import*as t from"/GJ/cesiumStatic/index.js";import{d as z,p as T,D as L,v as S,at as B,ab as F,o as h,b as k,w as G,j as v,c as M,F as O,C as P,k as V,t as N}from"./framework.DIpEmB6A.js";import"./theme.C158DeIw.js";const U={class:"mt-4 flex gap-4"},E=["onClick"],q=z({__name:"demo",setup(p){const o=t.buildModuleUrl("Assets/Textures/moonSmall.jpg"),c=t.buildModuleUrl("Assets/Images/cesium_credit.png");class b{constructor(a){d(this,"primitive");d(this,"cubeOptions",{lonLat:[116.39,39.9],boxLength:1e5});this.viewer=a;const e=this.getModelMatrix(),{positions:r,indices:i,normals:n,sts:s,boxVertex:f}=this.getGeometry();console.log(r);const g=new t.Primitive({geometryInstances:new t.GeometryInstance({geometry:new t.Geometry({attributes:{position:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),normal:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:n}),st:new t.GeometryAttribute({componentDatatype:t.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:s}),bitangent:void 0,color:void 0,tangent:void 0},indices:i,primitiveType:t.PrimitiveType.TRIANGLES,boundingSphere:t.BoundingSphere.fromVertices(f)})}),appearance:new t.MaterialAppearance({material:t.Material.fromType("Image",{image:o}),closed:!0}),modelMatrix:e,asynchronous:!1});this.primitive=this.viewer.scene.primitives.add(g)}setMaterial(a){this.primitive.appearance.material=a}flyTo(){const{boxLength:a,lonLat:e}=this.cubeOptions,r=t.Cartesian3.fromDegrees(...e,.5*a);this.viewer.camera.flyToBoundingSphere(new t.BoundingSphere(r,a))}getModelMatrix(){const{boxLength:a,lonLat:e}=this.cubeOptions,r=t.Cartesian3.fromDegrees(...e,.5*a);return t.Transforms.eastNorthUpToFixedFrame(r)}getGeometry(){const{boxLength:a}=this.cubeOptions,e=[[.5,-.5,.5],[-.5,-.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[-.5,.5,.5],[-.5,.5,-.5]],i=[...e[2],...e[3],...e[4],...e[7],...e[2],...e[3],...e[0],...e[1],...e[4],...e[7],...e[6],...e[5],...e[7],...e[2],...e[1],...e[6],...e[3],...e[4],...e[5],...e[0],...e[1],...e[0],...e[5],...e[6]].map(x=>x*a),n=this.getPositions(i),s=this.getNormals(),f=this.getSts(),g=this.getIndices();return{positions:n,normals:s,sts:f,indices:g,boxVertex:i}}getPositions(a){return new Float32Array(a)}getNormals(){const a=[1,0,0],e=[-1,0,0],r=[0,1,0],i=[0,-1,0],n=[0,0,1],s=[0,0,-1];return new Float32Array([...s,...s,...s,...s,...i,...i,...i,...i,...r,...r,...r,...r,...e,...e,...e,...e,...a,...a,...a,...a,...n,...n,...n,...n])}getSts(){return new Float32Array([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1])}getIndices(){return new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23])}}const l=T(new Map),u=L();S(()=>{const m=B(D);console.log("d_viewer",m),m&&(u.value=new b(m),u.value.flyTo(),l.value.set("default",u.value.primitive.appearance.material))});const y=m=>{if(!u.value)return;const a=l.value.get(m);a&&u.value.setMaterial(a)},w=()=>{u.value&&u.value.flyTo()},_=()=>{const m=new t.Material({fabric:{type:"Color",uniforms:{color:new t.Color(1,1,0,1)},components:{diffuse:"color.rgb",alpha:"color.a"}},translucent:!1}),a=new t.Material({fabric:{type:"Image",uniforms:{image:o,repeat:new t.Cartesian2(-1,-1),color:new t.Color(1,1,1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).rgb * color.rgb",alpha:"texture(image, fract(repeat * materialInput.st)).a * color.a"}},translucent:!1}),e=new t.Material({fabric:{type:"OurMappedPlastic",materials:{diffuseMaterial:{type:"DiffuseMap",uniforms:{image:o}},alphaMap:{type:"AlphaMap",uniforms:{image:c,channel:"r",repeat:new t.Cartesian2(1,118/30)}}},components:{diffuse:"diffuseMaterial.diffuse",alpha:"alphaMap.alpha"}},translucent:function(s){return s.uniforms.color.alpha<1}}),r=new t.Material({fabric:{type:"MyCustomShader1",uniforms:{image:o,color:new t.Color(1,1,0,1),cellAlpha:.3},source:`
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
        `},translucent:!1}),i=new t.Material({fabric:{type:"MyCustomShader2",uniforms:{image1:o,image2:c},source:`
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
        `},translucent:!1});l.value.set("1.纯色",m),l.value.set("2.moon图片",a),l.value.set("3.组合式",e),l.value.set("4.custom",r),l.value.set("4.custom2",i),l.value.set("4.custom3 无伽马矫正",n)};return F(()=>{_()}),(m,a)=>(h(),k(A,null,{default:G(()=>[v("div",{class:"da-btn da-btn-primary da-btn-sm mt-4",onClick:w},"定位飞行"),v("div",U,[(h(!0),M(O,null,P(V(l).keys(),(e,r)=>(h(),M("div",{key:r,class:"da-btn da-btn-accent da-btn-sm",onClick:i=>y(e)},N(e),9,E))),128))])]),_:1}))}});export{q as default};
