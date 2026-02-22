import { getCartUuid } from './api/cartUuid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { qtyUpdate } from './api/qtyUpdate';

export default function PlusButton({ tacoID }) {
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
        <svg
          className="h-4 w-4 text-green-500"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {' '}
          <circle cx="11" cy="11" r="8" /> <line x1="21" y1="21" x2="16.65" y2="16.65" />{' '}
          <line x1="11" y1="8" x2="11" y2="14" /> <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </button>
    </>
  );
}
