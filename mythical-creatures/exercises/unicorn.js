class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;

    if(color == undefined){
        this.color = 'white'
    }
  }
  isWhite(){
    return this.color === 'white'
  }
  says(wordsSaid) {
    return `**;* ${wordsSaid} *;**`
  }
}

module.exports = Unicorn;
