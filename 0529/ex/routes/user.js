const express = require("express"); // express import
const router = express.Router(); // express 라이버러리의 Router 기능에 접근....객체생성

// post 형식으로 api 주소를 지정
router.post("/login", (req, res) => {
  try {
    //req로 전달된 메시지 콘솔
    console.log(req.body.email, req.body.pw);
    //"ok" res로 사용자에게 send
    res.send("ok"); // ok라는 문자열을 전송
  } catch (err) {
    console.log(err);
  }
});

// 현재 페이지에 있는 코드집단인 모듈을
// router라는 이름으로 밖에서 사용하겠다
module.exports = router;
