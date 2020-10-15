class Pirate{
  constructor(name, job, cursed){
    this.name = name;
    this.job = job || "scallywag";
    this.cursed = cursed || false;
    this.booty = 0;
  }
  robShip(){
    this.booty += 100;
    return "YAARRR!"
  }
};

module.exports = Pirate;
