import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import DatePicker from "sap/m/DatePicker";
import Event from "sap/ui/base/Event";
import Panel from "sap/m/Panel";
import PanelExpandEvent from "sap/m/PanelExpandEvent";

/**
 * @namespace djp.clouddna.demo.controller
 */
export default class Additional extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

        const DatePckr = this.getView()?.byId("datePicker") as DatePicker;
        DatePckr.setMinDate(new Date("2024-12-31"));
        DatePckr.setMaxDate(new Date("2025-01-15"));

        const model: JSONModel = new JSONModel({
            books: [{
                name: "Call of Cthulhu",
                author: "H. P. Lovecraft",
                price: 25.00,
                priceUnit: "€",
                releaseYear: 1928,
                inStock: true
            }, {
                name: "W40K: Rise of Horus",
                author: "Dan Abnett",
                price: 12.99,
                priceUnit: "€",
                releaseYear: 2006,
                inStock: true
            }, {
                name: "Catilinarian orations",
                author: "Marcus Tullius Cicero",
                price: 18.99,
                priceUnit: "€",
                releaseYear: -63,
                inStock: false
            }, {
                name: "The Brothers Karamazov",
                author: "Fjodor Dostojewski",
                price: 10.66,
                priceUnit: "€",
                releaseYear: 1880,
                inStock: true
            },]
        });
        this.getView()?.setModel(model);

    }

    private onNavBack(): void {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("RouteMain");
    }

    private onPanelExpand(oEvent: any): void {
        const bExpanded = oEvent.getParameter("expand") as boolean;
        const oPanel = oEvent.getSource() as Panel;

        oPanel.setHeight(bExpanded ? "650px" : "20px");
    }

}