import { OrderChatPanelSkeleton } from "../components/LoadingSkeletons";
import { PageError } from "../components/PageError";
import { useOrderChatPage } from "../hooks/useOrderChatPage";

function OrderChatPage() {
  const { paid, client, error, channel, canInvite, inviteMutation } = useOrderChatPage();

  if (!paid) {
    return <p className="text-base-content/60">Complete payment to open support chat.</p>;
  }
  if (error) {
    return <PageError message={error} />;
  }
  if (!client || !channel) {
    return <OrderChatPanelSkeleton />;
  }

  return (
    <div className="space-y-4 text-left">
      <div>

      </div>
    </div>
  );
}

export default OrderChatPage;
