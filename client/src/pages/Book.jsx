

// export default BookTable;
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', status: 'مقروء' });
  const [editBookId, setEditBookId] = useState(null);

  // جلب الكتب عند تحميل الصفحة
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = sessionStorage.getItem('token'); // استخدام sessionStorage

      const response = await axios.get('http://localhost:5000/api/habits/get', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  // إضافة كتاب جديد
  const addBook = async () => {
    try {
      const token = sessionStorage.getItem('token'); // استخدام sessionStorage

      await axios.post('http://localhost:5000/api/habits/addbook', newBook, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBooks();  // جلب الكتب مجددًا لتحديث القائمة
      setNewBook({ title: '', author: '', status: 'مقروء' });
    } catch (error) {
      console.error("Error adding book", error);
    }
  };

  // تعديل الكتاب
  const editBook = (id) => {
    const book = books.find((b) => b._id === id);
    setNewBook(book);
    setEditBookId(id);
  };

  // حفظ التعديل
  const saveEdit = async () => {
    try {
      const token = sessionStorage.getItem('token'); // استخدام sessionStorage

      await axios.put(`http://localhost:5000/api/habits/update/${editBookId}`, newBook, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBooks();  // جلب الكتب مجددًا لتحديث القائمة
      setNewBook({ title: '', author: '', status: 'مقروء' });
      setEditBookId(null);
    } catch (error) {
      console.error("Error updating book", error);
    }
  };

  // حذف الكتاب
  const deleteBook = async (id) => {
    try {
      const token = sessionStorage.getItem('token'); // استخدام sessionStorage

      await axios.put(`http://localhost:5000/api/habits/delete/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchBooks();  // جلب الكتب مجددًا لتحديث القائمة
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">كتبي</h1>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">العنوان</th>
            <th className="px-4 py-2">المؤلف</th>
            <th className="px-4 py-2">الحالة</th>
            <th className="px-4 py-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                  onClick={() => editBook(book._id)}
                >
                  تعديل
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteBook(book._id)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-4">
        <input
          type="text"
          placeholder="عنوان الكتاب"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="border px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="اسم المؤلف"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="border px-2 py-1 mr-2"
        />
        <select
          value={newBook.status}
          onChange={(e) => setNewBook({ ...newBook, status: e.target.value })}
          className="border px-2 py-1 mr-2"
        >
          <option value="مقروء">مقروء</option>
          <option value="يخطط للقراءة">يخطط للقراءة</option>
        </select>
        {editBookId ? (
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={saveEdit}>
            حفظ التعديلات
          </button>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addBook}>
            إضافة كتاب
          </button>
        )}
      </div>
    </div>
  );
};

export default BookTable;
