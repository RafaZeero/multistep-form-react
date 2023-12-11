// import * as z from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
import { Form } from '@/components/custom/form';
import './App.css';

/**
 * VERIFICAR COMO CRIAR UM FORM
 * TESTAR EXEMPLO
 * ADICIONAR SCHEMA
 * CONSTRUIR FORM - DEFINIR FORM
 */
// const formSchema = z.object({
//   username: z.string().min(2).max(50)
// });

function App() {
  // // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: ''
  //   }
  // });

  // // 2. Define a submit handler.
  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values);
  // };
  return (
    <>
      <Form />
    </>
  );
}

export default App;
