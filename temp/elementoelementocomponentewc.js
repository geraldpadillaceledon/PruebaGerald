gx.evt.autoSkip=!1;gx.define("elementoelementocomponentewc",!0,function(n){var t,i;this.ServerClass="elementoelementocomponentewc";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6ElementoID=gx.fn.getIntegerValue("vELEMENTOID",".");this.AV6ElementoID=gx.fn.getIntegerValue("vELEMENTOID",".")};this.Valid_Componenteid=function(){var n=gx.fn.currentGridRowImpl(12);return this.validCliEvt("Valid_Componenteid",12,function(){try{if(gx.fn.currentGridRowImpl(12)===0)return!0;var n=gx.util.balloon.getNew("COMPONENTEID",gx.fn.currentGridRowImpl(12));this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e130y2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e140y2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,13,14,15,16,17,18,19];this.GXLastCtrlId=19;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",12,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"elementoelementocomponentewc",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit(23,13,"ELEMENTOCOMPONENTEID","Elemento Componente ID","","ElementoComponenteID","int",0,"px",4,4,"right",null,[],23,"ElementoComponenteID",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");i.addSingleLineEdit(20,14,"COMPONENTEID","Componente ID","","ComponenteID","int",0,"px",4,4,"right",null,[],20,"ComponenteID",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");i.addSingleLineEdit(21,15,"COMPONENTENOMBRE","Componente","","ComponenteNombre","char",0,"px",40,40,"left",null,[],21,"ComponenteNombre",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");this.GridContainer.emptyText="";this.setGrid(i);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"GRIDCELL",grid:0};t[6]={id:6,fld:"GRIDTABLE",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[13]={id:13,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ELEMENTOCOMPONENTEID",gxz:"Z23ElementoComponenteID",gxold:"O23ElementoComponenteID",gxvar:"A23ElementoComponenteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A23ElementoComponenteID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z23ElementoComponenteID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("ELEMENTOCOMPONENTEID",n||gx.fn.currentGridRowImpl(12),gx.O.A23ElementoComponenteID,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A23ElementoComponenteID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("ELEMENTOCOMPONENTEID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[14]={id:14,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:this.Valid_Componenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPONENTEID",gxz:"Z20ComponenteID",gxold:"O20ComponenteID",gxvar:"A20ComponenteID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A20ComponenteID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z20ComponenteID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("COMPONENTEID",n||gx.fn.currentGridRowImpl(12),gx.O.A20ComponenteID,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A20ComponenteID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("COMPONENTEID",n||gx.fn.currentGridRowImpl(12),".")},nac:gx.falseFn};t[15]={id:15,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:12,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"COMPONENTENOMBRE",gxz:"Z21ComponenteNombre",gxold:"O21ComponenteNombre",gxvar:"A21ComponenteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A21ComponenteNombre=n)},v2z:function(n){n!==undefined&&(gx.O.Z21ComponenteNombre=n)},v2c:function(n){gx.fn.setGridControlValue("COMPONENTENOMBRE",n||gx.fn.currentGridRowImpl(12),gx.O.A21ComponenteNombre,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A21ComponenteNombre=this.val(n))},val:function(n){return gx.fn.getGridControlValue("COMPONENTENOMBRE",n||gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ELEMENTOID",gxz:"Z4ElementoID",gxold:"O4ElementoID",gxvar:"A4ElementoID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A4ElementoID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z4ElementoID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("ELEMENTOID",gx.O.A4ElementoID,0)},c2v:function(){this.val()!==undefined&&(gx.O.A4ElementoID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("ELEMENTOID",".")},nac:gx.falseFn};this.Z23ElementoComponenteID=0;this.O23ElementoComponenteID=0;this.Z20ComponenteID=0;this.O20ComponenteID=0;this.Z21ComponenteNombre="";this.O21ComponenteNombre="";this.A4ElementoID=0;this.Z4ElementoID=0;this.O4ElementoID=0;this.A4ElementoID=0;this.AV6ElementoID=0;this.A23ElementoComponenteID=0;this.A20ComponenteID=0;this.A21ComponenteNombre="";this.Events={e130y2_client:["ENTER",!0],e140y2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6ElementoID",fld:"vELEMENTOID",pic:"ZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.START=[[{av:"AV15Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("ELEMENTOID","Visible")',ctrl:"ELEMENTOID",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A20ComponenteID",fld:"COMPONENTEID",pic:"ZZZ9"}],[{av:'gx.fn.getCtrlProperty("COMPONENTENOMBRE","Link")',ctrl:"COMPONENTENOMBRE",prop:"Link"}]];this.EvtParms.ENTER=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6ElementoID",fld:"vELEMENTOID",pic:"ZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6ElementoID",fld:"vELEMENTOID",pic:"ZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6ElementoID",fld:"vELEMENTOID",pic:"ZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV6ElementoID",fld:"vELEMENTOID",pic:"ZZZ9"},{av:"sPrefix"}],[]];this.EvtParms.VALID_COMPONENTEID=[[],[]];this.setVCMap("AV6ElementoID","vELEMENTOID",0,"int",4,0);this.setVCMap("AV6ElementoID","vELEMENTOID",0,"int",4,0);this.setVCMap("AV6ElementoID","vELEMENTOID",0,"int",4,0);i.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid"});i.addRefreshingVar({rfrVar:"AV6ElementoID"});i.addRefreshingParm({rfrVar:"AV6ElementoID"});this.Initialize()})