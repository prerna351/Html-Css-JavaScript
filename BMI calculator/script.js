const form = document.querySelector("form")
const body = document.querySelector(".container")
const submit = document.querySelector("button")

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const result = document.querySelector("#results")

    submit.style.backgroundColor = "rgb(238, 238, 238)";
    if(height == '' || height<0 || isNaN(height)){
        result.innerHTML = "Please give a valid number"
    }
    else if(weight == '' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please give a valid number"
    }else{
        // calculate bmi
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            result.innerHTML = `
            Your BMI is ${bmi}
            You are Under Weight
            `;
            body.style.backgroundColor ="yellow";
            
        }
        else if(bmi==18.6 || bmi<= 24.9){
            result.innerHTML = `Your BMI is ${bmi}
                                You are in Normal Range`;
            body.style.backgroundColor ="aquamarine";                    
        }
        else{
            result.innerHTML = `Your BMI is ${bmi}
                                You are Overweight`;
            body.style.backgroundColor ="crimson";
        }
                            
    }
    
})

