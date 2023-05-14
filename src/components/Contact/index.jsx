//Styles
import {
    ContactContainer,
    ContactForm,
    SubmitButton
} from "./style"

//React Hook Form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//yup
import * as Yup from 'yup';

const schemaEmailSubmit = Yup.object({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido!").required("Campo obrigatório!"),
    message: Yup.string().required("Campo obrigatório!"),
})

const Contact = () => {

    const {
        reset,
        register,
        handleSubmit: onSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaEmailSubmit) });

    const handleSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <ContactContainer id="contact">
            <h1>Contato</h1>

            <ContactForm onSubmit={onSubmit(handleSubmit)}> 
                <input type="text" name="name" id="name" placeholder="Digite seu nome" {...register("name")}/>
                <small>{errors?.name?.message}</small>

                <input type="email" name="email" id="email" placeholder="Digite seu email" {...register("email")}/>
                <small>{errors?.email?.message}</small>

                <textarea name="message" id="message" cols="30" rows="10" placeholder="Digite sua mensagem..." {...register("message")} >
                </textarea>
                <small>{errors?.message?.message}</small>
                <SubmitButton>Enviar</SubmitButton>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact