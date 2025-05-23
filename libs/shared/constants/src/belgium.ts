// Extracted from PR https://github.com/se-panfilov/jsvat/pull/130/files
// To fix Belgian VAT numbers validation
export const belgium = {
  name: "Belgium",
  codes: ["BE", "BEL", "056"],
  calcFn: vat => {
    const newVat = vat.length === 9 ? "0" + vat : vat;
    const check = 97 - (Number(newVat.slice(0, 8)) % 97);
    return check === Number(newVat.slice(8, 10));
  },
  rules: {
    multipliers: {},
    regex: [/^(BE)([0-1]?\d{9})$/]
  }
};
