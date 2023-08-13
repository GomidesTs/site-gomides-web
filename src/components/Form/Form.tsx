'use client';

import { Logo } from '../Logo';
import { useDiscord } from './useDiscord';

export const Form = () => {
  const {
    handleFormSubmit,
    errors,
    handleSubmit,
    register,
    optionsServices,
    optionsTerm,
    isSubmitSuccessful
  } = useDiscord();

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="m-auto flex w-full max-w-xl flex-col gap-2"
    >
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            {...register('fields.name')}
            placeholder="Digite seu nome"
            className="rounded border border-t-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
          />
          {errors.fields?.name?.message && (
            <p className="text-red-500 transition-all duration-500">
              {errors.fields?.name?.message}
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-1">
          <label htmlFor="company">Nome da Empresa</label>
          <input
            id="company"
            type="text"
            {...register('fields.company')}
            placeholder="Digite o nome da sua empresa"
            className="rounded border border-t-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
          />
          {errors.fields?.company?.message && (
            <p className="text-red-500 transition-all duration-500">
              {errors.fields?.company?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          {...register('fields.email')}
          placeholder="Digite seu melhor e-mail"
          className="rounded border border-t-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
        />
        {errors.fields?.email?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.email?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="number">Numero</label>
        <input
          id="number"
          type="tel"
          {...register('fields.phone')}
          placeholder="(99) 9 9999-9999"
          className="rounded border border-t-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
        />
        {errors.fields?.phone?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.phone?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h6>Como podemos te ajudar?</h6>
        <div className="flex gap-1">
          {optionsServices.map((service) => (
            <div key={service.value} className="w-full">
              <div className="flex flex-grow-0 items-center">
                <input
                  id={service.value}
                  type="checkbox"
                  {...register('fields.services')}
                  value={service.value}
                  className="peer/draft hidden rounded border border-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
                />
                <label
                  htmlFor={service.value}
                  className="flex w-full items-center justify-center rounded border border-t-gray-500/80 p-2 hover:bg-blue-300/50 peer-checked/draft:border-blue-300/90 peer-checked/draft:bg-blue-300/90 peer-checked/draft:text-white-300"
                >
                  {service.label}
                </label>
              </div>
            </div>
          ))}
        </div>
        {errors.fields?.services?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.services?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <h6>Qual o prazo que temos para entregar o projeto?</h6>
        <div className="flex gap-1 ">
          {optionsTerm.map((term) => (
            <div key={term.value} className="flex items-center gap-1 text-sm">
              <input
                id={term.value}
                type="radio"
                {...register('fields.term')}
                value={term.value}
                className="peer/draft hidden rounded border border-t-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
              />
              <label
                htmlFor={term.value}
                className="rounded border border-t-gray-500/80 p-2 hover:bg-blue-300/50 peer-checked/draft:border-blue-300/90 peer-checked/draft:bg-blue-300/90 peer-checked/draft:text-white-300"
              >
                {term.label}
              </label>
            </div>
          ))}
        </div>
        {errors.fields?.term?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.term?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description">Sobre o projeto</label>
        <textarea
          id="description"
          {...register('fields.description')}
          placeholder="Compartilhe o que você considera fundamental sobre o projeto."
          className="h-56 resize-none rounded border border-t-gray-500/80 bg-white-300 p-2 focus:border-blue-300 focus:outline-none focus:ring-1"
        />
        {errors.fields?.description?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.description?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <button
            type="submit"
            className="mt-4 rounded bg-blue-300 p-4 text-white-300"
          >
            Enviar
          </button>

          <div className="flex items-center gap-2">
            <Logo />
            <div>
              <h6 className="text-sm font-bold">Prefere uma reunião?</h6>
              <p className="cursor-pointer text-sm text-black-500">
                Agende com a GomidesWeb
              </p>
            </div>
          </div>
        </div>
        {isSubmitSuccessful && (
          <p className="text-sm font-medium text-esmerald-500">
            Suas informações foram submetidas. Aguarde o contato da nossa equipe
            através do número de WhatsApp fornecido para trabalharmos juntos no
            seu projeto.
          </p>
        )}
      </div>
    </form>
  );
};
