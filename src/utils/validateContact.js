export function validateContactForm(form, messages) {
  const errors = {};

  if (!form.name?.trim()) errors.name = messages.required;
  if (!form.email?.trim()) errors.email = messages.required;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = messages.emailError;

  if (!form.phone?.trim()) errors.phone = messages.required;
  else if (!/^\+?[\d\s()-]{8,}$/.test(form.phone.trim())) errors.phone = messages.phoneError;

  if (!form.message?.trim()) errors.message = messages.required;

  return errors;
}
