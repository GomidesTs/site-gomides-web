import { z } from 'zod';

export const schemaForm = z
  .object({
    fields: z.object({
      name: z.string().min(3, 'Insira um nome valido'),
      company: z.string(),
      email: z.string().email('Insira um email valido'),
      phone: z.string(),
      services: z
        .string()
        .array()
        .nonempty('Escolha uma das opcoes de servicos'),
      term: z.string(),
      description: z.string().max(1024, 'Sao permitidos apenas 1024 caracteres')
    })
  })
  .transform((field) => ({
    fields: {
      name: field.fields.name,
      company: field.fields.company,
      email: field.fields.email,
      phone: field.fields.phone,
      services: field.fields.services,
      term: field.fields.term,
      description: field.fields.description
    }
  }));
