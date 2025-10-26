import express, { Express, Request, Response } from "express";
import { client } from "@repo/db/client";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hii there",
  });
});

app.post("/signup",async (req: Request, res: Response)=>{
  const username = req.body.username;
  const password = req.body.password;

   const user = await client.user.create({
      data: {
        username,
        password,
      },
    });

})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
