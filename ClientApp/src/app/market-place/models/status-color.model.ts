import { ThemePalette } from '@angular/material/core';
import { ContractState } from '.';

export interface StatusColor {
  state: ContractState;
  color: ThemePalette;
}
