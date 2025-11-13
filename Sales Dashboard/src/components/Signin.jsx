import { useActionState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

function Signin() {
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      //Action logic
      const userData = {
        email: formData.get('email'),
        password: formData.get('password'),
      };

      //Async operation
      const {
        success,
        data,
        error: signInError,
      } = await signInUser(userData.email, userData.password);

      //Return error state
      if (signInError) {
        return new Error(signInError);
      }
      if (success && data?.session) {
        //Navigate to /dashboard
        navigate('/dashboard');
        return null;
      }

      return null; //Success state
    },
    null //Initial state
  );

  return (
    <>
      <h1 className="landing-header">Paper Like A Boss</h1>
      <div className="sign-form-container">
        <form
          action={submitAction}
          aria-label="Sign in form"
          aria-describedby="form-description"
        >
          <div id="form-description" className="sr-only">
            Use this form to sign in to your account. Enter your email and
            password.
          </div>

          <h2 className="form-title">Sign in</h2>
          <p>
            Don't have an account yet?{' '}
            {/*<Link className="form-link">*/}
              Sign up
           {/*</Link>*/}
          </p>

          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby="email-description"
            disabled={isPending}
          />

          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby="password-description"
            disabled={isPending}
          />

          <button
            type="submit"
            className="form-button"
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? 'Signing in...' : 'Sign In'}
          </button>
          
          {/* Error message */}
          {error && (
            <div id='sign' role="alert" className="sign-form-error-message">
              {error.message}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Signin;