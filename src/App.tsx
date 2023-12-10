import './App.css';
import { Button } from '@/components/ui/button';
import { Button as StoriesButton } from '@/stories/Button';
import { Warning } from '@/stories/Button.stories';

/**
 * VERIFICAR COMO CRIAR UM FORM
 * TESTAR EXEMPLO
 * ADICIONAR SCHEMA
 * CONSTRUIR FORM - DEFINIR FORM
 */

function App() {
  return (
    <>
      <h1>AAAAAAAAAaa</h1>
      <Button variant={'outline'}>Click me</Button>
      <StoriesButton {...Warning.args} />
    </>
  );
}

export default App;
