import { useState } from "react";
import axios from "axios";


function SignUp() {

    const [signin, updateIn] = useState(false);
    const [err, setErr] = useState(false);
    function login() {
        (signin === true) ? updateIn(false) : updateIn(true);
    }


    async function signup(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(e.target); // Collect form data
        const formValues = Object.fromEntries(formData.entries()); // Convert to a plain object

        // Log or process the form values
        console.log('Form Submitted:', formValues);

        if (formValues.pswd === formValues.cpswd) {

            try {
                const response = await axios.post('https://example.com/api/signup', formValues, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Handle successful response
                console.log('Response:', response.data);
                alert('Form submitted successfully!');
            } catch (error) {
                // Handle error
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form.');
            }
        } else {
            setErr(true);
        }
    }

        return (
            <section className="flex flex-row w-[100%] h-[90vh] min-[530px]:h-[100vh]">
                <div className="w-[65%] min-[530px]:w-[40%] sm:w-[100%] md:w-[100%] lg:w-[65%] xl:w-[65%] h-[100%] hidden min-[530px]:block">
                    <video className="w-[100%] h-[100%] object-cover object-[50%_35%]" muted autoPlay loop>
                        <source src="pants.mp4" type="video/mp4" />
                    </video>
                </div>
                <form onSubmit={signup} className="w-[100%] min-[530px]:w-[60%] sm:w-[55%] md:w-[45%] lg:w-[35%] xl:w-[35%] h-[100%] sm:h-[95%] md:h-[95%] lg:h-[100%] xl:h-[100%] flex flex-col items-center justify-center gap-y-[4%] relative min-[530px]:relative sm:absolute md:absolute lg:relative xl:relative bg-white/50  sm:top-[2.5%] sm:left-[20%] md:top-[2.5%] md:left-[27.5%] lg:top-[0%] lg:left-[0%] xl:top-[0%] xl:left-[0%]">
                    <div className="w-[10%] aspect-square">
                        <svg viewBox="0 0 150 150">
                            <path d="M0 1 L8 1 M8 1 L8 100 M8 100 L98 100 M98 100 L98 149 M8 120 L8 149 M0 149 L60 149 M52 149 L52 50 M52 50 L100 50 M100 50 L100 1 M100 1 L92 1 M149 149 L90 149 M142 149 L142 1 M149 1 L120 1 M120 1 L120 70 M120 70 L30 70 M30 70 L30 1 M30 1 L60 1 M52 1 L52 20" stroke="#000" strokeWidth="2px" />
                        </svg>
                    </div>
                    <p className="font-[ubuntu] font-normal sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">{signin === true ? 'Sign into your account' : 'Create an account'}</p>
                    <div className="flex flex-col items-center w-[80%] gap-y-[4vw] min-[530px]:gap-y-[2vw]">
                        <div className={`${signin === true ? 'hidden' : 'flex'} w-[100%] flex-row justify-between`}>
                            <input className="border-b border-black w-[48%] aspect-[1/0.2] max-[1280px]:h-[70%] placeholder:text-black placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black bg-transparent" type="text" id="fname" name="fname" placeholder="First Name" pattern="^(?!.*[A-Z].*[A-Z])[A-Za-z]+$" title="No symbols or numbers are allowed" required />
                            <input className="border-b border-black w-[48%] aspect-[1/0.2] max-[1280px]:h-[70%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="text" id="lname" name="lname" placeholder="Last Name" pattern="^(?!.*[A-Z].*[A-Z])[A-Za-z]+$" title="No symbols or numbers are allowed" required />
                        </div>
                        <input className="border-b border-black w-[100%] aspect-[1/0.1] max-[1280px]:h-[70%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="email" id="email" name="email" placeholder="Email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Input email address correctly" required />
                        <input className="border-b border-black w-[100%] aspect-[1/0.1] max-[1280px]:h-[70%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="password" id="pswd" name="pswd" placeholder="Enter Password" pattern="^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[\W_])).{8,}$" title="Must contain atleast 1 uppercase, 1 lowercase, 1 numerical character and 1 symbol. Minimum of 8 character." required />
                        <input className={`${signin === true ? 'hidden' : 'flex'} border-b border-black w-[100%] aspect-[1/0.1] max-[1280px]:h-[70%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent`} type="password" id="cpswd" name="cpswd" placeholder="Confirm Password" pattern="^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[\W_])).{8,}$" title="Must contain atleast 1 uppercase, 1 lowercase, 1 numerical character and 1 symbol. Minimum of 8 character." required />
                        {err !== null ?
                            <p className={`${(err === true ? 'inline-block' : 'hidden')} font-[ubuntu] font-extralight sm:text-xl md:text-xl lg:text-sm xl:text-sm`}>The password confirmation does not match</p>
                        :
                            <></>
                        }
                        <div className={`${signin === true ? 'hidden' : 'flex'} w-[100%] gap-x-2`}>
                            <input className="font-[ubuntu] text-black" type="checkbox" id="terms" name="terms" required></input>
                            <p className="font-[ubuntu] font-extralight sm:text-xl md:text-xl lg:text-sm xl:text-sm">I agree to the <span className="text-blue-800 underline">terms & conditions</span></p>
                        </div>
                        <input className="w-[100%] aspect-[1/0.12] max-[1280px]:h-[70%] pl-[3%] font-[ubuntu] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold focus:outline-none focus:border focus:border-black bg-black text-white" type="submit" id="done" name="done" value={`${signin === true ? 'Sign In' : 'Create account'}`} />
                        <p className="font-[ubuntu] font-extralight sm:text-xl md:text-xl lg:text-sm xl:text-sm">{signin === true ? 'Don\'t  have an account?' : 'Already have an account?'}<span onClick={login} className="text-blue-800 underline cursor-pointer">{signin === true ? 'Create an account' : 'Log in'}</span></p>
                    </div>
                </form>
            </section>
        );
    }

    export default SignUp;