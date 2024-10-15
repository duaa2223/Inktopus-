// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Input } from '@/components/ui/input';

// const statesData = [
//   { name: 'California', population: 39538223, capital: 'Sacramento' },
//   { name: 'Texas', population: 29145505, capital: 'Austin' },
//   { name: 'Florida', population: 21538187, capital: 'Tallahassee' },
//   { name: 'New York', population: 20201249, capital: 'Albany' },
//   { name: 'Pennsylvania', population: 13002700, capital: 'Harrisburg' },
// ];

// const StatesTab = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredStates = statesData.filter(state =>
//     state.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-2xl font-bold">US States Information</h2>
//       <Input
//         type="text"
//         placeholder="Search states..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="max-w-sm"
//       />
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>State</TableHead>
//             <TableHead>Population</TableHead>
//             <TableHead>Capital</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filteredStates.map((state) => (
//             <TableRow key={state.name}>
//               <TableCell>{state.name}</TableCell>
//               <TableCell>{state.population.toLocaleString()}</TableCell>
//               <TableCell>{state.capital}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default StatesTab;
// components/StatesTab.jsx
//////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { Input } from '../components/ui/UIComponents';

// const statesData = [
//   { name: 'California', population: 39538223, capital: 'Sacramento' },
//   { name: 'Texas', population: 29145505, capital: 'Austin' },
//   { name: 'Florida', population: 21538187, capital: 'Tallahassee' },
//   { name: 'New York', population: 20201249, capital: 'Albany' },
//   { name: 'Pennsylvania', population: 13002700, capital: 'Harrisburg' },
// ];

// const Table = ({ children }) => (
//   <table className="min-w-full bg-white border border-gray-300">{children}</table>
// );

// const TableHeader = ({ children }) => (
//   <thead className="bg-gray-100 border-b border-gray-300">{children}</thead>
// );

// const TableRow = ({ children }) => <tr>{children}</tr>;

// const TableHead = ({ children }) => (
//   <th className="px-4 py-2 text-left text-gray-600">{children}</th>
// );

// const TableBody = ({ children }) => <tbody>{children}</tbody>;

// const TableCell = ({ children }) => (
//   <td className="px-4 py-2 border-b border-gray-300">{children}</td>
// );

// const StatesTab = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredStates = statesData.filter(state =>
//     state.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-2xl font-bold">US States Information</h2>
//       <Input
//         placeholder="Search states..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="max-w-sm"
//       />
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>State</TableHead>
//             <TableHead>Population</TableHead>
//             <TableHead>Capital</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filteredStates.map((state) => (
//             <TableRow key={state.name}>
//               <TableCell>{state.name}</TableCell>
//               <TableCell>{state.population.toLocaleString()}</TableCell>
//               <TableCell>{state.capital}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default StatesTab;
//////////////////////////////////////////////////////////////////////
import React from 'react';
import { Card } from '../components/ui/UIComponents';

const StatsTab = ({ users, content, colleges }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Card title="Total Users">
          <div className="text-2xl font-bold text-[#8D493A]">{users.length}</div>
        </Card>
        <Card title="Total Content">
          <div className="text-2xl font-bold text-[#8D493A]">{content.length}</div>
        </Card>
        <Card title="Total Colleges">
          <div className="text-2xl font-bold text-[#8D493A]">{colleges.length}</div>
        </Card>
        <Card title="Total Books">
          <div className="text-2xl font-bold text-[#8D493A]">
            {content.filter(item => item.content_type === 'book').length}
          </div>
        </Card>
      </div>
      <Card title="Productivity" description="Weekly productivity statistics">
        {/* Add your chart component here */}
      </Card>
    </div>
  );
};

export default StatsTab;
