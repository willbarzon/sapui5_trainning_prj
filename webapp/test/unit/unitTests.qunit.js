/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5_trainning_prj/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
