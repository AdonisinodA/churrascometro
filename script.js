let inputAdult = document.getElementById('adult');
let inputKid = document.getElementById("kids");
let inputDuration = document.getElementById("duration");


let result = document.getElementById("resultado");





function calculate(){
    console.log('calculando');
    let adults =  inputAdult.value;
    let kids = inputKid.value;
    let duration = inputDuration.value


    let qtTotalMEat = meatPP(duration) * adults +(meatPP(duration)) /2 * kids;
    let qtTotalBeer = beerPP(duration) * adults;
    let qtTotalDrink = drinkPP(duration) * adults +(meatPP(duration)) /2 * kids;

    result.innerHTML = '<h5>É PRECISO LEVAR AO CHURRASCO;</h5>';
    result.innerHTML += '<p>' + (qtTotalMEat/1000)+' KG de Carne</p>';
    result.innerHTML += '<p>' +Math.ceil(qtTotalBeer/350)+' Latas de Cerveja</p>';
    result.innerHTML += '<p>' +Math.ceil(qtTotalDrink/1000)+' Litros de Bébidas</p>';




}


function meatPP(duration){
    if (duration >=6){
        return 650;
    }

    else{
        return 400;
    }


}


function beerPP(duration){
    if (duration >=6){
        return 2000;
    }

    else{
        return 1200;
    }


}


function drinkPP(duration){
    if (duration >=6){
        return 1500;
    }

    else{
        return 1000;
    }

}
