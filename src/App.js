import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatetotal } from './features/cart/cart'
import Modal from './Components/Modal'
function App() {

  const { cartItems } = useSelector((store) => store.cart)

  const { isopen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculatetotal())
  }, [cartItems])

  return (
    <>
      <main>
        {isopen && <Modal />}



        <Navbar />
        <CartContainer />
      </main>
    </>
  )
}
export default App
