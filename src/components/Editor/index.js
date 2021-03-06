import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import RawTool from '@editorjs/raw';
import Table from '@editorjs/table';
import UppyUploader from './UppyUploader';
import Marker from '@editorjs/marker';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import { useSelector } from 'react-redux';
import Embed from './Embed';

function Editor({ value, onChange }) {
  const editor_block = React.useRef(null);
  const space_slug = useSelector((state) => state.spaces.details[state.spaces.selected].slug);

  React.useEffect(() => {
    new EditorJS({
      holder: editor_block.current,
      tools: {
        header: Header,
        list: List,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        quote: Quote,
        raw: RawTool,
        table: Table,
        code: CodeTool,
        delimiter: Delimiter,
        inlineCode: InlineCode,
        marker: {
          class: Marker,
        },
        embed: {
          class: Embed,
        },
        uppy: {
          class: UppyUploader,
          config: {
            space_slug: space_slug,
          },
        },
      },
      placeholder: 'Let`s write an awesome story!',
      onChange: (value) =>
        value.saver.save().then((value) => {
          onChange(value);
        }),
      data: value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={editor_block}></div>;
}

export default Editor;
