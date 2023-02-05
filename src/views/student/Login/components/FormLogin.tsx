import Button from '@/components/Button';
import { Form, FormInput, FormInputWrapper } from '@/components/Form';
import { FieldValues, useForm } from 'react-hook-form';
import ForgotPassword from './ForgotPassword';
import { useAuth } from '@/contexts/auth';
import { UserData } from '@/tests';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { apiGet, apiPost } from '@/service/api';
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function onSubmit(value: FieldValues) {
    try {
      setLoading(true);
      const response = await apiPost('/student/login', {
        data: value,
      });
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      const userResponse = await apiGet('/student/me', {
        token: access_token,
      });
      toast(response.message, { type: 'success' });
      login(userResponse.data);
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    } finally {
      setLoading(false);
    }
    // login(UserData.student);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 pb-5 border-b border-slate-900">
        <FormInputWrapper>
          <FormInput
            label="Username / Email"
            id="identifier"
            disabled={loading}
            required
            placeholder="Masukkan username atau email"
            {...register('identifier', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            label="Password"
            id="password"
            disabled={loading}
            required
            placeholder="Masukkan password"
            {...register('password', { required: true, minLength: 8 })}
          />
        </FormInputWrapper>
        <div className="text-right">
          <ForgotPassword />
        </div>
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
