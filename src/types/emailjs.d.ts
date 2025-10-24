declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface SendParams {
    service_id: string;
    template_id: string;
    template_params: Record<string, any>;
    publicKey: string;
  }

  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    publicKey: string
  ): Promise<EmailJSResponseStatus>;

  const emailjs: {
    send: typeof send;
  };

  export default emailjs;
}
