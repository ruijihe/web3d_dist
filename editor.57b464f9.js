function e(e,t,i,l){Object.defineProperty(e,t,{get:i,set:l,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;t.register("iNXBD",function(i,l){e(i.exports,"Editor",()=>M);var o=t("8lMst"),s=t("3MG2R"),a=t("hn8Wk"),n=t("3YQYO"),r=t("huS6x"),d=t("kjwe7"),c=t("4jMdz"),p=t("kOTLu"),h=t("7HjZd"),u=t("4sbRm"),m=t("a5iWq"),v=t("dmmoZ"),g=t("5KDNz"),y=t("43Mdd"),b=t("9bipm"),w=t("7zcMC"),f=t("eBHx9"),S=t("dfYd8"),x=t("6VBvh"),_=t("kuAoo"),R=t("jRy5l"),E=t("exKy3"),C=t("3gS3M");class M{constructor(){editor.list.default2D.add(function(){editor.roamTool&&editor.roamTool.deactive(),document.getElementById("two_D").childNodes[1].classList.add("active_view"),document.getElementById("three_D").childNodes[1].classList.remove("active_view")}),editor.list.changeCameraSlider.add(function(e,t){$("#footerView").val(parseInt(100*t))}),editor.list.alert.add(function(e,t="success"){editor.messageControl=new o.MessageControl,editor.messageControl.message({content:e,type:t})}),editor.list.dialog.add(function(e,t,i){new(0,a.Dialog)({title:e+"?",content:t,param:i}).open()}),editor.list.blackBox.add(function(e,t,i){editor.blackbox&&""!=editor.blackbox||(editor.blackbox=new s.Blackbox(editor)),editor.blackbox.setVal({top:t-20,left:e+20,value:i})}),editor.list.showDialog.add(function(e,t,i=[],l=[]){if((0,n.PopupHandle)(e,i,editor,l),""!=e||0==e)switch(e){case 100:new u.Level({});break;case 0:case 13:0!=l.length&&new m.Wall({keys:e,extent:l[0],height:l[5],thickness:l[1]}),(0,r.propertyEvent).propertySwitch(l);break;case 1:case 15:new v.Window({keys:e,disabledFlag:t,width:l[0],height:l[1],depth:l[2],takeOff:l[3]});break;case 2:case 12:new g.Door({keys:e,extent:l[0],height:l[1],ply:l[2],takeOff:l[3],modelName:t});break;case 3:new y.Floor;let o=!1;(0,y.Floor).roomTypelist.forEach(e=>{e.name==l[0]&&(o=!0)}),o?($("#roomname").val(l[0]),$("#roomtype").val(l[0])):($("#roomname").val(l[0]),$("#roomtype").val("未命名"));break;case 4:new h.Structure({keys:e,title:"梁",extent:l[0],extentMax:12e3,width:l[1],widthMax:12e3,height:l[2],heightMax:900,angle:l[3]});break;case 5:new h.Structure({keys:e,title:"烟道",extent:l[0],extentMax:1800,width:l[1],widthMax:2400,height:l[2],heightMax:8400,angle:l[3]});break;case 6:new h.Structure({keys:e,title:"柱子",extent:l[0],extentMax:2400,width:l[1],widthMax:2400,height:l[2],heightMax:8400,angle:l[3]});break;case 8:case 10:case 11:case 14:new p.ModelProperty({keys:e,title:t,extent:l[0].width,width:l[0].depth,height:l[0].height,oldExtent:l[0].oldWidth,oldWidth:l[0].oldDepth,oldHeight:l[0].oldHeight,takeOff:l[0].floorHei,x:l[0].rotation[0],y:l[0].rotation[1],z:l[0].rotation[2],oldFloorHei:l[0].oldFloorHei})}}),editor.list.updateDialog.add(function(e,t){let i=document.querySelector(".wall_pop");if(!i)return;let l=parseInt(i.style.left),o=parseInt(i.style.top);i.style.left=l+e+"px",i.style.top=o+t+"px"}),editor.list.hiddenDialog.add(function(){let e=document.querySelectorAll(".wall_pop");for(let t=0;t<e.length;t++){let i=e[t];i.parentNode.removeChild(i)}}),editor.list.exitRomaScene.add(function(){let e=new r.navigationBar;e.showBar()}),editor.list.threeDimensions.add(function(e){"2D"==e?($(".view_title").removeClass("active_view"),$(".view_title")[0].classList.add("active_view"),document.querySelector("#two_view").style.display="block",document.querySelector("#threed_view").style.visibility="hidden"):($(".view_title").removeClass("active_view"),$(".view_title")[1].classList.add("active_view"),document.querySelector("#two_view").style.display="none",document.querySelector("#threed_view").style.visibility="visible")}),editor.list.switchBounced.add(function(e){let t=document.querySelector(".wall_popup"),i=document.querySelector(".room_popup"),l=document.querySelector(".topbarContent_tool_bar");"wall"==e?(t.style.visibility="visible",i.style.visibility="hidden",l.style.visibility="hidden"):"room"==e?(t.style.visibility="hidden",i.style.visibility="visible",l.style.visibility="hidden"):(t.style.visibility="hidden",i.style.visibility="hidden",l.style.visibility="visible")}),editor.list.footerView.add(function(){return $("#footerView").val()}),editor.list.modelGroup3D.add(function(e,t,i=[],l={}){(0,n.PopupHandle)(e,i,editor,l)}),editor.list.baseMap.add(function(e){let t=document.querySelector(".baseBtn");1==e?t.style.display="none":0==e&&(t.style.display="block")}),editor.list.themeSwitch.add(function(e){(0,d.Header).themeChange(e,!1)}),editor.list.resetproperty.add(function(e){new u.Level({storeyHei:e.storeyHei,floorDep:e.floorDep,roomOpacity:e.roomOpacity});let t=document.querySelectorAll(".item_box");t.forEach((e,t)=>{e.classList.remove("active_type")})}),editor.list.getShowHiddenFlag.add(function(e,t=!0){(0,c.HomepageBottom).getFlag(e,t)}),editor.list.popupSaveRecord.add(function(e,t){new(0,b.saveGroupSelect)().main(e,t)}),editor.list.modelReplace.add(function(e){let t="";(0,f.ModelList).forEach(i=>{i.type==e&&(t=i)}),t&&new w.ReplaceModel({viewList:[t],replace:!0})}),editor.list.closeReplaceView.add(function(){let e=document.querySelector(".replaceDom");e&&(e.style.display="none")}),editor.list.progressOpen.add(function(e){new S.ProgressBar;let t=document.querySelector(".progress_bar_title");1==e&&(t.innerHTML="下载中...")}),editor.list.progressChange.add(function(e){let t=document.querySelector(".progress_barbox"),i=document.querySelector(".progress_bar_title"),l=document.querySelector(".progress_val");t&&(t.style.width=e+"%",l.innerHTML=e+"%",100==e&&(i.innerHTML="解析中..."))}),editor.list.progressClose.add(function(){$(".progress_bar").remove()}),editor.list.uploadModelBar.add(function(){new(0,_.UploadDialog)().init()}),editor.list.changeBar.add(function(e){let t=document.querySelector(".progress_barbox1"),i=document.querySelector(".progress_val1");t&&(t.style.width=e+"%",i.innerHTML=e+"%")}),editor.list.closeBar.add(function(){$("#upload_dialog_pop").remove()}),editor.list.saveWallJson.add(function(e,t){let i=new o.MessageControl;new(0,a.Dialog)({width:"20%",height:"200px",title:"保存户型",content:"<input value='' id='save_house_name' />",success(){let l=0;for(let e in window.localStorage)window.localStorage.hasOwnProperty(e)&&(l+=window.localStorage.getItem(e).length);if((l=(l/1024/1024).toFixed(2))>=5)i.message({content:"浏览器缓存已达最大5M，无法保存。",type:"warning"});else{let i=document.querySelector("#save_house_name").value,l=JSON.parse(t);l.orderName=i;let o={base64:e,json:JSON.stringify(l)};window.schemeContentList.push(o),localStorage.setItem("schemeContentList",JSON.stringify(window.schemeContentList)),$(".model_solution").empty(),(0,x.Mine).renderView()}}}).open()}),editor.list.setDefaultParams.add(function(e){new u.Level({storeyHei:e.storeyHei,floorDep:e.floorDep,roomOpacity:e.roomOpacity});let t=document.querySelectorAll(".base_map_item_box")[1];e.mapVisible?t.innerHTML="隐藏底图":t.innerHTML="显示底图"}),editor.list.cameraShot.add(function(e="400",t="200",i="0",l="0",o=!1){new(0,R.CameraShot)().init(e,t,i,l,o)}),editor.list.closeCameraShot.add(function(){new(0,R.CameraShot)().close()}),editor.list.horizontalLine.add(function(e,t,i=""){new E.HorizontalLine(e,t,i)}),editor.list.deleteLine.add(function(){let e=document.querySelector(".shot_box").children,t=[];for(let i=0;i<e.length;i++)t.push(e[i]);t.forEach(e=>document.querySelector(".shot_box").removeChild(e))}),editor.list.renderURL.add(function(){$("#renderDom").empty(),new C.renderHeader,$(".contentFlag").addClass("none"),$(".canvas").addClass("none"),$(".renderDom").removeClass("none"),document.documentElement.style.setProperty("--click-color","#F0A130")}),editor.list.getVersionNumber.add(e=>{let t=document.querySelector(".version");t.innerHTML=e.toString()});let e=(0,r.getParamsObj)();editor.urlParam=e}}}),t.register("8lMst",function(t,i){e(t.exports,"MessageControl",()=>u);let l={MESSAGE:"message",SUCCESS:"success",ERROR:"error",WARNING:"warning"},o={MESSAGE:"icon-zhengque iconfont",SUCCESS:"icon-zhengque iconfont",ERROR:"icon-cuowu iconfont",WARNING:"icon-shizhi iconfont"},s={MESSAGE:"#909399",SUCCESS:"#67c23a",ERROR:"#f56c6c",WARNING:"#e6a23c"},a=({isId:e=!1,name:t="",tag:i=""})=>{if(!i)return null;let l=document.createElement(i);return t&&(e?l.id=t:l.className=t),l},n=e=>{let t="";switch(e){case l.SUCCESS:t="background-color:#f0f9eb";break;case l.ERROR:t="background-color:#fef0f0";break;case l.WARNING:t="background-color: #fdf6ec";break;default:t="background-color: #edf2fc"}return t},r=e=>{let t="";switch(e){case l.SUCCESS:t=`${n(e)};color: ${s.SUCCESS};display:flex;`;break;case l.ERROR:t=`${n(e)};color: ${s.ERROR};display:flex;`;break;case l.WARNING:t=`${n(e)};color: ${s.WARNING};display:flex;`;break;default:t=`${n(e)};color: ${s.MESSAGE};display:flex;`}return t},d=e=>{let t="";switch(e){case l.SUCCESS:t=o.SUCCESS;break;case l.ERROR:t=o.ERROR;break;case l.WARNING:t=o.WARNING;break;default:t=o.MESSAGE}return t},c=e=>{let t="",i="margin-right: 10px;font-size: 20px;";switch(e){case l.SUCCESS:t=i+`color: ${s.SUCCESS};`;break;case l.ERROR:t=i+`color: ${s.ERROR};`;break;case l.WARNING:t=i+`color: ${s.WARNING};`;break;default:t=i+`color: ${s.MESSAGE};`}return t},p=({type:e,content:t,duration:i,delay:o,agaiBtn:s,minWidth:p,maxWidth:u},m)=>{if(!m){console.log("error!!!!");return}let v={isRemove:!1,type:e||l.MESSAGE,content:t||"",duration:i||3e3,delay:o||0,timeout:null,agaiBtn:s||!1},g=a({name:`message-${Math.floor(89997*Math.random())+10002}`,tag:"div"});g.style=`
    min-width:${p}px;
    max-width:${u}px;
    padding:12px;
    margin-top:-40px;
    border-radius:4px;
    box-shadow:-5px 5px 12px 0 rgba(204, 204, 204, 0.8);
    ${n(v.type)};
  animation: all cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.4s;
  transition: all .4s;
  pointer-events: auto;
  overflow:hidden;
    `;let y=a({tag:"div"});y.style=r(v.type);let b=a({name:`${d(v.type)}`,tag:"div"});b.style=c(v.type);let w=a({tag:"span"});if(w.style="font-size: 14px;line-height:20px;",w.innerHTML=v.content,y.appendChild(b),y.appendChild(w),g.appendChild(y),v.agaiBtn){let e=a({name:"message-again-btn",tag:"div"});e.style="margin-top: 5px;text-align:right;";let t=a({name:"message-again-text",tag:"span"});t.innerHTML="不再提示",t.style=`
        font-size: 12px;
        color: rgb(204, 201, 201);
        border-bottom: 1px solid rgb(204, 201, 201);
        cursor: pointer;
        `,t.onmouseover=()=>{t.style.color="#fdb906",t.style.borderBottom="1px solid #fdb906"},t.onmouseout=()=>{t.style.color="rgb(204, 201, 201)",t.style.borderBottom="1px solid rgb(204, 201, 201)"},e.appendChild(t),g.appendChild(e),v.elsAgainBtn=t}function f(){v.els=null,v.elsAgainBtn=null,v.destory=null}return m.appendChild(g),v.els=g,v.destory=(function(e,t){v.els&&e&&!v.isRemove&&(v.els.style.marginTop="-20px",v.els.style.opacity="0",v.isRemove=!0,t?(e.removeChild(g),h(e),f()):setTimeout(()=>{e.removeChild(g),h(e),f()},400))}).bind(void 0),v};function h(e){e&&(e.style.left=`calc(50vw - ${e.scrollWidth/2}px)`)}class u{constructor(){this.minWidth=380,this.maxWidth=800,this.top=90,this.zIndex=999,this.mainContainerIdName="selfDefine-message-box",this.sessionStorageName="MESSAGE_DONT_REMIND_AGAIN";let e=document.getElementById(this.mainContainerIdName);e&&document.body.removeChild(e),this.mainContainer=a({isId:!0,name:this.mainContainerIdName,tag:"div"}),this.mainContainer.style=`
      pointer-events:none;
      position:fixed;
      top:${this.top}px;
      left:calc(50vw - ${this.minWidth/2}px);
      z-index:${this.zIndex};
      display: flex;
      flex-direction: column;
      align-items:center;
      `,document.body.appendChild(this.mainContainer)}message(e={}){var t;let i=sessionStorage.getItem(this.sessionStorageName),l=i?JSON.parse(i):null;if(e.againBtn&&e.content&&l&&Array.isArray(l)&&l.includes(e.content))return;let o=p({type:e.type,content:e.content,duration:e.duration,delay:e.delay,againBtn:e.againBtn,minWidth:this.minWidth,maxWidth:this.maxWidth},this.mainContainer);this.mainContainer.appendChild(o.els),o.els.style.marginTop="20px",h(this.mainContainer),t=this,o&&(o.agaiBtn&&o.elsAgainBtn&&(o.elsAgainBtn.onclick=()=>{clearTimeout(o.timeout);let e=sessionStorage.getItem("MESSAGE_DONT_REMIND_AGAIN"),i=e?JSON.parse(e):[],l=Array.isArray(i)?i:[];l.push(o.content),sessionStorage.setItem(t.sessionStorageName,JSON.stringify(l)),o.destory(t.mainContainer,!0)}),o.els.onmouseover=()=>{clearTimeout(o.timeout)},o.els.onmouseout=()=>{o.timeout=setTimeout(()=>{o.destory(t.mainContainer),clearTimeout(o.timeout)},1e3)},o.timeout=setTimeout(()=>{o.destory(t.mainContainer),clearTimeout(o.timeout)},o.duration))}beforeDestory(){this.mainContainer&&this.mainContainer.remove?this.mainContainer.remove():document.body.removeChild(this.mainContainer),this.mainContainer=null}}}),t.register("3MG2R",function(t,i){e(t.exports,"Blackbox",()=>l);class l{constructor(e){this.boxHtml=document.createElement("div"),this.boxHtml.className="black_box",this.boxHtml.style.display="none",e.uiPanelBox.dom.appendChild(this.boxHtml),this.editor=e}setVal(e){let t=document.getElementsByClassName("black_box")[0];t.style.display="block",t.style=`top:${e.top}px;left:${e.left}px;position:absolute;`,t.innerHTML=`<span>${"number"==typeof e.value?e.value+"\xb0":e.value}</span>`}removeDom(){let e=document.getElementsByClassName("black_box")[0];e&&this.editor.uiPanelBox.dom.removeChild(e)}}}),t.register("7HjZd",function(i,l){e(i.exports,"Structure",()=>s);var o=t("hRcuq");class s{constructor(e){this.opts=Object.assign({keys:"",title:"",extent:null,extentMax:null,width:null,widthMax:null,height:null,heightMax:null,takeOff:null,angle:null},e);let t=document.querySelectorAll(".public_property");for(let e=0;e<t.length;e++){let i=t[e];i.parentNode.removeChild(i)}let i=document.getElementsByClassName("property")[0];var l=document.createElement("div");l.setAttribute("id","bridge"),l.className="public_property",i.insertBefore(l,i.child),this.init()}init(){this.renderView(),this.event()}renderView(){$("#bridge").append(`<div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>${this.opts.title}</span>
        </div>
        <div class="propertycontent">
        <div class="content_header" onclick = "runEffect('.bridgecontent_box')">
          <div>基础参数</div>
          <div>
          <img src="./static/assets/images/property/pulldown.svg"/>
      </div>
        </div>
        <div class="bridgecontent_box">
        <div class="bridgelength">
      </div>
      <div class="bridgeply">
      </div>
      <div class="bridgeheight">
      </div>
      <div class="angle bridge_angle">
      <span>角度</span>
        <input type="number" oninput="if(value>360)value=360"  value=${this.opts.angle} />
        <span class='angle_unit'>\xb0</span>
      </div>
        </div>
      </div>
        `),new o.Slider({title:"长度",location:".bridgelength",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:`${this.opts.extentMax}`,sliderMin:"1",valueId:"bridgeLenghtVal",sliderId:"bridgeLenght",numbertype:"width"}),new o.Slider({title:"宽度",location:".bridgeply",unit:"mm",sliderVal:`${this.opts.width}`,sliderMax:`${this.opts.widthMax}`,sliderMin:"1",valueId:"bridgeHeightVal",sliderId:"bridgeHeight",numbertype:"height"}),new o.Slider({title:"高度",location:".bridgeheight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:`${this.opts.heightMax}`,sliderMin:"1",valueId:"bridgeWidthVal",sliderId:"bridgeWidth",numbertype:"depth"})}event(){let e=document.querySelector(".bridge_angle input");e.addEventListener("blur",function(){editor.list.changeMemberParam.dispatch("rotation",e.value)}),e.onkeydown=t=>{13===t.keyCode&&editor.list.changeMemberParam.dispatch("rotation",e.value)}}}}),t.register("a5iWq",function(i,l){e(i.exports,"Wall",()=>s);var o=t("hRcuq");class s{constructor(e){this.opts=Object.assign({keys:"",extent:null,height:null,thickness:null},e);let t=document.querySelectorAll(".public_property");for(let e=0;e<t.length;e++){let i=t[e];i.parentNode.removeChild(i)}let i=document.getElementsByClassName("property")[0];var l=document.createElement("div");l.setAttribute("id","wall"),l.className="public_property",i.insertBefore(l,i.child),this.init()}init(){this.renderView(),this.event()}renderView(){$("#wall").append(` <div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>墙</span>
        </div>
          <div class="propertycontent ">
          <div class="content_header" >
          <div>基础参数</div>
          <div>
              <img src="./static/assets/images/property/pulldown.svg"/>
          </div>
        </div>
        <div class="propertycontent_box_1">
        <div class="btn_wall">
            <button  id='commonWall'>普通墙</button>
            <button  id='mainWall'>承重墙</button>
            <button id='lowWall'>矮墙</button>
        </div>
        <div class="walllength">
      </div>
      <div class="wallheight">
    
      </div>
      <div class="wallplay">
      </div>
          </div>
        `),new o.Slider({title:"长度",location:".walllength",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:"10000",sliderMin:"1",valueId:"walllenghtValue",sliderId:"wallLenght",numbertype:"len"}),new o.Slider({title:"高度",location:".wallheight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:window.storeyHei,sliderMin:"1",valueId:"wallHeightValue",sliderId:"wallHeight",numbertype:"height"}),new o.Slider({title:"厚度",location:".wallplay",unit:"mm",sliderVal:`${this.opts.thickness}`,sliderMax:"1000",sliderMin:"1",valueId:"wallplyValue",sliderId:"wallply",numbertype:"depth"})}event(){let e=$("#wall input[type = range]"),t=$("#wall .input_area"),i=$("#wall button");document.querySelector("#commonWall").addEventListener("click",function(){t[1].classList.add("not_allowed"),i.removeClass("active_btn"),i[0].classList.add("active_btn"),e[1].disabled=!0,t[1].children[1].disabled=!0,$("#wallHeightValue").val(window.storeyHei),$("#wallHeight").val(window.storeyHei),editor.list.changeWallParam.dispatch("wallType",2)}),document.querySelector("#lowWall").addEventListener("click",function(){i.removeClass("active_btn"),t[1].classList.remove("not_allowed"),i[2].classList.add("active_btn"),e[1].disabled=!1,t[1].children[1].disabled=!1,$("#wallHeightValue").val(1200),$("#wallHeight").val(1200),editor.list.changeWallParam.dispatch("wallType",1)}),document.querySelector("#mainWall").addEventListener("click",function(){t[1].classList.add("not_allowed"),i.removeClass("active_btn"),i[1].classList.add("active_btn"),e[1].disabled=!0,t[1].children[1].disabled=!0,$("#wallHeightValue").val(window.storeyHei),$("#wallHeight").val(window.storeyHei),editor.list.changeWallParam.dispatch("wallType",0)})}}}),t.register("dmmoZ",function(i,l){e(i.exports,"Window",()=>s);var o=t("hRcuq");class s{constructor(e){this.opts=Object.assign({keys:"",width:null,height:null,depth:null,takeOff:null,disabledFlag:null},e);let t=document.querySelectorAll(".public_property");for(let e=0;e<t.length;e++){let i=t[e];i.parentNode.removeChild(i)}let i=document.getElementsByClassName("property")[0];var l=document.createElement("div");l.setAttribute("id","window"),l.className="public_property",i.insertBefore(l,i.child),this.init()}init(){this.renderView(),this.window()}renderView(){$("#window").append(`<div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>${this.opts.disabledFlag}</span>
        </div>
        <div class="propertycontent">
        <div class="content_header">
          <div>基础参数</div>
          <div>
          <img src="./static/assets/images/property/pulldown.svg"/>
      </div>
        </div>
        <div class="windowcontent_box">
          <div class="btn_door">
            <button id='commonWindow' class="door-el-btn">窗</button>
            <button id='frenchWindow' class="door-el-btn">落地窗</button>
            <button id='bayWindow' class="door-el-btn">飘窗</button>
          </div>
          <div class="windowlength">
       
        </div>
        <div class="windowHeight">
      
      </div>
      <div class="windowply">
     
      </div>
      <div class="windowlidi">
    
      </div>
      <button class="recover_default">恢复默认</button>
        </div>
      </div>`);let e=null;e="L型窗"==this.opts.disabledFlag||"U型窗"==this.opts.disabledFlag,new o.Slider({title:"宽度",location:".windowlength",unit:"mm",sliderVal:`${this.opts.width}`,sliderMax:"10000",sliderMin:"1",valueId:"windowLenghtVal",sliderId:"windowLenght",numbertype:"width",disabled:e}),new o.Slider({title:"高度",location:".windowHeight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:"2800",sliderMin:"1",valueId:"windowHeightVal",sliderId:"windowHeight",numbertype:"height"}),new o.Slider({title:"深度",location:".windowply",unit:"mm",sliderVal:`${this.opts.depth}`,sliderMax:"240",sliderMin:"1",valueId:"windowPlyVal",sliderId:"windowPly",numbertype:"depth",disabled:e}),new o.Slider({title:"离地",location:".windowlidi",unit:"mm",sliderVal:`${this.opts.takeOff}`,sliderMax:"2800",sliderMin:"1",valueId:"windowLiftoffVal",sliderId:"windowLiftoff",numbertype:"floorHei"})}window(){$("#commonWindow").click(()=>{console.log("普通窗")}),$("#frenchWindow").click(()=>{console.log("落地窗")}),$("#bayWindow").click(()=>{console.log("飘窗")})}}}),t.register("5KDNz",function(i,l){e(i.exports,"Door",()=>s);var o=t("hRcuq");class s{constructor(e){this.opts=Object.assign({keys:"",extent:null,height:null,ply:null,takeOff:null,modelName:null},e);let t=document.querySelectorAll(".public_property");for(let e=0;e<t.length;e++){let i=t[e];i.parentNode.removeChild(i)}let i=document.getElementsByClassName("property")[0];var l=document.createElement("div");l.setAttribute("id","door"),l.className="public_property",i.insertBefore(l,i.child),this.init()}init(){this.renderView(),this.commondoor()}renderView(){$("#door").append(`  <div class="header">
          <svg
            height="1em"
            viewBox="0 0 5 14"
            width="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class='flag_keys' keys=${this.opts.keys}>${this.opts.modelName}</span>
        </div>
        <div class="propertycontent">
        <!-- 内容头部 -->
        <div class="content_header">
          <div>基础参数</div>
          <div>
          <img src="./static/assets/images/property/pulldown.svg"/>
      </div>
        </div>
        <div class="doorcontent_box">
          <div class="btn_door">
            <button id='commonDoor' class="door-el-btn">门</button>
            <button id='doubleDoor' class="door-el-btn">双开门</button>
            <button id='slidingDoor' class="door-el-btn">移门</button>
          </div>
          <div class="doorlength">
        </div>
        <div class="doorHeight">
      </div>
      <div class="doorply">
      </div>
      <div class="lidi">
      </div>
      <button class="recover_default">恢复默认</button>
        </div>
      </div>
        `),new o.Slider({title:"长度",location:".doorlength",unit:"mm",sliderVal:`${this.opts.extent}`,sliderMax:"2800",sliderMin:"1",valueId:"doorLenghtVal",sliderId:"doorLenght",numbertype:"width"}),new o.Slider({title:"高度",location:".doorHeight",unit:"mm",sliderVal:`${this.opts.height}`,sliderMax:"20000",sliderMin:"1",valueId:"doorHeightVal",sliderId:"doorHeight",numbertype:"height"}),new o.Slider({title:"厚度",location:".doorply",unit:"mm",sliderVal:`${this.opts.ply}`,sliderMax:"1500",sliderMin:"1",valueId:"doorPlyVal",sliderId:"doorPly",numbertype:"depth"}),new o.Slider({title:"离地",location:".lidi",unit:"mm",sliderVal:`${this.opts.takeOff}`,sliderMax:"2800",sliderMin:"0",valueId:"doorLiftoffVal",sliderId:"doorLiftoff",numbertype:"floorHei"})}commondoor(){$("#commonDoor").click(()=>{console.log("普通门")}),$("#doubleDoor").click(()=>{console.log("双开门")}),$("#slidingDoor").click(()=>{console.log("移门")})}}}),t.register("43Mdd",function(i,l){e(i.exports,"Floor",()=>n);var o=t("hRcuq"),s=t("huS6x");let a=new s.navigationBar;class n{static roomTypelist=[{name:"未命名"},{name:"门厅"},{name:"客厅"},{name:"餐厅"},{name:"阳台"},{name:"卧室"},{name:"主卧"},{name:"次卧"},{name:"儿童房"},{name:"老人房"},{name:"洗衣间"},{name:"卫生间"},{name:"走廊"},{name:"厨房"}];constructor(){let e=document.querySelectorAll(".public_property");for(let t=0;t<e.length;t++){let i=e[t];i.parentNode.removeChild(i)}let t=document.getElementsByClassName("property")[0];var i=document.createElement("div");i.setAttribute("id","floor"),i.className="public_property",t.insertBefore(i,t.child),this.init()}init(){this.renderView(),n.roomSelect()}renderView(){$("#floor").append(` <div class="view_header">
              <div class="header_icon1" >
                  <svg height="1em" viewBox="0 0 5 14" width="1em" fill="currentColor" aria-hidden="true">
                      <path
                          d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                          fill-rule="evenodd"></path>
                  </svg>
              </div>
              <div class="header_title" id = "untitled">
                  未命名
              </div>
              <div class="header_title" id="floorProperties">
                  楼层属性
              </div>
          </div>
          <div class="propertycontent_box_2" id="unnamed">
          <div class="diban_content">
          <div class="property_select">
            <div class="room_property">
              <span>房间类型</span>
              <select id='roomtype' placeholder="自定义">
                ${n.roomTypelist.map(e=>"未命名"==e.name?`<option selected>${e.name}</option>`:`<option >${e.name}</option>`)}
                <select>
            </div>
            <div class="room_property">
              <span>房间名</span>
              <input id='roomname' value='房间名'></input>
            </div>
          </div>
          <div class="page_range">
            <div class="title">
              <span>区域设置</span>
              <div class="el-icon-arrow-up"></div>
            </div>
            <div class="page_content">
              <div class="page_btn">
                <span>提供波打线、腰线、水刀等功能</span>
                <button>
                  <div class="el-icon-edit"></div>
                  <span>铺贴编辑</span>
                </button>
              </div>
              <!-- 位置属性 -->
              <div class="location_title">
                <span>位置属性</span>
                <div class="el-icon-arrow-up"></div>
              </div>
              <div class="location_property">
                <!-- <el-select></el-select> -->
                <div class=""></div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div class="propertycontent_box_2" id="floorProperty" style="display: none;">
          <div class= "content">
          <div class="content_header">
                <div>基础参数</div>
                <div>
                    <img src="./static/assets/images/property/pulldown.svg"/>
                </div>
              </div>
          <div class="propertycontent_box_3">
            <div class="addfloor">
                <div>添加楼层</div>
                  <div class="floor_icon">
                    <div class="icon_box tooltips">
                      <div class="center cursor">
                        <img src="./static/assets/images/property/addfloor.svg"/>
                      </div>
                      <div class="tooltiptext tooltips_width_2 center">新建楼层</div>
                    </div>
                    <div class="icon_box tooltips">
                    <div class="center cursor">
                    <img src="./static/assets/images/property/addfloor.svg"/>
                  </div>
                  <div class="tooltiptext tooltips_width_3 center">新建地下室</div>
                    </div>
                  </div>
            </div>
            <div class="addfloor">
            <div>当前楼层</div>
            <div class="dangqian">
              <select placeholder="1层">
                <option label="1层"></option>
              <select>
            </div>
          </div>
          <div class="addfloor inside_space">
          </div>
          <div class="floorHeight">
          </div>
          <div class="floorPly">
          </div>
          </div>
          </div>
          `),new o.Slider({title:"套内面积",location:".inside_space",unit:"mm",sliderVal:"200",sliderMax:"1500",sliderMin:"1"}),new o.Slider({title:"层高",location:".floorHeight",unit:"mm",sliderVal:"200",sliderMax:"1500",sliderMin:"1"}),new o.Slider({title:"地板厚度",location:".floorPly",unit:"mm",sliderVal:"200",sliderMax:"1500",sliderMin:"1"})}handover(){$("#untitled").click(function(){a.openContent(event,"unnamed","propertycontent_box_2","header_title")}),$("#floorProperties").click(function(){a.openContent(event,"floorProperty","propertycontent_box_2","header_title")})}static roomSelect(){let e=document.querySelector("#roomtype");e.addEventListener("change",function(e){$("#roomname").val(e.target.value),editor.list.setRoomType.dispatch(e.target.value)});let t=document.querySelector("#roomname");t.addEventListener("keydown",function(e){$("#roomname").val(e.target.value),editor.list.setRoomType.dispatch(e.target.value)}),t.addEventListener("blur",function(e){$("#roomname").val(e.target.value),editor.list.setRoomType.dispatch(e.target.value)})}}}),t.register("7zcMC",function(i,l){e(i.exports,"ReplaceModel",()=>s);var o=t("7tpVA");class s{constructor(e){this.opts=Object.assign({title:"",viewList:[],replace:!0},e);let t=document.querySelectorAll(".replaceView");for(let e=0;e<t.length;e++){let i=t[e];i.parentNode.removeChild(i)}let i=document.querySelector(".hideBarleft"),l=document.createElement("div"),o=document.createElement("div");l.className="replaceView",o.className="tier replaceDom",i.appendChild(l),l.appendChild(o);let s=document.createElement("div");s.className="replaceHeader",o.appendChild(s);let a=document.createElement("div");a.className="replaceContent",o.appendChild(a),this.init()}init(){this.renderView()}renderView(){$(".replaceHeader").append(`<div class='public_title'><span>商品替换</span><div class="closeReplace cursor ">x</div></div>
                  <div class='search_box'><span class='iconfont icon-yangbanjian-xiaosuo'></span><input placeholder='在“${this.opts.title}”下搜索' /><div class='spread cursor'><img src='./static/assets/images/zhankai.svg'/></div></div>`),$(".replaceContent").append(`
            <div class='public_view_content'>
            <div class='public_view_content_item'>
            <div class='type_box'>
            <div class='iconfont icon-yangbanjian-baixu cursor'></div>
            </div>
            <div class='public_srcItem1'></div>
            </div>
            </div>`),$(function(){let e=new o.NewSelect({height:"20px",width:"56px",title:"色系",location:".type_box"}),t=new o.NewSelect({height:"20px",width:"56px",title:"风格",location:".type_box",list:[{value:"田园风",label:"1"},{value:"中式风格",label:"2"},{value:"欧式风格",label:"3"},{value:"日式风格",label:"4"}]}),i=new o.NewSelect({height:"20px",width:"56px",title:"材质",location:".type_box",list:[{value:"田园风",label:"1"},{value:"中式风格",label:"2"},{value:"欧式风格",label:"3"},{value:"日式风格",label:"4"}]});e.open(),t.open(),i.open(),$(".closeReplace").click(function(){editor.list.closeReplaceView.dispatch()})}),$(".public_srcItem1").append(`${this.opts.viewList[0].item.map(e=>`<div class='public_view_item1 cursor' data-type=${e.modelPosition}>
                    <img  data-img='${e.src}'  src='${e.src}'/>
                </div>`).join("")}`);let e=document.querySelectorAll(".public_view_item1");e.forEach((e,t)=>{e.onclick=function(){let t=e.dataset.file,i=e.children[0].dataset.img,l=i.replace(/iso.png/gi,"sim.glb"),o=i.replace(/iso.png/gi,".png"),s=e.dataset.type;"json"==t?(l=i.replace(/iso.png/gi,".json"),editor.list.replaceGltf.dispatch([l])):editor.list.replaceGltf.dispatch([l,o,s])}})}}}),t.register("dfYd8",function(t,i){e(t.exports,"ProgressBar",()=>l);class l{constructor(){this.opts={pregressVal:0},this.init()}init(){this.createElement()}create(e,t){let i=document.createElement(e);return i.className=t,i}createElement(){this.$PROGRESSBAR=this.createBar(),this.$PROGRESSTITLE=this.createTitle(),this.$PROGRESSBOX=this.createProgressBar(),this.$PROGRESSBAR.appendChild(this.$PROGRESSTITLE),this.$PROGRESSBAR.appendChild(this.$PROGRESSBOX),document.body.appendChild(this.$PROGRESSBAR)}createBar(){return this.$BAR=this.create("div","progress_bar"),this.$BAR}createTitle(){return this.$TITLE=this.create("span","progress_bar_title"),this.$TITLE.innerHTML="上传中...",this.$TITLE}createProgressBar(){return this.$PROGRESS=this.create("div","progress_barbox"),this.$PROGRESSVAL=this.create("span","progress_val"),this.$PROGRESSVAL.innerHTML=`${this.opts.pregressVal}%`,this.$PROGRESS.appendChild(this.$PROGRESSVAL),this.$PROGRESS.style.width=this.opts.pregressVal+"%",console.log(this.opts.pregressVal),this.$PROGRESS}}}),t.register("kuAoo",function(t,i){e(t.exports,"UploadDialog",()=>l);class l{constructor(e){this.options={value:0}}init(){this.createElement()}create(e,t){let i=document.createElement(e);return i.className=t,i}createElement(){this.$PROGRESSBAR=this.createBar(),this.$PROGRESSTITLE=this.createTitle(),this.$PROGRESSBOX=this.createProgressBar(),this.$PROGRESSBAR.appendChild(this.$PROGRESSTITLE),this.$PROGRESSBAR.appendChild(this.$PROGRESSBOX),document.body.appendChild(this.$PROGRESSBAR)}createBar(){return this.$BAR=this.create("div","uploading_dialog"),this.$BAR.id="upload_dialog_pop",this.$BAR.style=`
        height: 40px;
        width: 200px;
        position : absolute;
        bottom: 50px;
        right:0;
        z-index: 9999;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 30px -15px #7e7b7b;
        `,this.$BAR}createTitle(){return this.$TITLE=this.create("span","uploading_dialog_title1"),this.$TITLE.style=`
        font-size:12px;
        display: flex;
        justify-content: center;
        `,this.$TITLE.innerHTML="上传中...",this.$TITLE}createProgressBar(){return this.$PROGRESS=this.create("div","progress_barbox1"),this.$PROGRESSVAL=this.create("span","progress_val1"),this.$PROGRESSVAL.innerHTML=`${this.options.value}%`,this.$PROGRESS.appendChild(this.$PROGRESSVAL),this.$PROGRESS.style.width=this.options.value+"%",console.log(this.options.value),this.$PROGRESS}hide(){document.querySelector("#upload_dialog_pop").remove()}}}),t.register("jRy5l",function(t,i){e(t.exports,"CameraShot",()=>l);class l{constructor(){}init(e,t,i,l,o){o?(document.querySelector("#cameraShot_box")&&this.close(),this.createEle(e,t,i,l)):document.querySelector("#cameraShot_box")?this.close():this.createEle(e,t,i,l)}create(e,t){let i=document.createElement(e);return i.className=t,i}createEle(e,t,i,l){this.CAMERASHOT=this.createBox(),this.SHOTBOX=this.createShot(e,t,i,l),this.CAMERASHOT.appendChild(this.SHOTBOX),document.body.appendChild(this.CAMERASHOT)}createBox(){return this.$BOX=this.create("div","camera_shot"),this.$BOX.id="cameraShot_box",this.$BOX}createShot(e,t,i,l){return this.$SHOT=this.create("div","shot_box"),this.$SHOT.style=`
            height:${t}px;
            width:${e}px;
            top:${l}px;
            left:${i}px;
        `,this.$SHOT}close(){document.querySelector("#cameraShot_box").remove()}}}),t.register("exKy3",function(t,i){e(t.exports,"HorizontalLine",()=>l);class l{constructor(e,t,i=""){let l=document.querySelector(`#${t}`);l&&l.remove(),this.id=t,this.LineBox=document.querySelector(".shot_box"),this.x=i||this.LineBox.clientHeight/2,this.color=e,this.renderView()}renderView(){this.LineBox.style.position="relative";let e=document.createElement("div");e.id=this.id,e.style=`
        height:3px;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: space-between;
        position:absolute;
        top:${this.x}px;
        `,this.LineBox.appendChild(e);let t=document.createElement("div");t.style="width:80px;height:100%;";let i=document.createElement("div");i.style="width:80px;height:100%;",t.style.backgroundColor=this.color,i.style.backgroundColor=this.color,e.appendChild(t),e.appendChild(i)}}});