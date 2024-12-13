import { MySwal } from "@/lib/sweet-alert";
import { DeleteContent, DeleteContentProps } from "./delete-content";

export function deleteAlert(content?: DeleteContentProps) {
    return MySwal.fire({
        title: <DeleteContent content={content} />,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
    })
}