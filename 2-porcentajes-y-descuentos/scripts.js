function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precionConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precionConDescuento;
}

function onClickButtonPriceDiscount() {
  const cupones = [
    {
      name: "desc-10",
      discount: 10
    },
    {
      name: "desc-20",
      discount: 20
    },
    {
      name: "desc-30",
      discount: 30
    }
  ];

  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValid = function (coupon) {
    return coupon.name === couponValue
  }

  const userCoupon = cupones.find(isCouponValid);

  if (!userCoupon) {
    alert(`El cupón ${couponValue} no es válido`)
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El precio con descuento es ${precioConDescuento}€`;
  }
}