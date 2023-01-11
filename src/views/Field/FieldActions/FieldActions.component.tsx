import React, { FC, ReactElement } from 'react';
import styles from './field-actions.module.scss';
import FieldSizeComponent from './FieldSize.component';

interface Props {
  rowsAndColumns: number;
  setRowsAndColumns: (rowsAndColumns: number) => void;
}

const FieldActionsComponent: FC<Props> = ({ rowsAndColumns, setRowsAndColumns }): ReactElement => {
  return (
    <div className={styles.fieldActions}>
      <FieldSizeComponent rowsAndColumns={rowsAndColumns} setRowsAndColumns={setRowsAndColumns}/>
    </div>
  );
};

export default FieldActionsComponent;