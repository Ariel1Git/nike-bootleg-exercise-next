import { useRouter } from 'next/router';

function CatalogDetails() {
  const router = useRouter();


  return (
    <div className="page">
      <h1 className="title">Sezione { router.query.id } {process.env.PUBLIC_NEXT_CUSTOM_KEY}</h1>
    </div>
   
  )
}

export default CatalogDetails;
