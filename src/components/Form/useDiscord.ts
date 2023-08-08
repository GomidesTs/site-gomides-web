import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { schemaForm } from './schema';
import { FormProps } from './types';

export const useDiscord = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      fields: {
        name: '',
        company: '',
        email: '',
        phone: '',
        term: '45 dias',
        description: ''
      }
    }
  });

  const optionsServices = [
    { value: 'Website', label: 'Website' },
    { value: 'Landing Page', label: 'Landing Page' },
    { value: 'UI/UX Design', label: 'UI/UX Design' }
  ];

  const optionsTerm = [
    { value: '25 dias', label: '25 dias' },
    { value: '45 dias', label: '45 dias' },
    { value: '60 dias', label: '60 dias' },
    { value: 'Prazo não é problema', label: 'Prazo não é problema' },
    { value: 'Preciso com urgência', label: 'Preciso com urgência' }
  ];

  const handleFormSubmit = (data: FormProps) => {
    const services = data.fields.services;
    const servicesString = services.join('\n');

    const body = {
      content: '@everyone Possivel cliente',
      tts: true,
      embeds: [
        {
          title: 'Gomides Web',
          description:
            'Um novo formulário foi preenchido com as seguintes informações:',
          color: 3036097,
          fields: [
            {
              name: 'Nome',
              value: data.fields.name
            },
            {
              name: 'Nome da Empresa',
              value: data.fields.company
            },
            {
              name: 'Email',
              value: data.fields.email
            },
            {
              name: 'Numero',
              value: data.fields.phone
            },
            {
              name: 'Servicos',
              value: servicesString
            },
            {
              name: 'Prazo para entregar o projeto?',
              value: data.fields.term
            },
            {
              name: 'Detalhes do projeto',
              value: data.fields.description
            }
          ]
        }
      ],
      allowed_mentions: {
        parse: ['everyone']
      }
    };

    axios.post(
      'https://discord.com/api/webhooks/1137035791873364129/DGT8EciqXY-DLuT452-U0rPqLinnUQgC-x7dclopGX9zbnoD5x3oZIfPy4rL27wf5gZl',
      body
    );
    reset();
  };

  return {
    optionsServices,
    optionsTerm,
    errors,
    register,
    handleSubmit,
    handleFormSubmit
  };
};
