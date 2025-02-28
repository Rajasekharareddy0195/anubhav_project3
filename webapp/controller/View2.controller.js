sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jnj/rsc/workorder/project3/util/formatter" // Adjust path with forward slashes
], function (Controller, formatter) {
    "use strict";

    return Controller.extend("jnj.rsc.workorder.project3.controller.View2", {
        formatter: formatter,

        onInit: function () {
            console.log("Formatter Loaded: ", formatter);
        }
    });
});
