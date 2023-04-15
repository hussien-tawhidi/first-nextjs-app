type Amount = {
  amount: Number;
};

export default function FormatePrice({ amount }: Amount) {
  const formateAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span>{formateAmount}</span>;
}
