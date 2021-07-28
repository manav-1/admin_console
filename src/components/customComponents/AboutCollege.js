import college from "../../assets/College.png";
export default function AboutCollege() {
  return (
    <div
      style={{ width: "100%", margin: "auto", marginVertical: '3rem'}}
      className="row landing-college py-5"
    >
      <div className="col-sm-8 row mx-auto p-3 text-white">
        <h1 className="font-weight-bold col-sm-12">
          About Keshav Mahavidyalaya
        </h1>
        <div className="col-sm-6">
          <p className="about-college mt-4">
            Velit proident fugiat amet voluptate labore non eiusmod nulla anim
            commodo aute exercitation sunt nulla. Deserunt laborum nulla do
            velit ullamco et anim amet laborum amet. Do enim est duis
            consectetur quis exercitation. Laboris id sunt et sunt nisi. Ea nisi
            ipsum pariatur tempor laborum tempor nulla cupidatat magna fugiat.
            <br></br>
            <br></br>Exercitation culpa reprehenderit nostrud cupidatat quis
            consequat velit ipsum non. Dolore culpa qui ad eiusmod sit cupidatat
            qui. Veniam eu in pariatur aute aliqua tempor esse occaecat ullamco
            velit occaecat adipisicing culpa. Reprehenderit eu amet tempor
            incididunt tempor commodo cillum. Sit culpa cillum consectetur ex
            commodo cupidatat adipisicing exercitation fugiat labore. Tempor
            officia voluptate ea dolore id eu enim magna nulla cillum non.{" "}
            <br></br>
            <br></br>
            Aliqua culpa et in labore elit laboris ut non officia nostrud qui.
            Est ullamco culpa aute exercitation eiusmod officia proident nostrud
            ex. Amet sit Lorem ut ad tempor elit cillum elit quis Lorem. Duis
            irure excepteur mollit quis cupidatat amet nisi id consectetur
            aliqua culpa dolore. Dolore ullamco tempor qui ex.
          </p>
        </div>
        <div className="col-sm-6">
          <img style ={{width: "100%" }}src={college} alt="College" />
        </div>
      </div>
    </div>
  );
}
