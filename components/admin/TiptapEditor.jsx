'use client';
import { useCallback } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Placeholder } from '@tiptap/extension-placeholder';

export default function TiptapEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: { openOnClick: false },
      }),
      Placeholder.configure({
        placeholder: 'Escribe tu artículo aquí…',
      }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const previous = editor.getAttributes('link').href;
    const url = window.prompt('URL del enlace', previous || 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  const buttons = [
    { label: 'Negrita', active: editor.isActive('bold'), onClick: () => editor.chain().focus().toggleBold().run() },
    { label: 'Cursiva', active: editor.isActive('italic'), onClick: () => editor.chain().focus().toggleItalic().run() },
    { label: 'Tachado', active: editor.isActive('strike'), onClick: () => editor.chain().focus().toggleStrike().run() },
    { label: 'H2', active: editor.isActive('heading', { level: 2 }), onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { label: 'H3', active: editor.isActive('heading', { level: 3 }), onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
    { label: '• Lista', active: editor.isActive('bulletList'), onClick: () => editor.chain().focus().toggleBulletList().run() },
    { label: '1. Lista', active: editor.isActive('orderedList'), onClick: () => editor.chain().focus().toggleOrderedList().run() },
    { label: '❝ Cita', active: editor.isActive('blockquote'), onClick: () => editor.chain().focus().toggleBlockquote().run() },
    { label: '</> Código', active: editor.isActive('codeBlock'), onClick: () => editor.chain().focus().toggleCodeBlock().run() },
    { label: '🔗 Enlace', active: editor.isActive('link'), onClick: setLink },
    { label: '⎯ Línea', active: false, onClick: () => editor.chain().focus().setHorizontalRule().run() },
    { label: '↶', active: false, onClick: () => editor.chain().focus().undo().run() },
    { label: '↷', active: false, onClick: () => editor.chain().focus().redo().run() },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="flex flex-wrap gap-1 border-b border-border bg-cream px-3 py-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            title={button.label}
            onClick={button.onClick}
            className={`rounded-lg px-2.5 py-1.5 text-sm transition ${
              button.active
                ? 'bg-pink text-white'
                : 'text-navy hover:bg-[#fdf1f7] hover:text-pink'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}