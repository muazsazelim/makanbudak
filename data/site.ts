export const site = {
  name: "Makan Budak Studios",
  email: "muaz@makanbudak.my",
  year: 2026,
  description:
    "Makan Budak Studios is a small group of friends making apps, tools and experiments.",
  /**
   * Optional: a form endpoint (e.g. Formspree) for the contact form.
   * Set NEXT_PUBLIC_FORM_ENDPOINT at build time. If empty, the form opens
   * the visitor's email app with the message filled in instead.
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};
