export const emailjsConfig = {
  serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export const isEmailjsConfigured = Boolean(
  emailjsConfig.serviceID && emailjsConfig.templateID && emailjsConfig.publicKey
);
