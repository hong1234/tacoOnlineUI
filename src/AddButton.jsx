import { getCartUuid } from './api/cartUuid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { qtyUpdate } from './api/qtyUpdate';

export default function AddButton({ tacoID }) {
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

  const add = (e) => {
    e.preventDefault();
    // if (isLogin()) {
    mutate({
      uuid: getCartUuid(),
      modus: 'add',
      tacoId: tacoID,
    });
    // } else {
    //   navigate("/login");
    // }
  };

  return (
    <>
      <button className="" type="button" onClick={add}>
        <strong>(+ 1)</strong>
      </button>
    </>
  );
}
