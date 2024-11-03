import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DataStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
export default function Lab4(){
    function sayHello() {
        alert("Hello");
      }
    
    return (
        <div id="wd-lab4">
      <h3>Lab 4</h3>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>

      </div>
    );
}