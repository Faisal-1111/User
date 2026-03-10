// test-clients-database.js

const assert = require('assert');
const clientsDatabase = require('../../../clientsDatabase'); // Adjust the path as necessary

describe('Clients Database', function() {
    beforeEach(function() {
        // Cleanup and setup code here, if necessary
    });

    it('should add a client', function() {
        const client = { name: 'Test Client', email: 'test@example.com' };
        clientsDatabase.addClient(client);
        const storedClient = clientsDatabase.getClientByEmail('test@example.com');
        assert.equal(storedClient.name, 'Test Client');
    });

    it('should return a client by email', function() {
        const client = { name: 'Test Client', email: 'test@example.com' };
        clientsDatabase.addClient(client);
        const storedClient = clientsDatabase.getClientByEmail('test@example.com');
        assert.deepEqual(storedClient, client);
    });

    it('should delete a client', function() {
        const client = { name: 'Test Client', email: 'test@example.com' };
        clientsDatabase.addClient(client);
        clientsDatabase.deleteClient('test@example.com');
        const storedClient = clientsDatabase.getClientByEmail('test@example.com');
        assert.equal(storedClient, null);
    });

    // Additional tests can be added here
});
