import React from 'react';
// use named import from the package entry for clarity
import { Container } from '@mui/material'; 
import ContactForm  from './components/ContactForm';

const App=() =>{
 
  return (
    <Container maxWidth="sm">
      <h1>Contact Us</h1>
      <ContactForm/>
    </Container>
  );
};

export default App;
