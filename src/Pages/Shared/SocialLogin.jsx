import React, { useContext } from 'react';

import icon1 from '../../assets/socailLoginIcon/google.png'
import icon2 from '../../assets/socailLoginIcon/git.png'
import icon3 from '../../assets/socailLoginIcon/twitar.png'
import { AuthContext } from '../../Provider/AuthProviders';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                // console.log(result)

            })
            .catch(error => console.log(error))
    }
    const handleGithubSignIn = () => {

    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn border w-12 mx-1 rounded-full  p-0">
                    <img className='rounded-full ' src={icon1} alt="" />
                </button>

                <button onClick={handleGithubSignIn} className="btn border w-12 mx-1 rounded-full  p-0">
                    <img className='rounded-full ' src={icon2} alt="" />
                </button>
                <button onClick={handleGithubSignIn} className="btn border w-12 mx-1 rounded-full  p-0">
                    <img className='rounded-full' src={icon3} alt="" />
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;