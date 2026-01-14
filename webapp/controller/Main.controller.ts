import Input from "sap/m/Input";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";

import Page from "sap/m/Page";
import Text from "sap/m/Text";
import Button from "sap/m/Button";
import Bar from "sap/m/Bar";
import Title from "sap/m/Title";
import VBox from "sap/m/VBox";
import NavContainer from "sap/m/NavContainer";


/**
 * @namespace djp.clouddna.demo.controller
 */
export default class Main extends Controller {

    private _oDynamicPage?: Page;

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        let oView = this.getView();
        let oInputFirstname = oView?.byId("inputFirstname") as Input;
        oInputFirstname.setValue("Daniel");
    }

    private onSavePressed() {
        MessageToast.show("Successfully saved");
    }
    private onCancelPressed() {
        MessageBox.warning("Are you sure you want to cancel?", {
            actions: [MessageBox.Action.YES, MessageBox.Action.NO],
            emphasizedAction: MessageBox.Action.YES,
            onClose: (sSelectedAction: string | null) => {
                if (MessageBox.Action.YES === sSelectedAction) {
                    MessageBox.success("Successfully cancelled.");
                }
            }
        });
    }

    private onNav() {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("Additional");
    }

    private onNavObj() {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("ObjectPage");
    }

    public onDynPage(): void {
        const oNav = this.byId("navContainer") as NavContainer;

        // Create once (lazy creation)
        if (!this._oDynamicPage) {
            this._oDynamicPage = new Page({
                title: "Dynamic Page",
                showNavButton: true,
                navButtonPress: () => {
                    oNav.back();
                },
                content: [new VBox({
                    items: [(() => {
                        const t = new Title({ text: "This is a title", titleStyle: "H1" });
                        t.addStyleClass("sapUiSmallMarginBegin");
                        t.addStyleClass("myGreenTitle");
                        return t;
                    })()
                    ]
                }),

                (() => {
                    const txt = new Text({ text: "Hello World", maxLines: 1, wrapping: true });
                    txt.addStyleClass("sapUiSmallMarginBegin");
                    txt.addStyleClass("myGreenTitle");
                    return txt;
                })(),

                new VBox({
                    items: [ 
                        (() => {
                            const inpt = new Input({placeholder: "Provide something", description:"Unit", width:"300px"});
                            inpt.addStyleClass("sapUiSmallMarginBegin");
                            return inpt;
                        })()
                    ]
                })

                ]
            });
        }

        oNav.addPage(this._oDynamicPage);
        oNav.to(this._oDynamicPage);
    }

}