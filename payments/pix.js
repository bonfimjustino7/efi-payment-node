import configs from "./configs.js";
import EfiPay from "sdk-node-apis-efi";

export function createPix() {
  let body = {
    calendario: {
      expiracao: 3600,
    },
    valor: {
      original: "5.00",
    },
    chave: "b82e4655-0775-4d12-92ae-488cad94cc99", // Informe sua chave Pix cadastrada na efipay.
  };

  const efipay = new EfiPay(configs);

  efipay
    .pixCreateImmediateCharge([], body)
    .then((resposta) => {
      console.log(resposta);
    })
    .catch((error) => {
      console.log(error);
    });
}

createPix();
