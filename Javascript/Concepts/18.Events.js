const EventEmitter = require('events')

// Create a instance of EventEmitter
const eventBus  = new EventEmitter();

// Listen for 'userRegistered' event' and  send welcome email
eventBus.on('userRegistered', (user) => {
  console.log(`Sending welcome email to ${user.email}`);
})

// Log the registration
eventBus.on('userRegistered', (user) => {
  console.log(`Logging registration for ${user.email}`);
})

// Notify admin
eventBus.on('userRegistered', (user) => {
  console.log(`Notifying admin for ${user.name}`);
})

// Handle error
eventBus.on('error', (err) => {
  console.log(`Error: ${err.message}`);
})

function registerUser(name, email) {
  const user = { name, email }

  console.log('User registered', user)

  // Emit the 'userRegistered' event
  eventBus.emit('userRegistered', user)
}

registerUser('John Doe', 'john@example.com')
console.log('\n')
registerUser('Bob', 'bob@example.com')
