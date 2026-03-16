/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useMonaco } from "@monaco-editor/react";
import { tailwindClasses } from "../constansts/tailwindClasses";

// numeric scale used by spacing, sizing utilities
const numericScale = [
  "0",
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96",
];

// prefixes that accept the numeric scale
const scaledPrefixes = [
  "w-",
  "h-",
  "min-w-",
  "max-w-",
  "min-h-",
  "max-h-",
  "p-",
  "px-",
  "py-",
  "pt-",
  "pb-",
  "pl-",
  "pr-",
  "m-",
  "mx-",
  "my-",
  "mt-",
  "mb-",
  "ml-",
  "mr-",
  "gap-",
  "gap-x-",
  "gap-y-",
  "space-x-",
  "space-y-",
  "top-",
  "bottom-",
  "left-",
  "right-",
  "text-",
  "rounded-",
  "border-",
  "inset-",
  "translate-x-",
  "translate-y-",
];

const useTailwindAutocomplete = () => {
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    const provider = monaco.languages.registerCompletionItemProvider("html", {
      triggerCharacters: ['"', " ", "-"],

      provideCompletionItems: (model: any, position: any) => {
        const word = model.getWordUntilPosition(position);

        // get the full typed token including dashes (e.g. "space-y-")
        const lineContent = model.getLineContent(position.lineNumber);
        const textBeforeCursor = lineContent.substring(0, position.column - 1);
        const tokenMatch = textBeforeCursor.match(/[\w-]+$/);
        const typedToken = tokenMatch ? tokenMatch[0] : word.word;

        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: position.column - typedToken.length,
          endColumn: position.column,
        };

        // tier 1 — static suggestions
        const staticSuggestions = tailwindClasses
          .filter((cls) => cls.startsWith(typedToken))
          .map((cls) => ({
            label: cls,
            kind: monaco.languages.CompletionItemKind.Value,
            insertText: cls,
            range,
            sortText: "a_" + cls, // sorts above dynamic
          }));

        // tier 2 — dynamic scaled suggestions
        const dynamicSuggestions = scaledPrefixes
          .filter(
            (prefix) =>
              prefix.startsWith(typedToken) || typedToken.startsWith(prefix),
          )
          .flatMap((prefix) =>
            numericScale.map((value) => ({
              label: `${prefix}${value}`,
              kind: monaco.languages.CompletionItemKind.Value,
              insertText: `${prefix}${value}`,
              range,
              sortText: "b_" + prefix + value, // sorts below static
            })),
          );

        return {
          suggestions: [...staticSuggestions, ...dynamicSuggestions],
        };
      },
    });

    return () => provider.dispose();
  }, [monaco]);
};

export default useTailwindAutocomplete;
