import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  contact?: string;
  password?: string;
  confirmPassword?: string;
}

const Registration = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful registration
      console.log('Registration successful:', formData);
      
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up
    console.log('Google sign up clicked');
  };

  const handleWatchDemo = () => {
    // Handle demo video
    console.log('Watch demo clicked');
  };

  return (
    <>
      <Helmet>
        <title>Register - EnE Systems Platform | Create Your Business Account</title>
        <meta name="description" content="Join EnE Systems platform with secure registration. Create your business account with email or Google sign-up. Watch demo videos to explore features before getting started." />
        <meta property="og:title" content="Register - EnE Systems Platform | Create Your Business Account" />
        <meta property="og:description" content="Join EnE Systems platform with secure registration. Create your business account with email or Google sign-up. Watch demo videos to explore features before getting started." />
      </Helmet>

      <main className="w-full min-h-screen flex flex-row">
        {/* Left Section - Hero */}
        <section className="w-full lg:w-[54%] bg-background-primary relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/img_shapes.svg')" }}
          />
          
          <div className="relative z-10 w-full h-full flex flex-col justify-start items-start p-12xl">
            <div className="w-full max-w-[92%] mx-auto flex flex-col justify-start items-center h-auto">
              <div className="w-full flex flex-col justify-start items-start gap-17xl mb-18xl">
                {/* Logo */}
                <div className="w-[18%]">
                  <img 
                    src="/images/img_logo_removebg_preview.png" 
                    alt="EnE Systems Logo" 
                    className="w-[94px] h-[56px] object-contain"
                  />
                </div>

                {/* Hero Content */}
                <div className="w-full flex flex-col justify-start items-center gap-8xl px-9xl">
                  <h1 className="text-[32px] sm:text-[48px] lg:text-xl font-bold leading-xl text-center text-text-white">
                    Hello there!
                  </h1>
                  
                  <div className="w-full flex flex-col justify-start items-center gap-11xl">
                    <p className="text-sm sm:text-md font-normal leading-lg text-center text-text-white w-full px-4xl">
                      It is good to have you back. To stay connected, please login with your details or create account to get started
                    </p>
                    
                    <div className="px-14xl">
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
                        layout_width="flex-1"
                        onClick={handleWatchDemo}
                        className="w-full flex items-center justify-center gap-sm"
                      >
                        <span>Watch Demo Videos</span>
                        <img 
                          src="/images/img_regular_icons.svg" 
                          alt="" 
                          className="w-4xl h-4xl"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section - Registration Form */}
        <section className="w-full lg:w-[46%] bg-gray-50 flex flex-col justify-start items-start p-12xl">
          <div className="w-[90%] mx-auto flex flex-col justify-start items-center gap-4xl h-auto">
            <div className="w-full bg-background-white rounded-lg p-3xl">
              {/* Tab Navigation */}
              <div className="w-[50%] mx-auto flex flex-row justify-between items-center mb-4xl">
                <div className="flex flex-row justify-center items-center w-auto">
                  <div className="border-b-medium border-b-border-accent px-md py-md">
                    <span className="text-md font-bold leading-md text-text-accent">
                      Register
                    </span>
                  </div>
                </div>
                <Link 
                  to="/login"
                  className="text-md font-normal leading-md text-text-primary mr-md hover:text-text-accent transition-colors"
                >
                  Login
                </Link>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                {/* First Name & Last Name Row */}
                <div className="flex flex-row gap-4 w-full px-4">
                  <div className="w-full">
                    <div className="relative">
                      <img 
                        src="/images/img_solaruseroutline.svg" 
                        alt="" 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                      />
                      <EditText
                        placeholder="First name"
                        text_font_size="15"
                        text_font_family="Inter"
                        text_font_weight="400"
                        text_line_height="19px"
                        text_color="#0000007f"
                        border_border="0 solid #0000007f"
                        border_border_radius="6px"
                        padding="t=12px,r=12px,b=12px,l=40px"
                        value={formData.firstName}
                        onChange={handleInputChange('firstName')}
                        error={errors.firstName}
                        className="w-full pl-10"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative">
                      <img 
                        src="/images/img_solaruseroutline.svg" 
                        alt="" 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                      />
                      <EditText
                        placeholder="Last name"
                        text_font_size="12"
                        text_font_family="Inter"
                        text_font_weight="400"
                        text_line_height="16px"
                        text_color="#0000007f"
                        border_border="0 solid #0000007f"
                        border_border_radius="6px"
                        padding="t=12px,r=12px,b=12px,l=40px"
                        value={formData.lastName}
                        onChange={handleInputChange('lastName')}
                        error={errors.lastName}
                        className="w-full pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div className="px-4">
                  <div className="relative">
                    <img 
                      src="/images/img_carbonlocationcompanyfilled.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Company"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#0000007f"
                      border_border="1 solid #0000007f"
                      border_border_radius="8px"
                      padding="t=16px,r=12px,b=16px,l=40px"
                      value={formData.company}
                      onChange={handleInputChange('company')}
                      error={errors.company}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="px-4">
                  <div className="relative">
                    <img 
                      src="/images/img_mageemail.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Email"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#0000007f"
                      border_border="1 solid #0000007f"
                      border_border_radius="8px"
                      padding="t=16px,r=12px,b=16px,l=40px"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={errors.email}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                {/* Contact Field */}
                <div className="px-4">
                  <div className="relative">
                    <img 
                      src="/images/img_icbaselinephone.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Contact"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#0000007f"
                      border_border="1 solid #0000007f"
                      border_border_radius="8px"
                      padding="t=16px,r=12px,b=16px,l=40px"
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange('contact')}
                      error={errors.contact}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="px-4">
                  <div className="relative">
                    <img 
                      src="/images/img_gameiconsplainpadlock.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Password"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#0000007f"
                      border_border="1 solid #0000007f"
                      border_border_radius="8px"
                      padding="t=16px,r=12px,b=16px,l=40px"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange('password')}
                      error={errors.password}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="px-4">
                  <div className="relative">
                    <img 
                      src="/images/img_gameiconsplainpadlock.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Confirm Password"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#0000007f"
                      border_border="1 solid #0000007f"
                      border_border_radius="8px"
                      padding="t=16px,r=12px,b=16px,l=40px"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange('confirmPassword')}
                      error={errors.confirmPassword}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                {/* Submit Button and Social Login */}
                <div className="flex flex-col gap-4 justify-start items-center w-full mt-6">
                  <Button
                    text="Create Account"
                    text_font_size="15"
                    text_font_family="Inter"
                    text_font_weight="600"
                    text_line_height="19px"
                    text_color="#ffffff"
                    border_border_radius="18px"
                    fill_background_color="#ff9800"
                    padding="t=6px,r=58px,b=6px,l=34px"
                    layout_gap="8px"
                    layout_width="flex-1"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-4xl h-4xl border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Create Account</span>
                        <img 
                          src="/images/img_arrowright.svg" 
                          alt="" 
                          className="w-4xl h-4xl"
                        />
                      </>
                    )}
                  </Button>

                  {/* Divider and Google Sign Up */}
                  <div className="flex flex-col gap-4 justify-start items-center w-full px-4">
                    <div className="flex flex-row gap-4 justify-center items-center w-full py-2">
                      <div className="w-[140px] h-[1px] bg-line-background" />
                      <span className="text-sm font-normal leading-sm text-text-primary">
                        Or
                      </span>
                      <div className="w-[140px] h-[1px] bg-line-background" />
                    </div>

                    <Button
                      text="Google"
                      text_font_size="15"
                      text_font_family="Inter"
                      text_font_weight="400"
                      text_line_height="19px"
                      text_color="#000000"
                      border_border_radius="20px"
                      fill_background_color="#ffffff"
                      effect_box_shadow="4px 4px 20px #00000019"
                      padding="t=8px,r=34px,b=8px,l=76px"
                      layout_gap="18px"
                      layout_width="flex-1"
                      onClick={handleGoogleSignUp}
                      className="w-full flex items-center justify-center gap-2xl"
                    >
                      <img 
                        src="/images/img_flatcoloriconsgoogle.svg" 
                        alt="" 
                        className="w-4xl h-4xl"
                      />
                      <span className="ml-2">Google</span>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;