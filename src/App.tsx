import type { Component } from 'solid-js';
import { Container } from './components/container';

const App: Component = () => {
  return (
    <div class="flex h-screen w-screen flex-col items-center justify-center gap-12 bg-gray-900">
      <Container />
    </div>
  );
};

export default App;
