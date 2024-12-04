var j=Object.defineProperty;var k=(i,n,a)=>n in i?j(i,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[n]=a;var c=(i,n,a)=>k(i,typeof n!="symbol"?n+"":n,a);import{_ as W,d as H}from"./cesium-view.vue_vue_type_script_setup_true_lang.Cey8CeQO.js";import*as e from"/GJ/cesiumStatic/index.js";import{d as Q,D as $,v as q,at as J,o as K,b as X,w as Y,j as A,k as Z}from"./framework.DIpEmB6A.js";import"./theme.C158DeIw.js";const ee={class:"flex gap-4"},ie=Q({__name:"demo",setup(i){const n=e.buildModuleUrl("Assets/Textures/moonSmall.jpg"),a=e.buildModuleUrl("Assets/Textures/waterNormalsSmall.jpg");console.log("moonImage",n),console.log("waterNormalsSmall",a);class T{constructor(o,r){c(this,"show");c(this,"primitive");c(this,"_command");c(this,"_createCommand");c(this,"boundingSphere");const t=[[.5,-.5,.5],[-.5,-.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[.5,.5,.5],[-.5,.5,.5],[-.5,.5,-.5]],d=[...t[2],...t[3],...t[4],...t[7],...t[2],...t[3],...t[0],...t[1],...t[4],...t[7],...t[6],...t[5],...t[7],...t[2],...t[1],...t[6],...t[3],...t[4],...t[5],...t[0],...t[1],...t[0],...t[5],...t[6]],g=new Float32Array(d),u=[1,0,0],p=[-1,0,0],v=[0,1,0],f=[0,-1,0],_=[0,0,1],y=[0,0,-1],D=new Float32Array([...y,...y,...y,...y,...f,...f,...f,...f,...v,...v,...v,...v,...p,...p,...p,...p,...u,...u,...u,...u,..._,..._,..._,..._]),I=new Float32Array([0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),z=new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),P=o.scene;let C;const w=new Image;w.src=a,w.onload=()=>{C=new e.Texture({context:P.context,source:w})};const x={position:0,normal:1,textureCoordinates:2},F=`
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
      `,M=`
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
      `,b=this;function L(l){const h=new e.Geometry({attributes:{position:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g}),normal:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:D}),st:new e.GeometryAttribute({componentDatatype:e.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:I}),bitangent:void 0,color:void 0,tangent:void 0},indices:z,primitiveType:e.PrimitiveType.TRIANGLES,boundingSphere:e.BoundingSphere.fromVertices(d)});return b.boundingSphere=h.boundingSphere,e.VertexArray.fromGeometry({context:l,geometry:h,attributeLocations:x,bufferUsage:e.BufferUsage.STATIC_DRAW})}function V(l){var h=!1,S=!0,R=e.Appearance.getDefaultRenderState(h,S,void 0),B=e.RenderState.fromCache(R),G=new e.ShaderSource({sources:[F]}),N=new e.ShaderSource({sources:[M]});const U={myImage:function(){return e.defined(C)?C:l.defaultTexture}},O=e.ShaderProgram.fromCache({context:l,vertexShaderSource:G,fragmentShaderSource:N,attributeLocations:x});return new e.DrawCommand({boundingVolume:b.boundingSphere,vertexArray:L(l),primitiveType:e.PrimitiveType.TRIANGLES,renderState:B,shaderProgram:O,uniformMap:U,pass:e.Pass.OPAQUE,modelMatrix:r})}this.show=!0,this._command=void 0,this._createCommand=V}update(o){this.show&&(e.defined(this._command)||(this._command=this._createCommand(o.context)),e.defined(this._command)&&o.commandList.push(this._command))}isDestroyed(){return!1}destroy(){return e.defined(this._command)&&(this._command.shaderProgram=this._command.shaderProgram&&this._command.shaderProgram.destroy()),e.destroyObject(this)}flyTo(){console.log("flyTo")}}const s=$();q(()=>{const m=J(H),o=1e5,r=e.Cartesian3.fromDegrees(116.39,39.9,.5*o),t=e.Transforms.eastNorthUpToFixedFrame(r),d=e.Matrix4.fromScale(new e.Cartesian3(o,o,o)),g=e.Matrix4.multiply(t,d,new e.Matrix4);m&&(s.value=new T(m,g),s.value.flyTo(),m.scene.primitives.add(s.value),m.camera.flyToBoundingSphere(new e.BoundingSphere(r,1e5)))});const E=()=>{s.value&&s.value.flyTo()};return(m,o)=>(K(),X(W,null,{default:Y(()=>[A("div",ee,[A("div",{class:"da-btn da-btn-primary da-btn-sm mt-4",onClick:o[0]||(o[0]=()=>{var r;return console.log("customCube.value.primitive.appearance",(r=Z(s))==null?void 0:r.primitive.appearance)})}," 打印Appearance "),A("div",{class:"da-btn da-btn-primary da-btn-sm mt-4",onClick:E},"定位飞行")])]),_:1}))}});export{ie as default};
