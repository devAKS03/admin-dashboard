import AuthShell from "../_components/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      title="Login to your admin account"
      subtitle="Use your email and password to access the admin dashboard."
      buttonLabel="Login"
      buttonHref="/admin-dashboard"
      footerText="Don't have an account?"
      footerLinkLabel="Sign up "
      footerLinkHref="/sign-up"
      fields={[
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
          placeholder: "Enter your password",
        },
      ]}
    />
  );
}
