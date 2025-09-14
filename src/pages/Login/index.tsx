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
        <div className="flex flex-col lg:flex-row justify-between items-start w-full min-h-screen">
          {/* Left Section - Hero */}
          <section className="w-full lg:w-[52%] h-auto lg:min-h-screen relative bg-background-primary">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/images/img_shapes.svg')" }}
            />
            
            <div className="relative z-10 flex flex-col justify-start items-center self-center w-full h-full pt-12xl pr-12xl pb-12xl pl-12xl">
              <div className="flex flex-col gap-17xl justify-start items-start w-full mb-18xl">
                {/* Logo */}
                <img 
                  src="/images/img_logo_removebg_preview.png" 
                  alt="EnE Systems Logo"
                  className="w-[94px] h-[56px] sm:w-[120px] sm:h-[72px] md:w-[140px] md:h-[84px]"
                />
                
                {/* Content */}
                <div className="flex flex-col gap-8xl justify-start items-center w-full px-9xl lg:px-10xl">
                  {/* Main Heading */}
                  <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-xl font-semibold leading-[40px] sm:leading-[58px] md:leading-[68px] lg:leading-xl text-center text-text-white">
                    Hello there!
                  </h1>
                  
                  {/* Description and CTA */}
                  <div className="flex flex-col gap-11xl justify-start items-center w-full">
                    <p className="text-sm sm:text-base md:text-md font-normal leading-sm sm:leading-md text-center text-text-white w-full">
                      It is good to have you back. To stay connected, please login with your details or create account to get started
                    </p>
                    
                    {/* Watch Demo Button */}
                    <div className="mx-14xl">
                      <Button
                        text="Watch Demo Videos"
                        text_font_size="15"
                        text_font_family="Inter"
                        text_font_weight="600"
                        text_line_height="19px"
                        text_color="#ffffff"
                        border_border="2 solid #ffffff"
                        border_border_radius="18px"
                        padding="t=6px,r=58px,b=6px,l=34px"
                        layout_gap="8px"
                        onClick={handleWatchDemo}
                        className="flex items-center gap-2"
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
          <section className="w-full lg:w-[38%] h-auto lg:min-h-screen relative bg-gray-50">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/images/img_.png')" }}
            />
            
            <div className="relative z-10 flex flex-col gap-4xl justify-start items-center w-full pt-3xl sm:pt-13xl px-4 sm:px-6 lg:px-3xl pb-8">
              {/* Tab Navigation */}
              <div className="flex flex-row justify-between items-center w-1/2 sm:w-auto gap-8 sm:gap-16">
                <Link 
                  to="/register"
                  className="text-md font-normal leading-md text-text-primary hover:text-text-accent transition-colors duration-200"
                >
                  Register
                </Link>
                <div className="flex flex-row justify-center items-center w-auto border-b-medium border-border-accent pt-md pr-md pb-md pl-md">
                  <span className="text-md font-bold leading-md text-text-accent">
                    Login
                  </span>
                </div>
              </div>

              {/* Login Form Card */}
              <div className="bg-background-white rounded-lg pt-3xl pr-3xl pb-3xl pl-3xl mt-13xl mr-16xl w-full max-w-md lg:max-w-none">
                <form onSubmit={handleLogin} className="flex flex-col gap-4xl justify-start items-center w-full">
                  {/* Form Fields */}
                  <div className="flex flex-col gap-4xl justify-start items-center w-full mx-2xl">
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
                        text_font_size="15"
                        text_font_family="Inter"
                        text_font_weight="400"
                        text_line_height="19px"
                        text_color="#0000007f"
                        border_border="1 solid #0000007f"
                        border_border_radius="8px"
                        padding="t=16px,r=12px,b=16px,l=58px"
                        layout_gap="26px"
                        className="pl-14"
                        required
                      />
                    </div>

                    {/* Password Section */}
                    <div className="flex flex-col gap-xl justify-start items-start w-full">
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
                          text_font_size="15"
                          text_font_family="Inter"
                          text_font_weight="400"
                          text_line_height="19px"
                          text_color="#0000007f"
                          border_border="1 solid #0000007f"
                          border_border_radius="8px"
                          padding="t=16px,r=12px,b=16px,l=58px"
                          layout_gap="26px"
                          className="pl-14"
                          required
                        />
                      </div>

                      {/* Forgot Password Link */}
                      <Link 
                        to="/forgot-password"
                        className="text-sm font-semibold leading-sm text-text-accent hover:underline mb-xs"
                      >
                        Forgot Password
                      </Link>
                    </div>
                  </div>

                  {/* Login Actions */}
                  <div className="flex flex-col gap-sm justify-start items-center w-full">
                    {/* Login Button */}
                    <Button
                      type="submit"
                      text="Log in"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="600"
                      text_line_height="19px"
                      text_color="#ffffff"
                      fill_background_color="#ff9800"
                      border_border_radius="18px"
                      padding="t=6px,r=58px,b=6px,l=34px"
                      layout_gap="8px"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2"
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
                    <div className="flex flex-row gap-xl justify-center items-center w-full pt-xs pr-xs pb-xs pl-xs mx-2xl">
                      <div className="h-[1px] w-full bg-line-background" />
                      <span className="text-sm font-normal leading-sm text-text-primary px-2">
                        Or
                      </span>
                      <div className="h-[1px] w-full bg-line-background" />
                    </div>

                    {/* Google Login Button */}
                    <Button
                      text="Google"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#000000"
                      fill_background_color="#ffffff"
                      effect_box_shadow="4px 4px 20px #00000019"
                      border_border_radius="20px"
                      padding="t=8px,r=34px,b=8px,l=76px"
                      layout_gap="18px"
                      onClick={handleGoogleLogin}
                      className="w-full flex items-center justify-center gap-4"
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