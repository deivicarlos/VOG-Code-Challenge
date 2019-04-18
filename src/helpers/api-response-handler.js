// eslint-disable-next-line import/extensions
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const toastConfig = {
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 5000,
};

export const handleApiSuccess = message =>
  MySwal.fire({
    ...toastConfig,
    type: 'success',
    title: message,
  });

export const handleApiWarning = message =>
  MySwal.fire({
    ...toastConfig,
    type: 'warning',
    title: message,
  });

export const apiResponseHandler = ({ code }) => {
  if (code === 'SUCCESS') {
    return true;
  }
  return false;
};
