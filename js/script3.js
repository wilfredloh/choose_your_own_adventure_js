// -----------_RULES--------------------
    1. ask at least 3 questions [done]
    2. Minimum 7 endings [DONE]
    3. For at least 1 question, have at least 3 user responses [done]

    4. get username [done]
    5. get player score [done]
    6. go back to the previous scenario, or restart game [done]

    7. create enemies to fight (array of objects)
    8. random game and scenarios (take red/blue door/ randomly assigns door)
    9. use graphical characters

    Hint: You may need parseInt() and toString()
    Hint: Need a random number?
    \n for better formatting of text


    ADDITIONAL FEATURES TO INCLUDE

    1. put input a b c
    2. show your path of you got there - good ending or bad ending or normal ending (the last line will tell me which ending i got eg: there are 5 endings you got the 3rd one)
    3. hell yeah, yes, guess so
    4. difficulty level

    1. fill up story - the avengers mini game
    2. you are ironman (later can choose other characters)
    3. fight enemies in the game or choose to run. last boss cannot run
        - enemies can attack randomly, 40% hit rate for normal attack (1 counter), boss 20% attack (4 counters), normal attack 40% (2 counters);
    4. you have 3 potions, secret place to get full life and potions
    5. gain experience and lose/gain life depending on the choices
    6. randomize some moments
    7. start at level 1 - basic attack, lvl 2 basic attack and cannon lvl 3 missle, depletes energy

    can maybe make all layerCounts be in an array. for every question,
    if i = layerCount, run that number function..
    story object with all the stories (place in a js file);

// VARIABLES
let ironman = {
    name: '';
    energy: '';
    hp: '';
    items: '';
    attack () {
        reduce enemycounter by 1
        remove energy by 1
    }
    ultimate () {
        kill any enemy
        remove all energy, min 4 energy
    }
}

enemy object low
    - contains method to attack
        - noraml attack 90%
        - special attack 10%

boss object
    - - contains method to attack
        - noraml attack 50%
        - special attack 50%