"use client";

import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { StreamLanguage } from "@codemirror/language";
import { commonLisp } from "@codemirror/legacy-modes/mode/commonlisp";
import { flattenLispCode } from "../lib/lisp";

export function CodePreview() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (copied) {
      timer = setTimeout(() => setCopied(false), 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(flattenLispCode);
    setCopied(true);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="text-sm text-slate-300">
          کد را در فایل متنی با پسوند <code className="font-mono">.lsp</code>{" "}
          ذخیره کنید و در اتوکد لود نمایید.
        </p>
        <button
          onClick={handleCopy}
          className="rounded-md border border-slate-500 bg-slate-800 px-4 py-2 text-sm font-medium transition hover:bg-slate-700"
        >
          {copied ? "کپی شد" : "کپی کردن"}
        </button>
      </div>
      <CodeMirror
        value={flattenLispCode}
        extensions={[StreamLanguage.define(commonLisp)]}
        theme={oneDark}
        editable={false}
        height="400px"
        basicSetup={{
          lineNumbers: true,
          foldGutter: false,
          highlightActiveLine: true,
          highlightActiveLineGutter: false
        }}
      />
    </div>
  );
}
