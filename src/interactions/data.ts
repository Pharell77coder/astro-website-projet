class Player{
    name: string;
    hp: number;
    attack: number
    maxHp: number;
    alive: boolean;

    constructor(name:string, hp:number, attack:number){
        this.name = name;
        this.hp = hp;
        this.maxHp = hp
        this.attack = attack;
        this.alive = true;
    }

    setHp(attack:number){
        this.hp = this.hp - attack
        if (this.hp <= 0){
            this.hp = 0;
            this.alive = false;
        }
    }
    setMaxHp(){
        this.hp = this.maxHp
    }
    getHp(): number{
        return this.hp
    }
    getAttack(): number{
        return this.attack
    }
    getName(): string{
        return this.name
    }
}

function combat(player1: Player, player2: Player) {
    while (player1.getHp() > 0 && player2.getHp()) {
        player1.setHp(player2.getAttack())
        if (player1.getHp() > 0) {
            player2.setHp(player1.getAttack())
        }
    }
}

function createPlayer(name: string) {
    const player =new Player(name, 10000, 500)
    return player
}

const player1 = new Player("Roger", 10000, 500)
const player2 = new Player("Xebec", 10000, 500)

combat(player1, player2)

// Class
abstract class GameObject {
    id: number;

    constructor (id: number) {
        this.id = id;
    }
    abstract move(): number[]
}
class Character extends GameObject{
    // Static properties
    static category: string = "Character";

    // Instance Properties
    public name: string;
    private _age: number;
    protected score: BigInt | undefined;
    public hasCar?: boolean;

    //Methods
    public constructor (name: string, age: number){
        super(6564)
        this.name = name;
        this._age = age;

        // Create Message
        console.log("A new"+Character.category+"has been created")
    }

    public welcomeMessage(): string{
        return "Welcome to the new chracter!"
    }

    move(): number[] {
        return [50, 50, 4]
    }

    //Getters & Setters
    get age (): number{
        return this._age;
    }

    set age (newAge: number){
        if (newAge > 120) {
            console.log("Age entered is too long")
        }else {
            this._age = newAge;
        }
    }
}

//class Instance
let Character1 = new Character("John Do", 20);
console.log(Character1.welcomeMessage());

class Fighter extends Character {

    // Method Overloading
    public welcomeMessage(): string {
        return "Welcome to the new fighter!"
    }

    // New Methods
    public kick(): number {
        return -50;
    }

}
