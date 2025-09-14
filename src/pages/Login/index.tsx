import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const handleWatchDemo = () => {
    // Handle demo video
  };

  return (
    <>
      <Helmet>
        <title>Login | EnE Systems Platform - Secure Business Authentication</title>
        <meta name="description" content="Login to EnE Systems platform with your email and password. Access comprehensive business tools, watch demo videos, or sign up with Google for faster authentication." />
        <meta property="og:title" content="Login | EnE Systems Platform - Secure Business Authentication" />
        <meta property="og:description" content="Login to EnE Systems platform with your email and password. Access comprehensive business tools, watch demo videos, or sign up with Google for faster authentication." />
      </Helmet>

      <main className="w-full min-h-screen">
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left Section - Hero */}
          <section className="w-full lg:w-1/2 min-h-screen relative bg-background-primary flex items-center justify-center">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/images/img_shapes.svg')" }}
            />
            
            <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-lg px-8 py-12">
              <div className="flex flex-col gap-8 justify-start items-center w-full text-center">
                {/* Logo */}
                <img 
                  src="/images/img_logo_removebg_preview.png" 
                  alt="EnE Systems Logo"
                  className="w-24 h-14 mb-8"
                />
                
                {/* Content */}
                <div className="flex flex-col gap-8 justify-start items-center w-full">
                  {/* Main Heading */}
                  <h1 className="text-4xl lg:text-5xl font-semibold text-center text-text-white mb-4">
                    Hello there!
                  </h1>
                  
                  {/* Description and CTA */}
                  <div className="flex flex-col gap-8 justify-start items-center w-full">
                    <p className="text-base font-normal leading-relaxed text-center text-text-white max-w-md">
                      It is good to have you back. To stay connected, please login with your details or create account to get started
                    </p>
                    
                    {/* Watch Demo Button */}
                    <div>
                      <Button
                        text="Watch Demo Videos"
                        onClick={handleWatchDemo}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-background-primary transition-colors"
                      >
                        <span>Watch Demo Videos</span>
                        <img 
                          src="/images/img_regular_icons.svg" 
                          alt=""
                          className="w-6 h-6"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Section - Login Form */}
          <section className="w-full lg:w-1/2 min-h-screen relative bg-gray-50 flex items-center justify-center">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/images/img_.png')" }}
            />
            
            <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-md px-8 py-12">
              {/* Tab Navigation */}
              <div className="flex flex-row justify-center items-center gap-16 mb-8">
                <Link 
                  to="/register"
                  className="text-lg font-normal text-text-primary hover:text-text-accent transition-colors duration-200"
                >
                  Register
                </Link>
                <div className="flex flex-row justify-center items-center border-b-2 border-border-accent pb-2">
                  <span className="text-lg font-bold text-text-accent">
                    Login
                  </span>
                </div>
              </div>

              {/* Login Form Card */}
              <div className="bg-background-white rounded-lg p-8 w-full shadow-lg">
                <form onSubmit={handleLogin} className="flex flex-col gap-6 justify-start items-center w-full">
                  {/* Form Fields */}
                  <div className="flex flex-col gap-6 justify-start items-center w-full">
                    {/* Email Input */}
                    <div className="relative w-full">
                      <img 
                        src="/images/img_mageemail.svg" 
                        alt=""
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                      />
                      <EditText
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>

                    {/* Password Section */}
                    <div className="flex flex-col gap-4 justify-start items-start w-full">
                      {/* Password Input */}
                      <div className="relative w-full">
                        <img 
                          src="/images/img_uilpadlock.svg" 
                          alt=""
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                        />
                        <EditText
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>

                      {/* Forgot Password Link */}
                      <Link 
                        to="/forgot-password"
                        className="text-sm font-semibold text-text-accent hover:underline"
                      >
                        Forgot Password
                      </Link>
                    </div>
                  </div>

                  {/* Login Actions */}
                  <div className="flex flex-col gap-4 justify-start items-center w-full">
                    {/* Login Button */}
                    <Button
                      type="submit"
                      text="Log in"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Log in</span>
                          <img 
                            src="/images/img_arrowright.svg" 
                            alt=""
                            className="w-6 h-6"
                          />
                        </>
                      )}
                    </Button>

                    {/* Divider */}
                    <div className="flex flex-row gap-4 justify-center items-center w-full py-4">
                      <div className="h-[1px] w-full bg-line-background" />
                      <span className="text-sm font-normal text-text-primary px-2">
                        Or
                      </span>
                      <div className="h-[1px] w-full bg-line-background" />
                    </div>

                    {/* Google Login Button */}
                    <Button
                      text="Google"
                      onClick={handleGoogleLogin}
                      className="w-full flex items-center justify-center gap-4 px-6 py-3 bg-white border border-gray-300 text-black rounded-full hover:bg-gray-50 transition-colors shadow-md"
                    >
                      <img 
                        src="/images/img_flatcoloriconsgoogle.svg" 
                        alt=""
                        className="w-6 h-6"
                      />
                      <span>Google</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;