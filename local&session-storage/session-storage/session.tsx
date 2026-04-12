//Storing multi-step form progress to prevent data loss on accidental refresh.

sessionStorage.setItem('formStep', '2');

const step = sessionStorage.getItem('formStep');