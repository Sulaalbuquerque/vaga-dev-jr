import { useContext } from "react"

import { BagIsVisibleContext } from '../../../../../contexts/BagIsVisibleContext'
import { CounterBagContext } from '../../../../../contexts/CounterBagContext'

import imgArrowLeft from '../../../../../../public/assets/svgs/angle-left-solid.svg'

import { ContainerBag } from "./style"

import { ProductBag } from "./ProductBag.jsx"

import { games } from '../../../../../../public/datas/products.json'

export const Bag = () => {

  const { bagIsVisible } = useContext(BagIsVisibleContext)
  const { counterGameCard1, setCounterGameCard1,
          counterGameCard2, setCounterGameCard2,
          counterGameCard3, setCounterGameCard3,
          totalRequests } = useContext(CounterBagContext)

  const addTotalAmount = () => {
    const amountCard1 = counterGameCard1 * games[0].price
    const amountCard2 = counterGameCard2 * games[1].price
    const amountCard3 = counterGameCard3 * games[2].price

    const totalAmount = amountCard1 + amountCard2 + amountCard3

    return totalAmount.toFixed(2)
  }

  return (
    <>
      <ContainerBag 
        isVisibleBag={bagIsVisible}
      >

        <div className="arrow"></div>

        <div className="main">
          <p>Você tem {totalRequests} pedido(s):</p>
          <a href="#">
            <img src={imgArrowLeft}/>
            Adicionar mais
          </a>

          <ProductBag
            name={games[0].name}
            price={(games[0].price).toFixed(2)}
            amount={counterGameCard1}
            setStateAdd={() => setCounterGameCard1(counterGameCard1 + 1)}
            setStateSubtract={() => setCounterGameCard1(
              counterGameCard1 > 0 ? counterGameCard1 - 1 : counterGameCard1
            )}
          />

          <ProductBag
            name={games[1].name}
            price={(games[1].price).toFixed(2)}
            amount={counterGameCard2}
            setStateAdd={() => setCounterGameCard2(counterGameCard2 + 1)}
            setStateSubtract={() => setCounterGameCard2(
              counterGameCard2 > 0 ? counterGameCard2 - 1 : counterGameCard2
            )}
          />

          <ProductBag
            name={games[2].name}
            price={(games[2].price).toFixed(2)}
            amount={counterGameCard3}
            setStateAdd={() => setCounterGameCard3(counterGameCard3 + 1)}
            setStateSubtract={() => setCounterGameCard3(
              counterGameCard3 > 0 ? counterGameCard3 - 1 : counterGameCard3
            )}
          />

          <div className="total">
            <p>Valor total: R$ {addTotalAmount()}</p>
          </div>

          <button className="finish">Fializar compra</button>
        </div>

      </ContainerBag>
    </>
  )
}