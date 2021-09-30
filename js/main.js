var elRow = document.querySelector('.row');
var elSelect = document.querySelector('.select');
var elForm = document.querySelector('.form');

var optionWeaknesses = [];

for (var pokemon of pokemons) {
	for (var weaknesse of pokemon.weaknesses) {
		if (!optionWeaknesses.includes(weaknesse)) {
			optionWeaknesses.push(weaknesse);
		}
	}
}
for (var option of optionWeaknesses) {
	var newOption = document.createElement('option');
	newOption.value = option;
	newOption.textContent = option;
	elSelect.appendChild(newOption);
}
elForm.addEventListener('submit', (evt) => {
    elRow.innerHTML = null;
    evt.preventDefault();
    pokemons.forEach(pokemon => {
        if(pokemon.weaknesses.includes(elSelect.value)) {
            var newCol = document.createElement('div');
        var newMainDiv = document.createElement('div');
        var newMainImg = document.createElement('img');
        var newMainNum = document.createElement('p');
        var newMainName = document.createElement('p');
        var newUl = document.createElement('ul');
    
        var newLiType = document.createElement('li');
        var newLiHeight = document.createElement('li');
        var newLiWeight = document.createElement('li');
        var newLiCandy = document.createElement('li');
        var newLiCandyCount = document.createElement('li');
        var newLiEgg = document.createElement('li');
        var newLiSpawnChance = document.createElement('li');
        var newLiAvgSpawns = document.createElement('li');
        var newLiSpawnTime = document.createElement('li');
        var newLiMultipliers = document.createElement('li');
        var newLiWeaknesses = document.createElement('li');
    
        newCol.setAttribute('class', 'col bg-warning border border-1 border-light');
        newMainDiv.setAttribute('class', 'main');
        newMainImg.setAttribute('src', pokemon.img);
        newMainImg.setAttribute('alt', `${pokemon.name} image`);
        newMainImg.setAttribute('width', 120);
        newMainImg.setAttribute('height', 120);
        newMainNum.setAttribute('class', 'main__num bg-dark');
        newMainName.setAttribute('class', 'main__num bg-dark');
        newUl.setAttribute('class', 'hovered__open bg-warning border border-1 border-light');
    
        newMainNum.textContent = pokemon.num;
        newMainName.textContent = pokemon.name;
    
        newLiType.textContent = `Type:  ${pokemon.type}`;
        newLiHeight.textContent = `Height:  ${pokemon.height}`;
        newLiWeight.textContent = `Weight:  ${pokemon.weight}`;
        newLiCandy.textContent = `Candy:  ${pokemon.candy}`;
        newLiCandyCount.textContent = `Candy Count:  ${pokemon.candy_count}`;
        newLiEgg.textContent = `Egg:  ${pokemon.egg}`;
        newLiSpawnChance.textContent = `Spawn Chance:  ${pokemon.spawn_chance}`;
        newLiAvgSpawns.textContent = `Spawns:  ${pokemon.avg_spawns}`;
        newLiSpawnTime.textContent = `Spawn Time:  ${pokemon.spawn_time}`;
        newLiMultipliers.textContent = `Multipliers: ${pokemon.multipliers}`;
        newLiWeaknesses.textContent = `Weaknesses: ${pokemon.weaknesses}`;
    
    
        newUl.appendChild(newLiType);
        newUl.appendChild(newLiHeight);
        newUl.appendChild(newLiWeight);
        newUl.appendChild(newLiCandy);
        newUl.appendChild(newLiCandyCount);
        newUl.appendChild(newLiEgg);
        newUl.appendChild(newLiSpawnChance);
        newUl.appendChild(newLiAvgSpawns);
        newUl.appendChild(newLiSpawnTime);
        newUl.appendChild(newLiMultipliers);
        newUl.appendChild(newLiWeaknesses);
    
        if (pokemon.prev_evolution != null) {
            var sum = 1;
            for (var evolution of pokemon.prev_evolution) {
                var newLiPrevEvolutionNum = document.createElement('li');
                var newLiPrevEvolutionName = document.createElement('li');
    
                newLiPrevEvolutionNum.textContent = `${sum}.Prev Evolution Number:  ${evolution.num}`;
                newLiPrevEvolutionName.textContent = `${sum}.Prev Evolution Name:  ${evolution.name}`;
    
                newUl.appendChild(newLiPrevEvolutionNum);
                newUl.appendChild(newLiPrevEvolutionName);
                sum++;
            }
        }
        else if (pokemon.next_evolution != null) {
            var sum2 = 1;
            for (var evolution of pokemon.next_evolution) {
                var newLiNextEvolutionNum = document.createElement('li');
                var newLiNextEvolutionName = document.createElement('li');
    
                newLiNextEvolutionNum.textContent = `${sum2}.Next Evolution Number:  ${evolution.num}`;
                newLiNextEvolutionName.textContent = `${sum2}.Next Evolution Name:  ${evolution.name}`;
    
                newUl.appendChild(newLiNextEvolutionNum);
                newUl.appendChild(newLiNextEvolutionName);
                sum2++;
            }
        }
    
        newMainDiv.appendChild(newMainImg);
        newMainDiv.appendChild(newMainNum);
        newMainDiv.appendChild(newMainName);
        newCol.appendChild(newMainDiv);
        newCol.appendChild(newUl);
        elRow.appendChild(newCol);
        }
    })
})


