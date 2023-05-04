import Swal, { SweetAlertIcon } from "sweetalert2";

interface SwalProps {
  icon: SweetAlertIcon;
  title: string;
  text: string;
  confirmButtonText: string;
}

interface SwalCommonProps {
  icon: SweetAlertIcon;
  value: string;
}

function showSwal({ icon, title, text, confirmButtonText }: SwalProps) {
  return Swal.fire({
    icon,
    title,
    text,
    confirmButtonText,
  });
}

export default function SwalCommon({ icon, value }: SwalCommonProps) {
  showSwal({
    icon,
    title: "Answer",
    text: `Answer : ${value}`,
    confirmButtonText: "OK",
  });
}
