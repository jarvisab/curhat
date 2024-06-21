// useAddContent.ts
import { useState } from 'react';
import { addNewMessage } from "@/actions/add-message";

interface FormData {
  title: string;
  creator: string;
  message: string;
}

const useAddContent = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    creator: "",
    message: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleContentChange = (newContent: string) => {
    setFormData({ ...formData, message: newContent });
  };

  const handleSubmit = async () => {
    const response = await addNewMessage(formData);

    if (response.ok) {
      window.location.href = '/';
    }
  };

  const isContentEmpty = !formData.message.replace(/<[^>]*>?/gm, '').trim();

  return {
    formData,
    handleChange,
    handleContentChange,
    handleSubmit,
    isContentEmpty
  };
};

export default useAddContent;