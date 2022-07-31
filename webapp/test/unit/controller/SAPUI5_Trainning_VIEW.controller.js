/*global QUnit*/

sap.ui.define([
	"sapui5_trainning_prj/controller/SAPUI5_Trainning_VIEW.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SAPUI5_Trainning_VIEW Controller");

	QUnit.test("I should test the SAPUI5_Trainning_VIEW controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
