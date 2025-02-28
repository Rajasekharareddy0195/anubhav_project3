/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"jnjrscworkorder/project3/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});