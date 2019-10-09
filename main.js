class PAequor {
  constructor (specimenNum, dnaSeq) {
    this.dnaBases = ['A', 'T', 'C', 'G']
    this.dnaLength = 15
    this.specimenNum = specimenNum
    this.dna = this.mockUpStrand()
  }

  // Returns a random number between two paramters
  returnRandNum (low, high) {
    const range = high - low
    return Math.floor(Math.random() * range) + low
  }

  // Returns a random DNA base
  returnRandBase () {
    return this.dnaBases[this.returnRandNum(0, 3)]
  }

  // Returns a random single strand of DNA
  mockUpStrand () {
    const newStrand = []
    for (let i = 0; i < this.dnaLength; i++) {
      newStrand.push(this.returnRandBase())
    }
    return newStrand
  }

  // Randomly select a base in this.dna and change to a random other base
  mutate () {
    // Choose random index from this.dna
    const indexToChange = this.returnRandNum(0, this.dnaLength)
    console.log(`indexToChange = ${indexToChange}`)
    // Identify corresponding base
    const oldBaseIndex = this.dnaBases.indexOf(this.dna[indexToChange])
    console.log(`Old Base = ${this.dnaBases[oldBaseIndex]}`)
    // Choose random new base
    const newBaseIndex = (oldBaseIndex + this.returnRandNum(1, 3)) % 4
    console.log(`New Base = ${this.dnaBases[newBaseIndex]}`)
    // Replace old base with new
    this.dna[indexToChange] = this.dna[newBaseIndex]
  }
}

const test = new PAequor(0)
console.log(test.dna)
test.mutate()
console.log(test.dna)
