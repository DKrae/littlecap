sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapleui5.controller.SampleView", {
			onInit: function () {

			},

			onShowHello: function (oEvent) {
			//	console.log('test');
			//	this.getView().byId("Submit").getObjectBinding().execute();
			this.getView().getModel().bindContext("sampleService.callStoredProc()").execute()
			//console.log(oEvent.getSource().getBindingContext())
			}
		});
	});
