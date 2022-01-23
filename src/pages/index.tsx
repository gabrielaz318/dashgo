import * as yup from 'yup';
import { Input } from '../components/Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Flex, Button, Stack } from '@chakra-ui/react';

type SignInFormData = {
	email: string;
	password: string;
}

const signInFormSchema = yup.object().shape({
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória')
})

export default function Home() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema)
	});

	const { errors } = formState;

	const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
		console.log(values);
	}
	console.log(errors)
    return (
		<Flex 
			w='100vw' 
			h='100vh' 
			alignItems='center' 
			justifyContent='center'
		>
			<Flex
				as="form"
				w="100%"
				maxWidth={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input 
						name='email' 
						label='E-mail' 
						type="email"
						{...register('email')}
						error={errors.email}
					/>
					<Input 
						name='password' 
						label='Senha' 
						type="password"
						{...register('password')}
						error={errors.password}
					/>

					<Button 
						type='submit' 
						marginTop="6" 
						colorScheme="pink" 
						size="lg"
						isLoading={formState.isSubmitting}
					>
						Entrar
					</Button>
				</Stack>
			</Flex>
		</Flex>
    )
}
