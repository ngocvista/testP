import { Router } from 'express'

// const { adminRegister, adminLogIn, deleteAdmin, getAdminDetail, updateAdmin } = require('../controllers/admin-controller.js');

import { adminRegister, adminLogIn, getAdminDetail} from '../controllers/admin-controller.js';
import { sclassCreate, sclassList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents } from '../controllers/class-controller.js';
import { complainCreate, complainList } from '../controllers/complain-controller.js';
import { noticeCreate, noticeList, deleteNotices, deleteNotice, updateNotice } from '../controllers/notice-controller.js';
import {
    studentRegister,
    studentLogIn,
    getStudents,
    getStudentDetail,
    deleteStudents,
    deleteStudent,
    updateStudent,
    studentAttendance,
    deleteStudentsByClass,
    updateExamResult,
    clearAllStudentsAttendanceBySubject,
    clearAllStudentsAttendance,
    removeStudentAttendanceBySubject,
    removeStudentAttendance } from '../controllers/student_controller.js';
import { subjectCreate, classSubjects, deleteSubjectsByClass, getSubjectDetail, deleteSubject, freeSubjectList, allSubjects, deleteSubjects } from '../controllers/subject-controller.js';
import { teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeachersByClass, deleteTeacher, updateTeacherSubject, teacherAttendance } from '../controllers/teacher-controller.js';

const allRouter = Router()
// Admin
allRouter.post('/AdminReg', adminRegister);
allRouter.post('/AdminLogin', adminLogIn);

allRouter.get("/Admin/:id", getAdminDetail)
// router.delete("/Admin/:id", deleteAdmin)

// router.put("/Admin/:id", updateAdmin)

// Student

allRouter.post('/StudentReg', studentRegister);
allRouter.post('/StudentLogin', studentLogIn)

allRouter.get("/Students/:id", getStudents)
allRouter.get("/Student/:id", getStudentDetail)

allRouter.delete("/Students/:id", deleteStudents)
allRouter.delete("/StudentsClass/:id", deleteStudentsByClass)
allRouter.delete("/Student/:id", deleteStudent)

allRouter.put("/Student/:id", updateStudent)

allRouter.put('/UpdateExamResult/:id', updateExamResult)

allRouter.put('/StudentAttendance/:id', studentAttendance)

allRouter.put('/RemoveAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
allRouter.put('/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);

allRouter.put('/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
allRouter.put('/RemoveStudentAtten/:id', removeStudentAttendance)

// Teacher

allRouter.post('/TeacherReg', teacherRegister);
allRouter.post('/TeacherLogin', teacherLogIn)

allRouter.get("/Teachers/:id", getTeachers)
allRouter.get("/Teacher/:id", getTeacherDetail)

allRouter.delete("/Teachers/:id", deleteTeachers)
allRouter.delete("/TeachersClass/:id", deleteTeachersByClass)
allRouter.delete("/Teacher/:id", deleteTeacher)

allRouter.put("/TeacherSubject", updateTeacherSubject)

allRouter.post('/TeacherAttendance/:id', teacherAttendance)

// Notice

allRouter.post('/NoticeCreate', noticeCreate);

allRouter.get('/NoticeList/:id', noticeList);

allRouter.delete("/Notices/:id", deleteNotices)
allRouter.delete("/Notice/:id", deleteNotice)

allRouter.put("/Notice/:id", updateNotice)

// Complain

allRouter.post('/ComplainCreate', complainCreate);

allRouter.get('/ComplainList/:id', complainList);

// Sclass

allRouter.post('/SclassCreate', sclassCreate);

allRouter.get('/SclassList/:id', sclassList);
allRouter.get("/Sclass/:id", getSclassDetail)

allRouter.get("/Sclass/Students/:id", getSclassStudents)

allRouter.delete("/Sclasses/:id", deleteSclasses)
allRouter.delete("/Sclass/:id", deleteSclass)

// Subject

allRouter.post('/SubjectCreate', subjectCreate);

allRouter.get('/AllSubjects/:id', allSubjects);
allRouter.get('/ClassSubjects/:id', classSubjects);
allRouter.get('/FreeSubjectList/:id', freeSubjectList);
allRouter.get("/Subject/:id", getSubjectDetail)

allRouter.delete("/Subject/:id", deleteSubject)
allRouter.delete("/Subjects/:id", deleteSubjects)
allRouter.delete("/SubjectsClass/:id", deleteSubjectsByClass)

export default allRouter