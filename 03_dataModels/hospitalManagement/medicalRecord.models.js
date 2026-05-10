import mongoose, { mongo } from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },

    doctorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },

    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
    },

    diagnosis: {
        type: String
    },

    medication: [
        {
            medicineName: String,
            dosage: String,
            frequency: String,
        }
    ],

    visitDate: {
        type: Date,
        default: Date.now
    },

    allergies: [String],

    reports: [
        {
            reportName: String,
            reportUrl: String
        }
    ],

}, { timestamps: true })

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)