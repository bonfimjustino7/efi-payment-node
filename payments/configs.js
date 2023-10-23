import dotenv from "dotenv";
dotenv.config();

export default {
  // PRODUÇÃO = false
  // HOMOLOGAÇÃO = true
  sandbox: true,
  client_id: process.env.EFI_CLIENT_ID,
  client_secret: process.env.EFI_CLIENT_SECRET,
  certificate:
    "/home/bonfim/gateway-payment/certs/homologacao-507427-Gateway-Jumpseller-hml.p12",
};
