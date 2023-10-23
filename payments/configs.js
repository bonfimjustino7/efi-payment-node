import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

dotenv.config();

export default {
  // PRODUÇÃO = false
  // HOMOLOGAÇÃO = true
  sandbox: true,
  client_id: process.env.EFI_CLIENT_ID,
  client_secret: process.env.EFI_CLIENT_SECRET,
  certificate: path.join(
    __dirname,
    "..",
    "certs/homologacao-507427-Gateway-Jumpseller-hml.p12"
  ),
};
