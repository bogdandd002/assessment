import { IItem } from '@coreui/angular-pro';

const usersData: IItem[] = [
    {id: 0, name: 'John Doe', registered: '2022/01/01', role: 'Guest', status: 'Pending' },
    {id: 1, name: 'Samppa Nori', registered: '2022/01/31', role: 'Member', status: 'Active', _props: { color: 'success', align: 'middle' },},
    {id: 2, name: 'Estavan Lykos', registered: '2022/02/01', role: 'Staff', status: 'Banned', _cellProps: { 'name': { color: 'info', active: true }}},
    {id: 3, name: 'Chetan Mohamed', registered: '2022/02/01', role: 'Admin', status: 'Inactive', _cellProps: { _all: { color: 'danger'}, role: { active: true }}},
    {id: 4, name: 'Derick Maximinus', registered: '2022/03/01', role: 'Member', status: 'Pending', _selected: true },
    {id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active'},
    {id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/07', role: 'Member', status: 'Active'},
    {id: 7, name: 'Avram Tarasios', registered: '2022/02/08', role: 'Staff', status: 'Banned'},
    {id: 8, name: 'Quintin Ed', registered: '2022/02/01', role: 'Admin', status: 'Inactive'},
    {id: 9, name: 'Enéas Kwadwo', registered: '2022/03/01', role: 'Member', status: 'Pending'},
    
   
  
  
    
    
  ]
export default usersData