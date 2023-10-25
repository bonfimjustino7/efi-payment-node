import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

export default function certificateToBase64(pathCert) {
  try {
    const hasCertificateValid =
      pathCert.toString().endsWith(".pem") ||
      pathCert.toString().endsWith(".p12");
    if (!hasCertificateValid) {
      throw new Error("O certificado deve ser .pem ou .p12");
    }
    const certification = readFileSync(pathCert);

    const base64 = Buffer.from(certification).toString("base64");

    return base64;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
    throw err;
  }
}

const data = certificateToBase64(
  path.join(
    __dirname,
    "..",
    "certs/homologacao-507427-Gateway-Jumpseller-hml.p12"
  )
);

console.log(data);
