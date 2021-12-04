const express = require("express");
const router = express.Router();
const users = require("../schema/userSchema");
const boards = require("../schema/boardSchema");
const registerValidation = require("../schema/registerValidation");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../model/jwtAuth");

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
        if(userID.includes(password)) {
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
});

// 로그인 api
router.post("/login", async (req, res) => {
    const { userID, password } = req.body;
    const existUser = await users.findOne({ userID, password });
    try {
        if(!existUser) {
            res.status(401).send({err: "존재하지 않는 사용자 정보입니다!"});
            return;
        }
        const token = jwt.sign(userID, "secret-key");
        res.send(token);
    } catch(error) {
        res.status(401);
        return;
    }
});

router.route("/boards")
    .get(jwtAuth, async (req, res) => {
        const userID = res.locals;
        res.send(userID);
    })
    .post( async (req, res) => {
        const { userID, title, contents, date } = req.body;
        try {
            if(!title || !contents) {
                res.status(400).send({ err: "제목과 내용을 입력해주세요!"});
                return;
            }
            const board = new boards( { userID, title, contents, date } );
            await board.save();
            res.status(200).send({ msg: "게시글이 등록되었습니다!"});
        } catch(error) {
            res.status(400);
        }
    })

module.exports = router;