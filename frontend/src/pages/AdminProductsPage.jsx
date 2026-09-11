import { useAdminProductsPage } from "../hooks/useAdminProductsPage";

function AdminProductsPage() {
    const {
        getToken,
        meData,
        modalOpen,
        setModalOpen,
        editing,
        setEditing,
        products,
        isLoading,
        saveMutation,
        deleteMutation,
    } = useAdminProductsPage();

    return (
        <div>

        </div>
    );
}

export default AdminProductsPage;
