// import { useEffect, useState } from 'react';

// const PublisherContents = () => {
//   const [contents, setContents] = useState([]);

//   useEffect(() => {
//     const fetchContents = async () => {
//       const response = await fetch('/api/publisher/contents');
//       const data = await response.json();
//       setContents(data);
//     };

//     fetchContents();
//   }, []);

//   return (
//     <div>
//       <h1>Your Contents</h1>
//       <ul>
//         {contents.map((content) => (
//           <li key={content._id}>
//             {content.title}
//             {/* إضافة زر تعديل */}
//             <button>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PublisherContents;
