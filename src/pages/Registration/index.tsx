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
        <section className="w-full lg:w-1/2 bg-background-primary relative overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/img_shapes.svg')" }}
          />
          
          <div className="relative z-10 w-full max-w-lg px-8 py-12 flex flex-col justify-center items-center text-center">
            <div className="w-full flex flex-col justify-center items-center gap-8">
                {/* Logo */}
                <img 
                  src="/images/img_logo_removebg_preview.png" 
                  alt="EnE Systems Logo" 
                  className="w-24 h-14 mb-8"
                />

                {/* Hero Content */}
                <div className="w-full flex flex-col justify-start items-center gap-8">
                  <h1 className="text-4xl lg:text-5xl font-bold text-center text-text-white mb-4">
                    Hello there!
                  </h1>
                  
                  <div className="w-full flex flex-col justify-start items-center gap-8">
                    <p className="text-base font-normal leading-relaxed text-center text-text-white max-w-md">
                      It is good to have you back. To stay connected, please login with your details or create account to get started
                    </p>
                    
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

        {/* Right Section - Registration Form */}
        <section className="w-full lg:w-1/2 bg-gray-50 flex flex-col justify-center items-center px-8 py-12">
          <div className="w-full max-w-md flex flex-col justify-center items-center">
            <div className="w-full bg-background-white rounded-lg p-8 shadow-lg">
              {/* Tab Navigation */}
              <div className="flex flex-row justify-center items-center gap-16 mb-8">
                <div className="flex flex-row justify-center items-center">
                  <div className="border-b-2 border-b-border-accent pb-2">
                    <span className="text-lg font-bold text-text-accent">
                      Register
                    </span>
                  </div>
                </div>
                <Link 
                  to="/login"
                  className="text-lg font-normal text-text-primary hover:text-text-accent transition-colors"
                >
                  Login
                </Link>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                {/* First Name & Last Name Row */}
                <div className="flex flex-row gap-4 w-full">
                  <div className="w-full">
                    <div className="relative">
                      <img 
                        src="/images/img_solaruseroutline.svg" 
                        alt="" 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                      />
                      <EditText
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange('firstName')}
                        error={errors.firstName}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                        value={formData.lastName}
                        onChange={handleInputChange('lastName')}
                        error={errors.lastName}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <div className="relative">
                    <img 
                      src="/images/img_carbonlocationcompanyfilled.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange('company')}
                      error={errors.company}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <div className="relative">
                    <img 
                      src="/images/img_mageemail.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={errors.email}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Contact Field */}
                <div>
                  <div className="relative">
                    <img 
                      src="/images/img_icbaselinephone.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Contact"
                      type="tel"
                      value={formData.contact}
                      onChange={handleInputChange('contact')}
                      error={errors.contact}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="relative">
                    <img 
                      src="/images/img_gameiconsplainpadlock.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange('password')}
                      error={errors.password}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <div className="relative">
                    <img 
                      src="/images/img_gameiconsplainpadlock.svg" 
                      alt="" 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10"
                    />
                    <EditText
                      placeholder="Confirm Password"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange('confirmPassword')}
                      error={errors.confirmPassword}
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Submit Button and Social Login */}
                <div className="flex flex-col gap-4 justify-start items-center w-full">
                  <Button
                    text="Create Account"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Create Account</span>
                        <img 
                          src="/images/img_arrowright.svg" 
                          alt="" 
                          className="w-6 h-6"
                        />
                      </>
                    )}
                  </Button>

                  {/* Divider and Google Sign Up */}
                  <div className="flex flex-col gap-4 justify-start items-center w-full">
                    <div className="flex flex-row gap-4 justify-center items-center w-full py-2">
                      <div className="h-[1px] w-full bg-line-background" />
                      <span className="text-sm font-normal text-text-primary px-2">
                        Or
                      </span>
                      <div className="h-[1px] w-full bg-line-background" />
                    </div>

                    <Button
                      text="Google"
                      onClick={handleGoogleSignUp}
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