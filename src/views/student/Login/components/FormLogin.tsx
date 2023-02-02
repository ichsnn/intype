import Button from '@/components/Button';
import { Form, FormInput, FormInputWrapper } from '@/components/Form';
import { FieldValues, useForm } from 'react-hook-form';
import ForgotPassword from './ForgotPassword';
import { useAuth } from '@/contexts/auth';
import { UserData } from '@/tests';

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm();

  const { login } = useAuth();

  function onSubmit(data: FieldValues) {
    console.log(data);
    login(UserData.student);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 pb-5 border-b border-slate-900">
        <FormInputWrapper>
          <FormInput
            label="Username / Email"
            id="identifier"
            required
            placeholder="Masukkan username atau email"
            {...register('identifier', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            label="Password"
            id="password"
            required
            placeholder="Masukkan password"
            {...register('password', { required: true })}
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
          disabled={!isDirty || !isValid}
        />
      </div>
    </Form>
  );
}
