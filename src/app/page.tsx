import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <>
    <div>
      <h3 className="site-container text-blue-500">Rumeysa Aslan Demir</h3>
      <h1>Software Engineer</h1>
      <p>Bence en büyük özelliğim;
        Üzerinde çalıştığım işlerin her noktasında neden sorusunu onlarca kez sorup, gereksiz kalabalıktan soyutlayıp, kullanışlı ve sade ürünler tasarlayabilmek.
      </p>
      <p>İşim dışındaki zamanlarda; yeni yerler keşfetmeyi, kamp yapmayı ve fotoğraf çekmeyi seviyorum</p>

      <Link href="/blogs/yapay-zeka-nedir">Yapay zeka nedir</Link>
      <Link href="/blogs/recep-rumeysa-seviyor">recep-rumeysa-seviyor</Link>

      <p>Bu konularda soruların varsa veya kendi ürünün hakkında konuşmak istersen müsait günlerime bakabilirsin.</p></div>
      <div className="site-4xl-container mt-20">
        <Image src='/rdlogo.webp' alt="" />
      </div>
    </>
  );
}
