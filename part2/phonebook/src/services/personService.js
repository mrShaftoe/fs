import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseURL).then(response => response.data);
const addPerson = person => axios.post(baseURL, person).then(response => response.data);
const deletePerson = id => axios.delete(`${baseURL}/${id}`);
const updatePerson = (id, updPerson) => axios.put(`${baseURL}/${id}`, updPerson).then(response => response.data);

export default {getAll, addPerson, deletePerson, updatePerson};
