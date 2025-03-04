import React from 'react'
import '../Home/index.css'
import { set, useForm } from "react-hook-form";
const Home = () => {
    const { register,
        handleSubmit,
        watch,
        setError,
        formState: { errors, isSubmitting }
    } = useForm();

    const delay = (T) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, T * 1000);
        })
    }
    const onSubmit = async (data) => {
        // await delay(2) // simulating network delay
        let a = await fetch("http://localhost:3000/", {method: "post", headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(data)})
        let res = await a.text();
        console.log(data, res)
        // if (data.username !== "Abhishek") {
        //     setError("myform", {message: "The credentials are invalid"})
        // }
        // if (data.username === "rohan") {
        //     setError("blocked", {message: "This user is Blocked"})
        // }
    };
    return (
        <>
            {isSubmitting && <div>Loading...</div>}
            <div>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='username' type='username' {...register("username",
                        {
                            required: { value: true, message: "This field is required" },
                            minLength: { value: 3, message: "the Min  length is 3" },
                            maxLength: { value: 8, message: "the Max Length is 8" }
                        }
                    )} />
                    {errors.username && <div>{errors.username.message}</div>}
                    <input placeholder='password' type='password'
                        {...register("password",
                            {
                                required: { value: true, message: "this field is required" },
                                minLength: { value: 5, message: "The min Length is 5" },
                                maxLength: { value: 8, message: "The max Length is 8" },
                            }
                        )} />
                    {errors.password && <div>{errors.password.message}</div>}
                    <input disabled={isSubmitting} type="submit" value="Submit" />
                    {errors.myform && <div>{errors.myform.message}</div>}
                    {errors.blocked && <div>{errors.blocked.message}</div>}
                </form>
            </div>
        </>
    )
}

export default Home
