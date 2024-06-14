const medicalDepartments = [
  {
    id: "cardiology",
    label: "Cardiology",
    services: [
      {
        id: "echo",
        label: "Echocardiogram",
        description:
          "An ultrasound scan of the heart to evaluate its structure and function.",
        duration: "30 minutes",
      },
      {
        id: "ecg",
        label: "Electrocardiogram (ECG)",
        description:
          "A test that measures the electrical activity of the heart.",
        duration: "15 minutes",
      },
      {
        id: "stressTest",
        label: "Stress Test",
        description:
          "A test to assess how the heart works under physical stress.",
        duration: "45 minutes",
      },
      {
        id: "holter",
        label: "Holter Monitoring",
        description:
          "Continuous monitoring of the heart's rhythm for 24-48 hours.",
        duration: "48 hours",
      },
      {
        id: "consultation",
        label: "Cardiology Consultation",
        description:
          "A consultation with a cardiologist to discuss heart-related concerns.",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "neurology",
    label: "Neurology",
    services: [
      {
        id: "emg",
        label: "Electromyography (EMG)",
        description:
          "A diagnostic procedure to assess the health of muscles and the nerve cells that control them.",
        duration: "60 minutes",
      },
      {
        id: "eeg",
        label: "Electroencephalogram (EEG)",
        description: "A test that detects electrical activity in the brain.",
        duration: "45 minutes",
      },
      {
        id: "nerveConduction",
        label: "Nerve Conduction Study",
        description:
          "A test to measure the speed and strength of signals traveling between two or more points.",
        duration: "30 minutes",
      },
      {
        id: "consultation",
        label: "Neurology Consultation",
        description:
          "A consultation with a neurologist to discuss nervous system-related concerns.",
        duration: "30 minutes",
      },
      {
        id: "mri",
        label: "Brain MRI",
        description:
          "Magnetic resonance imaging of the brain to detect abnormalities.",
        duration: "60 minutes",
      },
    ],
  },
  {
    id: "orthopedics",
    label: "Orthopedics",
    services: [
      {
        id: "xray",
        label: "X-Ray",
        description: "Imaging to view the bones and joints.",
        duration: "20 minutes",
      },
      {
        id: "mri",
        label: "MRI",
        description: "Magnetic resonance imaging to view soft tissues.",
        duration: "60 minutes",
      },
      {
        id: "casting",
        label: "Casting",
        description: "Applying a cast to a broken bone.",
        duration: "30 minutes",
      },
      {
        id: "physicalTherapy",
        label: "Physical Therapy",
        description: "Rehabilitation to restore movement and function.",
        duration: "60 minutes",
      },
      {
        id: "consultation",
        label: "Orthopedic Consultation",
        description:
          "A consultation with an orthopedic surgeon to discuss bone and joint-related concerns.",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "pediatrics",
    label: "Pediatrics",
    services: [
      {
        id: "wellChildCheck",
        label: "Well-Child Check",
        description:
          "Regular check-up to monitor a child's growth and development.",
        duration: "30 minutes",
      },
      {
        id: "vaccination",
        label: "Vaccination",
        description: "Immunizations to protect against various diseases.",
        duration: "15 minutes",
      },
      {
        id: "sickVisit",
        label: "Sick Visit",
        description: "Consultation for a child who is ill.",
        duration: "20 minutes",
      },
      {
        id: "developmentalScreening",
        label: "Developmental Screening",
        description: "Assessment of a child's developmental milestones.",
        duration: "30 minutes",
      },
      {
        id: "consultation",
        label: "Pediatric Consultation",
        description:
          "A consultation with a pediatrician to discuss child health concerns.",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "dermatology",
    label: "Dermatology",
    services: [
      {
        id: "skinCheck",
        label: "Skin Check",
        description: "A full-body examination to check for skin abnormalities.",
        duration: "20 minutes",
      },
      {
        id: "biopsy",
        label: "Skin Biopsy",
        description: "Removal of a small sample of skin for testing.",
        duration: "30 minutes",
      },
      {
        id: "laserTreatment",
        label: "Laser Treatment",
        description: "Use of laser to treat skin conditions.",
        duration: "45 minutes",
      },
      {
        id: "acneTreatment",
        label: "Acne Treatment",
        description: "Treatment for acne using various methods.",
        duration: "30 minutes",
      },
      {
        id: "consultation",
        label: "Dermatology Consultation",
        description:
          "A consultation with a dermatologist to discuss skin-related concerns.",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "gynecology",
    label: "Gynecology",
    services: [
      {
        id: "papSmear",
        label: "Pap Smear",
        description: "A test to screen for cervical cancer.",
        duration: "15 minutes",
      },
      {
        id: "pelvicExam",
        label: "Pelvic Exam",
        description:
          "A physical examination of the female reproductive organs.",
        duration: "20 minutes",
      },
      {
        id: "ultrasound",
        label: "Ultrasound",
        description: "Imaging to view the reproductive organs.",
        duration: "30 minutes",
      },
      {
        id: "mammogram",
        label: "Mammogram",
        description: "Breast imaging to screen for breast cancer.",
        duration: "30 minutes",
      },
      {
        id: "consultation",
        label: "Gynecology Consultation",
        description:
          "A consultation with a gynecologist to discuss reproductive health concerns.",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "general_surgery",
    label: "General Surgery",
    services: [
      {
        id: "appendectomy",
        label: "Appendectomy",
        description: "Surgical removal of the appendix.",
        duration: "60 minutes",
      },
      {
        id: "biopsy",
        label: "Biopsy",
        description: "Surgical removal of a tissue sample for testing.",
        duration: "30 minutes",
      },
      {
        id: "herniaRepair",
        label: "Hernia Repair",
        description: "Surgical repair of a hernia.",
        duration: "90 minutes",
      },
      {
        id: "gallbladderRemoval",
        label: "Gallbladder Removal",
        description: "Surgical removal of the gallbladder.",
        duration: "60 minutes",
      },
      {
        id: "consultation",
        label: "Surgical Consultation",
        description:
          "A consultation with a surgeon to discuss surgical options.",
        duration: "30 minutes",
      },
    ],
  },
  {
    id: "psychiatry",
    label: "Psychiatry",
    services: [
      {
        id: "consultation",
        label: "Psychiatric Consultation",
        description:
          "A consultation with a psychiatrist to discuss mental health concerns.",
        duration: "60 minutes",
      },
      {
        id: "therapySession",
        label: "Therapy Session",
        description:
          "A session with a therapist to discuss and work through mental health issues.",
        duration: "60 minutes",
      },
      {
        id: "medicationManagement",
        label: "Medication Management",
        description: "Management and adjustment of psychiatric medications.",
        duration: "30 minutes",
      },
      {
        id: "psychEvaluation",
        label: "Psychological Evaluation",
        description:
          "Comprehensive evaluation of mental health and cognitive function.",
        duration: "90 minutes",
      },
      {
        id: "groupTherapy",
        label: "Group Therapy",
        description: "Therapy session conducted in a group setting.",
        duration: "90 minutes",
      },
    ],
  },
  {
    id: "radiology",
    label: "Radiology",
    services: [
      {
        id: "xray",
        label: "X-Ray",
        description: "Imaging to view bones and certain organs.",
        duration: "20 minutes",
      },
      {
        id: "ctScan",
        label: "CT Scan",
        description:
          "Cross-sectional imaging to view detailed internal structures.",
        duration: "30 minutes",
      },
      {
        id: "mri",
        label: "MRI",
        description: "Magnetic resonance imaging to view soft tissues.",
        duration: "60 minutes",
      },
      {
        id: "ultrasound",
        label: "Ultrasound",
        description: "Imaging using sound waves to view internal organs.",
        duration: "30 minutes",
      },
      {
        id: "mammogram",
        label: "Mammogram",
        description: "Breast imaging to screen for breast cancer.",
        duration: "30 minutes",
      },
    ],
  },
];

export default medicalDepartments;
