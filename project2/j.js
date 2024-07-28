form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    height = parseInt(document.querySelector('#height').value);
    weight = parseInt(document.querySelector('#weight').value);
    results = document.querySelector('#results')

    if(height==='' || isNaN(height) || height<0){
        results.innerHTML = `please enter a valid height ${height}`
    }
    else if(weight==='' || isNaN(weight) || weight<0){
        results.innerHTML = `please enter a valid height ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6){
            store = "Under Weight"
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            store = "Normal range"
        }
        else{
            store = "Over Weight"
        }

        results.innerHTML = `<span>${bmi} => ${store}</span>`
    }
})