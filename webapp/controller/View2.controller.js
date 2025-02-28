sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "jnj/rsc/workorder/project3/util/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("jnj.rsc.workorder.project3.controller.View2", {
        formatter: formatter,
        onInit() {
            this.getView().setModel(new sap.ui.model.json.JSONModel(), "formatter");
            this.getView().getModel("formatter").setProperty("/", formatter);

        }
    });
});


// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "jnj/rsc/workorder/project3/util/formatter" // Adjust path with forward slashes
// ], function (Controller, formatter) {
//     "use strict";

//     return Controller.extend("jnj.rsc.workorder.project3.controller.View2", {
//         formatter: formatter,

//         onInit: function () {
//             console.log("Formatter Loaded: ", formatter);
//         }
//     });
// });
