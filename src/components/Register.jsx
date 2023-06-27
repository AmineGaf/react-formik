import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";




export default function Register() {

  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      country:"Sousse",
      terms:"",
    },

    validationSchema : Yup.object({
        name: Yup.string()
          .max(20, "name must be 20 character or less")
          .required('Name is required'),
        email: Yup.string()
          .email('Invalid email adress')
          .required('Email is required'),
        terms: Yup.array()
          .required('Terms of services must be checked'),
      }),
    
    onSubmit: (values) => {
        console.log(values);
        Navigate("/register/success");
        
        },
  });
  
  return (
    <div className="h-screen flex items-center justify-center bg-teal-400">
      
      <form 
            onSubmit={formik.handleSubmit}
            className="bg-white flex rounded-lg w-1/2 ">
          <div className=" flex-1 p-20">
              <h1 className="text-gray-700 font-bold text-3xl pb">Let's get started</h1 >
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam dolorum ea perspiciatis suscipit cumque
              </p>
              <div className="mt-6">
                <div className="pb-4">
                  <label 
                    htmlFor="name" 
                    className="block font-bold text-sm pb-2">
                      Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="border-2 border-gray-500 rounded-md p-2 w-1/2 focus:border-teal-400 focus:ring-teal-400" 
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                   <h1 className="font-bold text-red-500">
                    {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
                    </h1> 
                </div>
                <div className="pb-4">
                  <label 
                    htmlFor="email" 
                    className="block font-bold text-sm pb-2">
                      Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="border-2 border-gray-500 rounded-md p-2 w-1/2 focus:border-teal-400 focus:ring-teal-400" 
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <h1 className="font-bold text-red-500">
                    { formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                  </h1> 
                    
                </div>
                <div className="pb-4">
                  <label 
                    htmlFor="country" 
                    className="block font-bold text-sm pb-2">
                      Country</label>
                  <select 
                    type="country" 
                    name="country" 
                    className="border-2 border-gray-500 rounded-md p-2 w-1/2 focus:border-teal-400 focus:ring-teal-400" 
                    value={formik.values.country}
                    onChange={formik.handleChange}
                  >
                     <option >Sousse</option> 
                     <option >Monastir</option> 
                     <option >Tunis</option> 
                     <option >Mahdia</option> 
                  </select>
                    
                </div>
                <div className="pb-4">
                  <label 
                    htmlFor="terms" 
                    className="block font-bold text-sm pb-2">
                      Terms</label>
                  <div className="flex gap-2">
                    <input 
                      type="checkbox" 
                      name="terms" 
                      value="checked"
                      className="h-5 w-5 border-2 text-teal-500 rounded-md focus:border-teal-500 focus:ring-teal-500" 
                      onChange={formik.handleChange}/> 
                    <p className="text-gray-500">I agree to the terms and the conditions...</p>  
                  </div>  
                  <h1 className="font-bold text-red-500 mt-1">
                    {formik.touched.terms && formik.errors.terms ? formik.errors.terms : ''}  
                  </h1> 
                </div>
              </div>
              <button 
              className="bg-teal-500 border-2 rounded-md p-2 text-white mt-4 w-1/2 hover:bg-teal-700"
              >Start learning today!</button>
          </div>
          
          
      </form>
      
    </div>
  )
}
