// types.ts
import { Ref } from 'vue'

export interface TableData {
    No: string;
    name: string;
    sex: string;
    Chinese: number;
    Math: number;
    English: number;
  }
  
export interface TableProvider {
    tableData: Ref<TableData[]>;
    addTableData: (data: TableData) => void;
}