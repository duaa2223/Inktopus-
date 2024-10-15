// // components/Content.js
// import React, { useState } from 'react';
// import { Input, Button } from '../components/ui/UIComponents';

// const Content = () => {
//   const [contentData, setContentData] = useState({
//     title: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     setContentData({ ...contentData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // عملية حفظ البيانات
//     console.log('تم إرسال المحتوى', contentData);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Content Section</h2>
//       <div className="mb-4">
//         <Input
//           placeholder="Title"
//           value={contentData.title}
//           onChange={handleChange}
//           name="title"
//         />
//       </div>
//       <div className="mb-4">
//         <Input
//           placeholder="Description"
//           value={contentData.description}
//           onChange={handleChange}
//           name="description"
//         />
//       </div>
//       <Button onClick={handleSubmit}>Submit</Button>
//     </div>
//   );
// };

// export default Content;
import React from 'react';
import { Button, Card } from '../components/ui/UIComponents';

const ContentTab = ({ content, handleContentDelete }) => {
  return (
    <Card title="Content Management" description="Manage books and articles">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D0B8A8] text-[#8D493A]">
              <th className="p-2">Title</th>
              <th className="p-2">Type</th>
              <th className="p-2">Author</th>
              <th className="p-2">College</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item) => (
              <tr key={item._id} className="border-b border-[#D0B8A8]">
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.content_type}</td>
                <td className="p-2">{item.author}</td>
                <td className="p-2">{item.college.name}</td>
                <td className="p-2">
                  <Button
                    onClick={() => handleContentDelete(item._id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ContentTab;
