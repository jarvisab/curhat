'use client'

import Tiptap from './editor/Tiptap';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { EditorMenuBar } from '../layout/menu-bar';
import useAddContent from './useAddContent';
import ConfirmationDialogContent from '../interactive/confirmation-dialog';
import { formLabels, submitDialog } from '@/app/contents';

const AddContent: React.FC = () => {
  const {
    formData,
    handleChange,
    handleContentChange,
    handleSubmit,
    isContentEmpty
  } = useAddContent();

  const { title_label, title_placeholder, creator_label, creator_placeholder } = formLabels;
  const { title: dialogTitle, description: dialogDescription } = submitDialog;

  return (
    <div className="space-y-4 flex flex-col mb-8">
      <Label>
        {title_label}
        <Input
          name="title"
          className='mt-2'
          placeholder={title_placeholder}
          value={formData.title}
          onChange={handleChange}
        />
      </Label>
      <Label>
        {creator_label}
        <Input
          name="creator"
          className='mt-2'
          placeholder={creator_placeholder}
          value={formData.creator}
          onChange={handleChange}
        />
      </Label>
      <Tiptap
        content={formData.message}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
      <AlertDialog>
        <EditorMenuBar isMessageEmpty={isContentEmpty} />
        <ConfirmationDialogContent
          title={dialogTitle}
          description={dialogDescription}
          onConfirm={handleSubmit}
        />
      </AlertDialog>
    </div>
  )
}

export default AddContent;