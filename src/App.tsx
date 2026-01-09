import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import TaskManager from "./components/task-manager";
import { supabase } from "./supabase-client";

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSession = async () => {
    try {
      const currentSession = await supabase.auth.getSession();
      console.log("Session data:", currentSession);
      setSession(currentSession.data.session);
      setError(null);
    } catch (err) {
      console.error("Error fetching session:", err);
      setError("Failed to connect to Supabase. Check your configuration.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {loading ? (
        <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
          Loading...
        </div>
      ) : error ? (
        <div style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>
          <h2>Connection Error</h2>
          <p>{error}</p>
          <p>Check browser console for more details.</p>
        </div>
      ) : session ? (
        <>
          <button onClick={logout}> Log Out</button>
          <TaskManager session={session} />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;