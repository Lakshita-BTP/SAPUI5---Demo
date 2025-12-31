import Input from "sap/m/Input";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace djp.clouddna.demo.controller
 */
export default class Main extends Controller {

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
}