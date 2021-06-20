import {Authentication} from './services/Authentication';
import { CheckBoxControl } from './ui/CheckBoxControl';
import { Control } from './ui/Control';
import { DropDownControl } from './ui/DropDownControl';
import { Form } from './ui/form';
import { TextBoxControl } from './ui/TextBoxControl';

let dropDown :DropDownControl;
let textBox: TextBoxControl;
let checkBox: CheckBoxControl;
let form:Form;

const InitCheckBox = (name, id):Control =>{
    checkBox = new CheckBoxControl(name,id);
    checkBox.SetStyle("background-color:yellow;width:370px;padding:5px");
    checkBox.Label = "xx";
    return checkBox;
}

const InitTextBox = (name, id) =>{
    textBox = new TextBoxControl(name,id);
    textBox.SetStyle("background-color:yellow;width:370px;padding:5px");
    return textBox;
}
const InitDropDown = (name, id) =>{
    dropDown = new DropDownControl("andreas","andreas");
    dropDown.DataSource = [
        {name:"Andreas",surname:"mitrou"},
        {name:"Andreas1",surname:"mitrou1"}];

    dropDown.TextFieldName="surname";
    dropDown.ValueFieldName="name";
    dropDown.Label = "xxoxooxox";
    dropDown.SetStyle("background-color:yellow;width:370px;padding:5px");
    dropDown.OnChange = (e) => {
        console.log(e);
    }
    return dropDown;
}

const InitForm = () => {
    form = new Form("myform");
    debugger;
    form.AddControls([InitDropDown("andreas","andreas"),InitTextBox("andreas1","andreas1"),  InitCheckBox("andreascheck","andreascheck")]);
    form.Render();
}
(function Init(doc:any){
    //InitDropDown("andreas","andreas");
    debugger;
    //InitTextBox("andreas1","andreas1");
    //InitCheckBox("andreascheck","andreascheck");
    InitForm();
    InitializeListeners();
})(document);



function InitializeListeners(){
   
    document.getElementById("btn").addEventListener("click", () => {
        debugger;
        //textBox.SetValue(dropDown.GetValue()["name"]);
        textBox.SetValue(checkBox.Checked);
    });
}
