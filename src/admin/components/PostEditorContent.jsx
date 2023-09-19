import { Editor } from '@tinymce/tinymce-react'

export function PostEditorContent(props) {
  return (
    <Editor
      init={{
        menubar: false,
        elementpath: false,
        language: 'pt_BR',
        invalid_styles: 'color font-size font-family',
      }}
      apiKey={import.meta.env.VITE_TINY_EDITOR_API_KEY}
      toolbar={`undo redo | bold italic underline | alignLeft alignCenter alignRight | indent outdent | numlist bullist | preview fullscreen`}
      plugins={['wordcount', 'lists', 'advlist', 'preview', 'fullscreen']}
      {...props}
    />
  )
}
