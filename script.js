function startFight(player , monster){
    fight(player  , monster);
}

async function fight(player , monster){
    // here is the fight prosecdure 
    let isPlayerTurn = doesPlayerStart(player , monster);
    while(true){
        if(player.health <= 0){
            //player lose
            return;
        }
        else if(monster.health <= 0){
            // monster is dead player win
            return;
        }
        if(isPlayerTurn){
            // wait for instructions from the UI (attack / run)
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
                return;
            }
            else if(decision === 0){
                //player attack the monster
                attack(player , monster);
                isPlayerTurn = !isPlayerTurn;
                updateScreenStats(player , monster);
                continue;
            }
        }
        else {
            //mosnter attack 
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