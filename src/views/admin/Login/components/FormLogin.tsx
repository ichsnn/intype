import Button from '@/components/Button';
import { Form, FormInput, FormInputWrapper } from '@/components/Form';
import { useAuth } from '@/contexts/auth';
import { apiGet, apiPost } from '@/service/api';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (values: FieldValues) => {
    try {
      const response = await apiPost('/admin/login', {
        data: values,
      });
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      const userResponse = await apiGet('/admin/me', {
        token: access_token,
      });
      toast(response.message, { type: 'success' });
      login(userResponse.data);
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <FormInputWrapper>
          <FormInput
            type={'text'}
            label="Username"
            placeholder="Masukkan username"
            id="username"
            required
            {...register('username', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            type={'password'}
            label="Password"
            placeholder="Masukkan Password"
            id="password"
            required
            {...register('password', { minLength: 8, required: true })}
          />
        </FormInputWrapper>
      </div>
      <div className="mt-4">
        <Button type="submit" label="Masuk" secondary disabled={!isValid} />
      </div>
    </Form>
  );
}
