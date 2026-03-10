// test-client-forwarding.js

const assert = require('assert');
const { clientForwarding } = require('../path/to/clientForwarding'); // Update path as necessary

describe('Client Forwarding Tests', () => {
    it('should forward client A to destination A correctly', () => {
        const result = clientForwarding('Client A');
        assert.strictEqual(result, 'Destination A');
    });

    it('should forward client B to destination B correctly', () => {
        const result = clientForwarding('Client B');
        assert.strictEqual(result, 'Destination B');
    });

    it('should return an error for unknown clients', () => {
        const result = clientForwarding('Unknown Client');
        assert.strictEqual(result, 'Error: unknown client');
    });

    // Additional tests can be added here.
});