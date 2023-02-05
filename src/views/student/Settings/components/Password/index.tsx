import { Form, FormInput } from '@/components/Form';
import Header from '../Header';
import Button from '@/components/Button';
import style from './Password.module.css';
import { FieldValues, useForm } from 'react-hook-form';
import { apiPost } from '@/service/api';
import { toast } from 'react-toastify';

export default function StudentSettingsPassword() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, isLoading },
  } = useForm();

  const onSubmit = async (values: FieldValues) => {
    try {
      const token = localStorage.getItem('access_token') as string;
      const response = await apiPost('/student/update/password', {
        data: values,
        token,
      });
      toast(response.message, { type: 'success' });
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    }
  };

  return (
    <section>
      <Header label="Password" />
      <Form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form_group}>
          <FormInput
            type={'password'}
            label="Password Lama"
            id="password"
            {...register('oldPassword')}
          />
        </div>
        <div className={style.form_group}>
          <FormInput
            type={'password'}
            label="Password Baru"
            id="newpassword"
            {...register('newPassword')}
          />
        </div>
        <div className={style.form_group}>
          <FormInput
            type={'password'}
            label="Konfirmasi Password"
            id="confirmpassword"
            {...register('confirmPassword', {
              validate: (value) => value === getValues('newPassword'),
            })}
          />
        </div>
        <Button
          type="submit"
          label="Ubah Password"
          primary
          disabled={!isValid}
        />
      </Form>
    </section>
  );
}
