class OfficeAdminAgent {
    constructor(documentHandler, clientForwarding) {
        this.documentHandler = documentHandler;
        this.clientForwarding = clientForwarding;
    }

    prepareDocument(data) {
        const formattedDocument = this.documentHandler.format(data);
        return formattedDocument;
    }

    distributeDocument(document, clients) {
        clients.forEach(client => {
            this.clientForwarding.send(document, client);
        });
    }

    handleOfficeAdminTask(data, clients) {
        const document = this.prepareDocument(data);
        this.distributeDocument(document, clients);
    }
}

module.exports = OfficeAdminAgent;