import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface SubmissionResult {
  success: boolean;
  message: string;
}

function ContactForm(): JSX.Element {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const formRef = useRef<HTMLFormElement>(null); // Ref for the form element

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formErrors: FormErrors = {};
    if (!formData.get('name')) {
      formErrors.name = 'Please provide your full name.';
    }
    if (!formData.get('email')) {
      formErrors.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.get('email') as string)) {
        formErrors.email = 'Please provide a valid email address.';
      }
    }
    if (!formData.get('message')) {
      formErrors.message = 'Please enter your message.';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setSubmitting(true);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result: SubmissionResult = await response.json();
        setSubmissionResult(result);
        // Clear the form after successful submission
        if (result.success && formRef.current) {
          formRef.current.reset(); // Reset form fields using the form reference
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        setSubmissionResult({ success: false, message: 'Submission failed. Please try again.' });
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <form
      id="form"
      ref={formRef} 
      className="needs-validation"
      noValidate
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="access_key" value="994ed9b3-e8a7-4239-b845-ec071a8de2f4" />
      <Input type="checkbox" className="hidden" style={{ display: 'none' }} name="botcheck" />
      <div className="mb-5">
        <Input type="text" placeholder="Full Name" required name="name" />
        {errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
      </div>
      <div className="mb-5">
        <label htmlFor="email_address" className="sr-only">
          Email Address
        </label>
        <Input id="email_address" type="email" placeholder="Email Address" name="email" required />
        {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <Textarea name="message" required placeholder="Your Message" />
        {errors.message && <div className="text-red-400 text-sm mt-1">{errors.message}</div>}
      </div>

      <Button type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submissionResult && (
        <div
          id="result"
          className={`mt-3 text-center ${submissionResult.success ? 'text-green-500' : 'text-red-500'}`}
        >
          {submissionResult.message}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
