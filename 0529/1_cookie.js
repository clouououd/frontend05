const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser"); // 쿠키 모듈

const app = express();
app.use(cookieParser());
app.use(morgan("dev"));

app.set("port", 3000);

app.get("/setcookie", (req, res) => {
  try {
    res.cookie(
      "member", // 쿠키 name
      { id: "apple", name: "김사과", gender: "남성" }, // 쿠키 value, 암호화 되어 보여짐
      {
        maxAge: 1000 * 60 * 3, //쿠키 수명 3분으로 설정 //쿠키 수명, 단위초 밀리초
      }
    );
    res.send("ok");
  } catch (err) {
    console.log(err);
  }
});

app.get("/showcookie", (req, res) => {
  res.send(req.cookies);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번 포트로 실행 중");
});
