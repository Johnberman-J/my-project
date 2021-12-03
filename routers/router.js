const express = require("express");
const router = express.Router();
const users = require("../schema/userSchema");
const registerValidation = require("../schema/registerValidation")

// 회원가입을 위한 api
router.post("/register", registerValidation, async (req, res) => {
    const { userID, password } = req.body;
    const chkUser = await users.findOne({ userID });

    try {
        if(chkUser) {
            res.status(412).send({
                err: "중복된 닉네임 입니다!"
            })
            return;
        }
        if(password.includes(userID)) {
            res.status(412).send({
                err: "패스워드에 닉네임이 포함되어 있습니다!"
            })
            return;
        }

        const user = new users({ userID, password });
        await user.save();
        res.send({msg: "회원가입성공!"});

    } catch (error) {
        res.status(400).send({ err: "닉네임 또는 비밀번호를 확인해주세요!" })
        return;
    }
})

module.exports = router;