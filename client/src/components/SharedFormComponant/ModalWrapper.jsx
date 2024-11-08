
const ModalWrapper = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4 my-8 relative z-50 max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;