import s from './Login.module.scss';
import { Input } from "@/components/ui/Input";
import EnrollBtn from "@/components/ui/EnrollBtn/EnrollBtn";
import { useForm } from 'react-hook-form';

const ADMIN = {
  login: 'admin',
  password: 'root!'
}

export function Login({
  onChangeStep
}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.login === ADMIN.login && data.password === ADMIN.password) {
      onChangeStep('adminInfo');
    }
  };

  return(
    <div className={s.loginWrapper}>
      <div className={s.loginTitle}>
        <p>Авторизация</p>
      </div>
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Логин"
          className={s.inputWrapper}
          {...register('login')}
        />
        <Input
          placeholder="Пароль"
          className={s.inputWrapper}
          type="password"
          {...register('password')}
        />
        <EnrollBtn
          text="Вход"
          type="submit"
          outline={true}
        />
      </form>
    </div>
  )
}