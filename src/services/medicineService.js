// src/services/medicineService.js
import {
  collection, doc, addDoc, updateDoc, deleteDoc,
  getDocs, getDoc, query, where, orderBy, setDoc, Timestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';

// ─── Medicines ───────────────────────────────────────────────
export async function addMedicine(userId, data) {
  const ref = collection(db, 'users', userId, 'medicines');
  const docRef = await addDoc(ref, {
    ...data,
    remainingTablets: data.totalTablets,
    createdAt: new Date().toISOString()
  });
  return docRef.id;
}

export async function getMedicines(userId) {
  const ref = collection(db, 'users', userId, 'medicines');
  const snap = await getDocs(ref);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function updateMedicine(userId, medId, data) {
  const ref = doc(db, 'users', userId, 'medicines', medId);
  await updateDoc(ref, data);
}

export async function deleteMedicine(userId, medId) {
  const ref = doc(db, 'users', userId, 'medicines', medId);
  await deleteDoc(ref);
}

// ─── Intake Logs ─────────────────────────────────────────────
// dateStr format: 'yyyy-MM-dd'
export async function markIntake(userId, medId, dateStr, timeSlot, status) {
  const logId = `${medId}_${dateStr}_${timeSlot}`;
  const ref = doc(db, 'users', userId, 'intakeLogs', logId);
  await setDoc(ref, {
    medId,
    date: dateStr,
    timeSlot,
    status, // 'taken' | 'missed' | 'skipped'
    updatedAt: new Date().toISOString()
  }, { merge: true });

  // Deduct tablet if taken
  if (status === 'taken') {
    const medRef = doc(db, 'users', userId, 'medicines', medId);
    const medSnap = await getDoc(medRef);
    if (medSnap.exists()) {
      const remaining = (medSnap.data().remainingTablets || 0) - 1;
      await updateDoc(medRef, { remainingTablets: Math.max(0, remaining) });
    }
  }
}

export async function getIntakeLogsForDate(userId, dateStr) {
  const ref = collection(db, 'users', userId, 'intakeLogs');
  const q = query(ref, where('date', '==', dateStr));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getIntakeLogsForMonth(userId, year, month) {
  // month is 1-indexed
  const startStr = `${year}-${String(month).padStart(2, '0')}-01`;
  const endMonth = month === 12 ? 1 : month + 1;
  const endYear = month === 12 ? year + 1 : year;
  const endStr = `${endYear}-${String(endMonth).padStart(2, '0')}-01`;

  const ref = collection(db, 'users', userId, 'intakeLogs');
  const q = query(ref, where('date', '>=', startStr), where('date', '<', endStr));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getAllIntakeLogs(userId) {
  const ref = collection(db, 'users', userId, 'intakeLogs');
  const snap = await getDocs(ref);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
