import { useRouter } from 'next/router';

function CatalogDetails() {
  const router = useRouter();


  return (
    <div className="page">
      <h1 className="title">Sezione { router.query.id } </h1>
    </div>
   
  )
}

export default CatalogDetails;
