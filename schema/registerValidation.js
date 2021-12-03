const JOI = require("joi");

const registerValidation = JOI.object({
    userID: JOI.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: JOI.string()
        .min(4)
        .required(),
    rePassword: JOI.ref("password"),
});

module.exports = async (req, res, next) => {
    try {
        await registerValidation.validateAsync(req.body);
    } catch (error) {
        res.status(412).send({err: "양식에 맞게 작성해주세요."});
        return;
    }
    next();
}