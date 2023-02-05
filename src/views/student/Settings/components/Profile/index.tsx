import Button from '@/components/Button';
import { Form, FormInput, FormSelect } from '@/components/Form';
import { FieldValues, useForm } from 'react-hook-form';
import style from './Profile.module.css';
import { OptionProps } from '@/components/Form/types';
import Header from '../Header';
import { useAuth } from '@/contexts/auth';
import { Student } from '@/models/Student';
import { education } from '@/utils/getEducation';
import { gender } from '@/utils/getGender';
import { apiPost } from '@/service/api';
import { toast } from 'react-toastify';

const GenderOptions: OptionProps[] = [
  {
    value: '',
    label: 'Pilih Jenis Kelamin',
  },
  {
    value: '1',
    label: gender['1'],
  },
  {
    value: '2',
    label: gender['2'],
  },
];

const EducationOptions: OptionProps[] = [
  {
    value: '',
    label: 'Pilih Tingkat Pendidikan',
  },
  {
    value: '1',
    label: education['1'],
  },
  {
    value: '2',
    label: education['2'],
  },
  {
    value: '3',
    label: education['3'],
  },
  {
    value: '4',
    label: education['4'],
  },
  {
    value: '5',
    label: education['5'],
  },
  {
    value: '6',
    label: education['6'],
  },
  {
    value: '7',
    label: education[7],
  },
];

const StudentSettingsProfile = () => {
  const { user, update } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      name: (user as Student).name,
      profile: '',
      username: (user as Student).user.username,
      email: (user as Student).user.email,
      gender: (user as Student).gender,
      education: (user as Student).gender,
    },
  });

  const onSubmit = async (values: FieldValues) => {
    try {
      const token = localStorage.getItem('access_token');
      if (token === null) return;
      const response = await apiPost('/student/update', {
        token,
        data: values,
      });
      const student = response.data as Student;
      update(student);
      toast(response.message, { type: 'success' });
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    }
  };

  return (
    <section>
      <Header label="Profil" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-9">
          <div className={style.form_group}>
            <FormInput
              type={'file'}
              label="Profile"
              id="profile"
              {...register('profile')}
              accept="image/*"
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
            <Button
              type="submit"
              label="Simpan Perubahan"
              primary
              disabled={!isValid}
            />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default StudentSettingsProfile;
