import React, { useState, useEffect } from 'react';
import database from './firebase';
import { ref, onValue, off } from 'firebase/database';

const RealtimeData = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    // const dataRef = ref(database, 'data'); // reemplace 'data' con la ruta a sus datos
    const dataRef = ref(database, 'users'); // cambiar a 'users'
    const unsubscribe = onValue(dataRef, (snapshot) => {
      setUsers(snapshot.val());
    });

    return () => {
      off(dataRef, unsubscribe);
    };
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(users).map(([id, user]) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RealtimeData;