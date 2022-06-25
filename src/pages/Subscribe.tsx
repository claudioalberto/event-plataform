import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";





export function Subscribe() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscibe(event: FormEvent) {
        event.preventDefault()
        await createSubscriber({
            variables: {
                name,
                email
            }
        })
        navigate('/event')
    }



    return (
        <div>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="w-full md:max-w-[1100px] flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 mx-auto">
                    <div className="w-full md:max-w-[640px] flex flex-col justify-center items-center p-6">
                        <Logo />
                        <h1 className="mt-8 text-[2rem] md:text-[2.5rem] leading-tight text-center">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed text-center">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                    </div>
                    <div className="p-8 bg-gray-700 border border-gray-500 md:rounded w-full">
                        <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                        <form action="" onSubmit={handleSubscibe} className="flex flex-col gap-2 w-full">
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="text"
                                placeholder="Seu nome completo"
                                onChange={event => setName(event.target.value)}
                            />
                            <input
                                className="bg-gray-900 rounded px-5 h-14"
                                type="email"
                                placeholder="Digite o seu e-mail"
                                onChange={event => setEmail(event.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 bg-green-500 uppercase rounded py-4 font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                            >
                                Garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
                <img className="mt-10"
                    src="/src/assets/images/code-mockup.png" alt="" />

            </div>
            <Footer />
        </div>
    );
}