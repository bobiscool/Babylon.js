/// <reference path="../../../../dist/preview release/babylon.d.ts"/>

module BABYLON.GUI {
    /**
     * Class used to create a password control
     */
    export class InputPassword extends InputText {
        protected _beforeRenderText(text: string): string {
            let txt = "";
            for (let i = 0; i < text.length; i++) {
                txt += "\u2022";
            }
            return txt;
        }
    }
}
