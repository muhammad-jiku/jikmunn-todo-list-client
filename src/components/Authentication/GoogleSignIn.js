import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../Images/google.png';

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || '/';

  //   const [token] = useToken(user);

  useEffect(() => {
    if (user) {
      // console.log(user);
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  useEffect(() => {
    if (error) {
      toast.error('Google sign in failed');
    }
    return;
  }, [error]);

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };

  if (loading) return;

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-2xl font-bold">Welcome to the daily To-Do App</h1>
          <p class="pt-6 text-justify">
            Here by creating account, you can add your daily todo tasks and can
            removes them. Also, if any to-do class completed just click the
            checkbox and if you are rememebered that you todo is yet to complete
            just uncheck the checkbox.
          </p>
          <p class="text-lg text-center" style={{ color: 'brown' }}>
            Enjoy your Daily routine!
          </p>
          <button
            className="btn btn-outline btn-primary w-full my-2"
            onClick={handleGoogleLogin}
          >
            Continue with <img src={googleLogo} alt="" className="ml-2" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
