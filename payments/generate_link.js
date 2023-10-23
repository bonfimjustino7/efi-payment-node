import configs from "./configs.js";
import EfiPay from "sdk-node-apis-efi";

let params = {
  id: 0,
};

let body2 = {
  items: [
    {
      name: "Product 1",
      value: 500,
      amount: 1,
    },
  ],
  settings: {
    message: "",
    expire_at: "2023-12-01",
    request_delivery_address: false,
    payment_method: "all",
  },
};

const bodyPayment = {
  items: [
    {
      name: "Product 1",
      value: 500,
      amount: 1,
    },
  ],
};

console.log(configs);

const efipay = new EfiPay(configs);

efipay
  .createCharge({}, bodyPayment)
  .then((resposta) => {
    const { charge_id } = resposta.data;
    console.log(charge_id);
    params.id = charge_id;
  })
  .catch((error) => {
    console.log(error);
  });

efipay
  .createOneStepLink(params, body2)
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((error) => {
    console.log(error);
  });
