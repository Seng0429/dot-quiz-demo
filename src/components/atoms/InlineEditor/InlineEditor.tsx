import { useEditor, EditorContent, Content } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const MyEditor = ({ content, saveHandler }: {content: Content, saveHandler: (content: string) => void}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  })

  const handleSave = () => {
    if (editor) {
      const content = editor.getHTML();
      saveHandler(content);
    }
  };

  return (
    <div className="border p-4">
      <EditorContent editor={editor} />
    </div>
  )
}

export default MyEditor