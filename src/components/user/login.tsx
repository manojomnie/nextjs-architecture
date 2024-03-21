import { useEffect, useRef, useState } from 'react';
import { loginRequest } from '@actions/user/UserAction';
import { useDispatch } from 'react-redux';
import { rootState } from '@reducers/rootReducer';
import Router, { useRouter } from 'next/router';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
} from '@material-ui/core';

export const LoginComponent: React.FC<{}> = (props: any) => {
  /*
    const router = useRouter();
    if(router.query?.code )
    { 
        localStorage.removeItem("usertoken");
        localStorage.clear();
        localStorage.setItem("usertoken", router.query?.code?.toString() || '');
    }
    */

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<any>();

  const [errorMsg, setErrorMsg] = useState<string>('');
  //const [userToken, setUserToken] = useState<string>(localStorage.getItem("usertoken")|| "");

  /*
    useEffect(() => {
        if(window && localStorage.getItem("usertoken") != '' && router.query?.code )
        {
           setErrorMsg('Token is --> ' + localStorage.getItem("usertoken")?.toString() || 'No Token' );    
           Router.push('/login?key=' + router.query?.code);         
        }
    },[router.query]);
    */

  const callback = (token: string, error: string) => {
    if (token != '') {
      localStorage.setItem('usertoken', token);
      Router.push('/');
    }
    setErrorMsg(error);
  };

  const login = () => {
    let data: any = {
      values: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
      callback,
    };
    dispatch(loginRequest(data));
  };

  // username: 'kminchelle',
  // password: '0lelplR',

  return (
    <Box display="flex" alignItems="center">
      <Card sx={{ width: 275, backgroundColor: `aqua` }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Login
          </Typography>
          <Typography variant="body2">
            <div className="form-floating">
              <label htmlFor="floatingInput">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="floatingInput"
                placeholder="name@example.com"
                ref={emailRef}
              />
            </div>

            <div className="form-floating mt-3">
              <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="floatingPassword"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>

            <div className="checkbox mb-3 mt-3">
              <label>
                <input
                  name="remember"
                  type="checkbox"
                  defaultValue="remember-me"
                />{' '}
                Remember me
              </label>
              <br />
              <br />
              <p>
                username: 'kminchelle'
                <br />
                password: '0lelplR'
              </p>
            </div>
          </Typography>
          <Typography>
            {errorMsg != '' ? <span> {errorMsg} </span> : <span> </span>}
          </Typography>
        </CardContent>
        <CardActions>
          <button
            onClick={() => {
              login();
            }}
            className="w-100 btn btn-lg btn-warning"
          >
            Sign in
          </button>
        </CardActions>
      </Card>
    </Box>
  );
};
