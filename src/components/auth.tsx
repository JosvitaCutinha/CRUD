
import { useState, type FormEvent, type ChangeEvent } from "react";
import { supabase } from "../supabase-client";

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (isSignUp) {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) {
        setMessage(`Error signing up: ${signUpError.message}`);
      } else {
        setMessage("Check your email for the confirmation link!");
      }
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        setMessage(`Error signing in: ${signInError.message}`);
      }
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
          minLength={6}
          style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}
        >
          {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <button
        onClick={() => {
          setIsSignUp(!isSignUp);
          setMessage("");
        }}
        style={{ padding: "0.5rem 1rem" }}
      >
        {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
      </button>
      {message && (
        <div style={{ marginTop: "1rem", padding: "0.5rem", backgroundColor: message.includes("Error") ? "#ffebee" : "#e8f5e8", borderRadius: "4px" }}>
          {message}
        </div>
      )}
    </div>
  );
};
