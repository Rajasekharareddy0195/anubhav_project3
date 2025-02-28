sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("jnj.rsc.workorder.project3.controller.View1", {
        onInit() {
        },
        onDelete: function (oEvent) {
            //Step 1: Find out when item was pressed for deletion
            var oItemToBeDeleted = oEvent.getParameter("listItem")
            //Step 2: get the object of the list controll = without using ID is a good practice
            var oList = oEvent.getSource()
            //Step 3: call Delete API provided by SDK
            oList.removeItem(oItemToBeDeleted);
        },
        // onDelete: function (oEvent) {

        //     // Get the list item to be deleted
        //     var oList = oEvent.getSource();
        //     var oItem = oEvent.getParameter("listItem");

        //     // Get the binding context and model
        //     var oBindingContext = oItem.getBindingContext();
        //     var oModel = oList.getModel();
        //     var aItems = oModel.getProperty("/items");

        //     // Find the index and remove item from array
        //     var iIndex = oBindingContext.getPath().split("/").pop();
        //     aItems.splice(iIndex, 1);

        //     // Update the model
        //     oModel.setProperty("/items", aItems);

        // },
        onItemPress: function (oEvent) {
            debugger
            var sPtah = oEvent.getParameter("listItem").getBindingContextPath();
            var oView2 = this.getView().getParent().getParent().getDetailPages()[0];

            // var oSplitApp = this.getView().getParent().getParent();
            // var oView2 = oSplitApp.getDetailPages()[0];
            oView2.bindElement(sPtah)

        },
        // onItemPress: function (oEvent) {
        //     var sPath = oEvent.getParameter("listItem").getBindingContextPath();

        //     // Get SplitApp control
        //     var oSplitApp = this.getView().getParent().getParent();

        //     // Get Detail Page
        //     var oView2 = oSplitApp.getDetailPages()[0];

        //     // Bind element to View2
        //     oView2.bindElement(sPath);
        // },

        onSearch: function (oEvent) {
            //get the value that user entered in the search box 
            var sValue = oEvent.getParameter("query");
            //step 2 : create a search object
            var oFilter1 = new Filter("name", FilterOperator.Contains, sValue);
            var oFilter2 = new Filter("type", FilterOperator.Contains, sValue);
            var oFilter = new Filter({
                filters: [oFilter1, oFilter2],
                and: false
            });

            //Step 3 : Get the object of the List Controll
            var oList = this.getView().byId("fruitsList");
            //Step 4 : Get the Bindings - items
            var oBinding = oList.getBinding("items");
            //Step 5 : Pass filter to the binding
            oBinding.filter(oFilter);
        },
        onToGo: function () {
            debugger
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("View2"); // Navigate to View2
        }
    });
});