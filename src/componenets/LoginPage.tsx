import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({message: 'Email is required'}),
  password: z.string().min(6).max(15)
});

type userData = z.infer<typeof schema>;

const LoginPage = () => {
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

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>

    </div>
  );
};

export default LoginPage;

// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Card,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from "@chakra-ui/react";

// const schema = z.object({
//   email: z.string().email(),
//   password: z.number().min(6).max(15),
// });

// type UserData = z.infer<typeof schema>;

// const LoginPage = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<UserData>({ resolver: zodResolver(schema) });
//   return (
//     <Card maxW="500px" my="5" mx="auto" p="8">
//       <Heading as="h3" size="md">
//         Sign in to your account
//       </Heading>
//       <FormControl onSubmit={handleSubmit(data => console.log(data))} py="4">
//         <FormLabel htmlFor="email">Email address</FormLabel>
//         <Input {...register("email")} id="email" type="email" />
//         {errors.email && <p>{errors.email.message}</p>}

//         <FormLabel htmlFor="password">Password</FormLabel>
//         <Input {...register("password")} id="password" type="text" />
//         {errors.password && <p>{errors.password.message}</p>}
//         <Button my="2" w="30%" mx="auto">
//           Sign In
//         </Button>
//       </FormControl>
//     </Card>
//   );
// };

// export default LoginPage;
