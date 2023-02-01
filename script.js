function startFight(player , monster){
    console.log("fight starts ... ");
    updateScreenStats(player , monster);
    fight(player  , monster);
}

async function fight(player , monster){
    // here is the fight prosecdure 
    let isPlayerTurn = doesPlayerStart(player , monster);
    while(true){
        if(player.health <= 0){
            //player lose
            console.log("Player Lost");
            return;
        }
        else if(monster.health <= 0){
            // monster is dead player win
            console.log("Monster is dead");
            return;
        }
        if(isPlayerTurn){
            // wait for instructions from the UI (attack / run)
            console.log("Waiting for users action");
            let decision = await new Promise(resolve => {
                attackButton.addEventListener("click" , () => {
                    decision = 0;
                    resolve();
                });
                runButton.addEventListener("click" , () => {
                    decision = 1;
                    resolve();
                });
                
            });

            if(decision === 1){
                //player end the fight and run
                console.log("Player ran away");
                return;
            }
            else if(decision === 0){
                //player attack the monster
                console.log("player attacked");
                attack(player , monster);
                isPlayerTurn = !isPlayerTurn;
                updateScreenStats(player , monster);
                continue;
            }
        }
        else {
            //mosnter attack 
            console.log("monster attacked");
            attack(monster , player);
            isPlayerTurn = !isPlayerTurn;
            updateScreenStats(player , monster);
            continue;
        }
    }
}

function attack(attacker , defender) {
    let damage = Math.floor(Math.random()*20 + 1 );
    damage += attacker.strength;
    damage *= attacker.level;
    damage -= defender.defense;
    if(damage < 0){
        damage = 0;
    }
    if(damage > defender.health){
        damage = defender.health;
    }
    defender.health -= damage;
    console.log(`damage done was ${damage}`);
    console.log(`health of ${defender.name} is down to ${defender.health}`);
}

function doesPlayerStart(player , monster){
    const playerLuck = Math.random()*20;
    const monsterLuck = Math.random()*20;
    if(playerLuck+player.dexterity > monsterLuck+monster.dexterity){
        return true;
    }
    if(playerLuck+player.dexterity < monsterLuck+monster.dexterity){
        return false;
    }
    // if it equals do it again 
    return doesPlayerStart(player , monster);
}

//for now will start the fight automaticly 
startFight(player , monster1);