/*global QUnit*/

sap.ui.define([
	"sapleui5/controller/SampleView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SampleView Controller");

	QUnit.test("I should test the SampleView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
