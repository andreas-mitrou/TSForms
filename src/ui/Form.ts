import { Control } from "./Control";

export class Form {
    Id:string;
    Name:string;
    Width:string;
    Height:string;
    CssClass:string;
    Controls:Control[] = [];
    formElement:HTMLElement;
    style:string="border:1px solid black";

    constructor(name:string, width?: string, height?:string){
        this.Name = name;
        this.Id = name;
        this.Width = width || "100%";
        this.Height = height || "100%";
    }
    
    SetCSS(cssClassName:string){
        this.CssClass = cssClassName;
    }

    public AddControl(control:Control){
        this.Controls.push(control);
    }

    public AddControls(controls:Control[]){
        controls.forEach(control => this.AddControl(control));
    }

    public Render(){
        this.formElement = document.createElement("div");
        this.formElement.id = this.Id + "_form";

        if (this.CssClass)
            this.formElement.className = this.CssClass;

        if (this.Width)
            this.formElement.style.cssText += "width:" + this.Width + ";";
        
            if (this.Height)
            this.formElement.style.cssFloat += ";height:" + this.Height + ";" 

        this.formElement.style.cssText += this.style;

        let form = this.AddControlToContainer(this.formElement);
        
        this.Controls.forEach(ctl=> ctl.Create(this.formElement));
    }

    protected AddControlToContainer(targetControl:HTMLElement): HTMLElement {

        let container = document.getElementById(this.Id);

        if (container != null){            
            container.appendChild(targetControl);
        }

        return container;
    }
    
}