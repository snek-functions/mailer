import { defineService } from "@snek-at/function";

import { sendMail as sendMailSMTP } from "./internal/nodemailer";
import { sendMail as sendMailAzure } from "./internal/azure";
import { sendMail as sendMailGoogle } from "./internal/google";

export default defineService({
  Mutation: {
    sendMailSMTP,
    sendMailAzure,
    sendMailGoogle,
  },
});
