import Button from '@/components/Button';
import { Form, FormInput, FormSelect } from '@/components/Form';
import { useForm } from 'react-hook-form';
import style from './Profile.module.css';
import { OptionProps } from '@/components/Form/types';
import Header from '../Header';

const GenderOptions: OptionProps[] = [
  {
    value: '',
    label: 'Pilih Jenis Kelamin',
  },
  {
    value: '1',
    label: 'Laki-laki',
  },
  {
    value: '2',
    label: 'Perempuan',
  },
];

const EducationOptions: OptionProps[] = [
  {
    value: '',
    label: 'Pilih Tingkat Pendidikan',
  },
  {
    value: '1',
    label: 'Sekolah Menengah Pertama',
  },
  {
    value: '2',
    label: 'Sekolah Menengah Atas',
  },
  {
    value: '3',
    label: 'Diploma',
  },
  {
    value: '4',
    label: 'Sarjana',
  },
  {
    value: '5',
    label: 'Magister',
  },
  {
    value: '6',
    label: 'Doktor',
  },
  {
    value: '7',
    label: 'Lainnya',
  },
];

const StudentSettingsProfile = () => {
  const { register, formState: {isDirty, isValid} } = useForm();
  return (
    <section>
      <Header label='Profil'/>
      <Form>
        <div className="flex flex-col gap-9">
          <div className={style.form_group}>
            <FormInput
              type={'file'}
              label="Profile"
              id="profile"
              {...register('profile')}
              accept='image/*'
            />
          </div>
          <div className={style.form_group}>
            <FormInput
              type={'text'}
              label="Nama"
              id="nama"
              {...register('name')}
            />
          </div>
          <div className={style.form_group}>
            <FormInput
              type={'text'}
              label="Username"
              id="username"
              {...register('username')}
              required
            />
          </div>
          <div className={style.form_group}>
            <FormInput
              type={'email'}
              label="Email"
              id="email"
              {...register('email')}
              required
            />
          </div>
          <div className={style.form_group}>
            <FormSelect
              options={GenderOptions}
              label="Jenis Kelamin"
              id="gender"
              {...register('gender')}
            />
          </div>
          <div className={style.form_group}>
            <FormSelect
              options={EducationOptions}
              label="Tingkat Pendidikan"
              id="education"
              {...register('education')}
            />
          </div>
          <div>
            <Button type="submit" label="Simpan Perubahan" primary />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default StudentSettingsProfile;
