import { getCartUuid } from './api/cartUuid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { qtyUpdate } from './api/qtyUpdate';

export default function MinusButton({ tacoID }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: qtyUpdate,
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries(['cart']);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const minus = (e) => {
    e.preventDefault();
    // if (isLogin()) {
    mutate({
      uuid: getCartUuid(),
      modus: 'remove',
      tacoId: tacoID,
    });
    // } else {
    //   navigate("/login");
    // }
  };

  return (
    <>
      <button className="" type="button" onClick={minus}>
        <strong>[- 1]</strong>
      </button>
    </>
  );
}
