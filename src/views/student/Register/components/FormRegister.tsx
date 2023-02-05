import Button from '@/components/Button';
import { Form, FormInput, FormInputWrapper } from '@/components/Form';
import { apiPost } from '@/service/api';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(data: FieldValues) {
    try {
      setLoading(true);
      const response = await apiPost('/student/register', {
        data,
      });
      toast(response.message, { type: 'success' });
      navigate('/student/login');
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 pb-5 border-b border-slate-900">
        <FormInputWrapper>
          <FormInput
            type="text"
            label="Username"
            id="username"
            disabled={loading}
            required
            placeholder="Minimal terdiri dari 2 huruf dan maksimal 20 huruf tanpa spasi"
            {...register('username', {
              required: true,
              pattern: /^[a-zA-Z0-9]+$/,
              minLength: 2,
              maxLength: 20,
            })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            type="email"
            label="Email"
            id="email"
            disabled={loading}
            required
            placeholder="Contoh: john@mail.com"
            {...register('email', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            type="password"
            label="Password"
            id="password"
            disabled={loading}
            required
            placeholder="Minimal 8 huruf"
            {...register('password', { required: true, minLength: 8 })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            type="password"
            label="Konfirmasi Password"
            id="confirmPassword"
            disabled={loading}
            required
            placeholder="Ulangi password"
            {...register('confirmPassword', {
              required: true,
              minLength: 8,
              validate: (val) => {
                if (watch('password') !== val) {
                  return 'Password tidak sama';
                }
              },
            })}
          />
        </FormInputWrapper>
      </div>
      <div className="flex pt-5">
        <Button
          type="submit"
          label={'Login'}
          secondary
          disabled={!isDirty || !isValid || loading}
        />
      </div>
    </Form>
  );
}
