import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import styled from 'styled-components';
import { ResultStatusType } from 'antd/es/result';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface propsType {
  code: number;
}

const ErrorPage = ({ code }: propsType) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<string | number>(500);
  const [subTitle, setSubTitle] = useState('Xin lỗi, có lỗi xảy ra.');

  useEffect(() => {
    setStatus(code);
    switch (code) {
      case 403:
        setSubTitle('Xin lỗi, bạn không được phép truy cập trang này.');
        break;
      case 404:
        setSubTitle('Xin lỗi, trang bạn đã truy cập không tồn tại.');
        break;
      case 500:
        setSubTitle('Xin lỗi, có lỗi xảy ra.');
        break;
      default:
        setSubTitle('Xin lỗi, có lỗi xảy ra.');
        break;
    }
  }, [code]);

  return (
    <Container>
      <Result
        status={status as ResultStatusType}
        title={status}
        subTitle={subTitle}
        extra={
          <Button onClick={() => navigate('/')} type='primary'>
            Trở về trang chủ
          </Button>
        }
        style={{ maxHeight: '100vh', maxWidth: '100vw' }}
      />
    </Container>
  );
};

export default ErrorPage;
