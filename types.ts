
export enum UserRole {
  EMPLOYEE = '员工',
  STORE_MANAGER = '店长',
  AREA_MANAGER = '小区经理',
  DISTRICT_MANAGER = '区经理'
}

export enum RectificationStatus {
  PENDING = '待整改',
  AUDITING = '待审核',
  COMPLETED = '整改完成',
  ALL = '全部'
}

export interface RectificationOrder {
  id: string;
  title: string;
  source: string;
  date: string;
  status: RectificationStatus;
  score?: number;
  progress?: string;
}

export interface InspectionTask {
  id: string;
  name: string;
  type: 'self' | 'video' | 'regular' | 'special' | 'ai';
  status: 'pending' | 'completed';
  dueDate: string;
  storeName?: string;
  score?: number;
}
