define(["dialog","report/edit/canvas/chart-setting/axis/axis-model","report/edit/canvas/chart-setting/axis/axis-setting-template"],function(a,b,c){a.confirm;var d=Backbone.View.extend({events:{"click .j-set-axis":"setDoubleAxis"},initialize:function(a){var c=this;c.model=new b({canvasModel:a.canvasView.model,reportId:a.reportId}),this.model.set("compId",this.$el.find(".j-comp-setting").attr("data-comp-id"))},setDoubleAxis:function(){var a=this;a.model.getAxisList(function(b){a._openAxisDialog(b)})},destroy:function(){this.stopListening(),this.model.clear({silent:!0}),delete this.model,this.$el.unbind()},_openAxisDialog:function(b){var d=this,e=c.render(b),f=b.dim.length;1===f?a.alert("少于两个指标,无法进行设置","提示"):0===f?a.alert("没有指标","提示"):a.showDialog({title:"双坐标轴设置",content:e,dialog:{width:340,height:200,resizable:!1,buttons:[{text:"提交",click:function(){d._saveAxisFormInfo($(this))}},{text:"取消",click:function(){$(this).dialog("close")}}]}})},_saveAxisFormInfo:function(a){var b=$(".axis-setting-checkbox"),c={};b.each(function(){var a=$(this),b=a.attr("name");c[b]=a.is(":checked")?"1":"0"}),this.model.saveAxisInfo(c,function(){a.dialog("close"),window.dataInsight.main.canvas.showReport()})}});return d});