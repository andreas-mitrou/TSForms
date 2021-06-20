import { Control } from "./Control";
import { IValidation } from "./IValidate";

export class TextBoxControl extends Control {
  
    private value: string;

    constructor(name:string, id:string) {
        super(name, id);
    }

    Render() {
        this.htmlElement =  document.createElement("input");
        this.htmlElement.id = this.id + "_textbox";
        (<HTMLInputElement> this.htmlElement).type = "text";

        if ( this.CssClass)
            this.htmlElement.className = this.CssClass;
        
        this.htmlElement.style.cssText = this.style;
    }
    GetValue() {
       return this.value;
    }
    SetValue(value: any): void {
        debugger;
       this.value = value as string;
       (<HTMLInputElement> this.htmlElement).value = this.value;
    }

    RegisterEvents(): void {}
    
}