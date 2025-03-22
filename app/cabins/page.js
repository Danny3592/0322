import React from 'react';

export const metadata = {
  title: 'Cabins',
};

async function getCabins() {
  let { data: cabins, error } = await supabase.from('cabins').select('*');
  console.log('cabins = ', cabins);
}

const page = async () => {
  return <h1>xd</h1>;
};

export default page;
