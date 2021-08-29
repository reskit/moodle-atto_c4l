YUI.add("moodle-atto_c4l-button",function(e,t){var n=[{name:M.util.get_string("keyconcept","atto_c4l"),type:"contextual",imageClass:"c4l-keyconcept-icon",code:'<p class="c4l-spacer"></p><div class="c4l-keyconcept">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>'},{name:M.util.get_string("tip","atto_c4l"),type:"contextual",imageClass:"c4l-tip-icon",code:'<p class="c4l-spacer"></p><div class="c4l-tip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>'},{name:M.util.get_string("reminder","atto_c4l"),type:"contextual",imageClass:"c4l-reminder-icon",code:'<p class="c4l-spacer"></p><div class="c4l-reminder">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor odio vel turpis consequat sodales.</div><p><br></p>'},{name:M.util.get_string("attention","atto_c4l"),type:"contextual",imageClass:"c4l-attention-icon",code:'<p class="c4l-spacer"></p><div class="c4l-attention">Aquest \u00e9s un bloc de text de mostra, el pots esborrar i enganxar aqu\u00ed el teu text.</div><p><br></p>'},{name:M.util.get_string("quote","atto_c4l"),type:"contextual",imageClass:"c4l-quote-icon",code:'<p class="c4l-spacer"></p><div class="c4l-quote"><div class="c4l-quote-body"><div class="c4l-quote-line"></div><div class="c4l-quote-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.</p></div></div><div class="c4l-quote-caption"><span>Marcus Tullius Cicero</span>De Finibus Bonorum et Malorum</div></div><p><br></p>'},{name:M.util.get_string("dodontcards","atto_c4l"),type:"contextual",imageClass:"c4l-dodontcards-icon",code:'<p class="c4l-spacer"></p><div class="c4l-dodontcards"><div class="c4l-dodontcards-do">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div><div class="c4l-dodontcards-dont">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div></div><p><br></p>'},{name:M.util.get_string("readingcontext","atto_c4l"),type:"contextual",imageClass:"c4l-readingcontext-icon",code:'<p class="c4l-spacer"></p><div class="c4l-readingcontext"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus leo, hendrerit ac sem vitae, posuere egestas nisi.</p><div class="c4l-readingcontext-caption"><span>Marcus Tullius Cicero</span>De Finibus Bonorum et Malorum</div></div><p><br></p>'},{name:M.util.get_string("example","atto_c4l"),type:"contextual",imageClass:"c4l-example-icon",code:'<p class="c4l-spacer"></p><div class="c4l-example"><h1>Lorem impsum dolor sit amet</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div><p><br></p>'},{name:M.util.get_string("figure","atto_c4l"),type:"contextual",imageClass:"c4l-figure-icon",code:'<p class="c4l-spacer"></p><figure class="c4l-figure"><img src="https://source.unsplash.com/random/800x600" alt="Lorem impsum dolor sit amet"><figcaption><em class="c4l-figure-footer">Consectetur adipiscing elit.</em><span class="c4l-figure-caption"><strong>Font: </strong>Phasellus a posuere nibh.</span></figcaption></figure><p><br></p>'},{name:M.util.get_string("tag","atto_c4l"),type:"contextual",imageClass:"c4l-tag-icon",code:'<p class="c4l-spacer"></p><div class="c4l-display-left"><div class="c4l-tag">Lorem ipsum</div></div>'},{name:M.util.get_string("estimatedtime","atto_c4l"),type:"procedural",imageClass:"c4l-estimatedtime-icon",code:'<p class="c4l-spacer"></p><div class="c4l-inline-group"><div class="c4l-estimatedtime">15 <span>min</span></div></div>'},{name:M.util.get_string("duedate","atto_c4l"),type:"procedural",imageClass:"c4l-duedate-icon",code:'<p class="c4l-spacer"></p><div class="c4l-inline-group"><div class="c4l-duedate">November 17th</div></div>'},{name:M.util.get_string("proceduralcontext","atto_c4l"),type:"procedural",imageClass:"c4l-proceduralcontext-icon",code:'<p class="c4l-spacer"></p><p class="c4l-proceduralcontext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quis lorem aliquet, fermentum dolor ac, venenatis turpis.</p><p><br></p>'},{name:M.util.get_string("gradingvalue","atto_c4l"),type:"evaluative",imageClass:"c4l-gradingvalue-icon",code:'<p class="c4l-spacer"></p><div class="c4l-inline-group"><div class="c4l-gradingvalue"><span>Grading value: </span>33.3%</div></div>'},{name:M.util.get_string("expectedfeedback","atto_c4l"),type:"evaluative",imageClass:"c4l-expectedfeedback-icon",code:'<p class="c4l-spacer"></p><div class="c4l-expectedfeedback"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus.</p></div><p><br></p>'},{name:M.util.get_string("allpurposecard","atto_c4l"),type:"helper",imageClass:"c4l-allpurposecard-icon",code:'<p class="c4l-spacer"></p><div class="c4l-allpurposecard"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a posuere nibh, eu mollis lacus. Praesent dictum in velit sed dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p></div><p><br></p>'
},{name:M.util.get_string("inlinetag","atto_c4l"),type:"helper",imageClass:"c4l-inlinetag-icon",code:'<span class="c4l-inlinetag">Text</span>'}],r=e.Array(n);e.namespace("M.atto_c4l").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var e="iconone";this.addButton({icon:"ed/"+e,iconComponent:"atto_c4l",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},_displayDialogue:function(t,n){t.preventDefault();var r=600,i=this.getDialogue({headerContent:M.util.get_string("dialogtitle","atto_c4l"),width:r+"px",focusAfterHide:n});i.width!==r+"px"&&i.set("width",r+"px");var s=e.Node.create('<div class="c4l-plugin-container"></div>'),o=e.Node.create('<div class="c4l-buttons-grid"></div>'),u;this._assembleButtons(o),s.append(o);var a=s.all("button");a.on("click",this._doInsert,this,0),i.set("bodyContent",s),i.show(),this.markUpdated()},_doInsert:function(e){e.preventDefault();var t=e.target.get("id"),r=n[t].code;this.getDialogue({focusAfterHide:null}).hide(),this.editor.focus(),this.get("host").insertContentAtFocusPoint(r),this.markUpdated()},_assembleButtons:function(t){for(i=0;i<r.length;i++)newButton=e.Node.create("<button></button>"),newButton.set("innerHTML",r[i].name),newButton.set("id",i),iconClass=r[i].imageClass,newButton.addClass("c4l-dialog-button "+iconClass),newButton.appendTo(e.one("body")),t.append(newButton)}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
