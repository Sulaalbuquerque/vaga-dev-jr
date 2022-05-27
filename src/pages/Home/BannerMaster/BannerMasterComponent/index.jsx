import { ContainerBannerMasterComponent } from "./style"

export const BannerMasterComponent = ({ title, value, penny, description }) => {
    
  return (
    <>
      <ContainerBannerMasterComponent>
        <h1>{title}</h1>
        <h2>
          R$ {value}
          <span className="penny">,{penny}</span>
        </h2>
        <p>{description}</p>
      </ContainerBannerMasterComponent> 
    </>
  )
}