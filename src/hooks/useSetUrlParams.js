import { useNavigate, useLocation } from "react-router-dom";

export default function useSetUrlParams() {
  const navigate = useNavigate();
  const location = useLocation();

  function setParams(unosParametros) {
    const params = new URLSearchParams(location.search);

    Object.entries(unosParametros).forEach(([key, value]) => {
      params.set(key, value);
    });

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }

  return setParams;
}
