
export const currencyFormater = (currencyValue) => new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' }
  ).format(currencyValue);


export const currencyUnformat = (unformat) => {
   const remove = unformat.replace(/\D/g, "");
    return remove.slice(0, -2)
}