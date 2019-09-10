import '../css/style.scss'

class Client {
  constructor(name) {
    this.name = name
  }
}

const client = new Client('Edgar')
console.log(client)

console.log('About')