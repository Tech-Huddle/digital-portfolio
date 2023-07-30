import { useState } from "react";

export function MultistepForm(steps){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex(i=>{
            // this will check the whether index exceeds the length or not 
            // if yes then return the current index else return the 
            // next index 
            if (i>= steps.length -1) return i 
            return i+1
        })
    }

    function back(){
        // same as the next function but in reverse order  
        setCurrentStepIndex(i=>{
            if (i<=0) return i 
            return i-1
        })

    }


    function goto(index){
        setCurrentStepIndex(index)
    }

    return {
         currentStepIndex,
         step: steps[currentStepIndex],
         steps,
         isFirstStep: currentStepIndex===0,
         isLastStep: currentStepIndex=== steps.length-1,
         goto,
         next,
         back 

    }
}