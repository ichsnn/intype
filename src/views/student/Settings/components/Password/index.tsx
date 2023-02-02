import { Form, FormInput } from '@/components/Form';
import Header from '../Header';
import Button from '@/components/Button';
import style from './Password.module.css';
import { useForm } from 'react-hook-form';

export default function StudentSettingsPassword() {
  const { register } = useForm();
  return (
    <section>
      <Header label="Password" />
      <Form className="flex flex-col gap-9">
        <div className={style.form_group}>
          <FormInput
            type={'password'}
            label="Password Lama"
            id="password"
            {...register('password')}
          />
        </div>
        <div className={style.form_group}>
          <FormInput
            type={'password'}
            label="Password Baru"
            id="newpassword"
            {...register('newpassword')}
          />
        </div>
        <div className={style.form_group}>
          <FormInput
            type={'password'}
            label="Konfirmasi Password"
            id="confirmpassword"
            {...register('confirmpassword')}
          />
        </div>
        <Button label="Ubah Password" primary />
      </Form>
    </section>
  );
}
