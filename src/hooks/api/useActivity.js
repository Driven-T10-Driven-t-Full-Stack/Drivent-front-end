import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activityApi from '../../services/activityApi';

export function useActivity() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getAllActivities,
  } = useAsync(() => activityApi.getActivities(token), false);

  return {
    activity,
    activityLoading,
    activityError,
    getAllActivities,
  };
}

export function useActivityPost() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: postActivities,
  } = useAsync((data) => activityApi.postActivities(data, token), false);

  return {
    activity,
    activityLoading,
    activityError,
    postActivities,
  };
}

export function useUserActivity() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getUserActivities,
  } = useAsync((data) => activityApi.getUserActivities(token), false);

  return {
    activity,
    activityLoading,
    activityError,
    getUserActivities,
  };
}
