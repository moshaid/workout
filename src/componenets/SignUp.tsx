import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(5, {message:'first name must be  at least 5 characters'}).max(20),
  lastName: z.string().min(5, {message:'last name must be  at least 5 characters'}).max(15),
  email: z.string().email({message: 'Email is required'}),
  password: z.string().min(6, {message: 'Password must be at least 6 characters'}).max(15),
  confirmPassword: z.string().min(6, {message: 'Password must be at least 6 characters'}).max(15)
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confiirmPassword']
});

type userData = z.infer<typeof schema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({ resolver: zodResolver(schema) });

  return (
    <div className="card">
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
        <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          {...register("firstName")}
          id="firstName"
          type="text"
          className="form-control"
        />
        {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          {...register("lastName")}
          id="lastName"
          type="text"
          className="form-control"
        />
        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className="form-control"
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          {...register("password")}
          id="password"
          type="password"
          className="form-control"
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="Password"
          className="form-control"
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>

    </div>
  );
};

export default SignUp;