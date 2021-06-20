import { Control } from "./Control";

export class CheckBoxControl extends Control {
    public Checked:Boolean = false;
    private value:any;

    constructor(name:string, id:string) {
        super(name, id);
    }
    protected Render() {
        this.htmlElement = document.createElement("input");
        this.htmlElement.id = this.id + "_CheckBox";
        (<HTMLInputElement> this.htmlElement).type = "checkbox";

        if ( this.CssClass)
            this.htmlElement.className = this.CssClass;
    
        this.htmlElement.style.cssText = this.style;
    }

    GetValue():any {
        return this.value || this.Checked;
    }
    SetValue(value: any): void {
        this.value = value;
    }
    RegisterEvents(): void {
        this.htmlElement.addEventListener("change", (e)=> {
            debugger;
            this.Checked = (<HTMLInputElement>this.htmlElement).checked;
        });
    }

}