import HeaderFooterLayout from "@/components/HeaderFooterLayout";
import s from './Admin.module.scss';
import { Login } from "@/components/Login";
import { useState } from "react";
import { AdminPanel } from "@/components/AdminPanel";


export function Admin() {
  const [step, setStep] = useState('login');

  function onChangeStep(value) {
    setStep(value);
  }

  return (
    <HeaderFooterLayout>
      <div className={s.adminWrapper}>
        {step !== 'login' ? <Login
          onChangeStep={onChangeStep}
        /> : <AdminPanel />}
      </div>
    </HeaderFooterLayout>

  )
}