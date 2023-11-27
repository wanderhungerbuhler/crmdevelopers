import Logo from '../../assets/logo.svg'
import Brand from '../../assets/brand.svg'
import { Input } from '../../components/Form/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Envelope, LockKey } from '@phosphor-icons/react'

const SignValidationSchema = zod.object({
  email: zod.string().email('Informe um e-mail válido'),
  password: zod.string().min(7, 'Precisa ter no mínimo 7 caracters'),
})

type FormDataProps = zod.infer<typeof SignValidationSchema>
export function SignIn() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(SignValidationSchema),
  })

  const handleSignIn: SubmitHandler<FormDataProps | FieldValues> = async (
    { email, password },
    event,
  ) => {
    event?.preventDefault()
    console.log(email, password)
    reset()
  }

  const { errors } = formState

  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 m-auto max-lg:grid-cols-1 bg-secondary p-5">
      <div className="max-lg:w-full max-lg:order-1 max-sm:hidden w-[600px] flex flex-col h-[676px] bg-primary rounded-lg">
        <div className="flex flex-1 justify-center">
          <img src={Brand} alt="Brand" className="w-[130px]" />
        </div>

        <div className="flex flex-col justify-center items-center mb-10">
          <strong className="text-3xl w-[396px] block text-center text-white font-semibold">
            The easiest way to manage your portfolio
          </strong>
          <p className="text-base text-white mt-2">
            Join the CRM Developers community now!
          </p>
        </div>
      </div>

      <div className="max-lg:w-full w-[600px] flex flex-col h-[676px] justify-center items-center rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="Logo - CRM Developers" className="w-[130px]" />

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="w-[300px] flex flex-col gap-2 mt-4"
          >
            <Input
              icon={<Envelope />}
              type="email"
              placeholder="E-mail"
              error={errors?.email}
              {...register('email')}
            />
            <Input
              icon={<LockKey />}
              type="password"
              placeholder="Password"
              error={errors?.password}
              {...register('password')}
            />
            <button className="font-semibold text-base text-white bg-primary hover:bg-btnhover transition  duration-300 ease-in-out h-11 rounded-lg flex justify-center items-center">
              Log In
            </button>
            <a
              href="#"
              className="text-xs decoration-none hover:underline text-center mt-4 text-gray-200"
            >
              Forgot password?
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}
