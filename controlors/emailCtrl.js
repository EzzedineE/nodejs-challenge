const nodemailer = require("nodemailer");
let ejs = require('ejs');
let fs = require('fs')
const path = require("path");
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});
exports.sendtext = async (req, res, next) => {
    try {
        let info = await transporter.sendMail({
            from: 'mohamedsayed.tourabi.fivepoints@gmail.com',
            to: "ezzedine665@gmail.com",
            subject: "Hello ✔",
            text: "Hello world?",
            // html: "<b>Hello world?</b>",
        });
        res.status(200).json({ msg: 'email send' })
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.sendhtml = async (req, res, next) => {
    try {
        let info = await transporter.sendMail({
            from: 'mohamedsayed.tourabi.fivepoints@gmail.com',
            to: "ezzedine665@gmail.com",
            subject: "Hello ✔",
            // text: "Hello world?",
            html: "<b style='color: red'>Hello world?</b>",
        });
        res.status(200).json({ msg: 'email send' })
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.sendAttachment = async (req, res, next) => {
    try {
        let info = await transporter.sendMail({
            from: 'mohamedsayed.tourabi.fivepoints@gmail.com',
            to: "ezzedine665@gmail.com",
            subject: "Hello ✔",
            attachments: [{ 'filename': 'attachment.txt', 'content': 'hello' }]
        });
        res.status(200).json({ msg: 'email send' })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.sendEjs = async (req, res, next) => {

    const file = fs.readFileSync(path.resolve(__dirname, "../templetes/email.html"), { encoding: 'utf-8' }
    );
    let html = ejs.render(file, { nom: req.params.nom, prenom: req.params.prenom });
    try {
        let info = await transporter.sendMail({
            from: 'mohamedsayed.tourabi.fivepoints@gmail.com',
            to: "ezzedine665@gmail.com",
            subject: "Hello ✔",
            // text: "Hello world?",
            html: html,
        });
        res.status(200).json({ msg: 'email send' })
    } catch (error) {
        res.status(500).json(error)
    }
}


