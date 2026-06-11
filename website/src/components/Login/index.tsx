import LoginForm from "../LoginForm";
import { loadGarments } from "@/modules/garmentsData";

export default async function Login() {

  const garments = await loadGarments();

  return (
          <div className="w-screen h-screen flex bg-white">
            <LoginForm />

            <div className="absolute bottom-0 left-0 w-screen h-fit flex items-end">
              {garments.map((garment, i) => {
                if (i < 5) {
                  return (<div   className="aspect-square origin-bottom-left" style={{width: i * 20 + '%'}}  key={`index-${i}`}><img src={garment.image.src} className="w-full h-full object-cover" /></div>)
                }
              })}
            </div>
          </div>
  )
}
