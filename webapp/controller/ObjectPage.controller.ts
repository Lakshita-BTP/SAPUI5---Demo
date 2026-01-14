import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace djp.clouddna.demo.controller
 */
export default class ObjectPage extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    private onNavBack(): void {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("RouteMain");
    }
}