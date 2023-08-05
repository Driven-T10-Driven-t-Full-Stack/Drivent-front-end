import * as paymentApi from '../../services/paymentApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function usePaymentPost() {
  const token = useToken();
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: postPayment
  } = useAsync((data) => paymentApi.postPayment(token, data));
  
  return {
    payment,
    paymentLoading,
    paymentError,
    postPayment
  };
}
