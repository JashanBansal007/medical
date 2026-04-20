import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loginWithToken } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const token = searchParams.get('token');
      const name = searchParams.get('name');
      const email = searchParams.get('email');
      const role = searchParams.get('role');
      const id = searchParams.get('id');
      const error = searchParams.get('error');

      if (error) {
        toast.error('Google sign-in failed. Please try again.');
        navigate('/login');
        return;
      }

      if (token && name && email) {
        // Store auth data
        const user = { id, name, email, role };
        loginWithToken(token, user);
        toast.success(`Welcome, ${name}!`);
        navigate(role === 'admin' ? '/admin' : '/');
      } else {
        toast.error('Authentication failed. Please try again.');
        navigate('/login');
      }
    };

    handleCallback();
  }, [searchParams, navigate, loginWithToken]);

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign-in...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
