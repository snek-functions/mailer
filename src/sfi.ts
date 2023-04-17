import { defineService } from "@snek-at/function";

import { sendMail } from "./internal/nodemailer";

export default defineService({
  Mutation: {
    sendMail,
  },
});
