sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";

    return {
        getState: function (status) {
            switch (status) {
                case "Available":
                    return "Success";
                case "Out of Stock":
                    return "Warning";
                case "Not Available":
                    return "Error";
                default:
                    return "None";
            }
        }
    };
});





// sap.ui.define([

// ], function () {
//     return {
//         getState: function (status) {
//             switch (status) {
//                 case "Available":
//                     return 'Success'
//                     break;
//                 case "Out of Stock":
//                     return 'Warning'
//                     break;
//                 case "Not Available":
//                     return 'Success'
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
// })

