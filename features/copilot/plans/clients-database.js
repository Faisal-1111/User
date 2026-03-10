class ClientDatabase {
    constructor() {
        this.clients = {};
    }

    addClient(id, name, email) {
        this.clients[id] = { name, email }; 
    }

    getClient(id) {
        return this.clients[id] || null;
    }

    updateClient(id, updatedInfo) {
        if (this.clients[id]) {
            this.clients[id] = { ...this.clients[id], ...updatedInfo };
        }
    }

    deleteClient(id) {
        delete this.clients[id];
    }

    getAllClients() {
        return this.clients;
    }
}

module.exports = ClientDatabase;