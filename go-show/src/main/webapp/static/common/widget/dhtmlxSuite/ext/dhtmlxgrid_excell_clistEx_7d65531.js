function eXcell_clistEx(t){try{this.cell=t,this.grid=this.cell.parentNode.grid}catch(e){}this.edit=function(){this.val=this.getValue();var t=this.cell._combo||this.grid.clists[this.cell._cellIndex];if(t){this.obj=document.createElement("DIV");for(var e=this.val.split(","),i="",l=0;l<t.length;l++){for(var s=!1,h=0;h<e.length;h++)t[l]==e[h]&&(s=!0);i+=s?"<div><input type='checkbox' id='dhx_clist_"+l+"' checked='true' /><label for='dhx_clist_"+l+"'>"+t[l]+"</label></div>":"<div><input type='checkbox' id='dhx_clist_"+l+"'/><label for='dhx_clist_"+l+"'>"+t[l]+"</label></div>"}i+="<div><input type='button' value='"+(this.grid.applyButtonText||"Apply")+"' style='width:100px; font-size:8pt;' onclick='this.parentNode.parentNode.editor.grid.editStop();'/></div>",this.obj.editor=this,this.obj.innerHTML=i,document.body.appendChild(this.obj),this.obj.style.position="absolute",this.obj.className="dhx_clist",this.obj.onclick=function(t){return(t||event).cancelBubble=!0,!0};var o=this.grid.getPosition(this.cell);this.obj.style.left=o[0]+"px",this.obj.style.top=o[1]+this.cell.offsetHeight+"px",this.obj.getValue=function(){for(var t="",e=0;e<this.childNodes.length-1;e++)this.childNodes[e].childNodes[0].checked&&(t&&(t+=","),t+=this.childNodes[e].childNodes[1].innerHTML);return t.replace(/&amp;/g,"&")}}},this.getValue=function(){return this.cell._clearCell?"":this.cell.innerHTML.toString()._dhx_trim().replace(/&amp;/g,"&")},this.detach=function(){return this.obj&&(this.setValue(this.obj.getValue()),this.obj.editor=null,this.obj.parentNode.removeChild(this.obj),this.obj=null),this.val!=this.getValue()}}eXcell_clistEx.prototype=new eXcell,eXcell_clistEx.prototype.setValue=function(t){if("object"==typeof t){var e=this.grid.xmlLoader.doXPath("./option",t);e.length&&(this.cell._combo=[]);for(var i=0;i<e.length;i++)this.cell._combo.push(e[i].firstChild?e[i].firstChild.data:"");t=t.firstChild.data}""===t||t===this.undefined?(this.setCTxtValue(" ",t),this.cell._clearCell=!0):(this.setCTxtValue(t),this.cell._clearCell=!1)},dhtmlXGridObject.prototype.registerCListEx=function(t,e){this.clists||(this.clists=new Array),"object"!=typeof e&&(e=e.split(",")),this.clists[t]=e};