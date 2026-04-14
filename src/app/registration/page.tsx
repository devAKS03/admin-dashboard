import AuthShell from "../_components/auth-shell";

export default function RegistrationPage() {
  return (
    <AuthShell
      title="Create your admin account"
      subtitle="Register your details to start managing your dashboard securely."
      buttonLabel="Create Account"
      buttonHref="/admin-dashboard"
      footerText="Already have an account?"
      footerLinkLabel="Login"
      footerLinkHref="/"
      fields={[
        {
          id: "name",
          label: "Full Name",
          placeholder: "Your full name",
        },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          placeholder: "admin@company.com",
        },
        {
          id: "password",
          label: "Password",
          type: "password",
          placeholder: "Create a strong password",
        },
      ]}
    />
  );
}
