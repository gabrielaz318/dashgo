import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldErrors } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputprops } from "@chakra-ui/react";

interface InputProps extends ChakraInputprops {
    name: string;
    label?: string;
    error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                autoComplete="nada"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                ref={ref}
                {...rest}
            />

            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)