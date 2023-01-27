import React, { useMemo } from 'react';
import Chip from '@mui/material/Chip';

export default function useGetPostCategoryChip(categories: string[]) {
  /* Views */
  const Chips = useMemo(
    () => (
      <React.Fragment>
        {categories.map((category, index) => (
          <Chip key={index} label={category} color="primary" />
        ))}
      </React.Fragment>
    ),
    [categories.toString()]
  );

  /* Main */
  return Chips;
}
