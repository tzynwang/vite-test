import React from 'react';
import { REPLACEMENT } from '@/models/GeneralModels';

function useReplaceToString(rawString: string, replacement: string[]) {
  const splitString = rawString.split(REPLACEMENT);
  let finalString = '';
  splitString.forEach((chunk, index) => {
    finalString += chunk;
    if (replacement[index]) {
      finalString += replacement[index];
    }
  });
  return finalString;
}

function useReplaceToNode(rawString: string, replacement: React.ReactNode[]) {
  const splitString = rawString.split(REPLACEMENT);
  const finalNodeArray: React.ReactNode[] = [];
  splitString.forEach((chunk, index) => {
    finalNodeArray.push(chunk);
    if (replacement[index]) {
      finalNodeArray.push(replacement[index]);
    }
  });
  return (
    <React.Fragment>
      {finalNodeArray.map((node, index) => (
        <React.Fragment key={index}>{node}</React.Fragment>
      ))}
    </React.Fragment>
  );
}

export { useReplaceToString, useReplaceToNode };
