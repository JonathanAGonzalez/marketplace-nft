import Swal from 'sweetalert2';

type AlertType = 'success' | 'error' | 'warning' | 'info' | 'question';

const types = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
  question: 'question',
};

export const renderAlert = (
  alertType: AlertType = 'success',
  msg: string,
  title: string
) => {
  Swal.fire({
    title: title,
    text: msg,
    icon: types[alertType] as AlertType,
    confirmButtonText: 'Cool',
  });
};
