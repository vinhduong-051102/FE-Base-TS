import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '@/shared/components/ErrorPage';
import { notification } from 'antd';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectMessageAndStatus } from '@/containers/App/appSlice';
import { useTranslation } from 'react-i18next';
import { resetRedux } from '@/containers/App/actions';

function App() {
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const [api, contextHolder] = notification.useNotification();
  const messageAndStatus = useAppSelector(selectMessageAndStatus);
  const { message, status } = messageAndStatus;
  useEffect(() => {
    if (message !== '') {
      api[status]({
        message: t(`common.${status}`),
        description: message,
        duration: 3,
        placement: 'bottomRight',
      });
      dispatch(resetRedux());
    }
  }, [message, status, t, api, dispatch]);
  return (
    <>
      <Routes>
        <Route path='' element={<ErrorPage code={404} />} />
      </Routes>
      {contextHolder}
    </>
  );
}

export default App;
