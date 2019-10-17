class PAequor {
  constructor (specimenNum) {
    this.dnaBases = ['A', 'T', 'C', 'G']
    this.dnaLength = 15
    this.specimenNum = specimenNum
    this.dna = this.mockUpStrand()
  }

  // Returns a random number between two paramters
  returnRandNum (low, high) {
    const range = high - low + 1
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
    this.dna[indexToChange] = this.dnaBases[newBaseIndex]
  }

  // Compare DNA of two PAequor objects
  compareDna (obj) {
    let differences = 0
    for (let i = 0; i < this.dnaLength; i++) {
      console.log(`comparing position ${i}...`)
      if (this.dna[i] !== obj.dna[i]) {
        differences++
        console.log(`position ${i} is not identical. Differences = ${differences}`)
      } else {
        console.log(`position ${i} is identical. Differences = ${differences}`)
      }
    }
    console.log(`DNA sequence ${this.specimenNum} and DNA sequence ${obj.specimenNum} are ${((this.dnaLength - differences) / this.dnaLength) * 100}% the same`)
  }

  // Return true if 60% or more of all bases are C or G
  willLikelySurvive () {
    let count = 0
    for (let i = 0; i < this.dnaLength; i++) {
      if (this.dna[i] === 'C' || this.dna[i] === 'G') {
        count++
      }
    }
    console.log(`CG count = ${count}`)
    if (count / this.dnaLength >= 0.60) {
      return true
    } else {
      return false
    }
  }
}

const pAequorArr = []
for (let i = 0; pAequorArr.length < 30; i++) {
  const subject = new PAequor(i)
  if (subject.willLikelySurvive()) {
    pAequorArr.push(subject)
  }
  console.log(i)
  console.log(pAequorArr.length)
}
