import Button from '@/components/Button';
import { Form, FormInput, FormInputWrapper } from '@/components/Form';
import { FieldValues, useForm } from 'react-hook-form';
import { useAuth } from '@/contexts/auth';
import { UserData } from '@/test';

export default function FormRegister() {
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
            label="Username"
            id="username"
            required
            placeholder="Masukkan username anda"
            {...register('username', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            label="Email"
            id="email"
            required
            placeholder="Masukkan email anda"
            {...register('email', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            label="Password"
            id="password"
            required
            placeholder="Masukkan password untuk akun anda"
            {...register('password', { required: true })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormInput
            label="Konfirmasi Password"
            id="confirmPassword"
            required
            placeholder="Ulangi password"
            {...register('confirmPassword', { required: true })}
          />
        </FormInputWrapper>
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
