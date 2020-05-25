import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { Pagination } from '../components';


export default {
  title: 'Pagination',
  decorators: [withKnobs],
  component: Pagination,
};


export const simple = () =>{
  const total = number("total", 48);
  const currentPage = number("currentPage", 0);  
  const pageSize = number("pageSize", 10);
return <Pagination total={total} initialPage={currentPage} pageSize={pageSize} >Hello Button</Pagination>;

} 

