'use client';

import { useDiscord } from './useDiscord';

export const Form = () => {
  const {
    handleFormSubmit,
    errors,
    handleSubmit,
    register,
    optionsServices,
    optionsTerm
  } = useDiscord();

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="m-auto flex w-full max-w-xl flex-col gap-2 rounded bg-white-100 p-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          {...register('fields.name')}
          placeholder="Escreva seu nome"
          className="rounded p-2"
        />
        {errors.fields?.name?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.name?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="company">Nome da Empresa</label>
        <input
          id="company"
          type="text"
          {...register('fields.company')}
          placeholder="Nome da Empresa"
          className="rounded p-2"
        />
        {errors.fields?.company?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.company?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          {...register('fields.email')}
          placeholder="email@example.com"
          className="rounded p-2"
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
          className="rounded p-2"
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
            <div
              key={service.value}
              className="flex w-full items-center justify-between"
            >
              <div className="flex flex-grow-0 items-center gap-1">
                <input
                  id={service.value}
                  type="checkbox"
                  {...register('fields.services')}
                  value={service.value}
                  className="rounded p-2"
                />
                <label htmlFor={service.value}>{service.label}</label>
              </div>
            </div>
          ))}
          {errors.fields?.services?.message && (
            <p className="text-red-500 transition-all duration-500">
              {errors.fields?.services?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h6>Quantos colaboradores fazem parte da sua empresa?</h6>
        <div className="flex gap-1">
          {optionsTerm.map((term) => (
            <div
              key={term.value}
              className="flex-grow-1 flex items-center gap-1"
            >
              <input
                id={term.value}
                type="radio"
                {...register('fields.term')}
                value={term.value}
                className="rounded p-2"
              />
              <label htmlFor={term.value}>{term.label}</label>
            </div>
          ))}
          {errors.fields?.term?.message && (
            <p className="text-red-500 transition-all duration-500">
              {errors.fields?.term?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description">Sobre o projeto</label>
        <textarea
          id="description"
          {...register('fields.description')}
          placeholder="Faca uma breve descricao"
          className="rounded p-2"
        />
        {errors.fields?.description?.message && (
          <p className="text-red-500 transition-all duration-500">
            {errors.fields?.description?.message}
          </p>
        )}
      </div>

      <button type="submit" className="mt-4 rounded bg-blue-300 p-4">
        Enviar
      </button>
    </form>
  );
};
