import { Control } from "./Control";

export class DropDownControl extends Control
{
    private selectedItem:any;

    public DataSource : any[] = [];
    public TextFieldName: string;
    public ValueFieldName:string;
    public OnChange : (val) => void;

    constructor(name:string, id:string) {
        super(name, id);
    }
    
    Render() {
        this.htmlElement = document.createElement("select");
        this.htmlElement.id = this.id + "_DropDown";
        if ( this.CssClass)
            this.htmlElement.className = this.CssClass;
    
        this.htmlElement.style.cssText = this.style;
        
        this.DataSource.forEach(item => {
            let option: HTMLOptionElement = document.createElement("option");
            option.text = item[this.TextFieldName];
            option.value = item[this.ValueFieldName];

            (<HTMLSelectElement> this.htmlElement).options.add(option);
        });
    }
    RegisterEvents(): void {
        this.htmlElement.addEventListener('change', 
        (e) => {
                 this.selectedItem = (<HTMLSelectElement>this.htmlElement).options[(<HTMLSelectElement>this.htmlElement).selectedIndex].value;
                 this.OnChange(this.GetValue());
               });
    }
    GetValue(): any {
        return this.DataSource.find(x=>x[this.ValueFieldName] == this.selectedItem)
     }
     SetValue(value:any){
        if(value){
            let dropDownHtmlEl = <HTMLSelectElement> this.htmlElement;
            for (let i = 0; i < dropDownHtmlEl.options.length; i++ ){
                let optionValue = dropDownHtmlEl.options[i].value;
                if (optionValue === value[this.ValueFieldName]){
                    this.selectedItem = optionValue;
                    dropDownHtmlEl.selectedIndex = i;
                    return;
                }
            }
        }
     }
    
  
    
}