const express = require("express");
const session = require("express-session"); // 세션 모듈
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "!@#$%^&",
    resave: false, //세션이 똑같으면 다시 저장하지 않겠다
    saveUninitialized: false, // default값은 true, //세션이 초기화되지 않은 상태로 자동저장 유무 설정
  })
);

app.set("port", 3000);

app.post("/login", (req, res) => {
  const userid = req.body.userid;
  const userpw = req.body.userpw;

  if (userid === "admin" && userpw === "1234") {
    req.session.member = {
      id: userid,
      pw: userpw,
    };
    res.status(200).send(req.session);
  } else {
    res.status(500).send("failure");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    console.log("세션이 삭제되었습니다");
  });
  res.send("logOutOk");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번으로 서버 실행 중");
});
