import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activityApi from '../../services/activityApi';

export function useActivityGet() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getAllActivities
  } = useAsync(() => activityApi.getActivities(token));

  return {
    activity,
    activityLoading,
    activityError,
    getAllActivities
  };
}

export function useActivityPost() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: postActivities
  } = useAsync((data) => activityApi.postActivities(data, token));

  return {
    activity,
    activityLoading,
    activityError,
    postActivities
  };
}

export function useGetUserActivity() {
  const token = useToken();

  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getUserActivities
  } = useAsync((data) => activityApi.getUserActivities(token));

  return {
    activity,
    activityLoading,
    activityError,
    getUserActivities
  };
}
