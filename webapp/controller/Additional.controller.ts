import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
// import Page from "sap/m/Page";
import DatePicker from "sap/m/DatePicker";

/**
 * @namespace djp.clouddna.demo.controller
 */
export default class Additional extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

        const DatePckr = this.getView()?.byId("datePicker") as DatePicker;
        DatePckr.setMinDate(new Date("2024-12-31"));
        DatePckr.setMaxDate(new Date("2025-01-15"));

    }

    private onNavBack(): void {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("RouteMain");
    }

}