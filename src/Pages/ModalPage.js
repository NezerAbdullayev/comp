import React, { useState } from "react";
import Modal from "../Components/Modal";
import Button from "../Components/Button";

function ModalPage() {
  const [showModul, setShowModul] = useState(false);
  const handleClick = () => {
    setShowModul(true);
  };
  const handleClose = () => {
    setShowModul(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      insan resurslari uzre mutexesis
    </Modal>
  );
  return (
    <div className="relative">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        molestias iusto nemo est, praesentium sed atque et sint unde veritatis
        optio, quisquam animi doloribus expedita laborum distinctio odio
        dolores! Ex. Ipsam iure pariatur incidunt, maiores non deleniti
        exercitationem similique, nobis consectetur saepe reprehenderit officia.
        Laborum, natus autem id ducimus veniam sequi corporis! Consequuntur quis
        eos eligendi quam suscipit iste quisquam. Voluptas veniam expedita
        inventore iusto dolores ea omnis quidem fuga officiis facere,
        perspiciatis illo eos, laborum minima beatae iure aspernatur quas ad
        explicabo? Quisquam, libero repellendus necessitatibus fugit dolores
        officiis? Officiis voluptates esse natus dolore facere nihil beatae
        totam, ipsa illo in, fuga praesentium at voluptatem sint sapiente
        perferendis sequi. Aliquam quis quia, a vero sint beatae pariatur
        obcaecati sequi? Necessitatibus voluptatem et vitae autem nisi vero, vel
        perspiciatis, corporis voluptate non sunt ex hic voluptatum velit
        facilis? Mollitia doloribus, laborum cum pariatur sint cupiditate
        similique voluptate eum sapiente non? Consectetur, delectus iste eius
        ipsum, temporibus corporis et necessitatibus nam animi quis quod
        consequatur? Animi architecto suscipit officiis quisquam dicta ratione
        voluptatum natus maxime magnam consectetur. Debitis unde nostrum
        perspiciatis. Voluptas molestias adipisci laboriosam porro eligendi hic
        ex inventore nostrum accusamus minima? Ducimus minima dolore molestiae
        dignissimos voluptates commodi reiciendis omnis. Maiores, autem!
        Dignissimos architecto corporis blanditiis? Nihil, corporis
        reprehenderit. Inventore non distinctio, libero tempore ad obcaecati
        perferendis cumque accusantium itaque architecto corporis expedita
        facere magnam cupiditate, dolor voluptatibus, porro odit voluptatum.
        Aliquam, ullam cupiditate sed nostrum minima non necessitatibus. Non,
        possimus similique fuga nostrum voluptatem facere sapiente quibusdam!
        Neque eum quasi asperiores! Perferendis aut quis praesentium voluptate
        vero quia molestias, nemo eligendi, vitae iure provident ad consequatur
        ullam cum. Voluptate illo ipsa praesentium. Laboriosam magnam deserunt
        laborum fuga illum blanditiis maxime cum esse quia iure cupiditate hic
        optio molestias, officia ut aliquam doloremque quis cumque vitae velit?
        Maxime, consectetur?
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModul && modal}
    </div>
  );
}

export default ModalPage;
