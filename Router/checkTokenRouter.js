const express = require("express");
const router = express.Router();
const { auth } = require("./authMiddleware");
const SECRET_KEY = "MY-SECRET-KEY";

router.get("/verifyToken", auth, (req, res) => {
  const nickname = req.decoded.nickname;
  const profile = req.decoded.profile;
  return res.status(200).json({
    code: 200,
    message: "토큰은 정상입니다.",
    data: {
      nickname: nickname,
      profile: profile,
    },
  });
});

module.exports = router;
