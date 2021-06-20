export abstract class Control {

    public id:string;
    public name:string;
    public style:string;
    public CssClass:string;
    public Required:boolean;
    public Label:string;

    protected htmlElement: HTMLElement;

    constructor(name:string, id:string) {
        this.name = name;
        this.id = id;
    }

    SetStyle(styleText){
        this.style = styleText;
    }

    protected AddLabel(targetControl:HTMLElement): HTMLElement{
        let label = document.createElement("label");
        label.htmlFor = targetControl.id
        label.textContent = this.Label;
        
        return label;
    }
    protected AddControlToContainer(targetControl:HTMLElement): HTMLElement {

        let container = document.getElementById(this.id);

        if (container != null){
            
            let label = this.AddLabel(targetControl);
            container.appendChild(label)
            
            container.appendChild(targetControl);
        }

        return container;
    }
    public Create(parentElement?:HTMLElement){
        this.Render();
        let control = this.AddControlToContainer(this.htmlElement);
        if (parentElement){
            parentElement.appendChild(control);
        }
        this.RegisterEvents();
    }
    protected abstract Render();
    abstract GetValue():any;
    abstract SetValue(value:any):void;
    abstract RegisterEvents():void;
}