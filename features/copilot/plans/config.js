// Configuration file for Copilot features

const config = {
    emailSettings: {
        smtpServer: "smtp.example.com",
        port: 587,
        user: "user@example.com",
        password: "securepassword"
    },
    documentTemplates: [
        {
            name: "Template 1",
            path: "templates/template1.docx"
        },
        {
            name: "Template 2",
            path: "templates/template2.docx"
        }
    ],
    supportedFormats: ["docx", "pdf", "txt"]
};

module.exports = config;