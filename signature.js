import { createHmac } from "crypto";
import dotenv from "dotenv";

dotenv.config();

export function verifySignature(body) {
  let keys = Object.keys(body);
  const secretKey = process.env.JUMPSELLER_SECRET_KEY;
  const keySignature = body["x_signature"];

  keys = keys.sort();

  let toSign = "";
  let query = "";
  keys
    .filter((key) => key !== "x_signature")
    .forEach((key) => {
      toSign += key + body[key];
      query +=
        encodeURIComponent(key) + "=" + encodeURIComponent(body[key]) + "&";
    });

  let signer = createHmac("sha256", secretKey);
  let result = signer.update(toSign, "utf8").digest("hex");

  const isValid = result === keySignature;

  console.log("Verificação assinatura: ", isValid);
  return isValid;
}
