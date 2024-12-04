var O=Object.defineProperty;var j=(r,n,a)=>n in r?O(r,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[n]=a;var s=(r,n,a)=>j(r,typeof n!="symbol"?n+"":n,a);import{_ as k,d as W}from"./cesium-view.vue_vue_type_script_setup_true_lang.DZZxWqpc.js";import*as e from"/GJ/cesiumStatic/index.js";import{d as H,D as Q,v as $,at as q,o as J,b as K,w as X,j as A}from"./framework.fHSmVqmP.js";import"./theme.rgxY2wZn.js";const Y={class:"flex gap-4"},re=H({__name:"demo",setup(r){e.buildModuleUrl("Assets/Textures/moonSmall.jpg");const n=e.buildModuleUrl("Assets/Textures/waterNormalsSmall.jpg");class a{constructor(o,l){s(this,"show");s(this,"primitive");s(this,"_command");s(this,"_createCommand");s(this,"boundingSphere");const t=[[.5,-.5,.5],[-.5,-.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[-.5,.5,.5],[-.5,.5,-.5]],d=[...t[2],...t[3],...t[4],...t[7],...t[2],...t[3],...t[0],...t[1],...t[4],...t[7],...t[6],...t[5],...t[7],...t[2],...t[1],...t[6],...t[3],...t[4],...t[5],...t[0],...t[1],...t[0],...t[5],...t[6]],C=new Float32Array(d),u=[1,0,0],p=[-1,0,0],v=[0,1,0],f=[0,-1,0],_=[0,0,1],y=[0,0,-1],T=new Float32Array([...y,...y,...y,...y,...f,...f,...f,...f,...v,...v,...v,...v,...p,...p,...p,...p,...u,...u,...u,...u,..._,..._,..._,..._]),D=new Float32Array([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),I=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),z=o.scene;let g;const w=new Image;w.src=n,w.onload=()=>{g=new e.Texture({context:z.context,source:w})};const x={position:0,normal:1,textureCoordinates:2},P=`
        // in vec3 position3DHigh;
        // in vec3 position3DLow;
        in vec3 position;
        in vec3 normal;
        in vec2 st;
        in float batchId;

        out vec3 v_positionEC;
        out vec3 v_normalEC;
        out vec2 v_st;

        void main()
        {
            v_positionEC = (czm_modelView * vec4(position, 1.0)).xyz;       // position in eye coordinates
            v_normalEC = czm_normal * normal;                               // normal in eye coordinates
            v_st = st;
            gl_Position = czm_modelViewProjection * vec4(position, 1.0);
        }
      `,F=`
        in vec3 v_positionEC;
        in vec3 v_normalEC;
        in vec2 v_st;

        uniform sampler2D myImage;

        void main()
        {
            vec3 positionToEyeEC = -v_positionEC;

            vec3 normalEC = normalize(v_normalEC);
        #ifdef FACE_FORWARD
            normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
        #endif

            czm_materialInput materialInput;
            materialInput.normalEC = normalEC;
            materialInput.positionToEyeEC = positionToEyeEC;
            materialInput.st = v_st;

            //czm_material material = czm_getMaterial(materialInput);
            czm_material material = czm_getDefaultMaterial(materialInput);
            material.diffuse = texture(myImage, materialInput.st).rgb;

        #ifdef FLAT
            out_FragColor = vec4(material.diffuse + material.emission, material.alpha);
        #else
            out_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
        #endif
        }
      `,b=this;function M(c){const h=new e.Geometry({attributes:{position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}),normal:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D}),bitangent:void 0,color:void 0,tangent:void 0},indices:I,primitiveType:e.PrimitiveType.TRIANGLES,boundingSphere:e.BoundingSphere.fromVertices(d)});return b.boundingSphere=h.boundingSphere,e.VertexArray.fromGeometry({context:c,geometry:h,attributeLocations:x,bufferUsage:e.BufferUsage.STATIC_DRAW})}function L(c){var h=!1,S=!0,V=e.Appearance.getDefaultRenderState(h,S,void 0),R=e.RenderState.fromCache(V),B=new e.ShaderSource({sources:[P]}),G=new e.ShaderSource({sources:[F]});const U={myImage:function(){return e.defined(g)?g:c.defaultTexture}},N=e.ShaderProgram.fromCache({context:c,vertexShaderSource:B,fragmentShaderSource:G,attributeLocations:x});return new e.DrawCommand({boundingVolume:b.boundingSphere,vertexArray:M(c),primitiveType:e.PrimitiveType.TRIANGLES,renderState:R,shaderProgram:N,uniformMap:U,pass:e.Pass.OPAQUE,modelMatrix:l})}this.show=!0,this._command=void 0,this._createCommand=L}update(o){this.show&&(e.defined(this._command)||(this._command=this._createCommand(o.context)),e.defined(this._command)&&o.commandList.push(this._command))}isDestroyed(){return!1}destroy(){return e.defined(this._command)&&(this._command.shaderProgram=this._command.shaderProgram&&this._command.shaderProgram.destroy()),e.destroyObject(this)}flyTo(){}}const m=Q();$(()=>{const i=q(W),o=1e5,l=e.Cartesian3.fromDegrees(116.39,39.9,.5*o),t=e.Transforms.eastNorthUpToFixedFrame(l),d=e.Matrix4.fromScale(new e.Cartesian3(o,o,o)),C=e.Matrix4.multiply(t,d,new e.Matrix4);i&&(m.value=new a(i,C),m.value.flyTo(),i.scene.primitives.add(m.value),i.camera.flyToBoundingSphere(new e.BoundingSphere(l,1e5)))});const E=()=>{m.value&&m.value.flyTo()};return(i,o)=>(J(),K(k,null,{default:X(()=>[A("div",Y,[A("div",{class:"da-btn da-btn-primary da-btn-sm mt-4",onClick:o[0]||(o[0]=()=>{})}," 打印Appearance "),A("div",{class:"da-btn da-btn-primary da-btn-sm mt-4",onClick:E},"定位飞行")])]),_:1}))}});export{re as default};
